---
layout: post
title: "Power Apps Char 関数の使い方と解説"
description: "Power Apps の キャンバスアプリ の Char に関する解説です。この記事を読むことで　Char の使い方をマスターすることができます。Char とは文字コードを文字列に変換するときに用います"
categories: [PowerApps]
tags: [Power Apps,初心者向け,関数解説,キャンバスアプリ]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2021/05/10/
---

#  概要

Power Apps のキャンバスアプリの関数・プロパティの解説と実際の使い方に関する記事。
今回解説する関数は Char 関数になります。
また、この情報は 2021/05/09 時点の日本環境でのものとなります。

# Calendar 関数とは

公式より
```
Char 関数は、数値を対応する ASCII 文字を含む文字列に変換します。
```

Char 関数は文字コードと呼ばれる特殊な文字（ASCII）を我々になじみがある文字に変換する時に用います。

# ASCII とは

こちらにいい参考先がありましたのでこちらをご覧ください。

[http://www3.nit.ac.jp/~tamura/ex2/ascii.html](http://www3.nit.ac.jp/~tamura/ex2/ascii.html)

# 書き方
書き方は以下になります。

```
Char( CharacterCode )
```

つまり対応表を参考に

```
Char(83)
```

の用に記載するとラベル上では

```
S
```

のように表示されます


# 使い方

実際には以下のような場面で利用することになるかと思います。

- ASCII 文字コードに対応が必要な時

Char 関数は利用頻度ほとんどありません。おそらく何かレガシーなシステムなどと連携する時くらいしか使わない関数だと思います。

# まとめ

Char 関数とは以下のような特性を持っています。

1. Char 関数 ASCII 文字コードを文字列に変更します。


# 参考

[公式ドキュメント](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-char)


[ASCIIコード表](http://www3.nit.ac.jp/~tamura/ex2/ascii.html)
