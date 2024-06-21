---
layout: post
title: "Power Apps のテキスト入力コントロールで半角英数字以外が入力されたときに枠線の色を赤くして入力エラーを促す方法 #PowerApps"
description: "Power Apps のテキスト入力コントロールで半角英数字以外が入力されたときに枠線の色を赤くして入力エラーを促す方法 #PowerAppsを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/062001.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/062001.jpg
redirect_from:
  - /2024/06/20
---


#  概要

Power Apps のテキスト入力コントロールで半角英数字以外が入力されたときに枠線の色を赤くして入力エラーを促す方法 #PowerApps


# 作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/DPzZ6P38aZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Power Appsのテキスト入力コントロールのカスタマイズ

今回は、Power Appsのテキスト入力コントロールで半角英数字以外が入力されたときに枠線の色を赤くして入力エラーを促す方法についてご紹介します。この方法を用いることで、ユーザーに直感的に入力ミスを認識させ、データの品質を向上させることができます。

### 入力エラーの視覚的フィードバック

入力コントロールの枠線の色を変更するには、`BorderColor`プロパティを編集します。条件によって色を変更する場合、`If`関数を利用することで、柔軟に対応することができます。半角英数字を判定するには、`IsMatch`関数と正規表現を使用します。正規表現のパターンは、半角英数字以外が入力された時に`false`となるように設定します。

### 実装方法

具体的な実装方法としては、以下のように式を記載します。半角英数字のみの時には枠線の色を黒(`Black`)にし、そうでない場合は赤色(`Red`)になるように`If`関数を設定します。

```PowerApps
BorderColor = If(Match(TextInput.Text, "^[a-zA-Z0-9]*$"), Black, Red)
```

正規表現は様々なパターンが存在しますので、いろいろな正規表現のパターンを活用してみましょう。


# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Power Apps のテキスト入力コントロールで半角英数字以外が入力されたときに枠線の色を赤くして入力エラーを促す方法 #PowerApps](https://www.youtube.com/watch?v=DPzZ6P38aZ0)

