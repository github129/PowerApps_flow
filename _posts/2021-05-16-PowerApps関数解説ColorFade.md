---
layout: post
title: "Power Apps ColorFade 関数の使い方と解説"
description: "Power Apps の キャンバスアプリ の ColorFade に関する解説です。この記事を読むことで　ColorFade の使い方をマスターすることができます。ColorFade 関数色の明暗を変えたいときに使います。"
categories: [PowerApps]
tags: [Power Apps,初心者向け,関数解説,キャンバスアプリ]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2021/05/17/
---

#  概要

Power Apps のキャンバスアプリの関数・プロパティの解説と実際の使い方に関する記事。
今回解説する関数は ColorFade 関数になります。
また、この情報は 2021/05/13 時点の日本環境でのものとなります。

# ColorFade 関数とは

公式より
```
ColorFade 関数は、色のより明るいバージョンまたは暗いバージョンを返します。
```

つまり ColorFade 関数は 色の明暗を変えたいときに使う関数になります。
もちろん ColorFade に頼らずに、 ColorValue 関数や RGBA 関数などで色を指定して明暗を変更した色を使っても問題ありませんが、単に明暗を変えるだけであれば、ColorFade を使う方がよいです。

# 書き方

書き方は以下になります。

```
ColorFade( Color, FadeAmount )
```

FadeAmount には 1 ~ -1 の値を入れることができ、 1に近ければ近いほど明るく、逆に -1 に近ければ近いほど暗くなります。

実際に値を入れて書くと以下のように書くことができます。

```
ColorFade( Color.AliceBlue, 0.5 ) 
```

また、サンプルやデフォルトのコントロールでは以下のように使われていたりします。

```
ColorFade( Button1.Fill, -0.3 ) 
```


# 使い方

実際には以下のような場面で利用することになるかと思います。

- ボタンなどの色を明るくしたくなった時
- ボタンなどの色を暗くしたくなった時

ColorFade 関数 はサンプルなどでもよく使われる関数ですのでぜひ押さえておきましょう。

# まとめ

ColorFade 関数とは以下のような特性を持っています。

1. ColorFade 関数とは、指定した色の明暗を変更することができます。
2. ColorFade 関数とは、よくサンプルやデフォルトのコントロールにも使われたりしています。
3. ColorFade 関数とは、1 に近づければ近づけるほど白く、逆に-1に近づければ近づけるほど黒くなります。

# 参考

[公式ドキュメント](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-colors#syntax)

[Poweer Apps で定義済みの色](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-colors#built-in-colors)

