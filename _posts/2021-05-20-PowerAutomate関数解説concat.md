---
layout: post
title: "Power Automate で文字をくっつける（連結する）時に使う関数は？ concat 関数の解説"
description: "Power Automate  の concat に関する解説です。この記事を読むことで　concat の使い方をマスターすることができます。concat 関数は２つ以上のテキストを連結する時に使います"
categories: [PowerAutomate]
tags: [Power Automate,初心者向け,関数解説]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2021/05/20/
---

#  概要

Power Automate の関数・プロパティの解説と実際の使い方に関する記事。
今回解説する関数は concat 関数になります。
また、この情報は 2021/05/19 時点の日本環境でのものとなります。

# concat 関数とは

公式より
```
concat 関数は 2 つ以上の文字列を結合し、結合された文字列を返します。
```

つまり concat 関数は２つ以上のテキストをくっつける場合に使います。

# 書き方

書き方は以下になります。

```
concat('テキスト', 'テキスト', ...)
```

テキストの部分はいくつでも指定することができます。ただしデータの型は文字列である必要があります。
実際に値を入れて書くと以下のように書くことができます。

```
concat('Hello', 'World')
```

上記の式を実行すると "HelloWorld" と帰ってきます。
また、最低限２つはテキスト値として指定する必要があります。

注意点ですが、こんな関数を使わなくても直接値を指定することで文字列の連結も可能ですが、フローの実行時に予期せぬ挙動を産むときがありますので、テキストをくっつける場合は concat 関数を使うようにしていきましょう。

# 使い方

実際には以下のような場面で利用することになるかと思います。

- 文字列の連結時

concat 関数は使う場面は多いですが、意外とめんどくさがって使われない関数ですが、使わない場合、予期せぬ不具合が発生する可能性があるので、文字列連結時は必ず使うようにしましょう。

# まとめ

concat 関数とは以下のような特性を持っています。

1. concat 関数とは、２つ以上のテキストをくっつける時に使います。
2. concat 関数とは、いくつでもテキストを指定することができます。
3. concat 関数を使わないで文字列を連結すると予期せぬ不具合が発生する場合があります。

# 参考

[公式ドキュメント](https://docs.microsoft.com/ja-jp/azure/logic-apps/workflow-definition-language-functions-reference#concat)

