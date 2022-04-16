---
layout: post
title: "最近コメント機能が増えてるけどどこで管理されてるの？"
description: "Power Automate やモデル駆動型アプリでのコメントはすべて Dataverse のコメントテーブルで管理されています"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/041601.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/041601.png
redirect_from:
  - /2022/04/16/
---


#  概要

最近追加されてきた、Power Automate や Power Apps などでコメント機能ありますよね？
そんなコメント機能ですが、どこでどのように管理されているかを調査しました。


# 管理場所

コメントの管理には Dataverse が使われていて、コメントテーブル(comment)で管理されています。

実際に Power Automate でコメントを使うと画像のように追加されます。

<img src="/assets/blogpost/2022/041601.png"/><br/>
<img src="/assets/blogpost/2022/041602.png"/><br/>

改行込みで入力した

```
Hello
world
``


は本文列にJSON形式で保存されていました。(本文列のデータ形式は複数行)

```
{"ops":[{"insert":"Helllo\nworld\n"}]}
```

この Dataverse のテーブルを使うことで、コメントの管理などが容易に行えそうですね。