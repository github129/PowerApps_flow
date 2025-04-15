---
layout: post
title: "Power Apps でカレンダースクリーンがエラーで追加できないので、その対策を用意しました"
description: "Power Apps でカレンダースクリーンがエラーで追加できないので、コントロールのコードなどをコピーしてご利用ください"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2025/04/14
---


#  概要

最新のバージョンの場合、カレンダースクリーンなどを追加することができません。
そのため、それらのコントロールをまとめたYAMLコードを用意しましたので、エラーが解消されるまでご活用ください。

また、活用に当たって発生したエラーなどに関しては対応できかねますのでご注意ください。


# 各スクリーン

## カレンダー


<details><summary>コード</summary>

```yaml
- RectQuickActionBar1:
    Control: Rectangle@2.3.0
    Group: Group1
    Properties:
      Height: =88
      Width: =Parent.Width
- LblAppName1:
    Control: Label@2.5.1
    Group: Group1
    Properties:
      BorderColor: =RGBA(0, 0, 0, 1)
      Color: =App.Theme.Colors.PrimaryForeground
      Height: =88
      Size: =27
      Text: ="カレンダー"
      Width: =Parent.Width - Self.X
      Wrap: =false
      X: =32
- LblResetToday1:
    Control: Label@2.5.1
    Group: Group1
    Properties:
      Align: =Align.Center
      BorderColor: =RGBA(0, 0, 0, 1)
      Color: =iconCalendar1.Color
      FontWeight: =FontWeight.Bold
      Height: =iconCalendar1.Height
      PaddingTop: =12
      Size: =15
      Text: =DateDiff(Date(Year(Today()), Month(Today()), 1), Today(), TimeUnit.Days) + 1
      Width: =iconCalendar1.Width
      X: =iconCalendar1.X
      Y: =iconCalendar1.Y
- dropdownCalendarSelection1:
    Control: Classic/DropDown@2.3.1
    Group: Group1
    Properties:
      Default: =_myCalendar.DisplayName
      Height: =60
      Items: =Office365Outlook.CalendarGetTables().value
      Items.Value: =DisplayName
      OnChange: =Select(dropdownCalendarSelection1)
      OnSelect: |-
        =/*retrieves calendar events for all days in current month view and selected calendar 
        _minDate and _maxDate act as markers to prevent duplicate data collection*/         
        If(IsBlank(_userDomain),         
        	UpdateContext({_showLoading: true});         
        	Set(_userDomain, Right(User().Email, Len(User().Email) - Find("@", User().Email)));         
        	Set(_dateSelected, Today());         
        	Set(_firstDayOfMonth, DateAdd(Today(), 1 - Day(Today()), TimeUnit.Days));         
        	Set(_firstDayInView, DateAdd(_firstDayOfMonth, -(Weekday(_firstDayOfMonth) - 2 + 1), TimeUnit.Days));         
        	Set(_lastDayOfMonth, DateAdd(DateAdd(_firstDayOfMonth, 1, TimeUnit.Months), -1, TimeUnit.Days))         
        );         
        Set(_calendarVisible, false);         
        UpdateContext({_showLoading: true});         
        Set(_myCalendar, Self.Selected);         
        Set(_minDate, DateAdd(_firstDayOfMonth, -(Weekday(_firstDayOfMonth) - 2 + 1), TimeUnit.Days));         
        Set(_maxDate, DateAdd(DateAdd(_firstDayOfMonth, -(Weekday(_firstDayOfMonth) - 2 + 1), TimeUnit.Days), 40, TimeUnit.Days));         
        ClearCollect(MyCalendarEvents, Office365Outlook.GetEventsCalendarViewV2(_myCalendar.Name, Text(_minDate, DateTimeFormat.UTC), Text(_maxDate, DateTimeFormat.UTC)).value);         
        UpdateContext({_showLoading: false});         
        Set(_calendarVisible, true)
      Tooltip: ="カレンダーを選択します"
      Width: =470
      X: =37
      Y: =RectQuickActionBar1.Height + 20
- iconCalendar1:
    Control: Classic/Icon@2.5.0
    Group: Group1
    Properties:
      Height: =60
      Icon: =Icon.CalendarBlank
      OnSelect: "=/*resets calendar view and date selection to today*/\r         \rSet(_dateSelected, Today());         \rSet(_firstDayOfMonth, DateAdd(Today(), 1 - Day(Today()), TimeUnit.Days));         \rSet(_firstDayInView, DateAdd(_firstDayOfMonth, -(Weekday(_firstDayOfMonth) - 2 + 1), TimeUnit.Days));         \rSet(_lastDayOfMonth, DateAdd(DateAdd(_firstDayOfMonth, 1, TimeUnit.Months), -1, TimeUnit.Days))"
      TabIndex: =0
      Tooltip: ="選択した日付を今日にリセットします"
      Width: =60
      X: =Parent.Width - Self.Width - 37
      Y: =dropdownCalendarSelection1.Y
- LblMonthSelected1:
    Control: Label@2.5.1
    Group: Group1
    Properties:
      Align: =Align.Center
      Height: =64
      Text: =Text(_firstDayOfMonth, "mmmm yyyy")
      Visible: =_calendarVisible
      Width: =Parent.Width
      Wrap: =false
      Y: =dropdownCalendarSelection1.Y + dropdownCalendarSelection1.Height + 20
- iconPrevMonth1:
    Control: Classic/Icon@2.5.0
    Group: Group1
    Properties:
      Icon: =Icon.ChevronLeft
      OnSelect: "=/*changes month view to previous month*/\r           \rSet(_firstDayOfMonth, DateAdd(_firstDayOfMonth, -1, TimeUnit.Months));           \rSet(_firstDayInView, DateAdd(_firstDayOfMonth, -(Weekday(_firstDayOfMonth) - 2 + 1), TimeUnit.Days));           \rSet(_lastDayOfMonth, DateAdd(DateAdd(_firstDayOfMonth, 1, TimeUnit.Months), -1, TimeUnit.Days));           \r/*collects calendar events for all days in current month view. Updates _minDate to prevent duplicate data collection if user returns to this month view*/           \rIf(_minDate > _firstDayOfMonth,           \r Collect(MyCalendarEvents, Office365Outlook.GetEventsCalendarViewV2(_myCalendar.Name, Text(_firstDayInView, DateTimeFormat.UTC), Text(DateAdd(_minDate, -1, TimeUnit.Days), DateTimeFormat.UTC)).value);           \r Set(_minDate, _firstDayInView))"
      PaddingBottom: =10
      PaddingLeft: =10
      PaddingRight: =10
      PaddingTop: =10
      TabIndex: =0
      Tooltip: ="前月を表示"
      Visible: =_calendarVisible
      Width: =91
      Y: =LblMonthSelected1.Y
- iconNextMonth1:
    Control: Classic/Icon@2.5.0
    Group: Group1
    Properties:
      Icon: =Icon.ChevronRight
      OnSelect: "=/*changes month view to next month*/\r           \rSet(_firstDayOfMonth, DateAdd(_firstDayOfMonth, 1, TimeUnit.Months));           \rSet(_firstDayInView, DateAdd(_firstDayOfMonth, -(Weekday(_firstDayOfMonth) - 2 + 1), TimeUnit.Days));           \r/*collects calendar events for all days in current month view. Updates _maxDate to prevent duplicate data collection if user returns to this month view*/           \rSet(_lastDayOfMonth, DateAdd(DateAdd(_firstDayOfMonth, 1, TimeUnit.Months), -1, TimeUnit.Days));           \rIf(_maxDate < _lastDayOfMonth,           \r Collect(MyCalendarEvents, Office365Outlook.GetEventsCalendarViewV2(_myCalendar.Name, Text(DateAdd(_maxDate, 1, TimeUnit.Days), DateTimeFormat.UTC), DateAdd(_firstDayInView, 40, TimeUnit.Days)).value);           \r Set(_maxDate, DateAdd(_firstDayInView, 40, TimeUnit.Days)))"
      PaddingBottom: =10
      PaddingLeft: =10
      PaddingRight: =10
      PaddingTop: =10
      TabIndex: =0
      Tooltip: ="翌月を表示"
      Visible: =_calendarVisible
      Width: =91
      X: =Parent.Width - Self.Width
      Y: =LblMonthSelected1.Y
- WeekdayGallery1:
    Control: Gallery@2.15.0
    Variant: WeekdayGallery
    Group: Group1
    Properties:
      BorderColor: =App.Theme.Colors.Darker40
      Height: =45
      Items: =Calendar.WeekdaysShort()
      TemplatePadding: =0
      TemplateSize: =91
      Visible: =_calendarVisible
      Width: =Parent.Width
      X: =0
      Y: =LblMonthSelected1.Y + LblMonthSelected1.Height + 20
    Children:
      - Title1:
          Control: Label@2.5.1
          Properties:
            Align: =Align.Center
            BorderColor: =RGBA(0, 0, 0, 1)
            Height: =WeekdayGallery1.TemplateHeight
            OnSelect: =Select(Parent)
            Size: =17 * WeekdayGallery1.TemplateWidth / 77
            Text: =ThisItem.Value
            Width: =WeekdayGallery1.TemplateWidth
            Wrap: =false
            X: =WeekdayGallery1.TemplateWidth / 2 - Self.Width / 2
            Y: =WeekdayGallery1.TemplateHeight / 2 - Self.Height / 2
- MonthDayGallery1:
    Control: Gallery@2.15.0
    Variant: MonthDayGallery
    Group: Group1
    Properties:
      BorderColor: =App.Theme.Colors.Darker40
      Height: =390
      Items: =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19, 20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]
      TemplatePadding: =0
      TemplateSize: =65
      Visible: =_calendarVisible
      Width: =Parent.Width
      X: =0
      Y: =WeekdayGallery1.Y + WeekdayGallery1.Height
    Children:
      - Circle1:
          Control: Circle@2.3.0
          Properties:
            Fill: =App.Theme.Colors.Lighter70
            Height: =Self.Width
            OnSelect: =Select(Parent)
            Visible: |-
              =/*Visible if calendar events are found on this day*/               
              CountRows(Filter(MyCalendarEvents, DateValue(Text(Start)) = DateAdd(_firstDayInView,ThisItem.Value, TimeUnit.Days))) > 0 && !Subcircle1.Visible && Title2.Visible
            Width: =6.5
            X: =MonthDayGallery1.TemplateWidth / 2 - Self.Width / 2
            Y: =MonthDayGallery1.TemplateHeight * (0.75)
      - Subcircle1:
          Control: Circle@2.3.0
          Properties:
            Height: =3 * Title2.Size
            OnSelect: =Select(Parent)
            Visible: =And(DateAdd(_firstDayInView, ThisItem.Value) = _dateSelected, Title2.Visible)
            Width: =Self.Height
            X: =MonthDayGallery1.TemplateWidth/2 - Self.Width/2
            Y: =MonthDayGallery1.TemplateHeight / 2 - Self.Height / 2
      - Title2:
          Control: Label@2.5.1
          Properties:
            Align: =Align.Center
            BorderColor: =RGBA(0, 0, 0, 0)
            Color: =If(DateAdd(_firstDayInView, ThisItem.Value) = _dateSelected, RGBA(255, 255, 255, 1), DateAdd(_firstDayInView, ThisItem.Value) = Today(), RGBA(47, 41, 43, 1), LblMonthSelected1.Color)
            Fill: |-
              =/*Fill value changes if the gallery item day = today, or if it lies outside of the current month*/             
              If(
                  /*Date selected is today*/
                  DateAdd(_firstDayInView, ThisItem.Value) = Today() && DateAdd(_firstDayInView, ThisItem.Value) = _dateSelected, RGBA(0,0,0,0),
                  /*Today when it is not selected*/
                  DateAdd(_firstDayInView, ThisItem.Value) = Today(), ColorFade(Subcircle1.Fill, 0.67), 
                  /*The day is outside the range of the currently selected month*/
                  Abs(Self.Text - ThisItem.Value) > 10,RGBA(200, 200, 200, 0.3), RGBA(0, 0, 0, 0))
            FocusedBorderColor: =Self.Color
            FocusedBorderThickness: =2
            Height: =MonthDayGallery1.TemplateHeight
            OnSelect: =Set(_dateSelected, DateAdd(_firstDayInView, ThisItem.Value, TimeUnit.Days))
            Size: =17 * MonthDayGallery1.TemplateWidth / 91
            TabIndex: =0
            Text: =Day(DateAdd(_firstDayInView,ThisItem.Value, TimeUnit.Days))
            Visible: |-
              =/*This item is in a row containing no days of the visible month. It is in the row after the row where the last day of the month occurs*/ 
               !(DateAdd(_firstDayInView,ThisItem.Value, TimeUnit.Days) - Weekday(DateAdd(_firstDayInView,ThisItem.Value, TimeUnit.Days)) + 1 > _lastDayOfMonth)
            Width: =MonthDayGallery1.TemplateWidth
            Wrap: =false
- RectCalendarEventsHeader1:
    Control: Rectangle@2.3.0
    Group: Group1
    Properties:
      Fill: =RGBA(240, 240, 240, 1)
      Height: =LblCalendarEventsHeader1.Height
      Visible: =_calendarVisible
      Width: =LblCalendarEventsHeader1.Width
      X: =LblCalendarEventsHeader1.X
      Y: =LblCalendarEventsHeader1.Y
- LblCalendarEventsHeader1:
    Control: Label@2.5.1
    Group: Group1
    Properties:
      BorderColor: =RGBA(0, 0, 0, 1)
      Height: =60
      PaddingLeft: =30
      Text: =Text(_dateSelected, DateTimeFormat.LongDate)
      Visible: =_calendarVisible
      Width: =Parent.Width
      Wrap: =false
      Y: =MonthDayGallery1.Y + MonthDayGallery1.Height + If(DateAdd(_firstDayInView, 35, TimeUnit.Days) > _lastDayOfMonth, -65, 0)
- CalendarEventsGallery1:
    Control: Gallery@2.15.0
    Variant: CalendarEventsGallery
    Group: Group1
    Properties:
      BorderColor: =App.Theme.Colors.Darker40
      Height: =Parent.Height - Self.Y
      Items: |-
        =/*Shows events only on selected date*/
        SortByColumns(Filter(MyCalendarEvents, Text(Start, DateTimeFormat.ShortDate) = Text(_dateSelected, DateTimeFormat.ShortDate)), "Start")
      TemplatePadding: =0
      Visible: =_calendarVisible
      Width: =Parent.Width
      Y: =LblCalendarEventsHeader1.Y + LblCalendarEventsHeader1.Height
    Children:
      - Rectangle1:
          Control: Rectangle@2.3.0
          Properties:
            BorderThickness: =If(ThisItem.Id = _selectedCalendarEvent.Id, 2, 0)
            Fill: =RGBA(0,0,0,0)
            Height: =Parent.TemplateHeight
            HoverFill: =RGBA(0,0,0,0)
            OnSelect: =Select(Title3)
            TabIndex: =0
            Width: =Parent.TemplateWidth
      - iconLocation1:
          Control: Classic/Icon@2.5.0
          Properties:
            Height: =Subtitle1.Height
            Icon: =Icon.Waypoint
            OnSelect: =Select(Title3)
            TabIndex: =0
            Width: =28
            X: =Title3.X
            Y: =Subtitle1.Y
      - Title3:
          Control: Label@2.5.1
          Properties:
            BorderColor: =Self.Color
            FocusedBorderThickness: =2
            FontWeight: =FontWeight.Semibold
            Height: =Self.Size * 1.8
            OnSelect: =Set(_selectedCalendarEvent, ThisItem)
            Size: =19 * CalendarEventsGallery1.TemplateHeight / 105
            TabIndex: =0
            Text: =ThisItem.Subject
            Tooltip: =ThisItem.Subject
            Width: =CalendarEventsGallery1.TemplateWidth - Self.X - 10
            Wrap: =false
            X: =Body1.X + Body1.Width + 10
            Y: =CalendarEventsGallery1.TemplateHeight / 4 - Self.Height / 2 + 5
      - Subtitle1:
          Control: Label@2.5.1
          Properties:
            FocusedBorderThickness: =2
            FontWeight: =FontWeight.Lighter
            Height: =Self.Size * 2
            OnSelect: =Select(Title3)
            PaddingBottom: =0
            Size: =18 * CalendarEventsGallery1.TemplateHeight / 105
            Text: =ThisItem.Location
            Tooltip: =ThisItem.Location
            Width: =CalendarEventsGallery1.TemplateWidth - Self.X - 10
            Wrap: =false
            X: =iconLocation1.X + iconLocation1.Width + 10
            Y: =3 / 4 * CalendarEventsGallery1.TemplateHeight - Self.Height / 2 - 5
      - Body1:
          Control: Label@2.5.1
          Properties:
            BorderColor: =RGBA(0, 0, 0, 1)
            FocusedBorderThickness: =2
            Height: =Title3.Height
            OnSelect: =Select(Title3)
            Size: =17 * CalendarEventsGallery1.TemplateHeight / 105
            Text: =Text(ThisItem.Start, DateTimeFormat.ShortTime)
            Width: =110
            Wrap: =false
            X: =32
            Y: =Title3.Y
      - Description1:
          Control: Label@2.5.1
          Properties:
            BorderColor: =RGBA(0, 0, 0, 1)
            FocusedBorderThickness: =2
            Height: =Subtitle1.Height
            OnSelect: =Select(Title3)
            Size: =17 * CalendarEventsGallery1.TemplateHeight / 105
            Text: =DateDiff(ThisItem.Start, ThisItem.End, TimeUnit.Minutes) & Lower(Left("Minute_Name", 1))
            Width: =100
            Wrap: =false
            X: =32
            Y: =Subtitle1.Y
      - Separator1:
          Control: Rectangle@2.3.0
          Properties:
            Fill: =App.Theme.Colors.Darker30
            Height: =1
            OnSelect: =Select(Parent)
            Width: =Parent.TemplateWidth
            Y: =Parent.TemplateHeight - 1
- iconEmptyState1:
    Control: Classic/Icon@2.5.0
    Group: Group1
    Properties:
      DisplayMode: =DisplayMode.View
      Icon: =Icon.CalendarBlank
      Visible: =IsBlank(_userDomain)
      X: =Parent.Width/2 - Self.Width/2
      Y: =LblEmptyState1.Y - Self.Height
- LblEmptyState1:
    Control: Label@2.5.1
    Group: Group1
    Properties:
      Align: =Align.Center
      DisplayMode: =DisplayMode.View
      Height: =150
      Text: ="最初に、ドロップダウンから予定表を選択してください"
      Visible: =IsBlank(_userDomain)
      Width: =450
      X: =Parent.Width / 2 - Self.Width / 2
      Y: =Parent.Height / 2 - Self.Height / 2
- LblNoEvents1:
    Control: Label@2.5.1
    Group: Group1
    Properties:
      Align: =Align.Center
      DisplayMode: =DisplayMode.View
      Height: =64
      Text: =If(_showLoading, "イベントを読み込んでいます...", "スケジュールされているイベントはありません")
      Visible: =Or(_showLoading, CountRows(CalendarEventsGallery1.AllItems) = 0 && _calendarVisible)
      Width: =CalendarEventsGallery1.Width
      Wrap: =false
      X: =CalendarEventsGallery1.X
      Y: =CalendarEventsGallery1.Y + CalendarEventsGallery1.Height/2 - Self.Height/2
```

