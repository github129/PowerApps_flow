---
layout: post
title: "Power Apps の入力フォームで氏名を入力したらメールアドレスを必須に、メールアドレスを入力したら氏名を必須にというように、相互に項目の必須を制御する方法 #PowerApps"
description: "Power Apps の入力フォームで氏名を入力したらメールアドレスを必須に、メールアドレスを入力したら氏名を必須にというように、相互に項目の必須を制御する方法 #PowerAppsを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/070301.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/070301.jpg
redirect_from:
  - /2024/07/03
---


#  概要

Power Apps の入力フォームで氏名を入力したらメールアドレスを必須に、メールアドレスを入力したら氏名を必須にというように、相互に項目の必須を制御する方法 #PowerApps


# 作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/p57s-tPQZqA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Power Appsのフォームコントロールにおける相互必須項目の制御方法

Power Appsを使用している際に、フォームコントロールで氏名とメールアドレスの入力を相互に必須にする方法について解説します。

### ステップ1: データカードのロック解除
まず、各データカードの「`Required`プロパティ」を修正する前に、データカードのロックを解除する必要があります。

### ステップ2: 式の記載
次に、メールアドレスが入力されている場合に氏名を必須にするための式を記載します。この式は、「`Required`プロパティ」が`true`の時に入力が必須となり、`false`の時には任意入力となるように設定されます。

### ステップ3: 関数の使用
メールアドレスの入力を検出するために、「`Not`関数」と「`IsBlank`関数」を組み合わせて使用します。これにより、テキストボックスの値が空白ではない場合に`true`となるように設定されます。

### ステップ4: 動作の確認
最後に、設定したバリデーションルールが正しく動作しているかを確認します。これにより、フォームのデータ完全性が保たれ、ユーザーが必要な情報を確実に入力することが促されます。


# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Power Apps の入力フォームで氏名を入力したらメールアドレスを必須に、メールアドレスを入力したら氏名を必須にというように、相互に項目の必須を制御する方法 #PowerApps](https://www.youtube.com/watch?v=p57s-tPQZqA)

