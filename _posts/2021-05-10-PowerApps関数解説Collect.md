---
layout: post
title: "Power Apps Collect 関数の使い方と解説"
description: "Power Apps の キャンバスアプリ の Collect に関する解説です。この記事を読むことで　Collect の使い方をマスターすることができます。Collect とはコレクションを作成または、コレクションやデータソースにデータを追加するときに使います。"
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
今回解説する関数は Collect 関数になります。
また、この情報は 2021/05/10 時点の日本環境でのものとなります。

# Collect 関数とは

公式より
```
Collect 関数は、データ ソースにレコードを追加します。
```

つまり Collect 関数はコレクションまたは Dataverse などのデータソースに対して行を追加するときに用いる関数です。
追加される行は最後に追加されます。


# 書き方

書き方は以下になります。

```
Collect( DataSource, Item, ... )
```

つまり実際に "SampleCollection" のような名前のコレクションがあった場合

```
Clear(SampleCollection,{Name:GUID()})
```

また、Item は複数書くことができるので、

```
Clear(SampleCollection,{Name:GUID()},{Name:GUID()},{Name:GUID()},{Name:GUID()},{Name:GUID()},{Name:GUID()})
```

のようにいくつも記載することができます。

また、通常コレクションのデータ追加に利用される Collect 関数ですが、SQLDatabase や Dataverse などのデータを追加する時にも使えます。
例えば SampleDB というテーブルが Dataverse 上にあった場合、

```
Collect(SampleDB,{Name:GUID()})
```

のように記載することでデータを追加することができます。
これは Patch 関数でデータを追加する時に以下のように書くのと同じです。

```
Patch(SampleDB,Defaults(SampleDB),{Name:GUID()})
```

ただし、上記の２つには以下のような違いが存在します。

[Collect関数とPatch関数はデータを追加する時どちらを使うべき？２つの関数の違いは？](https://www.powerplatform.work/blog/2021/05/10/PowerApps_CollectFunc_vs_PatchFunc/)

# 使い方

実際には以下のような場面で利用することになるかと思います。

- コレクションにデータを追加する時
- データソースにデータを追加する時

Collect関数は Power Apps でアプリを作るときには５本の指に入るくらい利用される関数です。
必ず覚えましょう。

# まとめ

Collect 関数とは以下のような特性を持っています。

1. Collect 関数は、コレクションのデータ追加（行を追加）に用います。
2. Collect 関数は、コレクションだけでなくデータソースにも利用可能です。


# 参考

[公式ドキュメント](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-clear-collect-clearcollect#collect)

