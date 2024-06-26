---
layout: post
title: "Power Apps のモダンコントロールのテキスト入力コントロールに新たに「TriggerOutput」プロパティが追加されました【3.24064】 #PowerApps"
description: "Power Apps のモダンコントロールのテキスト入力コントロールに新たに「TriggerOutput」プロパティが追加されました【3.24064】 #PowerAppsを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/062501.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/062501.jpg
redirect_from:
  - /2024/06/25
---


#  概要

Power Apps のモダンコントロールのテキスト入力コントロールに新たに「TriggerOutput」プロパティが追加されました【3.24064】 #PowerApps


# 動画

<iframe width="983" height="553" src="https://www.youtube.com/embed/Z5KlOBHoePY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Power Appsのテキスト入力コントロールのモダンコントロールに新機能が追加

Power Appsのモダンコントロールのテキスト入力機能が、新たな「TriggerOutput」プロパティの追加により、さらに強力になりました。このプロパティは、作成バージョン3.24064から利用可能で、入力時の変更を検知するタイミングを細かく設定できるようになります。

### Key press、Delayed、Forcus out

新しい「TriggerOutput」プロパティには、`Key press`、`Delayed`、`Forcus out`の3種類の設定が可能です。

- **Key press**: 入力した瞬間にOnChangeプロパティやSearch関数が動作します。クラシックコントロールの`DelayOutput`プロパティが`false`の時の状態と同じで、3種類の設定値を設定しない場合の規定の動きになります。
- **Delayed**: 入力してから数秒待つとSearch 関数や OnChange プロパティがトリガーされます。クラシックコントロールの`DelayOutput`プロパティが`true`の時と同じような動きです。
- **Forcus out**: テキスト入力が選択されている間は変更が検知されず、選択が外れた時に変更がトリガーされます。Search 関数などに関してはモダンコントロールのみの機能で、OnChange プロパティに関してはクラシックコントロールと同様の動きになります。

### 実際のアプリケーションへの応用

これらの設定値は、実際のアプリケーションの使用に合わせて選択することが重要です。各設定値には特徴があり、アプリのユーザビリティを向上させるために適切な値を選ぶことができます。この変更は、作成バージョン3.24064で確認することが可能なので、是非お試しください。



# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Power Apps のモダンコントロールのテキスト入力コントロールに新たに「TriggerOutput」プロパティが追加されました【3.24064】 #PowerApps](https://www.youtube.com/watch?v=Z5KlOBHoePY)

