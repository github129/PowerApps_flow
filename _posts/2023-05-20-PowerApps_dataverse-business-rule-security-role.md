---
layout: post
title: "ビジネスルールが動かないセキュリティロールの対処法【Dataverse】"
description: "Dataverse や Power Apps モデル駆動型アプリでビジネスルールが動かないセキュリティロールに遭遇したことはありませんか？この記事では、その原因と解決策を分かりやすく解説します。ビジネスルールを正しく適用するためのコツもお伝えします"
categories: [PowerApps,Dataverse]
tags: [PowerApps,Dataverse]
image: >-
  https://www.powerplatform.work/assets/blogpost/2023/052001.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2023/052001.jpg
redirect_from:
  - /2023/05/20
---


#  概要

ビジネスルールが動かないセキュリティロールの対処法をご紹介します。

## ビジネスルールとは

Dataverse のビジネスルールとは、データに対するロジックや検証をコードやプラグインを使わずに適用できる機能のことです。ビジネスルールは、データの入力や表示に関するルールを簡単に作成できる機能です。例えば、ある列の値に応じて、別の列の値を自動的に設定したり、列を表示したり非表示にしたり、エラーメッセージを表示したりすることができます。

## セキュリティロールとは

セキュリティロールとは、データやプロセスなどへのユーザーのアクセスを制御する一連のアクセスレベルとアクセス許可のことです。
セキュリティロールは、ユーザーがどのようなデータを見たり、変更したり、削除したりできるかを決めるルールの集まりだと言えます。例えば、営業担当者のセキュリティロールは、自分が担当する顧客のデータにはアクセスできますが、他の部署のデータにはアクセスできないように設定されています。また、システム管理者のセキュリティロールは、すべてのデータにアクセスできるだけでなく、セキュリティロール自体を作成したり変更したりすることもできます。

セキュリティロールには既定で存在するもの(Basic User や Environment User など)と、自分たちでカスタムで作成するものが存在します。


# ビジネスルールが動かないときの対処法

ビジネスルールが動かない原因はいくつかありますが、大前提としてシステム管理者のセキュリティロールが割り当たっているユーザーは正しく動作し、カスタムで作成したセキュリティロールを付与したユーザーが動かないということに関して今回は解説します。

上記の場合例えばそのユーザーはこのようなセキュリティロールになっていることが考えられます。

- Basic User
- カスタムセキュリティロール

この場合のだいたいの原因は、カスタムセキュリティロールに特権が足りていないことが原因です。

カスタマイズ/プロセスの読み取り特権を付けると動作するようになります。（画像はレガシ画面）

<img src="/assets/blogpost/2023/052001.jpg"/><br/>


# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [セキュリティ ロールおよび特権](https://learn.microsoft.com/ja-jp/power-platform/admin/security-roles-privileges)
- [テーブルのビジネス ルールの作成](https://learn.microsoft.com/ja-jp/power-apps/maker/data-platform/data-platform-create-business-rule)
- [ユーザーへのセキュリティ ロールの割り当て](https://learn.microsoft.com/ja-jp/power-platform/admin/assign-security-roles)
