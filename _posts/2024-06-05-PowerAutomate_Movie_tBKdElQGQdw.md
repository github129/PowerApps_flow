---
layout: post
title: "Power Automate で Microsoft Teams のグループチャットを作成して、作成したグループにメッセージを送信する #PowerAutomate"
description: "Power Automate で Microsoft Teams のグループチャットを作成して、作成したグループにメッセージを送信する #PowerAutomateを動画で分かりやすく解説"
categories: [PowerAutomate]
tags: [PowerAutomate]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/060501.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/060501.jpg
redirect_from:
  - /2024/06/05
---


#  概要

Power Automate で Microsoft Teams のグループチャットを作成して、作成したグループにメッセージを送信する #PowerAutomate


# フローの作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/tBKdElQGQdw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


使用した式は動画の概要欄をご確認ください


## Microsoft Teamsのグループチャットとメッセージ送信の自動化

今回は、Power Automateを使用して、Microsoft Teamsのグループチャットを作成し、そのグループにメッセージを送信する方法を紹介します。

まず、グループチャットを作成する際には、Microsoft Teamsコネクターの「チャットの作成」アクションを利用します。このアクションでは、追加するメンバーをメールアドレスで指定する必要がありますが、セミコロンで区切って一括で入力することができます。動画では`join`関数を使って、アレイ型の変数をセミコロン区切りのテキストに変換する形で実装しています。

次に、作成したグループチャットにメッセージを送信する機能を追加します。ここでも、Microsoft Teamsコネクターの「チャットまたはチャネルでメッセージを投稿する」アクションを使用します。投稿者はグループの作成者、つまりユーザー自身に設定し、投稿先はグループチャットにします。グループチャットの選択では、カスタム項目の追加を選択し、前の手順で作成したグループチャットの会話IDを指定します。

最後に、任意のメッセージを入力し、保存してからテストを行い、正しく動作していることを確認します。この一連のプロセスを通じて、Microsoft Teamsのグループチャットの作成とメッセージ送信を自動化することができます。


# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Power Automate で Microsoft Teams のグループチャットを作成して、作成したグループにメッセージを送信する #PowerAutomate](https://www.youtube.com/watch?v=tBKdElQGQdw)

