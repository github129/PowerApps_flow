---
layout: post
title: "【#PowerApps】ComboBoxが選択されていないときにページ遷移をさせない方法"
description: "コンボボックス(ComboBox)でアイテムが選択されていないときにエラー通知やページ遷移をさせない方法"
categories: [PowerApps]
tags: [PowerApps, コントロール, 関数]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2019/06/16/
---

# 概要
コンボボックス(ComboBox)でアイテムが選択されていないときにエラー通知やページ遷移をさせない方法です。

# 施策

IsBlank関数とCountRows関数の両方を使用する。
どちらか片方だけでも、一見うまくいきそうですがケースに抜けが生じるので両方実装する必要があります。

# コード

ComboBoxの複数選択は許可しています。
ComboBox1.OnCange

```
If(
    IsBlank(ComboBox1.SelectedItems) || IsEmpty(ComboBox1.SelectedItems),
    Concurrent(
        UpdateContext({IsValidate: false}),
        Notify(
            "選択されていません",
            NotificationType.Error
        )
    ),
    UpdateContext({IsValidate: true})
)

```

Notify()は任意です。

あとは IsValidate をボタン等の遷移するためのコントロールに設定してやります。

```
If(
    IsValidate,
    Navigate(
        Screen2,
        ScreenTransition.Fade
    ),   
     Notify(
        "エラーが出ている個所を訂正してください。",
        NotificationType.Error
    )
)

```


# なぜIsBlank()が必要？

コンボボックスコントロールはユーザーがコンボボックスを選択する前はDefaultselectedItems プロパティを使用して選択した項目を初期化しています。

ただし、コンボボックスコントロールの Selected プロパティと SelectedItems プロパティは**ユーザーの操作によって選択された**アイテム一覧を表示するために使用されます。したがって、手動でコンボボックスコントロールから値を選択しないと、Selected式は空白を返します。

その為、IsBlank関数が必要となってきます。

# なぜIsEmpty()が必要？

ユーザーがコンボボックスを選択後にアイテムを削除した場合、すでにユーザーが１度手動で値を選択したため、Selected式は空白を返さなくなるので必要です。
