---
layout: post
title: "Power Apps で N 番目のデータをとってくる方法は？FirstN と Last はもう古い？？"
description: "Index 関数を使うことで容易にN番目のデータを表示することができます"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2022/04/11/
---

#  概要

Power Apps で ３番目のデータを表示したい、とかよくありませんか？そんなＮ番目のデータを Power Apps で表示するには今までは FirstN 関数と Last 関数を組み合わせて行っていました。しかし別の関数を使うと実はもっと簡単にできます。今回はその関数を解説します。

また、この情報は 作成バージョン 3.22041.23 から利用できます。（2022/04/08 時点での推奨は 3.22034.17）そのためもし早めに機能を試したい場合はご自身でバージョンを変更する必要があります。

作成バージョンの変更方法は以下になります。

[任意のバージョンの Power Apps Studio を使うには！？ 実はあまり知られていないバージョン変更の方法](https://www.powerplatform.work/PowerApps_Studioversionchange/)

# Index 関数

その関数は Index関数 と呼ばれている関数です。この関数を使うと指定した N番目のデータを簡単に取得することができます。

使い方は以下のように使います。

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Noticed a new Power Apps function &quot;Index&quot;.<br>Easily get the item in a collection or Table by providing the index.<br><br>No more First(LastN) or Last(FirstN) <a href="https://twitter.com/hashtag/PowerApps?src=hash&amp;ref_src=twsrc%5Etfw">#PowerApps</a> <a href="https://twitter.com/hashtag/PowerFx?src=hash&amp;ref_src=twsrc%5Etfw">#PowerFx</a> <a href="https://t.co/kvUU3Oib8f">pic.twitter.com/kvUU3Oib8f</a></p>&mdash; Reza Dorrani (@rezadorrani) <a href="https://twitter.com/rezadorrani/status/1512048506650992640?ref_src=twsrc%5Etfw">April 7, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


```
Index(["リンゴ","バナナ","メロン"],2).Value // バナナと表示されます
```

特徴としては、配列やアレイと違ってインデックスは１から始まるという点でしょうか。そのため、上記の式でリンゴを表示したい場合に Index に指定する数字は "1" になります。




今までであれば、 直感的にできなかった作業が Index関数の登場でより直感的になりましたね。この関数にはこれからお世話になりそうです。

# リンク


- [Noticed a new Power Apps function "Index"](https://twitter.com/rezadorrani/status/1512048506650992640)




