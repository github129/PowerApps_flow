---
layout: post
title: "Power Apps Assert 関数の使い方と解説"
description: "Power Apps の キャンバスアプリ の Assert に関する解説です。この記事を読むことで　Assert の使い方をマスターすることができます。Assert Test Sutudio で利用できる関数でテスト結果を確認するために利用します "
categories: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
tags: [Power Apps,初心者向け,関数解説,キャンバスアプリ]
redirect_from:
  - /2020/07/05/
---

#  概要

Power Apps のキャンバスアプリの関数・プロパティの解説と実際の使い方に関する記事。
今回解説する関数は Assert 関数になります。
また、この情報は 2020/7/5 時点の日本環境でのものとなります。

# Assert 関数とは

公式より
```
アサーションは、テストにおいて true または false に評価される条件または式です。 式が false を返す場合、テスト ケースは失敗します。
```

つまり、 Assert はキャンバスアプリで利用する関数ではなく Test Studio で利用する関数になります。
Test Studio とは キャンバスアプリでのテストを自動化するツールです。そちらで利用する関数になります。
Test Studio に関しては別途解説いたします。


# 書き方
書き方は以下になります。

```
Assert(expression, message)
```

- Expression – 必須。 true または false として評価される式を入力します
- Message – 必須ではありません。 エラーを説明するメッセージです。

実際に値を入れると以下になります。

```
Assert(lblResult.Text = "Success","ラベルの値が Success であることを確認 lblResult.Text:"&lblResult.Text)
```

といった具合になります。


# 使い方

実際には以下のような場面で利用することになるかと思います。

- テストを自動化するとき

テストの自動化はアプリケーションを素早く改善するには必須の作業になってきます。新たな機能を追加するたびに、何度も主導でテストをしていては時間もかかり、バグを作る原因にもなってしまいますので、ぜひテストの自動化にトライしてみてください。

# まとめ

Assert 関数とは以下のような特性を持っています。

1. Assert 関数 はテスト結果を判定します。
2. Assert 関数 はキャンバスアプリで利用する関数ではありません。Test Studio で利用する関数です。
3. 自動テストは素早くアプリケーションの改善を行うには必要になります。



# 参考
[公式ドキュメント](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-assert)
