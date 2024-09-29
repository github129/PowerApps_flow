---
layout: post
title: "Power Apps のキャンバスアプリでおしゃれなホーム画面を作成する方法　綺麗なホーム画面を作るためのチュートリアル #PowerApps"
description: "Power Apps のキャンバスアプリでおしゃれなホーム画面を作成する方法　綺麗なホーム画面を作るためのチュートリアル #PowerAppsを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/092801.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/092801.jpg
redirect_from:
  - /2024/09/28
---


#  概要

Power Apps のキャンバスアプリでおしゃれなホーム画面を作成する方法　綺麗なホーム画面を作るためのチュートリアル #PowerApps


# アプリの作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/rZFNP8DWgJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

アプリのYAML

```
- Label2_1:
    Control: Label
    Properties:
      Text: ="営業部"
      Color: =RGBA(255, 255, 255, 1)
      Height: =28
      Size: =10
      Width: =296
      X: =104
      Y: =28
- Label2:
    Control: Label
    Properties:
      Text: =User().FullName
      Color: =RGBA(255, 255, 255, 1)
      Height: =48
      Size: =16
      Width: =296
      X: =104
      Y: =36
- Avatar1:
    Control: Avatar
    Properties:
      Badge: ='Avatar.Badge'.None
      X: =26
      Y: =20
- Container1:
    Control: GroupContainer
    Variant: verticalAutoLayoutContainer
    Properties:
      Height: =1026
      LayoutDirection: =LayoutDirection.Vertical
      LayoutMode: =LayoutMode.Auto
      LayoutOverflowY: =LayoutOverflow.Scroll
      RadiusBottomLeft: =0
      RadiusBottomRight: =0
      RadiusTopLeft: =0
      RadiusTopRight: =0
      Width: =640+30
      X: =-10
      Y: =110
    Children:
    - Container2:
        Control: GroupContainer
        Variant: manualLayoutContainer
        Properties:
          FillPortions: =0
          Height: =400
        Children:
        - Label1:
            Control: Label
            Properties:
              Text: ="Pending Items"
              Align: =Align.Center
              Color: =RGBA(255, 255, 255, 1)
              X: =36
              Y: =22
        - Label1_1:
            Control: Label
            Properties:
              Text: ="20"
              Align: =Align.Center
              Color: =RGBA(255, 255, 255, 1)
              Height: =186
              Size: =80
              Width: =593
              X: =29
              Y: =92
    - Container2_1:
        Control: GroupContainer
        Variant: manualLayoutContainer
        Properties:
          DropShadow: =DropShadow.None
          Fill: =RGBA(255, 255, 255, 1)
          FillPortions: =0
          Height: =1100
          RadiusBottomLeft: =0
          RadiusBottomRight: =0
          RadiusTopLeft: |+
            =100
          RadiusTopRight: |+
            =100
        Children:
        - Gallery1:
            Control: Gallery
            Variant: BrowseLayout_Horizontal_TwoTextOneImageVariant_ver5.0
            Properties:
              Items: |+
                =Table(
                    {Title:"出張申請", Name:"佐藤 太郎", Date:Date(2024,9,1), Amount: 50000, Destination: "大阪"},
                    {Title:"経費精算", Name:"鈴木 次郎", Date:Date(2024,9,2), Amount: 15000, Destination: "名古屋"},
                    {Title:"休暇申請", Name:"田中 花子", Date:Date(2024,9,3), Amount: 0, Destination: "沖縄"},
                    {Title:"出張申請", Name:"佐藤 太郎", Date:Date(2024,9,4), Amount: 60000, Destination: "福岡"},
                    {Title:"経費精算", Name:"鈴木 次郎", Date:Date(2024,9,5), Amount: 20000, Destination: "札幌"},
                    {Title:"休暇申請", Name:"田中 花子", Date:Date(2024,9,6), Amount: 0, Destination: "京都"}
                )
              DelayItemLoading: =true
              Height: =157
              LoadingSpinner: =LoadingSpinner.Data
              TemplatePadding: =0
              TemplateSize: =197
              Width: =595
              X: =40
              Y: =161
            Children:
            - Container6:
                Control: GroupContainer
                Variant: manualLayoutContainer
                Properties:
                  DropShadow: =DropShadow.Semilight
                  Height: =140
                  Width: =174
                  X: =12
                  Y: =8
                Children:
                - Label3:
                    Control: Label
                    Properties:
                      OnSelect: =
                      Text: =ThisItem.Title
                      Color: =RGBA(15, 84, 140, 1)
                      Height: =40
                      Size: =12
                      Width: =136
                      X: =15
                      Y: =10
                - Icon1:
                    Control: Icon
                    Properties:
                      Icon: |-
                        =Switch(ThisItem.Title,
                        "出張申請","Airplane",
                        "経費精算","Money",
                        "休暇申請","Calendar"
                        )
                      IconColor: =RGBA(15, 84, 140, 1)
                      Height: =40
                      Width: =33
                      X: =118
                      Y: =10
                - Label3_1:
                    Control: Label
                    Properties:
                      OnSelect: =
                      Text: =ThisItem.Name
                      Color: =RGBA(15, 84, 140, 1)
                      Height: =19
                      Size: =8
                      Width: =83
                      X: =15
                      Y: =103
                - Label3_2:
                    Control: Label
                    Properties:
                      OnSelect: =
                      Text: =Text(ThisItem.Date,"yyyy/mm/dd") & "~" & Text(ThisItem.Date,"yyyy/mm/dd")
                      Color: =RGBA(106, 122, 127, 1)
                      Height: =16
                      Size: =8
                      Width: =136
                      X: =15
                      Y: =50
                - Label3_3:
                    Control: Label
                    Properties:
                      OnSelect: =
                      Text: =ThisItem.Destination
                      Color: =RGBA(106, 122, 127, 1)
                      Height: =16
                      Size: =8
                      Width: =136
                      X: =15
                      Y: =71
                - Label3_4:
                    Control: Label
                    Properties:
                      OnSelect: =
                      Text: =Text(ThisItem.Amount,"￥#,###")
                      Color: =RGBA(15, 84, 140, 1)
                      Height: =47
                      Size: =12
                      Underline: =true
                      Width: =89
                      X: =84
                      Y: =87
        - Label4:
            Control: Label
            Properties:
              Text: ="承認待ち"
              FontWeight: =FontWeight.Bold
              Height: =41
              Size: =14
              X: =40
              Y: =120
        - Label4_1:
            Control: Label
            Properties:
              Text: ="メニュー"
              FontWeight: =FontWeight.Bold
              Height: =41
              Size: =14
              X: =40
              Y: =404
        - Container9:
            Control: GroupContainer
            Variant: verticalAutoLayoutContainer
            Properties:
              DropShadow: =DropShadow.None
              Height: =649
              LayoutDirection: =LayoutDirection.Vertical
              LayoutMode: =LayoutMode.Auto
              RadiusBottomLeft: =0
              RadiusBottomRight: =0
              RadiusTopLeft: =0
              RadiusTopRight: =0
              Width: =658
              Y: =451
            Children:
            - Container8:
                Control: GroupContainer
                Variant: horizontalAutoLayoutContainer
                Properties:
                  DropShadow: =DropShadow.None
                  FillPortions: =0
                  Height: =216
                  LayoutJustifyContent: =LayoutJustifyContent.Center
                  LayoutMode: =LayoutMode.Auto
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                  Width: =658
                  Y: =456
                Children:
                - Container7:
                    Control: GroupContainer
                    Properties:
                      DropShadow: =DropShadow.None
                      FillPortions: =0
                      Height: =207
                      LayoutMinWidth: =180
                      RadiusBottomLeft: =0
                      RadiusBottomRight: =0
                      RadiusTopLeft: =0
                      RadiusTopRight: =0
                      Width: =190
                      X: =40
                      Y: =460
                    Children:
                    - ButtonCanvas2:
                        Control: Button
                        Properties:
                          Appearance: ='ButtonCanvas.Appearance'.Outline
                          BorderRadiusBottomLeft: =100
                          BorderRadiusBottomRight: =100
                          BorderRadiusTopLeft: =100
                          BorderRadiusTopRight: =100
                          FontColor: =RGBA(40, 134, 222, 1)
                          FontSize: =40
                          Icon: ="Airplane"
                          IconStyle: ='ButtonCanvas.IconStyle'.Outline
                          Layout: ='ButtonCanvas.Layout'.IconOnly
                          Text: ="メニュー１"
                          Height: =100
                          Width: =100
                          X: =45
                          Y: =40
                    - Label5:
                        Control: Label
                        Properties:
                          Text: ="Menu1"
                          Align: =Align.Center
                          Height: =27
                          Size: =14
                          Width: =110
                          X: =40
                          Y: =140
                - Container7_1:
                    Control: GroupContainer
                    Properties:
                      DropShadow: =DropShadow.None
                      FillPortions: =0
                      Height: =207
                      LayoutMinWidth: =180
                      RadiusBottomLeft: =0
                      RadiusBottomRight: =0
                      RadiusTopLeft: =0
                      RadiusTopRight: =0
                      Width: =190
                      X: =40
                      Y: =460
                    Children:
                    - ButtonCanvas2_1:
                        Control: Button
                        Properties:
                          Appearance: ='ButtonCanvas.Appearance'.Outline
                          BorderRadiusBottomLeft: =100
                          BorderRadiusBottomRight: =100
                          BorderRadiusTopLeft: =100
                          BorderRadiusTopRight: =100
                          FontColor: =RGBA(240, 98, 15, 1)
                          FontSize: =40
                          Icon: ="CalendarAdd"
                          IconStyle: ='ButtonCanvas.IconStyle'.Outline
                          Layout: ='ButtonCanvas.Layout'.IconOnly
                          Text: ="メニュー１"
                          Height: =100
                          Width: =100
                          X: =45
                          Y: =40
                    - Label5_1:
                        Control: Label
                        Properties:
                          Text: ="Menu1"
                          Align: =Align.Center
                          Height: =27
                          Size: =14
                          Width: =110
                          X: =40
                          Y: =140
                - Container7_2:
                    Control: GroupContainer
                    Properties:
                      DropShadow: =DropShadow.None
                      FillPortions: =0
                      Height: =207
                      LayoutMinWidth: =180
                      RadiusBottomLeft: =0
                      RadiusBottomRight: =0
                      RadiusTopLeft: =0
                      RadiusTopRight: =0
                      Width: =190
                      X: =40
                      Y: =460
                    Children:
                    - ButtonCanvas2_2:
                        Control: Button
                        Properties:
                          Appearance: ='ButtonCanvas.Appearance'.Outline
                          BorderRadiusBottomLeft: =100
                          BorderRadiusBottomRight: =100
                          BorderRadiusTopLeft: =100
                          BorderRadiusTopRight: =100
                          FontColor: =RGBA(52, 152, 47, 1)
                          FontSize: =40
                          Icon: ="Cart"
                          IconStyle: ='ButtonCanvas.IconStyle'.Outline
                          Layout: ='ButtonCanvas.Layout'.IconOnly
                          Text: ="メニュー１"
                          Height: =100
                          Width: =100
                          X: =45
                          Y: =40
                    - Label5_2:
                        Control: Label
                        Properties:
                          Text: ="Menu1"
                          Align: =Align.Center
                          Height: =27
                          Size: =14
                          Width: =110
                          X: =40
                          Y: =140
            - Container8_1:
                Control: GroupContainer
                Variant: horizontalAutoLayoutContainer
                Properties:
                  DropShadow: =DropShadow.None
                  FillPortions: =0
                  Height: =216
                  LayoutJustifyContent: =LayoutJustifyContent.Center
                  LayoutMode: =LayoutMode.Auto
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                  Width: =658
                  Y: =456
                Children:
                - Container7_3:
                    Control: GroupContainer
                    Properties:
                      DropShadow: =DropShadow.None
                      FillPortions: =0
                      Height: =207
                      LayoutMinWidth: =180
                      RadiusBottomLeft: =0
                      RadiusBottomRight: =0
                      RadiusTopLeft: =0
                      RadiusTopRight: =0
                      Width: =190
                      X: =40
                      Y: =460
                    Children:
                    - ButtonCanvas2_3:
                        Control: Button
                        Properties:
                          Appearance: ='ButtonCanvas.Appearance'.Outline
                          BorderRadiusBottomLeft: =100
                          BorderRadiusBottomRight: =100
                          BorderRadiusTopLeft: =100
                          BorderRadiusTopRight: =100
                          FontColor: =RGBA(72, 89, 40, 1)
                          FontSize: =40
                          Icon: ="Delete"
                          IconStyle: ='ButtonCanvas.IconStyle'.Outline
                          Layout: ='ButtonCanvas.Layout'.IconOnly
                          Text: ="メニュー１"
                          Height: =100
                          Width: =100
                          X: =45
                          Y: =40
                    - Label5_3:
                        Control: Label
                        Properties:
                          Text: ="Menu1"
                          Align: =Align.Center
                          Height: =27
                          Size: =14
                          Width: =110
                          X: =40
                          Y: =140
                - Container7_4:
                    Control: GroupContainer
                    Properties:
                      DropShadow: =DropShadow.None
                      FillPortions: =0
                      Height: =207
                      LayoutMinWidth: =180
                      RadiusBottomLeft: =0
                      RadiusBottomRight: =0
                      RadiusTopLeft: =0
                      RadiusTopRight: =0
                      Width: =190
                      X: =40
                      Y: =460
                    Children:
                    - ButtonCanvas2_4:
                        Control: Button
                        Properties:
                          Appearance: ='ButtonCanvas.Appearance'.Outline
                          BorderRadiusBottomLeft: =100
                          BorderRadiusBottomRight: =100
                          BorderRadiusTopLeft: =100
                          BorderRadiusTopRight: =100
                          FontColor: =RGBA(255, 191, 0, 1)
                          FontSize: =40
                          Icon: ="DocumentBulletList"
                          IconStyle: ='ButtonCanvas.IconStyle'.Outline
                          Layout: ='ButtonCanvas.Layout'.IconOnly
                          Text: ="メニュー１"
                          Height: =100
                          Width: =100
                          X: =45
                          Y: =40
                    - Label5_4:
                        Control: Label
                        Properties:
                          Text: ="Menu1"
                          Align: =Align.Center
                          Height: =27
                          Size: =14
                          Width: =110
                          X: =40
                          Y: =140
                - Container7_5:
                    Control: GroupContainer
                    Properties:
                      DropShadow: =DropShadow.None
                      FillPortions: =0
                      Height: =207
                      LayoutMinWidth: =180
                      RadiusBottomLeft: =0
                      RadiusBottomRight: =0
                      RadiusTopLeft: =0
                      RadiusTopRight: =0
                      Width: =190
                      X: =40
                      Y: =460
                    Children:
                    - ButtonCanvas2_5:
                        Control: Button
                        Properties:
                          Appearance: ='ButtonCanvas.Appearance'.Outline
                          BorderRadiusBottomLeft: =100
                          BorderRadiusBottomRight: =100
                          BorderRadiusTopLeft: =100
                          BorderRadiusTopRight: =100
                          FontColor: =RGBA(222, 27, 189, 1)
                          FontSize: =40
                          Icon: ="History"
                          IconStyle: ='ButtonCanvas.IconStyle'.Outline
                          Layout: ='ButtonCanvas.Layout'.IconOnly
                          Text: ="メニュー１"
                          Height: =100
                          Width: =100
                          X: =45
                          Y: =40
                    - Label5_5:
                        Control: Label
                        Properties:
                          Text: ="Menu1"
                          Align: =Align.Center
                          Height: =27
                          Size: =14
                          Width: =110
                          X: =40
                          Y: =140


```



# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Power Apps のキャンバスアプリでおしゃれなホーム画面を作成する方法　綺麗なホーム画面を作るためのチュートリアル #PowerApps](https://www.youtube.com/watch?v=rZFNP8DWgJY)

