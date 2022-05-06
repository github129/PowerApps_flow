---
layout: post
title: "Dataverse の仮想テーブルで Virtual Connector Data Provider が表示されない場合の対策"
description: "実装する環境に対して AppSource からのインストールが必要です。"
categories: [Dataverse]
tags: [Dataverse]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/050701.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/050701.png
redirect_from:
  - /2022/05/07/
---


#  概要

Dataverse の仮想テーブルは便利ですよね。もし、まだそこまでご存じでない場合は[こちらの記事](https://docs.microsoft.com/ja-jp/power-apps/developer/data-platform/virtual-entities/get-started-ve)を一度ご覧ください。


さて、そんな便利な仮想テーブルですが、利用しようとすると **Virtual Connector Data Provider** が表示されないことがあります。

その時の対策方法になります。

また、インストールには環境管理者以上のロールが必要になります。

# 環境へのインストール

仮想テーブルを使うためには環境ごとに Virtual connectors in Dataverse をインストールする必要があります。

リンクはこちらになります。

[Virtual connectors in Dataverse](https://appsource.microsoft.com/en/product/dynamics-365/mscrm.connector_provider?tab=overview)


<img src="/assets/blogpost/2022/050601.png"/><br/>

「Get it now」もしくは「今すぐ入手」を選択することで、規約等の確認後に環境へのインストールが始まります。もし、ここで権限が足りないというった表示が出た場合は、必要な AzureAD のロールを割り当ててもらいましょう。私の環境では インストールが完了するまで10分程度かかりました。

インストールが完了すると、Dynamics 365 アプリの一覧として表示されます。

<img src="/assets/blogpost/2022/050602.png"/><br/>

無事ドロップダウンの選択肢に  Virtual Connector Data Provider が表示されましたね。

あとは以下のような動画を参考に仮想テーブルを作っていきましょう。


[Create a Virtual Table for SQL with the Virtual Connector Provider](https://www.youtube.com/watch?v=3KJdBe3BkM4)

[Create a Virtual Table for Excel with the Virtual Connector Provider](https://www.youtube.com/watch?v=9rxYzF5h7k8)

[Create a Virtual Table for SharePoint with the Virtual Connector Provider](https://www.youtube.com/watch?v=Jj7bWCV5Pu4)


# リンク

- [仮想テーブルに関する入門情報 ](https://docs.microsoft.com/ja-jp/power-apps/developer/data-platform/virtual-entities/get-started-ve)


