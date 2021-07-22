---
layout: post
title: "Power Apps Clock 関数の使い方と解説"
description: "Power Apps の キャンバスアプリ の Clock に関する解説です。この記事を読むことで　Clock の使い方をマスターすることができます。lock 関数は、現在のロケールに関する情報を取得する時に使います。"
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
今回解説する関数は Clock 関数になります。
また、この情報は 2021/05/10 時点の日本環境でのものとなります。

# Clock 関数とは

公式より
```
Clock 関数は、現在のロケールに関する情報を取得する関数です。
```

Clock 関数は AM や PM の表示の表示を行いたいときに使います。


# 書き方

書き方は以下になります。

```
Clock.AmPm()
```

これを日本で実行する場合は、テーブル値で "午前" "午後"　と取得できます。

または

```
Clock.AmPmShort()
```

これは日本で実行する場合は、テーブル値で "午" "午"　と取得できます。おそらく午前 午後の先頭をとってきてしまっているためこの動きになっていると思われます。不具合ですね。


```
Clock.IsClock24() // true or false
```

のように記載します。





# 使い方

実際には以下のような場面で利用することになるかと思います。

- AM PM 表示をユーザーごとに変更したい場合

Clock関数は Power Apps でグローバルに対応した時刻表示などを行う場合に使うかもしれませんがそこまで利用頻度は高くないでしょう。

# まとめ

Clock 関数とは以下のような特性を持っています。

1. Collect 関数は、関数は AM や PM の表示の表示を行いたいときに使います。
2. Collect 関数の AmPmShort は日本環境では使っても意味がありません。


# 参考

[公式ドキュメント](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-clock-calendar)

