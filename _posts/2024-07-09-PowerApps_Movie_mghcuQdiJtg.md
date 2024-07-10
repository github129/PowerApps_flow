---
layout: post
title: "Power Apps で Outlook メールを送信するときに複数の画像を添付して送信する方法 #PowerApps"
description: "Power Apps で Outlook メールを送信するときに複数の画像を添付して送信する方法 #PowerAppsを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/070901.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/070901.jpg
redirect_from:
  - /2024/07/09
---


#  概要

Power Apps で Outlook メールを送信するときに複数の画像を添付して送信する方法 #PowerApps


# 作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/mghcuQdiJtg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Power Apps で Outlook メールに複数の画像を添付する方法

今回は、Power Apps を使用して Outlook メールに複数の画像を添付して送信する方法をご紹介します

### 必要な準備

まず、Outlook コネクターをアプリに接続する必要があります。また、事前に画像をアップロードできるようにするために、画像追加コントロールを2つ配置します。

### 添付ファイルの設定

Outlook コネクターの `SendeEailV2` アクションを使用して、メールアドレスや本文などを設定することができます。このアクションには、添付ファイルを追加するための設定も含まれています。添付ファイルを追加する場合は、`Attachments`プロパティに対してレコード型またはテーブル型のデータを指定する必要があります。

### 複数の添付ファイルを設定する方法

複数の添付ファイルをつけたい場合は、`Table`関数を使用してテーブル型のデータを指定します。添付ファイルの値として、`Name`プロパティと`ContentBytes`プロパティを指定します。`Name`にはファイル名を、`ContentBytes`にはファイルデータを指定します。

### 画像追加コントロールの設定

画像追加コントロールの場合は、`FileName`と`Media`をそれぞれのプロパティに設定します。複数設定する場合は、この波括弧を複数増やす形になります。

```
Office365Outlook.SendEmailV2(User().Email,"メールのタイトル","本文",
{
    Attachments:Table(
        {Name:AddMediaButton1.FileName, ContentBytes:AddMediaButton1.Media},
        {Name:AddMediaButton1_1.FileName, ContentBytes:AddMediaButton1_1.Media}
    )
})

```


# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Power Apps で Outlook メールを送信するときに複数の画像を添付して送信する方法 #PowerApps](https://www.youtube.com/watch?v=mghcuQdiJtg)

