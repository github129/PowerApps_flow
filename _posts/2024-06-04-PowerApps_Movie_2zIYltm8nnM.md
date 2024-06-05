---
layout: post
title: "Power Apps で 8時から 18時までの時間を 30 分刻みでドロップダウンに表示する方法 #PowerApps"
description: "Power Apps で 8時から 18時までの時間を 30 分刻みでドロップダウンに表示する方法 #PowerAppsを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/060401.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/060401.jpg
redirect_from:
  - /2024/06/04
---


#  概要

Power Apps で 8時から 18時までの時間を 30 分刻みでドロップダウンに表示する方法 #PowerApps


# 作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/2zIYltm8nnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Power Appsで時間を管理するドロップダウンの作成

Power Appsを使用して、効率的な時間管理を実現するためのドロップダウンを作成する方法をご紹介します。このドロップダウンは、8時から18時までの時間を30分刻みで選択できるように設計されており、ユーザーが簡単に希望する時間を選ぶことができます。

### 基本的な関数の活用

このドロップダウンを作成するには、`ForAll`関数と`Sequence`関数を組み合わせて使用します。`Sequence`関数は、指定した数だけ連続した数値を生成する関数で、今回は21を指定しています。これにより、8時から18時までの21の時間帯をカバーします。

### タイム関数での時間計算

時間を作成するためには、`Time`関数を使用して自動で計算します。`Time`関数は、時、分、秒を指定することで時間の値を作成する関数です。特に、分や秒に60以上を指定すると自動で繰り上げられるという特徴があります。この特徴を利用して、30分ごとに増加する時間を計算することができます。

### 実際の動作確認

実際にPower Appsでこのドロップダウンを作成し、動作を確認してみましょう。正しく動作していることが確認できれば、8時から30分刻みで18時までの時間を選択できるドロップダウンが完成です。もし、19時までの時間を追加したい場合は、`Sequence`関数に23を指定することで対応可能です。

### 柔軟なカスタマイズ

また、`Time`関数の時を7に変更することで、7時始まりのドロップダウンに変更することもできます。要件に合わせて数値を変更し、柔軟に対応しましょう。



# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Power Apps で 8時から 18時までの時間を 30 分刻みでドロップダウンに表示する方法 #PowerApps](https://www.youtube.com/watch?v=2zIYltm8nnM)

