---
layout: post
title: "Power Apps でボタンを押したときにラベルを変更する"
description: "Power Apps では変数を使うことでラベルのテキストを変更することができます"
categories: [Power Apps]
tags: [PowerApps,初心者向け,キャンバスアプリ]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2021/12/16/
---

#  概要

Power Apps のキャンバスアプリで画面上のラベルを変更する方法です。
また、この情報は 2021/12/16 時点の日本環境でのものとなります。

# やり方

Power Apps で画面上のラベルのテキストを変更するには、「変数」を使う必要があります。
その中でも今回はコンテキスト変数をつかってボタンを押したときにラベルを変更してみましょう。


## コントロールを用意する

変更を確認するために以下のコントロールを用意します。

- ボタンコントロール ×2
- ラベルコントロール ×1


<img src="/assets/blogpost/2021/2021-12-16-01.png"/><br/>

ボタン１の OnSelect プロパティに以下の式を入力します。

```
UpdateContext({locText: "ボタン１を押しました"})
```

ボタン２の OnSelect プロパティに以下の式を入力します。

```
UpdateContext({locText: "ボタン２を押しました"})
```

ラベルの Text プロパティに以下の式を入力します。

```
locText
```


<img src="/assets/blogpost/2021/2021-12-16-02.png"/><br/>


設定は完了です。ボタンをそれぞれ押してみましょう。
以下の画像のようにテキストが変更されることが確認できます。


<img src="/assets/blogpost/2021/2021-12-16-03.png"/><br/>

<img src="/assets/blogpost/2021/2021-12-16-04.png"/><br/>

このようにボタンを押すことでテキストが変更できました。

# まとめ

Power Appsでは変数を利用することで、ボタンを押したときにテキストを変更することができます。
今回はコンテキスト変数を利用していますが、もちろんグローバル変数でも可能です。

