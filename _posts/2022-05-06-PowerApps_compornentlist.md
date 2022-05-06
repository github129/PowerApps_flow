---
layout: post
title: "社内のコンポーネントライブラリ一覧を取得する"
description: "本記事では社内で使われているコンポーネントライブラリの一覧を取得する方法をご紹介します。この方法を使って社内のコンポーネントを管理しましょう"
categories: [PowerAutomate,PowerApps]
tags: [PowerAutomate,PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/050601.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/050601.png
redirect_from:
  - /2022/05/06/
---


#  概要

社内の野良アプリ対策進んでいますでしょうか？特にアプリの製作が活発になればなる程その対策をする必要があります。

Power Apps にはコンポーネントと呼ばれる、いわゆる Power Apps の部品的なライブラリを作成することができます。当然コンポーネントもたくさん作られるとアプリ同様管理が大変になってきます。そのため本記事ではそういった野良コンポーネントを対策するための一歩として、コンポーネントの一覧のみを取得する方法をご紹介します。もちろん野良管理としても使ってもよいですが、例えば、コンポーネント紹介一覧のようなアプリを作ってユーザーに検索させて使わせるという使い方も良いかともいます。

# 作成方法

Power Apps for Admins コネクタの [Get-AdminApps](https://docs.microsoft.com/ja-jp/connectors/powerappsforadmins/#%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E7%AE%A1%E7%90%86%E8%80%85%E3%81%A8%E3%81%97%E3%81%A6%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B) を使います。
同様の名前で Get-AdminApp というものが存在しますが、こちらはアプリの詳細を取得するもので、今回は Get-AdminApps という一覧を取得する方を使います。

取得したい環境ID（既定環境であれば Default-xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxx のようなもの）を指定し実行します。
すると環境に存在するすべてのアプリとコンポーネントライブラリが取得できます。

<img src="/assets/blogpost/2022/050602.png"/><br/>


取得できた一覧を確認すると、appType という項目がアプリとコンポーネントライブラリだと違うことがわかります。


<img src="/assets/blogpost/2022/050603.png"/><br/>


あとはこの appType を使った条件でフィルター式を書いて完成です。

```
@equals(item()['appType'], 'AppComponentLibrary')
```

実行することでコンポーネントライブラリの一覧のみを取得できることが確認できます。

最終的な完成図(一番上の変数の初期化は特に意味はありません。)

<img src="/assets/blogpost/2022/050601.png"/><br/>


# リンク

- [Get Apps as Admin](https://docs.microsoft.com/en-us/connectors/powerappsforadmins/#get-apps-as-admin)


