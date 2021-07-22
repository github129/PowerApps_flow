---
layout: post
title: "Power Apps Calendar 関数の使い方と解説"
description: "Power Apps の キャンバスアプリ の Calendar に関する解説です。この記事を読むことで　Calendar の使い方をマスターすることができます。Calendar はその月や日に関する値を取得するときに利用します。"
categories: [PowerApps]
tags: [Power Apps,初心者向け,関数解説,キャンバスアプリ]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2020/07/13/
---

#  概要

Power Apps のキャンバスアプリの関数・プロパティの解説と実際の使い方に関する記事。
今回解説する関数は Calendar 関数になります。
また、この情報は 2020/7/13 時点の日本環境でのものとなります。

# Calendar 関数とは

公式より
```
Calendar 関数は、現在のロケールに関する情報を取得する関数です。
```

Calendar 関数は実行者の環境のロケール(国)のカレンダー情報を取得することができます。


# 書き方
書き方は以下になります。

```
Calendar.MonthsLong() // 月のリストが取得できます
```

他には

```
Calendar.MonthsShort() // 月のリストが取得できます
```

```
Calendar.WeekdaysLong() // 曜日のリストが取得できます
```

```
Calendar.WeekdaysShort() // 曜日のリストが取得できます
```

のように指定することも可能です。

日本環境の場合は Long と Short で違いはありませんどちらも以下のように返します。
月の場合はどちらを指定しても

```
["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]
```

曜日の場合は

```
["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"]
```
と返します。

因みに、英語表記の場合は以下のように変化します。

MonthsLong

```
[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
```

MonthsShort
```
[ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
```

WeekdaysLong
```
[ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
```

WeekdaysShort
```
[ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]
```

# 使い方

実際には以下のような場面で利用することになるかと思います。

- カレンダーを作成するとき
- 月や曜日に関する操作を行うとき

Calendar 関数は利用頻度は低いですが、自力で変数等で作らなくても用意されているので、月や曜日を利用する場合はこちらを利用するようにしましょう。

# まとめ

Calendar 関数とは以下のような特性を持っています。

1. Calendar 関数 は月や曜日を返します。
2. Calendar　関数 は日本では Long Short どちらを指定しても変化はありません。


# 参考
[公式ドキュメント](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-clock-calendar)
