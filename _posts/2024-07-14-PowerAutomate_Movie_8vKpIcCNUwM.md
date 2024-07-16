---
layout: post
title: "クラウドフローをつかって Outlook でメールを受信したときにその受信メールをmsg形式のファイルとして自身のOneDrive に保存する方法 #PowerAutomate"
description: "クラウドフローをつかって Outlook でメールを受信したときにその受信メールをmsg形式のファイルとして自身のOneDrive に保存する方法 #PowerAutomateを動画で分かりやすく解説"
categories: [PowerAutomate]
tags: [PowerAutomate]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/071401.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/071401.jpg
redirect_from:
  - /2024/07/14
---


#  概要

クラウドフローをつかって Outlook でメールを受信したときにその受信メールをmsg形式のファイルとして自身のOneDrive に保存する方法 #PowerAutomate


# 作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/8vKpIcCNUwM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Outlookで受信したメールをOneDriveに保存する方法

### クラウドフローの設定

Outlookで受信したメールを自動的にOneDriveに保存する方法を紹介します。まず、クラウドフローを設定し、メールを受信した際に起動するようにします。Outlookコネクターの「新しいメールが届いた時(V3)」を利用し、必要に応じてフォルダー設定を変更します。

### メールのエクスポート

次に、受信したメールをファイル化するために、Outlookの「メールのエクスポート(V2)」アクションを追加します。メッセージIDには、トリガーで取得できるメッセージIDを指定します。

### OneDriveへの保存

メールをエクスポートした後、OneDriveコネクターの「ファイルの作成」アクションを追加します。保存したいフォルダーのパスを指定し、ファイル名はメールの件名に設定します

### ファイル名の注意点

ファイル名には、メールの件名を使用しますが、特殊文字が含まれている場合はエラーとなるため、`replace`関数でファイル名を変更します。ファイル名の末尾には拡張子である「.msg」を追加します。

### 動作確認

最後に、設定が正しく動作しているかを確認します。実際にメールを受信し、OneDriveに保存されることを確認します。

この方法を使えば、Outlookで受信したメールを簡単にOneDriveに保存することができます。ぜひ試してみてください。



# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [クラウドフローをつかって Outlook でメールを受信したときにその受信メールをmsg形式のファイルとして自身のOneDrive に保存する方法 #PowerAutomate](https://www.youtube.com/watch?v=8vKpIcCNUwM)

