---
layout: post
title: "Power Apps で一定時間ごとに自動で表示されているデータを更新して最新のデータを表示する方法 #PowerApps"
description: "Power Apps で一定時間ごとに自動で表示されているデータを更新して最新のデータを表示する方法 #PowerAppsを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/062601.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/062601.jpg
redirect_from:
  - /2024/06/26
---


#  概要

Power Apps で一定時間ごとに自動で表示されているデータを更新して最新のデータを表示する方法 #PowerApps


# 作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/-64S80R1Q-o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


使用した式は動画の概要欄をご確認ください

## Power Appsを活用したデータ自動更新の実現方法

今回は、Power Appsを使用して一定時間ごとに自動で表示されているデータを更新し、常に最新の情報を保つ方法をご紹介します。

### データの準備とアプリへの接続
まず、SharePoint リストにデータを用意し、アプリに接続します

### タイマーコントロールの利用
一定時間ごとに特定のアクションを実行するには、タイマーコントロールを使用します。このコントロールは、設定した時間が経過するごとにイベントをトリガーすることができます。

### 繰り返しと自動開始の設定
データの更新を繰り返すためには、タイマーコントロールの繰り返しの設定と自動開始の設定をオンにします。今回は3秒ごとにデータを更新する例を紹介します。

### 期間の設定と注意点
タイマーの期間を3000ミリ秒（3秒）に設定し、データを最新化します。ただし、期間が短すぎるとサービスの制限事項に引っかかる可能性があるため、設定する秒数には注意が必要です。

### データ更新の実行
タイマーが経過したら、`OnTimerEnd`プロパティにデータを更新する処理を記載します。`Refresh`関数を利用して更新したいデータソースを指定し、動作を確認します。



# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Power Apps で一定時間ごとに自動で表示されているデータを更新して最新のデータを表示する方法 #PowerApps](https://www.youtube.com/watch?v=-64S80R1Q-o)

