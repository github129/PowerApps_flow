---
layout: post
title: "Power Apps のボタンからギャラリーコントロールの中にあるラベルなどのコントロールを選択する方法  #PowerApps"
description: "Power Apps のボタンからギャラリーコントロールの中にあるラベルなどのコントロールを選択する方法  #PowerAppsを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/051801.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/051801.jpg
redirect_from:
  - /2024/05/18
---


#  概要

Power Apps のボタンからギャラリーコントロールの中にあるラベルなどのコントロールを選択する方法  #PowerApps


# アプリの作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/6rr0Oagn6cg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


使用した式は動画の概要欄をご確認ください

# Power Appsでギャラリーコントロール内の特定コントロールを選択する方法

今回は、Power Appsのギャラリーコントロール内にある特定のコントロールをボタンから選択する方法について解説します。

## ギャラリーコントロールの活用

ギャラリーコントロールは、複数の項目を表示する際に非常に便利です。例えば、製品リストや顧客情報など、一覧で表示したいデータを扱う場合に活用できます。このコントロールの中には、タイトルや詳細情報を表示するためのラベルやボタンなど、さまざまなコントロールを配置することができます。

## ボタンからのコントロール選択

ユーザーがギャラリーコントロール内の特定の項目を選択したい場合、通常はその項目を直接タップします。しかし、ボタンを使用してこの操作を行うことも可能です。これには、`Select`関数を使用し、選択したいコントロールを指定します。

## 実装手順

1. **ボタンの設定**: ボタンコントロールの`OnSelect`プロパティに`Select`関数を設定します。
2. **コントロールの指定**: ギャラリーコントロール内のコントロールを指定するために、`Select`関数の第一引数にギャラリーコントロールを、第二引数には表示したい行番号を指定します。
3. **通知の表示**: 例えば動画のように、2行目の項目を選択して通知を表示させたい場合、`Select`関数の第二引数に`2`を指定します。
4. **コントロールの指定**: 第三引数にギャラリー内のコントロールを指定することが可能です。このようにすることで、動画のように特定の行の特定のコントロールをギャラリーの外から実行することが可能です。

## 動作確認

設定が完了したら、実際にボタンを押して動作を確認します。正しく設定されていれば、指定したギャラリーコントロール内のコントロールが選択され、関連する通知が表示されるはずです。


# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Power Apps のボタンからギャラリーコントロールの中にあるラベルなどのコントロールを選択する方法  #PowerApps](https://www.youtube.com/watch?v=6rr0Oagn6cg)

