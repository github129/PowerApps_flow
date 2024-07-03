---
layout: post
title: "0 ~ 1000 のように指定した範囲の数値しか入力できないテキストボックスの作り方 #PowerApps"
description: "0 ~ 1000 のように指定した範囲の数値しか入力できないテキストボックスの作り方 #PowerAppsを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/070101.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/070101.jpg
redirect_from:
  - /2024/07/01
---


#  概要

0 ~ 1000 のように指定した範囲の数値しか入力できないテキストボックスの作り方 #PowerApps


# 作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/LnUeIkt3my0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## PowerAppsにおける数値入力制限テキストボックスの作成方法

PowerAppsを使用して、特定の範囲内でのみ数値を入力できるテキストボックスを作成する方法について解説します。今回の例では、0から1000までの数値のみを受け付ける設定を行い、それ以外の数値が入力された場合には自動的に範囲内の数値に置き換える機能を実装します。

また、モダンコントロールの数値入力コントロールを利用することで、指定した範囲のみしか入力できない数値入力コントロールを作ることも可能です。

### ステップ1: 条件の設定
テキスト入力コントロールの`OnChange`プロパティに条件を記述し、入力された値が0未満の場合は0に、1000より大きい場合は1000に置き換えるようにします。これにより、ユーザーが範囲外の数値を入力しても、自動的に許容される範囲に修正されます。


### ステップ2: 変数の使用
`UpdateContext`関数を使用して、`TextVal`という変数に適切な値を設定します。この変数は、テキスト入力コントロールの`Default`プロパティに設定され、コントロールの表示値を決定します。

### ステップ3: 値の変換とリセット
入力された値が許容範囲内の場合は、`Value`関数を使用して数値に変換し、`TextVal`変数に設定します。条件の設定が完了した後、`Reset`関数を使用してコントロールを初期状態に戻し、`Default`プロパティに`TextVal`変数を設定します。

最終的な式は以下になります

```
If(Value(Self.Text) < 0,
UpdateContext({textValue:0}),
Value(Self.Text)>1000,
UpdateContext({textValue:1000}),
UpdateContext({textValue:Value(Self.Text)}));Reset(Self)

```

実際に動作を確認すると、設定した条件に従ってテキストボックスが正しく動作していることが確認できます。



# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [0 ~ 1000 のように指定した範囲の数値しか入力できないテキストボックスの作り方 #PowerApps](https://www.youtube.com/watch?v=LnUeIkt3my0)

