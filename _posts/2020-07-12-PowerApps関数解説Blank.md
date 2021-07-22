---
layout: post
title: "Power Apps Blank 関数の使い方と解説"
description: "Power Apps の キャンバスアプリ の Blank に関する解説です。この記事を読むことで　Blank の使い方をマスターすることができます。Blank は空白を利用する場合に使用される関数です"
categories: [PowerApps]
tags: [Power Apps,初心者向け,関数解説,キャンバスアプリ]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2020/07/12/
---

#  概要

Power Apps のキャンバスアプリの関数・プロパティの解説と実際の使い方に関する記事。
今回解説する関数は Blank 関数になります。
また、この情報は 2020/7/12 時点の日本環境でのものとなります。

# Blank 関数とは

公式より
```
Blank 関数は、空白値を返します。 これを使用して、これらの値をサポートするデータ ソースに NULL 値を格納し、フィールドから値を効果的に削除します。
```

つまり、 Blank 関数は空白値を使いたい場合に利用します。

ここでいう空白とは ***空文字*** とは違います。空白とは値が存在しない場合で、空文字は "" という風に記述します。

空文字は "" と指定する通り、実際に値が存在しないわけではなく "" という値が存在します。


# 書き方
書き方は以下になります。

```
Blank()
```

以下のように指定してみると、実際に Blank と空文字の違いが判るかと思います。

```
IsBlank(Blank());// true と表示される
IsBlank("") // false と表示される 
```


# 使い方

実際には以下のような場面で利用することになるかと思います。

- 空白値を比較したいとき
- 空白値を挿入したいとき

Blank 関数 は条件を指定するときなどにも利用されるためぜひ覚えておきましょう。

# まとめ

Back 関数とは以下のような特性を持っています。

1. Back 関数 空白を返します
2. 空白と空文字は Power Apps では違うものとして扱われます。
3. 空白とは値が存在しないことを言います


# 参考
[公式ドキュメント](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-isblank-isempty#blank)
