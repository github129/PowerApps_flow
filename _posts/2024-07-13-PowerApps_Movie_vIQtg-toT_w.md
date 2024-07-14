---
layout: post
title: "Power Apps で Outlook の受信ボックス（Inbox) の未読のメールや既読のメールを取得する方法をご紹介 #PowerApps"
description: "Power Apps で Outlook の受信ボックス（Inbox) の未読のメールや既読のメールを取得する方法をご紹介 #PowerAppsを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/071301.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/071301.jpg
redirect_from:
  - /2024/07/13
---


#  概要

Power Apps で Outlook の受信ボックス（Inbox) の未読のメールや既読のメールを取得する方法をご紹介 #PowerApps


# 作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/vIQtg-toT_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Power AppsでOutlookのメールを取得する方法

Power Appsを使ってOutlookの受信ボックスのメールを表示するためには、いくつかのステップを踏む必要があります。まず、アプリに`Office365 Outlook`コネクターを追加します。これにより、Outlookのメールデータにアクセスできるようになります。

次に、メールの一覧を表示するために垂直ギャラリーコントロールをアプリに追加します。このギャラリーコントロールを使って、メールの一覧を視覚的に表示することができます。

### 未読メールの取得

未読のメールを取得するには、`GetEmailsV3`アクションを使用します。このアクションはデフォルトで受信ボックスの未読メールを10件取得します。もし、取得するメールの件数を増やしたい場合は、オプションを追加する必要があります。

### 既読メールの取得

既読のメールを取得する場合は、`fetchOnlyUnread`を`false`に設定します。これにより、既読メールの一覧を取得することができます。取得したメールの件数を増やしたい場合は、`top`を25などに変更します。


### さらに多くのメールを取得する方法

もし、さらに多くのメールを取得したい場合は、Graph APIを使用する方法を検討してみましょう。このビデオでは、Power Automateでの方法を紹介していますが、Power Appsでも同様の方法で行うことが可能です。

<iframe width="983" height="553" src="https://www.youtube.com/embed/EgbfFUZYK48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Power Apps で Outlook の受信ボックス（Inbox) の未読のメールや既読のメールを取得する方法をご紹介 #PowerApps](https://www.youtube.com/watch?v=vIQtg-toT_w)

