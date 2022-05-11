---
layout: post
title: "Power Apps を使って備品管理アプリを作ってみよう"
description: "Power Apps のキャンバスアプリを使って備品管理アプリを作ってみるシリーズ"
categories: [PowerApps,SharePoint]
tags: [PowerApps,SharePoint]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/051101.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/051101.png
redirect_from:
  - /2022/05/10/
---


#  概要

本記事ではPower Apps のキャンバスアプリを使って備品管理アプリを作ってみるシリーズをご紹介します

# 前提条件

以下の仕様で作成するため、まずは設計編をご覧ください

<iframe width="996" height="560" src="https://www.youtube.com/embed/RQ-s6WYJPsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# SharePoint Lists (Microsoft Lists) の準備

以下のように Microsoft Lists は準備してあります。

備品管理マスタ

<img src="/assets/blogpost/2022/051102.png"/><br/>
<img src="/assets/blogpost/2022/051103.png"/><br/>

備品管理マスタ

<img src="/assets/blogpost/2022/051104.png"/><br/>
<img src="/assets/blogpost/2022/051105.png"/><br/>


# 作成方法


## 実装編

実装編では基本機能である、一覧を表示する、貸し借りを管理するといった内容を実装します。

<iframe width="996" height="560" src="https://www.youtube.com/embed/KgG8VAS7qC0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

使用した式の一覧

```

If(ThisItem.貸出可能か,"貸出可能","不可")
If(ThisItem.貸出可能か,RGBA(255,0,0,1),RGBA(0,0,255,1))
Navigate(Screen3,ScreenTransition.None,{SelectItem: ThisItem})


貸出履歴
Filter(貸し借り管理,備品ID=SelectItem.備品ID)

借りるボタン
// 履歴を登録
Patch(貸し借り管理,Defaults(貸し借り管理),{
    Title:GUID(),
    メールアドレス: User().Email,
    備品ID: SelectItem.備品ID,
    状態: "借用",
    登録日: Now()
});
Patch(備品マスタ,SelectItem,{ 貸出可能か: false });
Back();

If(SelectItem.貸出可能か, Edit, Disabled)

返すボタン
// 履歴を登録
Patch(貸し借り管理,Defaults(貸し借り管理),{
    Title:GUID(),
    メールアドレス: User().Email,
    備品ID: SelectItem.備品ID,
    状態: "返却",
    登録日: Now()
});
Patch(備品マスタ,SelectItem,{ 貸出可能か: true });
Back();

If(IsBlank(LookUp(備品マスタ,更新者.Email = User().Email && 備品ID = SelectItem.備品ID && 貸出可能か = false)),Disabled,Edit)

```

## デザイン編

ここでは、実装編で作ったアプリにデザインを当ててユーザーに使いやすいアプリを作ります。


<iframe width="996" height="560" src="https://www.youtube.com/embed/J14s46Oh0MQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

使用した式

```

If(ctxFilter="全て",備品マスタ,Filter(備品マスタ,貸出可能か = (ctxFilter="貸出可能")))

UpdateContext({ctxFilter: Self.Text})
If(ctxFilter=Self.Text, RGBA(0, 0, 0, 1),RGBA(255,255,255,1))
ctxFilter=Self.Text

SortByColumns(Filter(貸し借り管理,備品ID=SelectItem.備品ID),"Created",Descending)

If(IsBlank(LookUp(備品マスタ,更新者.Email = User().Email && 備品ID = SelectItem.備品ID && 貸出可能か = false)),Disabled,Edit)

```

### 注意点

デザイン編では、最終更新者にのみ「返すボタン」を押させるように、以下のような式で管理しています。

```
If(IsBlank(LookUp(備品マスタ,更新者.Email = User().Email && 備品ID = SelectItem.備品ID && 貸出可能か = false)),Disabled,Edit)
```

しかし、この場合備品を借りている最中に、備品マスタへの変更（例えば名前を変更した）などがあった場合、その変更したユーザーしか返すことができなくなります。そういった場合は別途最終貸し出し者等といった列を用意し、管理するようにすると良いでしょう。



# リンク

- [【設計編】Power Apps で備品管理アプリを作ろう【1/3】](https://www.youtube.com/embed/RQ-s6WYJPsU)
- [【実装編】Power Apps で備品管理アプリを作ろう【2/3】](https://www.youtube.com/embed/KgG8VAS7qC0)
- [【デザイン編】Power Apps で備品管理アプリを作ろう【3/3】](https://www.youtube.com/embed/J14s46Oh0MQ)


