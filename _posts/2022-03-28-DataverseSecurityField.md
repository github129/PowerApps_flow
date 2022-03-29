---
layout: post
title: "Dataverse の列のセキュリティを設定する"
description: "Dataverse の列のセキュリティを設定する方法を学べます。この機能は列ごとに権限を付与したい場合に有効にする必要があります"
categories: [Dataverse]
tags: [Dataverse]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/032801.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/032801.png
redirect_from:
  - /2022/03/28/
---

#  概要

Dataverse の列のセキュリティの機能を２つの画面から操作する方法を解説します。


# Dataverse の画面から設定する

画像のように列を選択することで設定が可能です。

<img src="/assets/blogpost/2022/032801.png"/><br/>


# クラシック画面から設定する

以下のような画面に遷移する必要があります。

環境のURLにアクセス

```
https://xxxxxxxxx.crm7.dynamics.com/

```

右上から詳細設定を表示します。

<img src="/assets/blogpost/2022/032802.png"/><br/>



設定を開き、カスタマイズを選択します。（表示する時間が少し掛かる場合があります。）

<img src="/assets/blogpost/2022/032803.png"/><br/>

システムのカスタマイズを選択します。（初回表示に時間がかかる場合や、ブラウザによってはポップアップが無効になっていて表示できない場合があります。設定を確認してください。）

<img src="/assets/blogpost/2022/032804.png"/><br/>

URLからわかる通り、この操作を行うとソリューションの編集画面（dynamics.com/tools/solution/edit.aspx?id=）にアクセスします。

ソリューション → クラシックに切り替える でも同様の画面にアクセスすることが可能です。
<img src="/assets/blogpost/2022/032805.png"/><br/>

## エンティティに設定を行う

左メニューからエンティティのフィールドを選択します。
今回は Sample_案件エンティティのフィールドを選択しています。

<img src="/assets/blogpost/2022/032806.png"/><br/>

レコードにチェックボックスをつけて、編集を選択します。すると設定用のポップアップが表示されます（表示には時間がかかる場合があります）

<img src="/assets/blogpost/2022/032807.png"/><br/>

<img src="/assets/blogpost/2022/032808.png"/><br/>

有効 or 無効にすることで設定が可能です。
