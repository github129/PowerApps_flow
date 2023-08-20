---
layout: post
title: "上下N％のデータを含まないようにデータを絞り込む方法"
description: "特定のデータから上下N%の値を持つデータを取り除いたコレクションを作成する方法を分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2023/08/19
---


#  概要

特定のデータから上下N%の値を持つデータを取り除いたコレクションを作成する方法になります。
今回は備忘録的なブログになります。

# コード


多分こんな感じです。
コードでは上下20%を含まないような式を記載しています。



```

ClearCollect(test,[20,19,18,17,16,15,14,13,12,11]);

ClearCollect(下20含まない,FirstN(test, Int(CountRows(test)-CountRows(test)*0.2)));
ClearCollect(上20含まない,LastN(test, Int(CountRows(test)-CountRows(test)*0.2)));
ClearCollect(結果,Filter(下20含まない, Value in 上20含まない.Value))


```

test データは順番通りに並んでいるので単に CountRows だけでよいですが、そうでない場合は先にSortする必要があります。


数値のみのデータの場合は多少結果がずれる可能性があるので、 ID 等の一意の値を持ったデータを使って最後の結果コレクションを作るようにした方が安全です。


# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


