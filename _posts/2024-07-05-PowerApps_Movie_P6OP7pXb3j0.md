---
layout: post
title: "指定した期間（From To）に SharePoint リストに登録したデータを検索して表示する方法 #PowerApps"
description: "指定した期間（From To）に SharePoint リストに登録したデータを検索して表示する方法 #PowerAppsを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/070501.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/070501.jpg
redirect_from:
  - /2024/07/05
---


#  概要

指定した期間（From To）に SharePoint リストに登録したデータを検索して表示する方法 #PowerApps


# 作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/P6OP7pXb3j0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## 指定した期間にSharePointリストに登録したデータを検索して表示する方法

今回は、指定した期間内にSharePointリストに登録されたデータを検索して表示する方法をご紹介します

### 日付コントロールの配置

まず、期間を指定するための日付コントロールを2つ配置します。今回はモダンコントロールの日付選択コントロールを利用します。小さい場合はサイズや位置を調整し、見やすく配置しましょう。

### Filter関数の利用

データを絞り込んで表示するために、`Filter`関数を利用します。まず、指定した開始日付以上の登録日時のデータを表示するように設定します。次に、終了日付以下のデータも表示する条件を追加します。複数の条件を記載する場合は、`And`関数や`And`演算子 `&&` も利用することができます。

### 実際の動作確認

設定が完了したら、実際に動作を確認してみましょう。正しく動作していることを確認できるはずです。ただし、終了日付に登録されたデータも含めたい場合は、終了日付に1日追加するようにしましょう。

`DateAdd(日付,1)`





# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [指定した期間（From To）に SharePoint リストに登録したデータを検索して表示する方法 #PowerApps](https://www.youtube.com/watch?v=P6OP7pXb3j0)

