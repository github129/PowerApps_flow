---
layout: post
title: "Power Automate クラウドフローを使って、Outlookの自身の受信フォルダーのメールの一覧を取得する２つの方法　２５件より多いのメールを取得する方法も紹介 #PowerAutomate"
description: "Power Automate クラウドフローを使って、Outlookの自身の受信フォルダーのメールの一覧を取得する２つの方法　２５件より多いのメールを取得する方法も紹介 #PowerAutomateを動画で分かりやすく解説"
categories: [PowerAutomate]
tags: [PowerAutomate]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/070701.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/070701.jpg
redirect_from:
  - /2024/07/07
---


#  概要

Power Automate クラウドフローを使って、Outlookの自身の受信フォルダーのメールの一覧を取得する２つの方法　２５件より多いのメールを取得する方法も紹介 #PowerAutomate


# 動画

<iframe width="983" height="553" src="https://www.youtube.com/embed/EgbfFUZYK48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Power AutomateでOutlookの受信フォルダーのメールを取得する方法

Power Automateを使ってOutlookの受信フォルダーのメールを取得する方法について説明します。

### 受信フォルダーのメール取得方法

まず、Outlookの受信フォルダーからメールを取得する方法には2つあります。1つ目は「メールの取得V3アクション」を利用する方法です。このアクションを使うと、指定したフォルダーのメールを最大25件まで取得することができます。しかし、25件以上のメールを取得しようとするとエラーが発生します。

### 25件以上のメール取得方法

25件以上のメールを取得するためには、「HTTP要求を送信」アクションを利用します。具体的には、動画概要欄のリンクから移動したページのURLをコピーし、それをURIの場所に貼り付けます。その後、URIの一部を「top=30」に変更します。これにより、受信ボックスの先頭から30件のメールを取得することが可能になります。

### メール取得の確認

設定を保存して動作を確認すると、正しく30件のメールが取得できていることが確認できます。このままでは使いにくいので、実際に利用する場合はJSONの解析アクションで取得した値を解析します。
この2つの方法を自動化したい業務に合わせて切り替えて利用していきましょう。




# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Power Automate クラウドフローを使って、Outlookの自身の受信フォルダーのメールの一覧を取得する２つの方法　２５件より多いのメールを取得する方法も紹介 #PowerAutomate](https://www.youtube.com/watch?v=EgbfFUZYK48)

