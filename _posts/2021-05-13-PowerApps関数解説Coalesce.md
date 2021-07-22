---
layout: post
title: "Power Apps Coalesce 関数の使い方と解説"
description: "Power Apps の キャンバスアプリ の Coalesce に関する解説です。この記事を読むことで　Coalesce の使い方をマスターすることができます。Coalesce 関数は空白か空文字の評価とそれによって動きを変化したい場合に使います。"
categories: [PowerApps]
tags: [Power Apps,初心者向け,関数解説,キャンバスアプリ]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2021/05/13/
---

#  概要

Power Apps のキャンバスアプリの関数・プロパティの解説と実際の使い方に関する記事。
今回解説する関数は Coalesce 関数になります。
また、この情報は 2021/05/13 時点の日本環境でのものとなります。

# Coalesce 関数とは

公式より
```
Coalesce 関数はその引数を順番に評価し、空白 または空の文字列ではない最初の値を返します
```

つまり Coalesce 関数は たとえば

```
If(IsBlank(TextInput1.Text),"空文字", TextInput1.Text)
```

のような時の代わりに使える便利な関数です。


# 書き方

書き方は以下になります。

```
Coalesce( Value1 [, Value2, ... ] )
```

例えば以下のように書くことができます。

```
Coalesce( Blank(), 1 )
```

これの場合 1と表示されます。

また、からの場合次を評価し、それが空の場合はさらに次を評価する仕組みのため、

```
Coalesce(Blank(), "", Blank(),  Text(3), Text(4) ) // 3と表示されます
```

といった書き方もできます。
Coalesceは IsEmpty 関数 または IsBlank 関数が true になる場合次の値が評価される仕組みになります。

また、公式のドキュメントでは以下のように記載していますが、 Coalesce の引数（カッコに入る値）のデータ型はすべて一致させる必要があるためこの書き方はできません。

```
Coalesce( Blank(), "", Blank(), "", 3, 4 )
```

(修正依頼済みです)

また、冒頭でも書きましたが、 If の代わりに使うこともでき、その場合は通信回数を1回減らせる可能性があるので、使える場面では積極的に使って行っていいかと思います。

# 使い方

実際には以下のような場面で利用することになるかと思います。

- IsBlank 関数 で複数の条件をチェックしたい場合
- If 関数で複数の条件で評価する場合
- 効率よく、短く条件分岐を書きたい場合

Coalesce 関数 は意外と便利な関数ですので、ぜひ使っていきましょう。

# まとめ

Coalesce 関数とは以下のような特性を持っています。

1. Coalesce 関数は、引数を順番に評価し、空白 または空の文字列ではない最初の値を返します。
2. Coalesce 関数は、効率よく使えれば、通信回数を　If 関数の半分にすることができます。
3. Coalesce 関数は、引数のデータ型は全て同じである必要があります。


# 参考

[公式ドキュメント](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-isblank-isempty#coalesce)

