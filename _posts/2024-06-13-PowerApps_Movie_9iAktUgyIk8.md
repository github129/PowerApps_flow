---
layout: post
title: "Power Appsのドロップダウンのクラシックコントロール vs モダンコントロール - それぞれでできることとできないことの違い #PowerApps"
description: "Power Appsのドロップダウンのクラシックコントロール vs モダンコントロール - それぞれでできることとできないことの違い #PowerAppsを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/061301.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/061301.jpg
redirect_from:
  - /2024/06/13
---


#  概要

Power Appsのドロップダウンのクラシックコントロール vs モダンコントロール - それぞれでできることとできないことの違い #PowerApps


# 動画

<iframe width="983" height="553" src="https://www.youtube.com/embed/9iAktUgyIk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


使用した式は動画の概要欄をご確認ください

## Power Appsのドロップダウンコントロール：モダン vs クラシック

今回は、モダンコントロールとクラシックコントロールの違いに焦点を当て、それぞれの特徴と制限を解説します。

### 選択肢の設定

モダンとクラシックの両コントロールで、選択肢の情報は`Items`プロパティにテーブル形式で指定される点は共通しています。しかし、クラシックコントロールには`OnSelect`プロパティが存在し、ユーザーが選択を行った際(正確にはドロップダウンをクリック、タップした際)のアクションを定義できますが、モダンコントロールにはこのプロパティがありません。使用用途もそこまで高くないため、特段そこまで困らないかと思います。

### 初期値の設定

初期値の設定方法にも違いがあります。モダンコントロールでは`DefaultSelectedItems`プロパティにテーブル形式で、クラシックコントロールでは`Default`プロパティに文字列で指定します。どちらのコントロールも初期値を指定していない場合、`Reset`関数で初期化すると、モダンは選択肢が外れ、クラシックは最初の項目が選択される動作となります。モダンコントロールの場合、テーブル形式の指定ですが、複数の値を選択することはできません。

### 選択の解除

クラシックコントロールには`AllowEmptySelection`プロパティが存在し、これを`true`に設定すると、選択した項目を再度選択することで解除が可能です。一方、モダンコントロールでは一度選択した内容は`Reset`関数などを使用しない限り解除できません。

### 選択値の取得

選択した値の取得方法も異なります。モダンコントロールでは`Selected`プロパティまたは`SelectedItems`プロパティで取得可能ですが、クラシックコントロールでは`Selected`プロパティまたは`SelectedText`プロパティで取得します。基本的に１つしか取得できないので、 どちらも `Selected` プロパティを使うようにしておけばさほど違いはありません。

### デザインのカスタマイズ

最後に、デザイン面での違いとして、背景色や角の丸みなど、設定できる値に差があります。モダンコントロールはより洗練されたデザイン設定が可能で、アプリケーションの見た目をより魅力的にすることができます。

Power Appsのドロップダウンコントロールを選ぶ際には、これらの違いを理解し、アプリケーションの要件に最適なコントロールを選択することが重要です。


# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Power Appsのドロップダウンのクラシックコントロール vs モダンコントロール - それぞれでできることとできないことの違い #PowerApps](https://www.youtube.com/watch?v=9iAktUgyIk8)

