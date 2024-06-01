---
layout: post
title: "Patch 関数でエラーが発生したときにオリジナルの通知を表示する２つの方法　エラー処理を共通化 登録失敗時にデータを巻き戻す際に利用 #PowerApps"
description: "Patch 関数でエラーが発生したときにオリジナルの通知を表示する２つの方法　エラー処理を共通化 登録失敗時にデータを巻き戻す際に利用 #PowerAppsを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/052701.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/052701.jpg
redirect_from:
  - /2024/05/27
---


#  概要

Patch 関数でエラーが発生したときにオリジナルの通知を表示する２つの方法　エラー処理を共通化 登録失敗時にデータを巻き戻す際に利用 #PowerApps


# アプリの作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/2JMiE_bq4as" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


使用した式は動画の概要欄をご確認ください

# Power Appsのエラー処理をマスターする

Power Appsでカスタムアプリケーションを開発する際、エラー処理は非常に重要です。ユーザーに適切なフィードバックを提供し、アプリケーションの信頼性を高めるために、エラーを効果的に管理する方法を知ることが不可欠です。今回は、Power Appsの`Patch`関数でエラーが発生した時に、オリジナルの通知を表示する2つの方法を紹介します。

## IfError関数を使用する方法

最初の方法は`IfError`関数を使用することです。この関数を使うと、`Patch`関数でエラーが発生した場合に、代替の式を実行することができます。例えば、以下のように`Patch`関数を`IfError`関数で囲むことで、エラーが発生した際に`Notify`関数を実行し、ユーザーにエラーメッセージを表示することが可能です。

```
IfError(
    Patch(...),
    Notify("エラーが発生しました", NotificationType.Error)
)
```

この方法は、特定の式に対してエラー処理を行いたい場合に適しています。

## アプリレベルでのエラー処理
次に、アプリ全体でエラーを管理する方法を見ていきましょう。Power Appsの設定には、数式レベルのエラー管理を有効にするオプションがあります。これをオンにすると、アプリの OnErrorプロパティに式を記述することで、アプリ内で発生した任意のエラーに対して通知を表示することができます。

```
App.OnError = Notify("エラーが発生しました", NotificationType.Error)
```

この方法は、アプリ内の異なる部分で発生する可能性のあるエラーを一元管理したい場合に有効です。

## まとめ
エラー処理は、ユーザーにとって快適なアプリケーション体験を提供するために不可欠です。IfError関数とアプリレベルでのエラー処理の両方を理解し、状況に応じて適切な方法を選択することで、Power Appsでの開発がよりスムーズになります。今回紹介したテクニックを活用して、信頼性の高いアプリケーションを作成しましょう。


# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Patch 関数でエラーが発生したときにオリジナルの通知を表示する２つの方法　エラー処理を共通化 登録失敗時にデータを巻き戻す際に利用 #PowerApps](https://www.youtube.com/watch?v=2JMiE_bq4as)

