---
layout: post
title: "Power Apps AddColumns 関数の使い方と解説"
description: "Power Apps の キャンバスアプリ の AddColumns 関数に関する解説です。この記事を読むことで AddColumns の使い方をマスターすることができます。AddColumns は コレクションに対して新しいカラム（列）を追加することができます。 "
categories: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
tags: [Power Apps,初心者向け,関数解説,キャンバスアプリ]
redirect_from:
  - /2020/06/30/
---

#  概要

Power Apps のキャンバスアプリの関数・プロパティの解説と実際の使い方に関する記事。
今回解説する関数は AddColumns 関数になります。
また、この情報は 2020/6/30 時点の日本環境でのものとなります。

# AddColumns 関数とは

公式より
```
関数は、テーブルに列を追加し、数式によってその列内の値が定義されます。 既存の列は変更されません。
```

つまり、AddColumns 関数 は コレクションやテーブルに対して「 列 」を追加する関数です。（列は縦）
すなわち

|Name | Age | 
|:-----------------|------------------:|
| 太郎             |              18 |
| 次郎           |            22 | 

こういったテーブルに対して AddColumns を行った場合は、


|Name | Age | Address | 
|:-----------------|------------------:|------------------:|
| 太郎             |              18 |東京|
| 次郎           |            22 | 大阪|

といったテーブルを返すことができます。
ただし、あくまでテーブルを返すだけなので 

<span style="color:orange">**実際のテーブルやコレクションが更新されるわけではない点**</span>

に注意が必要です。そのテーブルを永久的に残したい場合は、 Collect 関数等と併用しての利用となります。このコレクションの使い方に関しては別途解説いたしますが、今回AddColumns 関数 に関する解説のみとします。

# 書き方
書き方は以下になります。

```
AddColumns(テーブル,列名,値)
```

実際に値を入れると以下になります。

```
Collect(col,{name:"太郎"});
AddColumns(col,"age",18)
```

実際にこちらをボタンなどで動かしても特にコレクションの内容が変わったりはしません。なぜなら、解説にも書いた通り、指定したコレクションが更新されるわけではないためです。そのため、更新をかけたい場合は以下のように利用します。
<br/>

```
Collect(col,{name:"太郎"});
ClearCollect(col2,AddColumns(col,"age",18))
```
AddColumns で帰ってきた値をもとに新たなコレクション col2 を作成しています。
このようにすることで AddColumns の結果を保持することができます。

# 使い方

実際には以下のような場面で利用することになるかと思います。

- 複数のデータを管理するアプリ
- マスターデータに対してトランザクション等を紐づけたいとき、又はその逆
- 計算列を新たに作成したいとき

実際にはこれら以外にもあるかと思いますが、AddColumns は非常に便利で Power Apps で少し複雑なデータ管理をするときになくてはならない関数となってきます。

はじめはとっつきにくい部分もあるかと思いますが、

```
Collect(col,{name:"太郎"});
ClearCollect(col2,AddColumns(col,"age",18))
```

この書き方を基本として何度も関数を利用することで理解できると思いますので、ぜひ AddColmuns は使いこなせるようになりましょう。

# まとめ

AddColumns 関数とは以下のような特性を持っています。

1. AddColumns 関数　はテーブルに「 列 」を追加することができます。
2. AddColumns 関数　は実際に値を変更するわけではありません。
3. AddColumns 関数　は少し複雑なデータ操作にかなり有効な関数です。



# 参考
[公式ドキュメント](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-table-shaping)
