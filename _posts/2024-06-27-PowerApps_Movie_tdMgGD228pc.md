---
layout: post
title: "Power Apps で SharePoint ドキュメントのファイルをダウンロードする方法 #PowerApps"
description: "Power Apps で SharePoint ドキュメントのファイルをダウンロードする方法 #PowerAppsを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/062701.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/062701.jpg
redirect_from:
  - /2024/06/27
---


#  概要

Power Apps で SharePoint ドキュメントのファイルをダウンロードする方法 #PowerApps


# 動画

<iframe width="983" height="553" src="https://www.youtube.com/embed/tdMgGD228pc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


使用した式は動画の概要欄をご確認ください

## SharePointドキュメントライブラリーからのファイルダウンロード方法

SharePointドキュメントライブラリーは、多くの企業や組織で文書管理に使用されています。今回は、Power Appsを使用して、これらのドキュメントライブラリーからファイルをダウンロードする方法についてご紹介します。

まず、ダウンロードしたいファイルが表示されているギャラリーコントロールを用意します。次に、Download関数を利用して、ファイルをダウンロードします。この関数は、特定のURLを作成し、そのURLをドキュメントライブラリーのアイテムリンクに設定することで動作します。

実際の操作手順は以下の通りです：

1. **ギャラリーコントロールの準備**：事前にギャラリーコントロールを用意し、表示したいファイルを設定します。
2. **Download関数の利用**：Download関数を呼び出し、ファイルのURLを生成します。`Download($"https://テナント.sharepoint.com/sites/サイト...{ThisItem.アイテムへのリンク}")`
3. **URLの作成**：ドキュメントライブラリーのアイテムリンクをURLのソースとして設定します。
4. **動作確認**：設定したURLでファイルが正しくダウンロードできるかを確認します。

これで、SharePointドキュメントライブラリーからファイルをダウンロードすることが可能になります。


# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Power Apps で SharePoint ドキュメントのファイルをダウンロードする方法 #PowerApps](https://www.youtube.com/watch?v=tdMgGD228pc)