</details>

## 電子メール

<details><summary>コード</summary>

```yaml
- RectQuickActionBar2:
    Control: Rectangle@2.3.0
    Group: Group2
    Properties:
      Height: =88
      Width: =Parent.Width
- LblAppName2:
    Control: Label@2.5.1
    Group: Group2
    Properties:
      BorderColor: =RGBA(0, 0, 0, 1)
      Color: =App.Theme.Colors.PrimaryForeground
      Fill: =RGBA(58, 58, 58, 0)
      Height: =88
      PaddingLeft: =0
      Size: =27
      Text: ="電子メール"
      Width: =356
      Wrap: =false
      X: =32
- iconMail1:
    Control: Classic/Icon@2.5.0
    Group: Group2
    Properties:
      Color: =RGBA(255, 255, 255, 1)
      DisabledFill: =RGBA(240, 240, 240, 0.5)
      DisplayMode: |-
        =/*Email must have a subject and recipients to be sent*/
        If(Len(Trim(TextEmailSubject1.Text)) > 0 && !IsEmpty(MyPeople), DisplayMode.Edit, DisplayMode.Disabled)
      Height: =88
      Icon: =Icon.Send
      OnSelect: |-
        =/*Create semicolon separated list of people to email, send the email, reset subject & message fields*/           
        Set(_emailRecipientString, Concat(MyPeople, Mail & ";"));           
        Office365Outlook.SendEmail(_emailRecipientString, TextEmailSubject1.Text, TextEmailMessage1.Text, {Importance:"Normal"});           
        Reset(TextEmailSubject1);           
        Reset(TextEmailMessage1);           
        Clear(MyPeople)
      PaddingBottom: =24
      PaddingLeft: =24
      PaddingRight: =24
      PaddingTop: =24
      PressedFill: =RGBA(255, 255, 255, 0.3)
      Tooltip: ="メッセージの送信"
      Width: =88
      X: =Parent.Width - Self.Width
- LblRecipientCount1:
    Control: Label@2.5.1
    Group: Group2
    Properties:
      BorderColor: =RGBA(0, 0, 0, 1)
      Height: =40
      PaddingLeft: =0
      Size: =18
      Text: ="*終了日 (" &CountRows(MyPeople) & ")"
      Width: =EmailPeopleGallery1.Width
      Wrap: =false
      X: =32
      Y: =RectQuickActionBar2.Height + 15
- TextSearchBox1:
    Control: Classic/TextInput@2.3.2
    Group: Group2
    Properties:
      AccessibleLabel: ="ユーザーを検索するか、電子メール アドレスを追加してください。正常に送信するには、少なくとも 1 人の受信者が必要です。"
      Default: =""
      HintText: ="ユーザーを検索したり、電子メール アドレスを追加したりします"
      PaddingLeft: =70
      Width: =Parent.Width - Self.X * 2
      X: =32
      Y: =LblRecipientCount1.Y + LblRecipientCount1.Height + 6
- SearchIcon1:
    Control: Classic/Icon@2.5.0
    Group: Group2
    Properties:
      Height: =Self.Width
      Icon: =Icon.Search
      PaddingBottom: =18
      PaddingLeft: =18
      PaddingRight: =18
      PaddingTop: =18
      Tooltip: ="検索"
      Width: =TextSearchBox1.Height
      X: =TextSearchBox1.X
      Y: =TextSearchBox1.Y
- AddIcon1:
    Control: Classic/Icon@2.5.0
    Group: Group2
    Properties:
      Height: =TextSearchBox1.Height
      Icon: =Icon.Add
      OnSelect: |-
        =Collect(MyPeople,           
        {DisplayName: TextSearchBox1.Text, UserPrincipalName: TextSearchBox1.Text, Mail: TextSearchBox1.Text});           
        Reset(TextSearchBox1)
      PaddingBottom: =15
      PaddingLeft: =15
      PaddingRight: =15
      PaddingTop: =15
      TabIndex: =0
      Tooltip: ="ユーザーをコレクションに追加する場合に選択します"
      Visible: |-
        =!IsBlank(TextSearchBox1.Text) &&           

        /*Is user entry a valid email address*/           
        IsMatch(TextSearchBox1.Text, Match.Email)           &&

        Not(Trim(TextSearchBox1.Text) in MyPeople.UserPrincipalName)
      Width: =70
      X: =TextSearchBox1.X + TextSearchBox1.Width - Self.Width - 10
      Y: =TextSearchBox1.Y
- EmailPeopleGallery1:
    Control: Gallery@2.15.0
    Variant: SelectedUsersGallery
    Group: Group2
    Properties:
      BorderColor: =TextSearchBox1.BorderColor
      Fill: =TextSearchBox1.Fill
      Height: |-
        =/*Height adjusts to number of items in gallery*/
        Min((Self.TemplateHeight + Self.TemplatePadding * 2) * RoundUp(CountRows(Self.AllItems) / 2, 0), 304)
      Items: |-
        =/*Collection of user selected people*/
        MyPeople
      ShowScrollbar: =Self.Height >= 304
      Width: =Parent.Width - Self.X * 2
      WrapCount: =2
      X: =27
      Y: =TextSearchBox1.Y + TextSearchBox1.Height + 8
    Children:
      - Rectangle2:
          Control: Rectangle@2.3.0
          Properties:
            Height: =Parent.TemplateHeight
            OnSelect: =Select(Parent)
            Width: =Parent.TemplateWidth
      - Title4:
          Control: Label@2.5.1
          Properties:
            BorderColor: =RGBA(0, 0, 0, 1)
            Color: =App.Theme.Colors.PrimaryForeground
            FocusedBorderThickness: =2
            Height: =EmailPeopleGallery1.TemplateHeight
            OnSelect: =Set(_selectedUser, ThisItem)
            PaddingLeft: =10
            Size: =18
            TabIndex: =If(PeopleBrowseGallery1.Visible, -1, 0)
            Text: =ThisItem.DisplayName
            Width: =EmailPeopleGallery1.TemplateWidth - iconRemove1.Width + 10
            Wrap: =false
      - iconRemove1:
          Control: Classic/Icon@2.5.0
          Properties:
            AccessibleLabel: =iconRemove1.Tooltip
            Color: =Title4.Color
            Height: =EmailPeopleGallery1.TemplateHeight
            Icon: =Icon.Cancel
            OnSelect: =Remove(MyPeople, LookUp(MyPeople, UserPrincipalName = ThisItem.UserPrincipalName))
            PaddingBottom: =9
            PaddingLeft: =9
            PaddingRight: =9
            PaddingTop: =9
            TabIndex: =If(PeopleBrowseGallery1.Visible, -1, 0)
            Tooltip: ="ユーザーをコレクションから削除する場合に選択します"
            Width: =Self.Height
            X: =EmailPeopleGallery1.TemplateWidth - Self.Width
- LblEmailSubject1:
    Control: Label@2.5.1
    Group: Group2
    Properties:
      BorderColor: =RGBA(0, 0, 0, 1)
      Height: =40
      PaddingLeft: =0
      Size: =18
      Text: ="*サブジェクト"
      Width: =Parent.Width - Self.X * 2
      Wrap: =false
      X: =32
      Y: =EmailPeopleGallery1.Y + EmailPeopleGallery1.Height + 16
- TextEmailSubject1:
    Control: Classic/TextInput@2.3.2
    Group: Group2
    Properties:
      AccessibleLabel: ="電子メールを送信するには、件名が必要です。"
      Default: =""
      HintText: ="件名を追加します"
      TabIndex: =If(PeopleBrowseGallery1.Visible, -1, 0)
      Width: =Parent.Width - Self.X * 2
      X: =32
      Y: =LblEmailSubject1.Y + LblEmailSubject1.Height + 6
- LblEmailMessage1:
    Control: Label@2.5.1
    Group: Group2
    Properties:
      BorderColor: =RGBA(0, 0, 0, 1)
      Height: =40
      PaddingLeft: =0
      Size: =18
      Text: ="Message"
      Width: =200
      Wrap: =false
      X: =32
      Y: =TextEmailSubject1.Y + TextEmailSubject1.Height + 16
- TextEmailMessage1:
    Control: Classic/TextInput@2.3.2
    Group: Group2
    Properties:
      AccessibleLabel: ="メッセージを追加します"
      Default: =""
      Height: =350
      HintText: ="メッセージを追加します"
      Mode: =TextMode.MultiLine
      TabIndex: =If(PeopleBrowseGallery1.Visible, -1, 0)
      Width: =Parent.Width - Self.X * 2
      X: =32
      Y: =LblEmailMessage1.Y + LblEmailMessage1.Height + 6
- PeopleBrowseGallery1:
    Control: Gallery@2.15.0
    Variant: PeoplePickerGallerySmall
    Group: Group2
    Properties:
      BorderColor: =App.Theme.Colors.Darker40
      BorderThickness: =2
      Fill: =Parent.Fill
      Height: =If(Self.Visible, Parent.Height / 2 + 200, 0)
      Items: |-
        =/*Only use Office 365 Users operation if user has started searching*/
        If(!IsBlank(Trim(TextSearchBox1.Text)), 'Office365ユーザー'.SearchUser({searchTerm: Trim(TextSearchBox1.Text), top: 15}))
      TemplatePadding: =0
      Visible: =!IsBlank(Trim(TextSearchBox1.Text))
      Width: =Parent.Width - Self.X * 2
      X: =32
      Y: =TextSearchBox1.Y + TextSearchBox1.Height
    Children:
      - Rectangle3:
          Control: Rectangle@2.3.0
          Properties:
            BorderColor: =Title5.Color
            BorderThickness: =If(ThisItem.UserPrincipalName in MyPeople.UserPrincipalName, 4, 0)
            Fill: =RGBA(0,0,0,0)
            Height: =Parent.TemplateHeight
            HoverFill: =RGBA(0,0,0,0)
            OnSelect: =Select(Title5)
            Width: =Parent.TemplateWidth
      - Title5:
          Control: Label@2.5.1
          Properties:
            BorderColor: =Self.Color
            FocusedBorderThickness: =2
            Height: =40
            OnSelect: |-
              =/*Select user, clear search contents and if this user hasn't been added to MyPeople collection, add them*/
              Concurrent(
              Set(_selectedUser, ThisItem),
              Reset(TextSearchBox1),
              If(Not(ThisItem.UserPrincipalName in MyPeople.UserPrincipalName), Collect(MyPeople, ThisItem)))
            TabIndex: =0
            Text: =ThisItem.DisplayName
            Width: =PeopleBrowseGallery1.TemplateWidth - 2 * Self.X
            Wrap: =false
            X: =16
            Y: =4
      - Subtitle2:
          Control: Label@2.5.1
          Properties:
            Color: =ColorFade(Title5.Color, 0.20)
            FocusedBorderThickness: =2
            Height: =40
            OnSelect: =Select(Title5)
            Text: =ThisItem.UserPrincipalName
            Width: =PeopleBrowseGallery1.TemplateWidth - 2 * Self.X
            Wrap: =false
            X: =Title5.X
            Y: =Title5.Y + Title5.Height + 3
      - Separator2:
          Control: Rectangle@2.3.0
          Properties:
            Fill: =App.Theme.Colors.Darker30
            Height: =1
            OnSelect: =Select(Parent)
            Width: =Parent.TemplateWidth
            Y: =Parent.TemplateHeight - 1
```

