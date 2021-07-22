---
layout: post
title: "Power Apps ColorValue 関数の使い方と解説"
description: "Power Apps の キャンバスアプリ の ColorValue に関する解説です。この記事を読むことで　ColorValue の使い方をマスターすることができます。ColorValue 関数色コードで色を指定したい場合に使います"
categories: [PowerApps]
tags: [Power Apps,初心者向け,関数解説,キャンバスアプリ]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2021/05/18/
---

#  概要

Power Apps のキャンバスアプリの関数・プロパティの解説と実際の使い方に関する記事。
今回解説する関数は ColorValue 関数になります。
また、この情報は 2021/05/18 時点の日本環境でのものとなります。

# ColorValue 関数とは

公式より
```
ColorValue 関数は、CSS の色文字列に基づいて色を返します。
```

つまり ColorValue 関数は Web 全般で使われている色を表示することができます

# 書き方

書き方は以下になります。

```
ColorValue( CSSColor )
```


実際に値を入れて書くと以下のように書くことができます。

```
ColorValue( CSSColor )
```

ほかにも

```
ColorValue( "#ffd700" ) 
```

や透過（アルファチャネル）を持つ8桁でも表現することができます。

```
ColorValue( "#ff7f5080" ) 
```

このような色コードは以下のサイトが参考になります。

[原色大辞典](https://www.colordic.org/)


# 使い方

実際には以下のような場面で利用することになるかと思います。

- Power Apps に定義されていない色を表現したい場合
- 細かな色やを表現したい場合

ColorValue 関数 は RGBA 関数と同じ程度使う関数ですので、合わせて覚えておきましょう。

# まとめ

ColorValue 関数とは以下のような特性を持っています。

1. ColorValue 関数とは、CSS の色文字列に基づいて色を返します。
2. ColorValue 関数とは、カラーコードを指定することで色を表現できます。

# 参考

[公式ドキュメント](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-colors#syntax)

[原色大辞典](https://www.colordic.org/)


