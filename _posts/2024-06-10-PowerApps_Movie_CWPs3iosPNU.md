---
layout: post
title: "Power Apps で特定の文字で挟まれたテキストを抽出する方法 #PowerApps"
description: "Power Apps で特定の文字で挟まれたテキストを抽出する方法 #PowerAppsを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/061001.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/061001.jpg
redirect_from:
  - /2024/06/10
---


#  概要

Power Apps で特定の文字で挟まれたテキストを抽出する方法 #PowerApps


# 作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/CWPs3iosPNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


使用した式は動画の概要欄をご確認ください


## Power Appsで正規表現を使用して特定の文字で挟まれたテキストを抽出する方法

Power Appsは、ビジネスプロセスを自動化し、効率化するための強力なツールです。今回は、Power Appsを使用して、特定の文字で挟まれたテキストを抽出する方法をご紹介します。例えば、メールアドレスのように特定の記号で囲まれたテキストを取得する必要がある場合、この方法が非常に役立ちます。

### 正規表現のパターンを利用する

Power Appsには、`Match`関数というものがあります。これは、指定したパターンに一致する最初のテキスト文字列を抽出する関数です。今回は、正規表現のパターンを利用して、特定の文字で挟まれた値を取得します。例として、角括弧（墨括弧）【】で囲まれた値を抽出する場合、以下のような正規表現のパターンを記載します。

```
【(?<sample>.+)】
```

このパターンは、角括弧で囲まれた任意の文字列をマッチさせることができます。この正規表現を`Match`関数に適用することで、簡単に目的の値を抽出することが可能です。

### パターンの変更による柔軟性

正規表現の素晴らしい点は、パターンを変更することで、異なる種類の括弧や文字列にも対応できることです。例えば、全角括弧で囲まれた値を取得したい場合は、パターンを以下のように変更します。

```
「(?<sample>.+)」
```


このように、パターンを変更するだけで、異なる種類の括弧で囲まれたテキストを抽出することができます。これにより、さまざまなシナリオに対応することが可能になります。

### まとめ

Power Appsの`Match`関数を使用することで、正規表現のパターンを活用し、特定の文字で挟まれたテキストを簡単に抽出することができます。この方法は、メールアドレスや特定の記号で囲まれたテキストを取得する際に非常に便利です。



# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Power Apps で特定の文字で挟まれたテキストを抽出する方法 #PowerApps](https://www.youtube.com/watch?v=CWPs3iosPNU)