</details>

## 人々

<details><summary>コード</summary>

```yaml
- RectQuickActionBar3:
    Control: Rectangle@2.3.0
    Group: Group3
    Properties:
      Height: =88
      Width: =Parent.Width
- LblAppName3:
    Control: Label@2.5.1
    Group: Group3
    Properties:
      BorderColor: =RGBA(0, 0, 0, 1)
      Color: =App.Theme.Colors.PrimaryForeground
      Height: =88
      Size: =25.5
      Text: ="人々"
      Width: =535
      Wrap: =false
      X: =32
- TextSearchBox2:
    Control: Classic/TextInput@2.3.2
    Group: Group3
    Properties:
      BorderStyle: =BorderStyle.None
      Default: =""
      HintText: ="検索"
      PaddingLeft: =90
      RadiusBottomLeft: =0
      RadiusBottomRight: =0
      RadiusTopLeft: =0
      RadiusTopRight: =0
      Width: =Parent.Width - Self.X * 2
      Y: =RectQuickActionBar3.Height
- SearchIcon2:
    Control: Classic/Icon@2.5.0
    Group: Group3
    Properties:
      Height: =Self.Width
      Icon: =Icon.Search
      PaddingBottom: =14
      PaddingLeft: =14
      PaddingRight: =14
      PaddingTop: =14
      Tooltip: ="検索"
      Width: =TextSearchBox2.Height
      X: =23
      Y: =TextSearchBox2.Y
- RectSeparator1:
    Control: Rectangle@2.3.0
    Group: Group3
    Properties:
      Fill: =App.Theme.Colors.Darker30
      Height: =1
      Width: =Parent.Width - Self.X * 2
      Y: =TextSearchBox2.Y + TextSearchBox2.Height
- PeopleAddedGallery1:
    Control: Gallery@2.15.0
    Variant: SelectedUsersGallery
    Group: Group3
    Properties:
      Height: =Parent.Height - Self.Y
      Items: =MyPeople
      Width: =Parent.Width - Self.X * 2
      WrapCount: =2
      X: =0
      Y: =RectSeparator1.Y + RectSeparator1.Height
    Children:
      - Rectangle4:
          Control: Rectangle@2.3.0
          Properties:
            Height: =Parent.TemplateHeight
            OnSelect: =Select(Parent)
            Width: =Parent.TemplateWidth
      - Title6:
          Control: Label@2.5.1
          Properties:
            BorderColor: =RGBA(0, 0, 0, 1)
            Color: =App.Theme.Colors.PrimaryForeground
            FocusedBorderThickness: =2
            Height: =PeopleAddedGallery1.TemplateHeight
            OnSelect: =Set(_selectedUser, ThisItem)
            PaddingLeft: =10
            Size: =18
            TabIndex: =If(UserBrowseGallery1.Visible, -1, 0)
            Text: =ThisItem.DisplayName
            Width: =PeopleAddedGallery1.TemplateWidth - iconRemove2.Width + 10
            Wrap: =false
      - iconRemove2:
          Control: Classic/Icon@2.5.0
          Properties:
            AccessibleLabel: =iconRemove2.Tooltip
            Color: =Title6.Color
            Height: =PeopleAddedGallery1.TemplateHeight
            Icon: =Icon.Cancel
            OnSelect: =Remove(MyPeople, LookUp(MyPeople, UserPrincipalName = ThisItem.UserPrincipalName))
            PaddingBottom: =9
            PaddingLeft: =9
            PaddingRight: =9
            PaddingTop: =9
            TabIndex: =If(UserBrowseGallery1.Visible, -1, 0)
            Tooltip: ="ユーザーをコレクションから削除する場合に選択します"
            Width: =Self.Height
            X: =PeopleAddedGallery1.TemplateWidth - Self.Width
- iconEmptyState2:
    Control: Classic/Icon@2.5.0
    Group: Group3
    Properties:
      DisplayMode: =DisplayMode.View
      Icon: =Icon.Person
      Visible: =IsEmpty(MyPeople)
      X: =Parent.Width / 2 - Self.Width/2
      Y: =Parent.Height / 2 - Self.Height / 2 - 100
- LblEmptyState2:
    Control: Label@2.5.1
    Group: Group3
    Properties:
      Align: =Align.Center
      BorderColor: =RGBA(0, 0, 0, 1)
      Height: =88
      Size: =20.5
      Text: ="組織内のユーザーを検索"
      Visible: =IsEmpty(MyPeople)
      Width: =535
      Wrap: =false
      X: =Parent.Width / 2 - Self.Width/2
      Y: =iconEmptyState2.Y + iconEmptyState2.Height + 20
- UserBrowseGallery1:
    Control: Gallery@2.15.0
    Variant: PeoplePickerGallery
    Group: Group3
    Properties:
      BorderColor: =App.Theme.Colors.Darker40
      Fill: =TextSearchBox2.Fill
      Height: =Parent.Height - Self.Y
      Items: |-
        =If(!IsBlank(Trim(TextSearchBox2.Text)), 'Office365ユーザー'.SearchUser({searchTerm: Trim(TextSearchBox2.Text), top: 15}))
      TemplatePadding: =0
      TemplateSize: =107
      Visible: =!IsBlank(Trim(TextSearchBox2.Text))
      Width: =Parent.Width - Self.X * 2
      X: =0
      Y: =TextSearchBox2.Y + TextSearchBox2.Height
    Children:
      - Rectangle5:
          Control: Rectangle@2.3.0
          Properties:
            BorderColor: =Title7.Color
            BorderThickness: =If(ThisItem.UserPrincipalName in MyPeople.UserPrincipalName, 4, 0)
            Fill: =RGBA(0,0,0,0)
            Height: =Parent.TemplateHeight
            HoverFill: =RGBA(0,0,0,0)
            OnSelect: =Select(Title7)
            Width: =Parent.TemplateWidth
            X: =2
            Y: =2
      - iconUser1:
          Control: Classic/Icon@2.5.0
          Properties:
            Color: =RGBA(255, 255, 255, 1)
            Fill: =RectQuickActionBar3.Fill
            Height: =ProfileImage1.Height
            Icon: =Icon.Person
            OnSelect: =Select(Title7)
            PaddingBottom: =15
            PaddingLeft: =15
            PaddingRight: =15
            PaddingTop: =15
            PressedFill: =RGBA(255, 255, 255, 0.3)
            Width: =ProfileImage1.Width
            X: =ProfileImage1.X
            Y: =ProfileImage1.Y
      - ProfileImage1:
          Control: Image@2.2.3
          Properties:
            Height: =Self.Width
            Image: =If(!IsBlank(ThisItem.Id), 'Office365ユーザー'.UserPhotoV2(ThisItem.Id))
            OnSelect: =Select(Title7)
            Width: =UserBrowseGallery1.TemplateHeight - 30
            X: =32
            Y: =(UserBrowseGallery1.TemplateHeight / 2) - (Self.Height/2)
      - Title7:
          Control: Label@2.5.1
          Properties:
            BorderColor: =Self.Color
            FocusedBorderThickness: =2
            FontWeight: =FontWeight.Semibold
            Height: =Self.Size * 1.8
            OnSelect: |-
              =/*Select user, clear search contents and if this user hasn't been added to MyPeople collection, add them*/
              Concurrent(
              Set(_selectedUser, ThisItem),
              Reset(TextSearchBox2),
              If(Not(ThisItem.UserPrincipalName in MyPeople.UserPrincipalName), Collect(MyPeople, ThisItem)))
            TabIndex: =0
            Text: =ThisItem.DisplayName
            Width: =UserBrowseGallery1.TemplateWidth - 232
            Wrap: =false
            X: =ProfileImage1.X + ProfileImage1.Width + 16
            Y: =16
      - Subtitle3:
          Control: Label@2.5.1
          Properties:
            BorderColor: =RGBA(0, 0, 0, 1)
            FocusedBorderThickness: =2
            Height: =Self.Size * 1.8
            OnSelect: =Select(Title7)
            Text: =ThisItem.UserPrincipalName
            Width: =Title7.Width
            Wrap: =false
            X: =Title7.X
            Y: =UserBrowseGallery1.TemplateHeight - Self.Height - 20
      - Separator3:
          Control: Rectangle@2.3.0
          Properties:
            Fill: =App.Theme.Colors.Darker30
            Height: =1
            OnSelect: =Select(Parent)
            Width: =Parent.TemplateWidth
            Y: =Parent.TemplateHeight - 1
```

