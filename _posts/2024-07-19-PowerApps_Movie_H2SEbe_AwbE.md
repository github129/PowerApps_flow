---
layout: post
title: "Power Apps で予定表がクリックだけで作成できるテンプレートスクリーン「カレンダー」の日付部分にその日の予定のタイトルを表示する方法 #PowerApps"
description: "Power Apps で予定表がクリックだけで作成できるテンプレートスクリーン「カレンダー」の日付部分にその日の予定のタイトルを表示する方法 #PowerAppsを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/071901.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/071901.jpg
redirect_from:
  - /2024/07/19
---


#  概要

Power Apps で予定表がクリックだけで作成できるテンプレートスクリーン「カレンダー」の日付部分にその日の予定のタイトルを表示する方法 #PowerApps


# 作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/H2SEbe_AwbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Power Appsで予定表がクリックだけで作成できるテンプレートスクリーン「カレンダー」の日付部分にその日の予定のタイトルを表示する方法

Power Appsのテンプレートスクリーン「カレンダー」に予定のタイトルを表示する方法について解説します。

### テンプレートスクリーンの紹介
テンプレートスクリーンは、新しい画面から追加できる機能がついているスクリーンです。カレンダー機能を持ち、日付を選択するとその日付の予定表を表示することができます。

### カレンダーのデザイン
カレンダーのデザインでは、予定が入っている日付に青色の丸い付けが表示されます。例えば、5日や8日に予定が入っている場合、その日付に青色の丸い付けが表示されます。今回は、この丸い図形の代わりにその日の予定のタイトルを表示するデザインに修正します。

### Visibleプロパティの設定
まず、`MonthDayGallery1`の中に入っている丸い図形の`Visible`プロパティを選択します。`Visible`プロパティの中に記載されている`Filter`関数部分の式をコピーし、丸い図形は不要なので削除します。

### テキストラベルコントロールの追加
次に、`MonthDayGallery1`の中にテキストラベルコントロールを追加します。テキストプロパティにコピーした式を貼り付け、`Filter`関数をコンカット関数で囲みます。`Concat`関数は、テーブル形式のデータをテキスト形式に変換するための関数です。

### 予定のタイトルの表示
最後に、`Subject`の値をスラッシュ区切りで表示するように式を記載し、テキストラベルのサイズを小さくして表示の違和感がないようにします。これで、正しく日付部分に予定のタイトルが表示されていることが確認できます。



# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Power Apps で予定表がクリックだけで作成できるテンプレートスクリーン「カレンダー」の日付部分にその日の予定のタイトルを表示する方法 #PowerApps](https://www.youtube.com/watch?v=H2SEbe_AwbE)

