---
layout: post
title: "Power Apps で条件に一致するデータをまとめて削除する方法 【RemoveIf】#PowerApps"
description: "Power Apps で条件に一致するデータをまとめて削除する方法 【RemoveIf】#PowerAppsを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/062801.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/062801.jpg
redirect_from:
  - /2024/06/28
---


#  概要

Power Apps で条件に一致するデータをまとめて削除する方法 【RemoveIf】#PowerApps


# 作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/j7uzkM7H9Sk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Power Appsでデータを効率的に削除する方法

今回は、Power Appsで条件に一致するデータをまとめて削除する方法について、具体的な手順をご紹介します。

まず、削除したいデータが含まれるデータソースにアプリを接続します。次に、`RemoveIf`関数を使用して、条件に一致するデータを削除します。この関数は、`Filter`関数と同様に、データソースと条件を指定することで動作します。

例えばデモ用という SharePoint リストのサービスという選択肢列に Power BI と入っているデータを削除する場合の式です。

```
RemoveIf(デモ用, サービス.Value = "Power BI")

```

ただし、`RemoveIf`関数は委任の対象ではないため、データソースのデータが多い場合は、正しくデータが消せない場合があります。また、試験段階の機能の中には非同期を有効にする設定もあるので、本格的に利用するアプリではない場合やデータソースによっては、この設定も確認することをお勧めします。

このように、Power Appsの`RemoveIf`関数を使えば、条件に一致するデータを簡単かつに削除することができます。

# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Power Apps で条件に一致するデータをまとめて削除する方法 【RemoveIf】#PowerApps](https://www.youtube.com/watch?v=j7uzkM7H9Sk)