</details>

## 会議

<details><summary>コード</summary>

```yaml
- RectQuickActionBar4:
    Control: Rectangle@2.3.0
    Group: Group4
    Properties:
      Height: =88
      Width: =Parent.Width
- LblAppName4:
    Control: Label@2.5.1
    Group: Group4
    Properties:
      BorderColor: =RGBA(0, 0, 0, 1)
      Color: =App.Theme.Colors.PrimaryForeground
      Height: =88
      PaddingLeft: =0
      Size: =27
      Text: ="会議"
      Width: =356
      Wrap: =false
      X: =32
- IconSendItem1:
    Control: Classic/Icon@2.5.0
    Group: Group4
    Properties:
      AccessibleLabel: =Self.Tooltip
      Color: =RGBA(255, 255, 255, 1)
      DisabledFill: =RGBA(240, 240, 240, 0.5)
      DisplayMode: =If(Len(Trim(TextMeetingSubject1.Text)) > 0 && !IsEmpty(MyPeople) && !IsBlank(_selectedMeetingTime), DisplayMode.Edit, DisplayMode.Disabled)
      Height: =88
      Icon: =Icon.Send
      OnSelect: |-
        =/*sends a meeting invite if necessary fields are filled out (attendees, subject, meeting time selection)*/
        Set(_myCalendarName, LookUp(Office365Outlook.CalendarGetTables().value, DisplayName = "Calendar").Name);
        Set(_myScheduledMeeting, Office365Outlook.V2CalendarPostItem(_myCalendarName,
         TextMeetingSubject1.Text, Text(DateAdd(DateTimeValue(_selectedMeetingTime.StartTime), -TimeZoneOffset(), TimeUnit.Minutes)),
         Text(DateAdd(DateTimeValue(_selectedMeetingTime.EndTime), -TimeZoneOffset(), TimeUnit.Minutes)),
         {RequiredAttendees:Concat(MyPeople, UserPrincipalName & ";") & _selectedRoom.Address, Body: TextMeetingMessage1.Text, Location: _selectedRoom.Name, Importance: "Normal", ShowAs: "Busy", ResponseRequested: true}));
         Concurrent(
           Reset(TextMeetingLocation1),
           Reset(TextMeetingSubject1),
           Reset(TextMeetingMessage1),
           Clear(MyPeople),
           Set(_selectedMeetingTime, Blank()),
           Set(_selectedRoomList, Blank()),
           Set(_selectedRoom, Blank()),
           Set(_roomListSelected, false)
        )
      PaddingBottom: =20
      PaddingLeft: =20
      PaddingRight: =20
      PaddingTop: =20
      PressedFill: =RGBA(255, 255, 255, 0.3)
      TabIndex: =0
      Tooltip: ="招待を送信します"
      Width: =88
      X: =Parent.Width - Self.Width
- LblInviteTab1:
    Control: Label@2.5.1
    Group: Group4
    Properties:
      Align: =Align.Center
      BorderColor: =Self.Color
      Color: =If(_showDetails, LblRecipientCount2.Color, RectQuickActionBar4.Fill)
      FocusedBorderThickness: =2
      FontWeight: =If(_showDetails, FontWeight.Normal, FontWeight.Semibold)
      Height: =50
      OnSelect: =Set(_showDetails, false)
      Size: =22
      TabIndex: =0
      Text: ="招待"
      Tooltip: ="会議の件名、本文、出席者を記入/選択してください"
      Width: =283
      Wrap: =false
      X: =32
      Y: =RectQuickActionBar4.Height + 16
- LblScheduleTab1:
    Control: Label@2.5.1
    Group: Group4
    Properties:
      Align: =Align.Center
      BorderColor: =Self.Color
      Color: =If(!_showDetails, LblRecipientCount2.Color, RectQuickActionBar4.Fill)
      FocusedBorderThickness: =2
      FontWeight: =If(!_showDetails, FontWeight.Normal, FontWeight.Semibold)
      Height: =50
      OnSelect: =Set(_showDetails, true)
      Size: =22
      TabIndex: =0
      Text: ="スケジュール"
      Tooltip: ="会議の日付、時間、場所を入力する場合に選択します"
      Width: =283
      Wrap: =false
      X: =LblInviteTab1.X + LblInviteTab1.Width + 3
      Y: =RectQuickActionBar4.Height + 16
- RectHeaderSep1:
    Control: Rectangle@2.3.0
    Group: Group4
    Properties:
      Fill: =RGBA(240, 240, 240, 1)
      Height: =2
      Width: =Parent.Width
      Y: =LblInviteTab1.Y + LblInviteTab1.Height + 8
- RectTabSelect1:
    Control: Rectangle@2.3.0
    Group: Group4
    Properties:
      Height: =2
      Width: =LblInviteTab1.Width + 3
      X: =If(_showDetails, LblScheduleTab1.X - 1.5, LblInviteTab1.X - 1.5)
      Y: =LblInviteTab1.Y + LblInviteTab1.Height + 8
- LblRecipientCount2:
    Control: Label@2.5.1
    Group: Group4
    Properties:
      BorderColor: =RGBA(0, 0, 0, 1)
      Height: =50
      Text: ="*出席者 (" &CountRows(MeetingPeopleGallery1.AllItems) & ")"
      Visible: =!_showDetails
      Width: =300
      Wrap: =false
      X: =32
      Y: =RectTabSelect1.Y + RectTabSelect1.Height + 24
- TextSearchBox3:
    Control: Classic/TextInput@2.3.2
    Group: Group4
    Properties:
      AccessibleLabel: ="ユーザーを検索するか、電子メール アドレスを追加してください。正常に送信するには、少なくとも 1 人の受信者が必要です。"
      Default: =""
      HintText: ="人の検索"
      PaddingLeft: =70
      Visible: =!_showDetails
      Width: =Parent.Width - Self.X * 2
      X: =32
      Y: =LblRecipientCount2.Y + LblRecipientCount2.Height + 6
- SearchIcon3:
    Control: Classic/Icon@2.5.0
    Group: Group4
    Properties:
      Height: =Self.Width
      Icon: =Icon.Search
      PaddingBottom: =18
      PaddingLeft: =18
      PaddingRight: =18
      PaddingTop: =18
      Tooltip: ="検索"
      Visible: =!_showDetails
      Width: =TextSearchBox3.Height
      X: =TextSearchBox3.X
      Y: =TextSearchBox3.Y
- AddIcon2:
    Control: Classic/Icon@2.5.0
    Group: Group4
    Properties:
      Height: =TextSearchBox3.Height
      Icon: =Icon.Add
      OnSelect: |-
        =Collect(MyPeople, {DisplayName: TextSearchBox3.Text, UserPrincipalName: TextSearchBox3.Text});
        Concurrent(
        Reset(TextSearchBox3),
        Set(_showMeetingTimes, false),
        UpdateContext({_loadMeetingTimes: true}),
        Set(_selectedMeetingTime, Blank()),
        Set(_selectedRoom, Blank()),
        Set(_roomListSelected, false),
        /*
        Uses Office365 Outlook FindMeetingTimes operation to find available meeting times given various parameters including a semicolon separated list of attendee email addresses,
        a meeting duration (in minutes), an acceptable start and end range to find the meeting.
        Attendee emails are retrieved from the MyPeople collection. Duration and Start/End are retrieved from their respective dropdowns, where Start is set to 8:00 AM on the date selected, and End is set to 5:00 PM on the date selected.
        */
        ClearCollect(MeetingTimes, AddColumns(Office365Outlook.FindMeetingTimes(
        	{RequiredAttendees:Concat(MyPeople, UserPrincipalName & ";"), MeetingDuration:MeetingDurationSelect1.Selected.Minutes,
        	Start:Text(DateAdd(MeetingDateSelect1.SelectedDate, 8, TimeUnit.Hours), DateTimeFormat.UTC), End:Text(DateAdd(MeetingDateSelect1.SelectedDate, 17, TimeUnit.Hours), DateTimeFormat.UTC),
        	MaxCandidates:15, MinimumAttendeePercentage:1, IsOrganizerOptional: false, ActivityDomain: "Work"}).MeetingTimeSuggestions,
        StartTime, MeetingTimeSlot.Start.DateTime, EndTime, MeetingTimeSlot.End.DateTime))
        );
        UpdateContext({_loadingMeetingTimes: false});
        Set(_showMeetingTimes, true)
      PaddingBottom: =10
      PaddingLeft: =10
      PaddingRight: =10
      PaddingTop: =10
      TabIndex: =0
      Tooltip: ="ユーザーをコレクションに追加する場合に選択します"
      Visible: "=!IsBlank(TextSearchBox3.Text) && \r           \r/*Is user entry a valid email address*/\rIsMatch(TextSearchBox3.Text, Match.Email) &&\r           \rNot(Trim(TextSearchBox3.Text) in MyPeople.UserPrincipalName) &&!_showDetails"
      X: =550
      Y: =TextSearchBox3.Y
- MeetingPeopleGallery1:
    Control: Gallery@2.15.0
    Variant: SelectedUsersGalleryMeetingVariant
    Group: Group4
    Properties:
      AccessibleLabel: ="会議に追加された出席者です。少なくとも 1 人の出席者を追加する必要があります。"
      Height: =Min(76 * RoundUp(CountRows(Self.AllItems) / 2, 0), 350)
      Items: =MyPeople
      ShowScrollbar: =Self.Height >= 350
      TemplatePadding: =8
      Visible: =!_showDetails
      Width: =Parent.Width - Self.X * 2
      WrapCount: =2
      X: =32
      Y: =TextSearchBox3.Y + TextSearchBox3.Height
    Children:
      - Separator4:
          Control: Rectangle@2.3.0
          Properties:
            Height: =Parent.TemplateHeight
            OnSelect: =Select(Parent)
            Width: =Parent.TemplateWidth
      - Title8:
          Control: Label@2.5.1
          Properties:
            BorderColor: =RGBA(0, 0, 0, 1)
            Color: =App.Theme.Colors.PrimaryForeground
            FocusedBorderThickness: =2
            Height: =MeetingPeopleGallery1.TemplateHeight
            OnSelect: =Set(_selectedUser, ThisItem)
            PaddingLeft: =10
            Size: =18 * MeetingPeopleGallery1.TemplateHeight / 60
            TabIndex: =If(PeopleBrowseGallery2.Visible, -1, 0)
            Text: =ThisItem.DisplayName
            Width: =MeetingPeopleGallery1.TemplateWidth - iconRemove3.Width + 10
            Wrap: =false
      - iconRemove3:
          Control: Classic/Icon@2.5.0
          Properties:
            BorderColor: =Self.Color
            Color: =Title8.Color
            Height: =MeetingPeopleGallery1.TemplateHeight
            Icon: =Icon.Cancel
            OnSelect: |-
              =Remove(MyPeople, LookUp(MyPeople, UserPrincipalName = ThisItem.UserPrincipalName));Concurrent(
              Reset(TextSearchBox3),
              Set(_showMeetingTimes, false),
              UpdateContext({_loadMeetingTimes: true}),
              Set(_selectedMeetingTime, Blank()),
              Set(_selectedRoom, Blank()),
              Set(_roomListSelected, false),
              /*
              Uses Office365 Outlook FindMeetingTimes operation to find available meeting times given various parameters including a semicolon separated list of attendee email addresses,
              a meeting duration (in minutes), an acceptable start and end range to find the meeting.
              Attendee emails are retrieved from the MyPeople collection. Duration and Start/End are retrieved from their respective dropdowns, where Start is set to 8:00 AM on the date selected, and End is set to 5:00 PM on the date selected.
              */
              ClearCollect(MeetingTimes, AddColumns(Office365Outlook.FindMeetingTimes(
              	{RequiredAttendees:Concat(MyPeople, UserPrincipalName & ";"), MeetingDuration:MeetingDurationSelect1.Selected.Minutes,
              	Start:Text(DateAdd(MeetingDateSelect1.SelectedDate, 8, TimeUnit.Hours), DateTimeFormat.UTC), End:Text(DateAdd(MeetingDateSelect1.SelectedDate, 17, TimeUnit.Hours), DateTimeFormat.UTC),
              	MaxCandidates:15, MinimumAttendeePercentage:1, IsOrganizerOptional: false, ActivityDomain: "Work"}).MeetingTimeSuggestions,
              StartTime, MeetingTimeSlot.Start.DateTime, EndTime, MeetingTimeSlot.End.DateTime))
              );
              UpdateContext({_loadingMeetingTimes: false});
              Set(_showMeetingTimes, true)
            PaddingBottom: =17 * MeetingPeopleGallery1.TemplateHeight / 60
            PaddingLeft: =17 * MeetingPeopleGallery1.TemplateHeight / 60
            PaddingRight: =17 * MeetingPeopleGallery1.TemplateHeight / 60
            PaddingTop: =17 * MeetingPeopleGallery1.TemplateHeight / 60
            TabIndex: =If(PeopleBrowseGallery2.Visible, -1, 0)
            Tooltip: ="ユーザーをコレクションから削除する場合に選択します"
            Width: =Self.Height
            X: =MeetingPeopleGallery1.TemplateWidth - Self.Width
- LblMeetingSubject1:
    Control: Label@2.5.1
    Group: Group4
    Properties:
      BorderColor: =RGBA(0, 0, 0, 1)
      Height: =50
      Text: ="*サブジェクト"
      Visible: =!_showDetails
      Width: =300
      Wrap: =false
      X: =32
      Y: =MeetingPeopleGallery1.Y + MeetingPeopleGallery1.Height + 16
- TextMeetingSubject1:
    Control: Classic/TextInput@2.3.2
    Group: Group4
    Properties:
      AccessibleLabel: ="電子メールを送信するには、件名が必要です。"
      Default: =""
      HintText: ="件名を追加します"
      TabIndex: =If(PeopleBrowseGallery2.Visible, -1, 0)
      Visible: =!_showDetails
      Width: =Parent.Width - Self.X * 2
      X: =32
      Y: =LblMeetingSubject1.Y + LblMeetingSubject1.Height + 6
- LblMeetingMessage1:
    Control: Label@2.5.1
    Group: Group4
    Properties:
      BorderColor: =RGBA(0, 0, 0, 1)
      Height: =50
      Text: ="Message"
      Visible: =!_showDetails
      Width: =300
      Wrap: =false
      X: =32
      Y: =TextMeetingSubject1.Y + TextMeetingSubject1.Height + 16
- TextMeetingMessage1:
    Control: Classic/TextInput@2.3.2
    Group: Group4
    Properties:
      AccessibleLabel: ="メッセージを追加します"
      Default: =""
      Height: =238
      HintText: ="メッセージを追加します"
      Mode: =TextMode.MultiLine
      TabIndex: =If(PeopleBrowseGallery2.Visible, -1, 0)
      Visible: =!_showDetails
      Width: =Parent.Width - Self.X * 2
      X: =32
      Y: =LblMeetingMessage1.Y + LblMeetingMessage1.Height + 6
- LblMeetingDate1:
    Control: Label@2.5.1
    Group: Group4
    Properties:
      BorderColor: =RGBA(0, 0, 0, 1)
      Height: =40
      PaddingLeft: =0
      Text: ="*日付"
      Visible: =_showDetails
      Width: =120
      Wrap: =false
      X: =32
      Y: =RectHeaderSep1.Y + RectHeaderSep1.Height + 16
- MeetingDateSelect1:
    Control: Classic/DatePicker@2.6.0
    Group: Group4
    Properties:
      AccessibleLabel: =Self.Tooltip
      DisplayMode: =If(IsEmpty(MyPeople), DisplayMode.Disabled, DisplayMode.Edit)
      Height: =55
      OnChange: =Select(Self)
      OnSelect: |-
        =Concurrent(
        Reset(TextSearchBox3),
        Set(_showMeetingTimes, false),
        UpdateContext({_loadingMeetingTimes: true}),
        Set(_selectedMeetingTime, Blank()),
        Set(_selectedRoom, Blank()),
        Set(_roomListSelected, false),
        /*
        Uses Office365 Outlook FindMeetingTimes operation to find available meeting times given various parameters including a semicolon separated list of attendee email addresses,
        a meeting duration (in minutes), an acceptable start and end range to find the meeting.
        Attendee emails are retrieved from the MyPeople collection. Duration and Start/End are retrieved from their respective dropdowns, where Start is set to 8:00 AM on the date selected, and End is set to 5:00 PM on the date selected.
        */
        ClearCollect(MeetingTimes, AddColumns(Office365Outlook.FindMeetingTimes(
        	{RequiredAttendees:Concat(MyPeople, UserPrincipalName & ";"), MeetingDuration:MeetingDurationSelect1.Selected.Minutes,
        	Start:Text(DateAdd(MeetingDateSelect1.SelectedDate, 8, TimeUnit.Hours), DateTimeFormat.UTC), End:Text(DateAdd(MeetingDateSelect1.SelectedDate, 17, TimeUnit.Hours), DateTimeFormat.UTC),
        	MaxCandidates:15, MinimumAttendeePercentage:1, IsOrganizerOptional: false, ActivityDomain: "Work"}).MeetingTimeSuggestions,
        StartTime, MeetingTimeSlot.Start.DateTime, EndTime, MeetingTimeSlot.End.DateTime))
        );
        UpdateContext({_loadingMeetingTimes: false});
        Set(_showMeetingTimes, true)
      Tooltip: ="会議の日付を選択してください。これは、送信するために必須です。"
      Visible: =_showDetails
      Width: =Parent.Width / 2 - 55.5
      X: =32
      Y: =LblMeetingDate1.Y + LblMeetingDate1.Height + 6
- LblMeetingTime1:
    Control: Label@2.5.1
    Group: Group4
    Properties:
      BorderColor: =RGBA(0, 0, 0, 1)
      Height: =40
      Size: =18
      Text: ="*期間"
      Visible: =_showDetails
      Width: =160
      Wrap: =false
      X: =Parent.Width / 2 + 18.5
      Y: =RectHeaderSep1.Y + RectHeaderSep1.Height + 16
- MeetingDurationSelect1:
    Control: Classic/DropDown@2.3.1
    Group: Group4
    Properties:
      AccessibleLabel: =Self.Tooltip
      DisplayMode: =If(IsEmpty(MyPeople), DisplayMode.Disabled, DisplayMode.Edit)
      Height: =55
      Items: |-
        =Table(             
        {Name:Substitute("{0} 時間", "{0}", "0.5"), Minutes:30},             
        {Name:Substitute("{0} 時間", "{0}", "1"), Minutes:60},             
        {Name:Substitute("{0} 時間", "{0}", "1.5"), Minutes:90},             
        {Name:Substitute("{0} 時間", "{0}", "2"), Minutes:120},             
        {Name:Substitute("{0} 時間", "{0}", "2.5"), Minutes:150},             
        {Name:Substitute("{0} 時間", "{0}", "3"), Minutes:180},             
        {Name:Substitute("{0} 時間", "{0}", "3.5"), Minutes:210},             
        {Name:Substitute("{0} 時間", "{0}", "4"), Minutes:240})
      Items.Value: =Name
      OnChange: =Select(MeetingDateSelect1)
      Tooltip: ="会議の期間を選択してください。これは、送信するために必須です。"
      Visible: =_showDetails
      Width: =Parent.Width / 2 - 55.5
      X: =LblMeetingTime1.X
      Y: =LblMeetingTime1.Y + LblMeetingTime1.Height + 6
- RectTimeSep1:
    Control: Rectangle@2.3.0
    Group: Group4
    Properties:
      Fill: =RGBA(240, 240, 240, 1)
      Height: =49
      Visible: =_showDetails
      Width: =Parent.Width
      Y: =MeetingDurationSelect1.Y + MeetingDurationSelect1.Height + 16
- LblTimeHeader1:
    Control: Label@2.5.1
    Group: Group4
    Properties:
      BorderColor: =RGBA(0, 0, 0, 1)
      Height: =RectTimeSep1.Height
      PaddingLeft: =0
      Size: =18
      Text: ="時刻"
      Visible: =_showDetails
      Width: =Parent.Width - 37
      Wrap: =false
      X: =32
      Y: =RectTimeSep1.Y
- iconTimesEmptyState1:
    Control: Classic/Icon@2.5.0
    Group: Group4
    Properties:
      DisplayMode: ="DisplayMode.View"
      Height: =50
      Icon: =Icon.Clock
      Visible: =( !_showMeetingTimes || CountRows(MeetingTimes) = 0 || IsEmpty(MyPeople) ) && _showDetails
      Width: =50
      X: =Parent.Width/2 - Self.Width/2
      Y: =FindMeetingTimesGallery1.Y + 81
- LblTimesEmptyState1:
    Control: Label@2.5.1
    Group: Group4
    Properties:
      Align: =Align.Center
      BorderColor: =RGBA(0, 0, 0, 1)
      Height: =100
      Size: =20.5
      Text: =If(_loadingMeetingTimes, "開いている会議の時間を検索しています...", !_showMeetingTimes || IsEmpty(MyPeople), "選択すると、開催可能な時刻が表示されます", CountRows(MeetingTimes) = 0, "選択した日付で開催可能な時間はありません")
      Visible: =( !_showMeetingTimes || CountRows(MeetingTimes) = 0 || IsEmpty(MyPeople) ) && _showDetails
      Width: =493
      X: =Parent.Width/2 - Self.Width / 2
      Y: =iconTimesEmptyState1.Y + iconTimesEmptyState1.Height + 45
- FindMeetingTimesGallery1:
    Control: Gallery@2.15.0
    Variant: MeetingTimesGallery
    Group: Group4
    Properties:
      Height: =346
      Items: =MeetingTimes
      TemplatePadding: =0
      Visible: =_showMeetingTimes && _showDetails && !IsEmpty(MyPeople)
      Width: =Parent.Width - Self.X * 2
      X: =0
      Y: =LblTimeHeader1.Y + LblTimeHeader1.Height
    Children:
      - Separator5:
          Control: Rectangle@2.3.0
          Properties:
            Fill: =App.Theme.Colors.Darker30
            Height: =2
            OnSelect: =Select(Parent)
            Width: =FindMeetingTimesGallery1.TemplateWidth
            Y: =FindMeetingTimesGallery1.TemplateHeight - 1
      - Rectangle6:
          Control: Rectangle@2.3.0
          Properties:
            BorderColor: =Title9.Color
            BorderThickness: =If(ThisItem.StartTime = _selectedMeetingTime.StartTime, 4, 0)
            Fill: =RGBA(0,0,0,0)
            Height: =Parent.TemplateHeight - 4
            HoverFill: =RGBA(0,0,0,0)
            OnSelect: =Select(Title9)
            Width: =Parent.TemplateWidth - 4
            X: =2
            Y: =2
      - Title9:
          Control: Label@2.5.1
          Properties:
            BorderColor: =Self.Color
            FocusedBorderThickness: =2
            FontWeight: =FontWeight.Semibold
            Height: =35
            OnSelect: |-
              =Set(_selectedMeetingTime, ThisItem);
              UpdateContext({_loadingRooms: true});
              /*Collects user's tenant room lists (if any)*/
              If(IsEmpty(RoomsLists),
               ClearCollect(RoomsLists, Office365Outlook.GetRoomLists().value));
              /*If tenant has no room lists, retrieves all the tenant rooms, and then retrieves their availabilities for the selected meeting time*/
              If(CountRows(RoomsLists) <= 1,
               Set(_noRoomLists, true);
               ClearCollect(AllRooms, Office365Outlook.GetRooms().value);
               Set(_allRoomsConcat, Concat(FirstN(AllRooms, 20), Address & ";"));
               ClearCollect(RoomTimeSuggestions, Office365Outlook.FindMeetingTimes({RequiredAttendees: _allRoomsConcat, MeetingDuration: MeetingDurationSelect1.Selected.Minutes,
                 Start: _selectedMeetingTime.StartTime & "Z", End: _selectedMeetingTime.EndTime & "Z", MinimumAttendeePercentage: "1",
                 IsOrganizerOptional: "false", ActivityDomain: "Unrestricted"}).MeetingTimeSuggestions);
               ClearCollect(AvailableRooms, AddColumns(AddColumns(Filter(First(RoomTimeSuggestions).AttendeeAvailability,
                 Availability="Free"), Address, Attendee.EmailAddress.Address), Name, LookUp(AllRooms, Address = Attendee.EmailAddress.Address).Name));
               ClearCollect(AvailableRoomsOptimal, DropColumns(AvailableRooms, Availability, Attendee)),
               Set(_roomListSelected, false));
              UpdateContext({_loadingRooms: false})
            Size: =18 * FindMeetingTimesGallery1.TemplateHeight / 104
            TabIndex: =0
            Text: =Text(DateAdd(DateTimeValue(ThisItem.StartTime), -TimeZoneOffset(), TimeUnit.Minutes), DateTimeFormat.ShortTime)
            Width: =160
            Wrap: =false
            X: =37
            Y: =5
      - Subtitle4:
          Control: Label@2.5.1
          Properties:
            Color: =ColorFade(Title9.Color, 0.20)
            FocusedBorderThickness: =2
            Height: =FindMeetingTimesGallery1.TemplateHeight - Self.Y - 5
            OnSelect: =Select(Title9)
            Size: =18 * FindMeetingTimesGallery1.TemplateHeight / 104
            Text: |-
              =If(ThisItem.Confidence = 100, "すべての出席者が参加可能", "参加不可: "               
               & Concat(Filter(ThisItem.AttendeeAvailability, Availability = "Busy" || Availability = "Oof"),               
                 LookUp(MyPeople, UserPrincipalName = Attendee.EmailAddress.Address || Mail = Attendee.EmailAddress.Address).DisplayName, ", "))
            VerticalAlign: =VerticalAlign.Bottom
            Width: =FindMeetingTimesGallery1.TemplateWidth - Self.X - 10
            X: =37
            Y: =Title9.Y + Title9.Height + 2
- RectLocationSep1:
    Control: Rectangle@2.3.0
    Group: Group4
    Properties:
      Fill: =RGBA(240, 240, 240, 1)
      Height: =49
      Visible: =_showDetails
      Width: =Parent.Width
      Y: =FindMeetingTimesGallery1.Y + FindMeetingTimesGallery1.Height
- LblLocationHeader1:
    Control: Label@2.5.1
    Group: Group4
    Properties:
      BorderColor: =RGBA(0, 0, 0, 1)
      Height: =RectTimeSep1.Height
      PaddingLeft: =0
      Size: =18
      Text: ="場所"
      Visible: =_showDetails
      Width: =Parent.Width - Self.X
      Wrap: =false
      X: =32
      Y: =RectLocationSep1.Y
- TextMeetingLocation1:
    Control: Classic/TextInput@2.3.2
    Group: Group4
    Properties:
      AccessibleLabel: ="場所を追加します"
      BorderStyle: =BorderStyle.None
      Default: =""
      DisplayMode: =If(_showDetails && !IsBlank(_selectedMeetingTime), DisplayMode.Edit, DisplayMode.Disabled)
      HintText: ="場所を追加します"
      PaddingLeft: =90
      Visible: =_showDetails
      Width: =Parent.Width - 2 * Self.X
      Y: =LblLocationHeader1.Y + LblLocationHeader1.Height
- RoomSearchIcon1:
    Control: Classic/Icon@2.5.0
    Group: Group4
    Properties:
      Color: =RGBA(191, 190, 190, 1)
      DisplayMode: =DisplayMode.View
      Height: =Self.Width
      Icon: =Icon.Search
      PaddingBottom: =10
      PaddingLeft: =10
      PaddingRight: =10
      PaddingTop: =10
      Tooltip: ="検索"
      Visible: =_showDetails
      Width: =TextMeetingLocation1.Height
      X: =14
      Y: =TextMeetingLocation1.Y
- RectSeparator2:
    Control: Rectangle@2.3.0
    Group: Group4
    Properties:
      Fill: =RGBA(240, 240, 240, 1)
      Height: =2
      Visible: =_showDetails
      Width: =Parent.Width
      Y: =TextMeetingLocation1.Y + TextMeetingLocation1.Height
- RectSeparator21:
    Control: Rectangle@2.3.0
    Group: Group4
    Properties:
      Fill: =RGBA(240, 240, 240, 1)
      Height: =2
      Visible: =_showDetails && _roomListSelected
      Width: =Parent.Width
      Y: =LblRoomListName1.Y + LblRoomListName1.Height
- LblRoomListName1:
    Control: Label@2.5.1
    Group: Group4
    Properties:
      BorderColor: =RGBA(0, 0, 0, 1)
      Color: =RGBA(71, 69, 64, 1)
      FontWeight: ="FontWeight.Semibold"
      Height: =57
      PaddingLeft: =0
      Size: =18
      Text: =_selectedRoomList
      Visible: =_showDetails && _roomListSelected
      Width: =Parent.Width - Self.X
      Wrap: =false
      X: =RoomsBackNav1.X + RoomsBackNav1.Width
      Y: =TextMeetingLocation1.Y + TextMeetingLocation1.Height
- RoomsBackNav1:
    Control: Classic/Icon@2.5.0
    Group: Group4
    Properties:
      Height: =57
      Icon: =Icon.ChevronLeft
      OnSelect: =Set(_roomListSelected, false)
      PaddingBottom: =15
      PaddingLeft: =15
      PaddingRight: =15
      PaddingTop: =15
      TabIndex: =0
      Tooltip: ="前の一覧に戻ります"
      Visible: =_roomListSelected && _showDetails
      Width: =57
      Y: =LblRoomListName1.Y
- iconRoomsEmptyState1:
    Control: Classic/Icon@2.5.0
    Group: Group4
    Properties:
      DisplayMode: ="DisplayMode.View"
      Height: =50
      Icon: =Icon.Waypoint
      Visible: =Or(_showDetails && Or(IsBlank(_selectedMeetingTime), _loadingRooms), CountRows(AvailableRoomsOptimal) = 0 && Or(_noRoomLists, _roomListSelected))
      Width: =50
      X: =Parent.Width/2 - Self.Width/2
      Y: =RoomBrowseGallery1.Y + 81
- LblRoomsEmptyState1:
    Control: Label@2.5.1
    Group: Group4
    Properties:
      Align: =Align.Center
      BorderColor: =RGBA(0, 0, 0, 1)
      Height: =74
      Size: =20.5
      Text: =If(_loadingRooms, "使用可能な部屋を収集しています...", IsBlank(_selectedMeetingTime), "時刻を選択すると、開催可能な場所が表示されます", CountRows(AvailableRoomsOptimal) = 0, "その時間に使用可能な部屋はありません。")
      Visible: =Or(_showDetails && Or(IsBlank(_selectedMeetingTime), _loadingRooms), CountRows(AvailableRoomsOptimal) = 0 && Or(_noRoomLists, _roomListSelected))
      Width: =493
      X: =Parent.Width/2 - Self.Width / 2
      Y: =iconRoomsEmptyState1.Y + iconRoomsEmptyState1.Height + 45
- RoomBrowseGallery1:
    Control: Gallery@2.15.0
    Variant: RoomsListVariant
    Group: Group4
    Properties:
      BorderColor: =App.Theme.Colors.Darker40
      Height: =Parent.Height - Self.Y
      Items: =Search(If(_roomListSelected || _noRoomLists, AvailableRoomsOptimal, RoomsLists), Trim(TextMeetingLocation1.Text), Name, Address)
      ShowScrollbar: =true
      TemplatePadding: =0
      Visible: =_showDetails && !IsBlank(_selectedMeetingTime) && !_loadingRooms
      Width: =Parent.Width - Self.X*2
      X: =0
      Y: =If(_roomListSelected, LblRoomListName1.Y + LblRoomListName1.Height, RectSeparator2.Y + RectSeparator2.Height)
    Children:
      - Rectangle7:
          Control: Rectangle@2.3.0
          Properties:
            BorderColor: =Title10.Color
            BorderThickness: =If(ThisItem.Address = _selectedRoom.Address, 4, 0)
            Fill: =RGBA(0,0,0,0)
            Height: =Parent.TemplateHeight - 4
            HoverFill: =RGBA(0,0,0,0)
            OnSelect: =Select(Title10)
            Width: =Parent.TemplateWidth - 4
            X: =2
            Y: =2
      - Title10:
          Control: Label@2.5.1
          Properties:
            BorderColor: =Self.Color
            FocusedBorderThickness: =2
            FontWeight: =If(!_roomListSelected, FontWeight.Semibold, FontWeight.Normal)
            Height: =40
            OnSelect: |-
              =/*If user is viewing room lists, then retrieves the availabilities for the rooms within that list during the selected meeting time
              If user is viewing rooms, selects that room*/               
              UpdateContext({_loadingRooms: true});                   
              If(!_roomListSelected && !_noRoomLists,                   
               Set(_roomListSelected, true);                   
               Set(_selectedRoomList, ThisItem.Name);                   
               ClearCollect(AllRooms, Office365Outlook.GetRoomsInRoomList(ThisItem.Address).value);                   
               Set(_allRoomsConcat, Concat(FirstN(AllRooms, 20), Address & ";"));                   
               ClearCollect(RoomTimeSuggestions, Office365Outlook.FindMeetingTimes({RequiredAttendees: _allRoomsConcat, MeetingDuration: MeetingDurationSelect1.Selected.Minutes,                   
                 Start: _selectedMeetingTime.StartTime & "Z", End: _selectedMeetingTime.EndTime & "Z", MinimumAttendeePercentage: "1",                   
                 IsOrganizerOptional: "false", ActivityDomain: "Unrestricted"}).MeetingTimeSuggestions);                   
               ClearCollect(AvailableRooms, AddColumns(AddColumns(Filter(First(RoomTimeSuggestions).AttendeeAvailability, Availability = "Free"),                   
                 Address, Attendee.EmailAddress.Address), Name, LookUp(AllRooms, Address = Attendee.EmailAddress.Address).Name));                   
               ClearCollect(AvailableRoomsOptimal, DropColumns(AvailableRooms, Availability, Attendee)),                   
               Set(_selectedRoom, ThisItem)                   
              );                   
              UpdateContext({_loadingRooms: false})
            Size: =18 * RoomBrowseGallery1.TemplateHeight / 104
            TabIndex: =0
            Text: =ThisItem.Name
            Width: =RoomBrowseGallery1.TemplateWidth - Self.X * 2 - 50
            Wrap: =false
            X: =37
            Y: =RoomBrowseGallery1.TemplateHeight / 2 - Self.Height / 2
      - iconAdd1:
          Control: Classic/Icon@2.5.0
          Properties:
            Height: =Self.Width
            Icon: =Icon.ChevronRight
            OnSelect: =Select(Title10)
            PaddingBottom: =5
            PaddingLeft: =5
            PaddingRight: =5
            PaddingTop: =5
            Visible: =!_roomListSelected && !_noRoomLists
            Width: =64 * RoomBrowseGallery1.TemplateHeight / 150
            X: =RoomBrowseGallery1.TemplateWidth - Self.Width - 10
            Y: =RoomBrowseGallery1.TemplateHeight / 2 - Self.Height / 2
      - Separator6:
          Control: Rectangle@2.3.0
          Properties:
            Fill: =App.Theme.Colors.Darker30
            Height: =1
            OnSelect: =Select(Parent)
            Width: =RoomBrowseGallery1.TemplateWidth
            Y: =RoomBrowseGallery1.TemplateHeight - Self.Height
- PeopleBrowseGallery2:
    Control: Gallery@2.15.0
    Variant: PeoplePickerGallerySmallMeetingVariant
    Group: Group4
    Properties:
      BorderColor: =App.Theme.Colors.Darker40
      BorderThickness: =If(Len(Trim(TextSearchBox3.Text)) > 0, 2, 0)
      Fill: =TextSearchBox3.Fill
      Height: =If(Len(Trim(TextSearchBox3.Text)) > 0, Parent.Height - Self.Y - 10, 0)
      Items: |-
        =/*Only use Office 365 Users operation if user has started searching*/
        If(!IsBlank(Trim(TextSearchBox3.Text)), 'Office365ユーザー'.SearchUser({searchTerm: Trim(TextSearchBox3.Text), top: 15}))
      Visible: =!_showDetails && Len(Trim(TextSearchBox3.Text)) > 0
      Width: =Parent.Width - Self.X * 2
      X: =32
      Y: =TextSearchBox3.Y + TextSearchBox3.Height
    Children:
      - Rectangle8:
          Control: Rectangle@2.3.0
          Properties:
            BorderColor: =Title11.Color
            BorderThickness: =If(ThisItem.UserPrincipalName in MyPeople.UserPrincipalName, 4, 0)
            Fill: =RGBA(0,0,0,0)
            Height: =Parent.TemplateHeight
            HoverFill: =RGBA(0,0,0,0)
            OnSelect: =Select(Title11)
            Width: =Parent.TemplateWidth
      - Title11:
          Control: Label@2.5.1
          Properties:
            BorderColor: =Self.Color
            FocusedBorderThickness: =2
            FontWeight: =FontWeight.Semibold
            Height: =PeopleBrowseGallery2.TemplateHeight * 0.35
            OnSelect: |-
              =Concurrent(
              Reset(TextSearchBox3),
              Set(_selectedUser, ThisItem),
              If(Not(ThisItem.UserPrincipalName in MyPeople.UserPrincipalName), 
              	Collect(MyPeople, ThisItem); 
              	Concurrent(
              	Set(_showMeetingTimes, false),
              	UpdateContext({_loadMeetingTimes: true}),
              	Set(_selectedMeetingTime, Blank()),
              	Set(_selectedRoom, Blank()),
              	Set(_roomListSelected, false),
              /*
              Uses Office365 Outlook FindMeetingTimes operation to find available meeting times given various parameters including a semicolon separated list of attendee email addresses,
              a meeting duration (in minutes), an acceptable start and end range to find the meeting.
              Attendee emails are retrieved from the MyPeople collection. Duration and Start/End are retrieved from their respective dropdowns, where Start is set to 8:00 AM on the date selected, and End is set to 5:00 PM on the date selected.
              */
              	ClearCollect(MeetingTimes, AddColumns(Office365Outlook.FindMeetingTimes(
              		{RequiredAttendees:Concat(MyPeople, UserPrincipalName & ";"), MeetingDuration:MeetingDurationSelect1.Selected.Minutes,
              		Start:Text(DateAdd(MeetingDateSelect1.SelectedDate, 8, TimeUnit.Hours), DateTimeFormat.UTC), End:Text(DateAdd(MeetingDateSelect1.SelectedDate, 17, TimeUnit.Hours), DateTimeFormat.UTC),
              		MaxCandidates:15, MinimumAttendeePercentage:1, IsOrganizerOptional: false, ActivityDomain: "Work"}).MeetingTimeSuggestions,
              	StartTime, MeetingTimeSlot.Start.DateTime, EndTime, MeetingTimeSlot.End.DateTime))
              	);
              UpdateContext({_loadingMeetingTimes: false});
              Set(_showMeetingTimes, true)
              ))
            Size: =21 * PeopleBrowseGallery2.TemplateHeight / 104
            TabIndex: =0
            Text: =ThisItem.DisplayName
            Width: =PeopleBrowseGallery2.TemplateWidth - Self.X - 20
            Wrap: =false
            X: =16
            Y: =0.1 * PeopleBrowseGallery2.TemplateHeight
      - Subtitle5:
          Control: Label@2.5.1
          Properties:
            Color: =ColorFade(Title11.Color, 0.20)
            FocusedBorderThickness: =2
            Height: =PeopleBrowseGallery2.TemplateHeight * 0.35
            OnSelect: =Select(Title11)
            Size: =18 * PeopleBrowseGallery2.TemplateHeight / 104
            Text: =ThisItem.UserPrincipalName
            Width: =Title11.Width
            Wrap: =false
            X: =Title11.X
            Y: =0.9 * PeopleBrowseGallery2.TemplateHeight - Self.Height
      - Separator7:
          Control: Rectangle@2.3.0
          Properties:
            Fill: =App.Theme.Colors.Darker30
            Height: =1
            OnSelect: =Select(Parent)
            Width: =Parent.TemplateWidth
            Y: =Parent.TemplateHeight - 1
```

</details>

## 利用方法

コピーしたい画面の YAML コードをコピーして、貼り付けることで利用することが可能です。また、Outlook などのコネクタは追加されませんので、エラーが出た内容に応じたコネクタを追加してください。




# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [コピペで使えるアダプティブカードのサンプルが紹介されている２つのページをご紹介　まずはサンプルから始めてみよう #microsoftteams #PowerAutomate](https://www.youtube.com/watch?v=TRrQ5bu6MbY)

