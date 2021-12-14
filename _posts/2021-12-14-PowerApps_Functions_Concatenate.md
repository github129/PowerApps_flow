---
layout: post
title: "Power Apps Concatenate 関数の使い方と解説"
description: "Power Apps の キャンバスアプリ の Concatenate に関する解説です。この記事を読むことで Concatenate の使い方をマスターすることができます。Concatenate 関数は、Power Apps で文字列を連結する際に用います"
categories: [Power Apps]
tags: [PowerApps,初心者向け,関数解説,キャンバスアプリ]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2021/12/14/
---

#  概要

Power Apps のキャンバスアプリの関数・プロパティの解説と実際の使い方に関する記事。
今回解説する関数は Concatenate 関数になります。
また、この情報は 2021/12/14 時点の日本環境でのものとなります。

# Count 関数とは

公式より
```
Concatenate 関数は、個々の文字列の組み合わせおよび文字列の単一列テーブルを連結します。Concatenate 関数は、個々の文字列の組み合わせおよび文字列の単一列テーブルを連結します。 個々の文字列を用いてこの関数を使用する場合、& 演算子 を使用するのと同等になります。
```

つまり、Concatenate 関数は Power Apps で文字列を連結したい場合に用います。
また、公式の説明にもある通り、 &(アンド) 演算子と同じような役割もになっています。


# 書き方

書き方は以下になります。
まずは文字列を連結する場合です。

```
Concatenate( Text1, Text2 )	
```


実際に値を入れて書くと以下のように書くことができます。

```
Concatenate( "たく", "丸" ) //たく丸と表示されます	
```

これ自体は & 演算子を用いても同じように行うことができます。

```
"たく" & "丸" //たく丸と表示されます	
```


次は & 演算子の機能とは別に Concatenate 関数のもう１つの機能、単一列テーブルの連結をの書き方になります。

```

// テーブルの作成
// この式は ボタンの OnSelect などに入れ、実行してください。
Set( Products,
    Table(
        { Name: "Violin", Type: "String" },
        { Name: "Cello", Type: "String" },
        { Name: "Trumpet", Type: "Wind" }
    )
);

// この式はギャラリーの Items に入れてください
Concatenate( "Name: ", Products.Name, ", Type: ", Products.Type ).Result


```

式を書き、実行すると以下のようになります。

<img src="/assets/blogpost/2021/2021-12-14-01.png"/><br/>

このように列の文字列を連結したい場合に用いることができます。但し、結果が Result となっていることから、連結前のデータは結果から取得できないため、もし連結前のデータも使いたい場合などは [AddColumns 関数](https://www.powerplatform.work/PowerApps%E9%96%A2%E6%95%B0%E8%A7%A3%E8%AA%ACAddColumns/)などを用いるとよいかもしれません。


# 使い方

実際には以下のような場面で利用することになるかと思います。

- Power Apps で文字列を連結したい場合
- & 関数だと読みにくく整理が必要な場合
- テーブルの列を連結して新たな単一列のテーブルを作成する場合

Concatenate 関数 は文字列連結には割と用いますので、覚えておくとよいでしょう。

# まとめ

Count 関数とは以下のような特性を持っています。

1. Concatenate 関数とは、Power Apps で文字列を連結する際に用います
2. Concatenate 関数とは、& 演算子と同じ働きをします
3. Concatenate 関数とは、テーブルの列を連結する機能も持っています

# 参考

[公式ドキュメント](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-concatenate)


