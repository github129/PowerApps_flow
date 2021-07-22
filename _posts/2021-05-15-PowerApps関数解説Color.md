---
layout: post
title: "Power Apps Color 関数の使い方と解説"
description: "Power Apps の キャンバスアプリ の Color に関する解説です。この記事を読むことで　Color の使い方をマスターすることができます。Color 関数は空白か空文字の評価とそれによって動きを変化したい場合に使います。"
categories: [PowerApps]
tags: [Power Apps,初心者向け,関数解説,キャンバスアプリ]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2021/05/16/
---

#  概要

Power Apps のキャンバスアプリの関数・プロパティの解説と実際の使い方に関する記事。
今回解説する関数は Color 関数になります。
また、この情報は 2021/05/13 時点の日本環境でのものとなります。

# Color 関数とは

公式より
```
Color 関数は列挙体を使用すると、HTML のカスケード スタイル シート (CSS) で定義されている色に簡単にアクセスできます。 たとえば、Color.Red は純粋な赤色を返します。
```

つまり Color 関数は Power Apps 内で定義された色を利用したい場合に使います。

# 書き方

書き方は以下になります。

```
Color.ColorName
```

例えば以下のように書くことができます。

```
Color.AliceBlue // #f0f8ff
```

```
Color.Brown // #a52a2a
```

```
Color.Orchid // #da70d6
```


といった形にすでに定義された色を指定することができます。
定義された色一覧は以下になります。

[Poweer Apps で定義済みの色](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-colors#built-in-colors)

# 使い方

実際には以下のような場面で利用することになるかと思います。

- 定義済みの色を利用してアプリを作るとき

Color 関数 は定義済みの色のみですが、比較的簡単にデザインを統一することができますし、サンプルのアプリでも使われることがあるので、ぜひ使ってみましょう。

# まとめ

Color 関数とは以下のような特性を持っています。

1. Color 関数は、Power Apps ですでに定義された色を宣言することができます。
2. Color 関数の定義された色は硬式ドキュメントで確認できます
3. Color 関数のほかに、 RGBA 関数や ColorValue 関数などで色を定義することもできます。

# 参考

[公式ドキュメント](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-colors)

[Poweer Apps で定義済みの色](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-colors#built-in-colors)

