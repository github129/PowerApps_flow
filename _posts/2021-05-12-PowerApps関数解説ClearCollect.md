---
layout: post
title: "Power Apps ClearCollect 関数の使い方と解説"
description: "Power Apps の キャンバスアプリ の ClearCollect に関する解説です。この記事を読むことで　ClearCollect の使い方をマスターすることができます。ClearCollect とはコレクションを作成するときに使います"
categories: [PowerApps]
tags: [Power Apps,初心者向け,関数解説,キャンバスアプリ]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2021/05/12/
---

#  概要

Power Apps のキャンバスアプリの関数・プロパティの解説と実際の使い方に関する記事。
今回解説する関数は ClearCollect 関数になります。
また、この情報は 2021/05/12 時点の日本環境でのものとなります。

# ClearCollect 関数とは

公式より
```
ClearCollect 関数は、コレクションからすべてのレコードを削除します。 次に、同じコレクションに異なるレコード セットを追加します。 ClearCollect は、1 つの関数で、Clear の後に Collect を実行します。
```

つまり ClearCollect 関数は Clear 関数と Collect関数を組み合わせた関数ということです。


# 書き方

書き方は以下になります。

```
ClearCollect(コレクション, Item)
```

つまり実際に "SampleCollection" のような名前のコレクションを作成したい場合、

```
ClearCollect(SampleCollection, {value: 1})
```

といった書き方になります。

Collect 関数の場合は、もう一度宣言するとデータを追加しますが、 ClearCollect は一度データを削除したのちに追加するので、データが増えることはありません。

また、それぞれ Clear 関数と Collect 関数の解説は以下になります。

[Clear 関数の解説](https://www.powerplatform.work/blog/2021/05/10/PowerApps%E9%96%A2%E6%95%B0%E8%A7%A3%E8%AA%ACClear/)

[Collect 関数の開設](https://www.powerplatform.work/blog/2021/05/10/PowerApps%E9%96%A2%E6%95%B0%E8%A7%A3%E8%AA%ACCollect/)


# 使い方

実際には以下のような場面で利用することになるかと思います。

- コレクションを作成したいとき

ClearCollect 関数はコレクションを操作する場合必須と言っていいほど重要な関数です。必ず覚えておきましょう

# まとめ

ClearCollect 関数とは以下のような特性を持っています。

1. ClearCollect 関数は、コレクションの作成に用います。
2. ClearCollect 関数は、Clear 関数と Collect 関数を合わせた関数です。
3. ClearCollect 関数は、Dataverse や SharePoint Online といったデータソースには利用できません。


# 参考

[公式ドキュメント](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-clear-collect-clearcollect#clear)

[Clear 関数の解説](https://www.powerplatform.work/blog/2021/05/10/PowerApps%E9%96%A2%E6%95%B0%E8%A7%A3%E8%AA%ACClear/)

[Collect 関数の開設](https://www.powerplatform.work/blog/2021/05/10/PowerApps%E9%96%A2%E6%95%B0%E8%A7%A3%E8%AA%ACCollect/)

