---
layout: post
title: "Power Apps Count 関数の使い方と解説"
description: "Power Apps の キャンバスアプリ の Count に関する解説です。この記事を読むことで　Count の使い方をマスターすることができます。Count 関数は、数値が含まれるレコード数をカウントします。"
categories: [PowerApps]
tags: [Power Apps,初心者向け,関数解説,キャンバスアプリ]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2021/05/21/
---

#  概要

Power Apps のキャンバスアプリの関数・プロパティの解説と実際の使い方に関する記事。
今回解説する関数は Count 関数になります。
また、この情報は 2021/05/18 時点の日本環境でのものとなります。

# Count 関数とは

公式より
```
Count 関数は、単一列テーブルのレコードのうち、数値が含まれるレコード数をカウントします。
```


# 書き方

書き方は以下になります。

```
Count( SingleColumnTable )
```


実際に値を入れて書くと以下のように書くことができます。

```
Count([1,2,3,4,5]) //5 と返却されます
```

ただしこの場合はデータの型が数値ではなく文字列なのでエラーとなります。

```
Count(["1","2","3","4","5"])
```

ちなみに空白は問題ないようです

```
Count([1,2,3,4,Blank()]) // 4と返却されます
```


# 使い方

実際には以下のような場面で利用することになるかと思います。

- 数値のみのテーブルのレコード数を調べるとき

Count 関数 は 特定の場面で使うことがあるかもしれませんが、基本的には CountRows 関数を使うことのほうが多いと思います。

# まとめ

Count 関数とは以下のような特性を持っています。

1. Count 関数とは、単一列テーブルのレコードのうち、数値が含まれるレコード数をカウントします。
2. Count 関数とは、数値以外(空白も可)が含まれているテーブルではエラーになります。

# 参考

[公式ドキュメント](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-table-counts#description)


