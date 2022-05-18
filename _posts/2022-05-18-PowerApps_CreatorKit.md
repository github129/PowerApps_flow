---
layout: post
title: "おしゃれなアプリが簡単に作れる！Microsoft の Power CAT から Creator Kit が公開されました"
description: "Power Apps で Microsoft から Creator Kit が公開されました"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/noimage.png
redirect_from:
  - /2022/05/18/
---


#  概要

先日 Microsoft の Power CAT から Power Apps で利用できるコードやキャンバスコンポーネント、テンプレートが含まれたsolutionが公開されました。

このキットを使えば キャンバスアプリやカスタムページを高即でおしゃれで機能的な物に仕上げることができます。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">僕のチームが Power CAT クリエーターキットを公開しました。Power Apps で利用できるコードやキャンバスコンポーネント、テンプレートが含まれ、キャンバスアプリやカスタムページで洗礼されたUIが作れます。日本語のDocsは随時翻訳されます。<a href="https://t.co/TYhyhGvfHn">https://t.co/TYhyhGvfHn</a><a href="https://twitter.com/hashtag/PowerApps?src=hash&amp;ref_src=twsrc%5Etfw">#PowerApps</a> <a href="https://twitter.com/hashtag/PowerPlatform?src=hash&amp;ref_src=twsrc%5Etfw">#PowerPlatform</a> <a href="https://t.co/03H0QGdtRx">pic.twitter.com/03H0QGdtRx</a></p>&mdash; よしだたいき | 高卒で🇺🇸GAFAMエンジニア (@TaikiYoshidaJP) <a href="https://twitter.com/TaikiYoshidaJP/status/1526453838839853057?ref_src=twsrc%5Etfw">May 17, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

# インポート方法

こちらの[リンク](https://docs.microsoft.com/en-us/power-platform/guidance/creator-kit/overview?branch=power-platform-pr-creator-kit)から最新の Creator Kit をダウンロードすることができます。

<img src="/assets/blogpost/2022/051801.png"/><br/>

ダウンロード後ソリューションのインポートを行います。特段 CoE キットのように環境変数や接続の情報などはありません。

インポートが完了するとソリューションが表示されます。

<img src="/assets/blogpost/2022/051802.png"/><br/>

# ソリューションの詳細

現時点 (2022/5/18) では以下が含まれます。

<img src="/assets/blogpost/2022/051803.png"/><br/>
<img src="/assets/blogpost/2022/051804.png"/><br/>

- リファレンスキャンバス アプリ
  - これはこのキットの使い方を英語で説明しているアプリになります。このキットを使う場合はまずこのアプリを起動しましょう
- テンプレート スターター アプリ (キャンバスとモデル駆動型アプリのカスタム ページ)
  - 上記2つのテンプレートアプリになります。このアプリをコピーして使っていくと事前にコンポーネントのインストール等をせずに綺麗なアプリを作成できます。
- コンポーネントライブラリ
  - カスタムコードを使っていないコンポーネントアプリです
- コードコンポーネント
  - カスタムコートを使ったコンポーネントアプリです
- Fluent design テーマエディター
  - テーマを自在に作成できるアプリになります。ただし、一部に不具合があるため、現時点(2022/05/12)全ての機能を利用できるわけではありません。


# まとめ

今回この公式から出た CreatorKit は非常に便利で、かついままで Power Apps に足りていなかった部分を補っています。まだ足りていないと思う方もいるかもしれませんが、このキットは GitHub のマイルストーンを確認する限り毎月更新がありそうです。そんな方は更新情報を常に確認していくとよさそうです。


# その他の Tips はこちらから

Power Apps
https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- 

Power Automate
https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA

Power Apps で 備品管理アプリを作ろう
https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn

Power Apps Tutorial
https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_

# リンク


- [Creator Kit overview (preview)](https://docs.microsoft.com/en-us/power-platform/guidance/creator-kit/overview?branch=power-platform-pr-creator-kit)
- [powercat-creator-kit](https://github.com/microsoft/powercat-creator-kit)
