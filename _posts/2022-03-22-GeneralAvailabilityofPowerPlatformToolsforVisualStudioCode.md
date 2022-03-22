---
layout: post
title: "Power Platform Tools for Visual Studio Code の一般提供を開始"
description: "今回発表する新機能は、Visual Studio コードにおける Power Platform CLI のターミナル インターフェイスにとどまらず、Visual Studio コードが提供する領域を活用できるよう、いくつかのグラフィック要素も追加されています。"
categories: [PowerPlatform]
tags: [PowerPlatform,GA]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/032201.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/032201.png
redirect_from:
  - /2022/03/22/
---

#  概要

概要になりますので、詳しい内容は記事下のリンクよりご確認ください。

今回の新機能は、Visual Studio コードにおける Power Platform CLI のターミナル インターフェイスにとどまらず、Visual Studio コードが提供する領域を活用できるよう、いくつかのグラフィック要素も追加されています。


# 新しいUI機能

大きな違いの1つは、拡張機能をインストールすると、Visual Studio CodeのアクティビティバーにPower Platform Iconが表示されるようになったことです。

<img src="/assets/blogpost/2022/032201.png"/><br/>

プレビュー時とは異なり、拡張機能がインストールされているかどうかを知るには、Visual Studioのコードでターミナル・インターフェースを起動し、pacコマンドを実行する必要がありました。現在は、拡張機能がインストールされていることを知らせるための視覚的な要素があります。このアイコンをクリックするとサイドバーが表示され、保存されている認証プロファイルと、環境およびその環境内のソリューションのリストが表示されます。

# Install apps from AppSource

これはプレビュー機能で、数週間後に公開プレビューとして発表される予定です。このコマンドを使用すると、新しい開発環境を準備する際に前提条件として必要になることが多い、AppSource から入手可能なアプリケーションをインストールすることができます。

今回のプレビューでは、このようなアプリケーションをコマンドラインからインストールするための基本的な機能を実装しています。

また、アプリケーションの一覧をJSONファイルに記述し、そのJSONファイルへのパスをpac application installコマンドに与えることで、複数のアプリケーションをインストールすることができます。


# リンク


[General Availability of Power Platform Tools for Visual Studio Code and February Refresh for Power Platform CLI](https://powerapps.microsoft.com/ja-jp/blog/general-availability-of-power-platform-tools-for-visual-studio-code-and-february-refresh-for-power-platform-cli/)
