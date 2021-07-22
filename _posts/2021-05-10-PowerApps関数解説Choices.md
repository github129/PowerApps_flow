---
layout: post
title: "Power Apps Choices 関数の使い方と解説"
description: "Power Apps の キャンバスアプリ の Choices に関する解説です。この記事を読むことで　Choices の使い方をマスターすることができます。Choices とは文字コードを文字列に変換するときに用います"
categories: [PowerApps]
tags: [Power Apps,初心者向け,関数解説,キャンバスアプリ]
image: >-
  https://www.powerplatform.work/assets/blogpost/2021/0509status2.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2021/0509status2.png
redirect_from:
  - /2021/05/10/
---

#  概要

Power Apps のキャンバスアプリの関数・プロパティの解説と実際の使い方に関する記事。
今回解説する関数は Choices 関数になります。
また、この情報は 2021/05/10 時点の日本環境でのものとなります。

# Choices 関数とは

公式より
```
Choices 関数は、検索列で使用可能な値のテーブルを返します。
```

公式ドキュメントにはルックアップ列と書いてありますが、要するに選択肢のことです。
Choices 関数はコンボボックスなどを利用しているときや、Dataverseなどをデータソースにしていて、選択肢などのカラムを作成するとよく使うことになる関数です。また、SharePoint Online などでデータからアプリを作成したときのコンボボックスなどにこの式が使われています。

ただ、実際にはよくわからずに利用している方も多いと思いますので、今回はこのChoices関数の開設を行います。


# 制限事項

現時点で Choices には以下の制限があります。

- 委任できません
- データソースを直接参照する必要があります

# 書き方

先ほどの説明にも合った通り、この関数はデータソースを直接参照する必要があるため、Dataverseや for Teams などで選択肢などの列をあらかじめデータソースに用意する必要があります。

書き方は以下になります。

```
Choices( column-reference )
```

つまり実際にデータソースに status という選択肢を作ると以下のようになります。

```
Choices(データソース.status)
```

例えば以下のようなデータソース（選択肢）を用意します。(この画面は Dataverse for Teams の選択肢の画像です)
<a class="post-image" href="/assets/blogpost/2021/0509status.png">
<img itemprop="image" data-src="/assets/blogpost/2021/0509status.png" src="/assets/blogpost/2021/0509status.png" alt="選択肢" />
</a>

これを先ほどの書き方で書くと以下のように取得することができます。

<a class="post-image" href="/assets/blogpost/2021/0509status2.png">
<img itemprop="image" data-src="/assets/blogpost/2021/0509status2.png" src="/assets/blogpost/2021/0509status2.png" alt="選択肢" />
</a>

このように選択肢の項目を取得することができます。
また、今回は Dataverse を用いたサンプルですが、 SharePoint Online などの選択肢列でも同様に可能です。


初期値を変更したい場合は Choices 関数の第2引数に、Itemsに指定されている選択肢から初期値にしたい値を文字列で指定します。

```
Choices(データソース.status,"検索したい文字")
```

なお、初期値にしたい値の文字列が要素に含まれていない場合、選択肢の最初が選択されます。


# 使い方

実際には以下のような場面で利用することになるかと思います。

- データソースの Dataverse で選択肢を作成した場合
- データソースの SharePoint Online で選択肢を使う場合

Choices関数は自ら使うことはアプリ作成に慣れるまでそれほどありませんが、サンプルアプリにはよく使われる関数です。
ぜひ覚えておきましょう

# まとめ

Choices 関数とは以下のような特性を持っています。

1. Choices 関数は、検索列で使用可能な値のテーブルを返します。
2. Choices 関数は、サンプルアプリでよく使われています。
3. Choices 関数は、選択肢を用いる場合に使います。
4. Choices 関数は、委任できません


# 参考

[公式ドキュメント](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-choices)

