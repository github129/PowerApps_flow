---
layout: post
title: "Power Apps でクリックだけで社員検索機能が作成できるテンプレートスクリーン「人々」の選択した社員の部分にも社員の画像を表示する方法 #PowerApps"
description: "Power Apps でクリックだけで社員検索機能が作成できるテンプレートスクリーン「人々」の選択した社員の部分にも社員の画像を表示する方法 #PowerAppsを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/072001.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/072001.jpg
redirect_from:
  - /2024/07/20
---


#  概要

Power Apps でクリックだけで社員検索機能が作成できるテンプレートスクリーン「人々」の選択した社員の部分にも社員の画像を表示する方法 #PowerApps


# アプリの作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/yHlO_AquyIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Power Apps で社員検索機能を強化する方法

Power Apps を使用して、クリックだけで社員検索機能を作成できるテンプレートスクリーン「人々」に、選択した社員の画像を表示する方法をご紹介します。

### テンプレートスクリーンの紹介

テンプレートスクリーンとは、新しい画面などから追加できるスクリーンのことです。今回紹介する「人々」スクリーンは、Office365ユーザーコネクターを使用して社員の検索を行うことが可能で、表示されたユーザーを選択すると一覧に表示されます。

### ユーザー画像の表示方法

選択したユーザーは `MyPeople` というコレクションに格納され、`PeopleAddedGallery1`  で表示されます。まず、画像を表示するために、ユーザー名が表示されている`Title1`の幅を少し小さくし、`PeopleAddedGallery1` コントロールの中に画像コントロールを追加します。画像の幅や位置を調整し、`ProfileImage1`のイメージプロパティに記載されている式をコピーして貼り付けます。

### プロファイルイメージの設定

コピーした式を先ほど追加した画像コントロールにも追加し、正しく表示されていることを確認します。また、画像コントロール以外にもモダンコントロールのアバターコントロールを使用する方法もあります。アバターコントロールを追加し、イメージプロパティに同じくコピーした式を貼り付けます。

### アバターコントロールの設定

このコントロールは画像がない場合は名前を表示するので、`ThisItem.DisplayName`が表示されるように修正します。ステータスのバッジが必要ない場合は、バッジを`None`に設定することも可能です。

ほとんどマウス操作だけでも可能ですので、ぜひお試しください


# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Power Apps でクリックだけで社員検索機能が作成できるテンプレートスクリーン「人々」の選択した社員の部分にも社員の画像を表示する方法 #PowerApps](https://www.youtube.com/watch?v=yHlO_AquyIg)

