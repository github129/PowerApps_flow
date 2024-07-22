---
layout: post
title: "テンプレートスクリーンのカレンダーで選択した予定（イベント）の詳細情報をポップアップでアプリに表示する方法 #PowerApps"
description: "テンプレートスクリーンのカレンダーで選択した予定（イベント）の詳細情報をポップアップでアプリに表示する方法 #PowerAppsを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/072101.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/072101.jpg
redirect_from:
  - /2024/07/21
---


#  概要

テンプレートスクリーンのカレンダーで選択した予定（イベント）の詳細情報をポップアップでアプリに表示する方法 #PowerApps


# 作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/T3zvT1lgh0M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## テンプレートスクリーンのカレンダーで選択した予定の詳細情報をポップアップで表示する方法

今回は、Power Appsを使ってテンプレートスクリーンのカレンダーで選択した予定の詳細情報をポップアップで表示する方法をご紹介します。この機能を追加することで、カレンダーの使い勝手がさらに向上します。

### テンプレートスクリーンとは？

テンプレートスクリーンとは、新しい画面などから追加できるスクリーンのことです。今回は、その中のカレンダーに機能を追加していきます。このスクリーンは、カレンダー機能とその日の予定を表示する機能を持っています。

### ポップアップの作成

まずはポップアップを作成します。以下の手順で進めていきます。

1. **コンテナーコントロールの追加**: 画面全体に広げ、背景色を黒色に設定し、透明度を50%にします。
2. **二重のコンテナーコントロール**: 追加したコンテナーコントロールの中にさらにコンテナーコントロールを追加し、大きさを調整して背景色を白に設定します。ドロップシャドウを`Bold`に設定します。

### 予定の詳細表示

次に、予定の詳細を表示するための設定を行います。

1. **テキストラベルの追加**: 白のコンテナーの中にテキストラベルを追加します。選択した予定は変数「`_selectedCalendarEvent`」に入っているので、これを利用して予定のタイトルを表示します。予定のタイトルは `_selectedCalendarEvent.Subject`で表示されます
2. **HTMLテキストコントロールの利用**: 予定の詳細はHTML形式のため、HTMLテキストコントロールを利用します。変数「`_selectedCalendarEvent.Body`」を指定することで、予定の詳細が表示されます。

### ポップアップの表示と非表示

最後に、ポップアップの表示と非表示を切り替えるための設定を行います。

1. **バボタンの追加**: 白のコンテナーの中にモダンコントロールのボタンコントロールを追加します。幅やアイコンの表示境界半径などを調整し、丸い×ボタンを作成します。
2. **変数の作成**: `UpdateContext`関数を使って「`showDetail`」という変数を作成し、値には`false`を設定します。黒のコンテナーコントロールの`Visible`プロパティにこの変数を設定します。
3. **オンセレクトプロパティの設定**: `CalendarEventsGallery1`の中のTitle3コントロールの`OnSelect`プロパティに、先ほどと同じア`UpdateContext`関数を追加し、値には`true`を設定します。


以上が、テンプレートスクリーンのカレンダーで選択した予定の詳細情報をポップアップで表示する方法です。ぜひ試してみてください！



# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [テンプレートスクリーンのカレンダーで選択した予定（イベント）の詳細情報をポップアップでアプリに表示する方法 #PowerApps](https://www.youtube.com/watch?v=T3zvT1lgh0M)

