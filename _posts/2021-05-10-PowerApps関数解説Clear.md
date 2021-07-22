---
layout: post
title: "Power Apps Clear 関数の使い方と解説"
description: "Power Apps の キャンバスアプリ の Clear に関する解説です。この記事を読むことで　Clear の使い方をマスターすることができます。Clear とはコレクションをresetするときに使います"
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
今回解説する関数は Clear 関数になります。
また、この情報は 2021/05/10 時点の日本環境でのものとなります。

# Clear 関数とは

公式より
```
Clear 関数は、コレクションのすべてのレコードを削除します。 コレクションの列は残ります。
```

つまり Clear 関数はコレクションのデータをクリア（コレクションのデータをリセット）する場合に用います。
ただし、事前にコレクションが定義されていないとエラーが発生します。


# 書き方

書き方は以下になります。

```
Clear(コレクション)
```

つまり実際に "SampleCollection" のような名前のコレクションがあった場合

```
Clear(SampleCollection)
```

といった書き方になります。

Clear 自体は コレクションにのみ作用するため、Dataverse や SharePoint Online のリストなどを削除する時には使えません。
その場合は RemoveIf 関数を用いることになります。

また、この関数は ClearCollect の時にも実際には裏で利用されている関数になります。

以下のような関数を書くことで実際に動きを確かめることもできます。

```
Collect( SampleCollection, { Flavor: "Pistachio", Quantity: 40 }, { Flavor: "Orange", Quantity: 200 } )
```

```
Clear(SampleCollection)
```

実際にコレクションのデータが削除されていることが確認できるはずです。


# 使い方

実際には以下のような場面で利用することになるかと思います。

- コレクションのデータを削除したいとき

Clear関数は非常に利用頻度の多い関数です。
ぜひ覚えておきましょう。

# まとめ

Clear 関数とは以下のような特性を持っています。

1. Clear 関数は、コレクションのデータ削除（データクリア）に用います。
2. Clear 関数は、コレクションにのみ利用可能です。
3. Clear 関数は、Dataverse や SharePoint Online といったデータソースには利用できません。


# 参考

[公式ドキュメント](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-clear-collect-clearcollect#clear)

