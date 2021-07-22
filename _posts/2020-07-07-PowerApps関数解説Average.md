---
layout: post
title: "Power Apps Average 関数の使い方と解説"
description: "Power Apps の キャンバスアプリ の Average に関する解説です。この記事を読むことで　Average の使い方をマスターすることができます。Average は値の平均を求めるときに利用します。"
categories: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
tags: [Power Apps,初心者向け,関数解説,キャンバスアプリ]
redirect_from:
  - /2020/07/07/
---

#  概要

Power Apps のキャンバスアプリの関数・プロパティの解説と実際の使い方に関する記事。
今回解説する関数は Average 関数になります。
また、この情報は 2020/7/7 時点の日本環境でのものとなります。

# Average 関数とは

公式より
```
Average 関数は、引数の平均または算術平均を算出します。
```

つまり、 Average はキャンバスアプリでの平均値の計算に利用される関数になります。


# 書き方
書き方は以下になります。

```
Average(数値,数値,数値.....)
```

または

```
Average(テーブル,列名)
```

となり、実際に値を入れると以下のように指定します。


```
Average(1,2,3,4,5) // 3と表示されます。
```
または
```
Average(Table({point:90,name:"太郎"},{point:50,name:"次郎"},{point:72,name:"三郎"}),point) // 70.66666667 と表示される
```

と指定します。


# 使い方

実際には以下のような場面で利用することになるかと思います。

- テストの平均値を求めるとき
- 経過時間の平均値を求めるとき

Average 関数 は Power Apps で平均値を求めるときに利用されます。指定の方法は 数値か、テーブルの指定方法の2つが存在し、どちらでも同じ結果を求めることが可能です。

# まとめ

Average 関数とは以下のような特性を持っています。

1. Average 関数 は平均値を算出する際に利用されます。
2. Average 関数 は数値の他にテーブルを指定する方法も存在します。


# 参考
[公式ドキュメント](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-aggregates)
