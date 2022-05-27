---
layout: post
title: "Build 2022 で紹介された Power Platform に関する更新情報まとめ"
description: "Power Platform に５つ目のサービス Power Pages が登場!"
categories: [PowerPlatform,MSBuild]
tags: [PowerPlatform,MSBuild]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2022/05/27/
---


#  概要

2022/5/24 ~ 26日(米国太平洋標準時)に開催された Microsoft Build 2022ですが、多くのアップデート情報が紹介されました。

その中でも Power Platform はどういった紹介があったのかをご紹介します。

# ５つ目の Power Platform のサービス

Power Platfom の新たなファミリーとして **Power Pages** が紹介されました。
これはノーコードで外部向けのポータルサイトや従業員向けサイト、スケジュール調整サイトやイベント登録サイトなどが構築できます。はい、どこかで聞いたことがあると思った方は勘がいいです。これは **Power Apps Portals** と呼ばれていた製品の進化版になります。

そのため、基本的な部分というのは Power Apps ポータル上で構築されており、ここに新しいノーコード/ローコード機能とエクスペリエンスを組み合わせて、よりモダンで安全なWebサイトが構築できるようになっています。

このサービスに関しては別途記事を書こうと思います。

# Power Apps

## express design (エクスプレスデザイン)

この機能は PDF、画像、Figma や API から AI を使って Power Apps アプリを構築できるというものになります。

今までであれば Power Apps は「Excelから簡単にアプリが作れる」といった紹介だったと思います。それが今後は、ラフな画面イメージやデザインが得意な方が作った Figma からアプリが作れるという紹介もできるようになりますね。

# Power Virtual Agents

## Power Virtual Agents 2.0

ローコードとプロコードのボット開発を1つの統一されたキャンバスに持ち込むことで、融合チームを次のレベルへと導きます。Power Virtual Agentの進化は、Azure Bot Framework Composerのプロコード機能の洗練さとPower Virtual Agentのローコードプラットフォームのシンプルさを一体化した、新しいインテリジェントなボットオーサリング体験から始まり、プロの開発者と主題専門家が1つのMicrosoft Bot Building Studioで共同開発を行うことがさらに容易になりました。これは、テクノロジープレビューで利用可能です。

Power Virtual Agents では、グラフィックとコードをシームレスに切り替える機能、ボットが画像、ビデオ、アダプティブカード、クイックリプライで応答できるリッチマルチメディア応答などが追加されました。

# Power BI

## データマート

データマート機能が新たに追加されました。
Power BI の Datamart はセルフサービス機能であり、さまざまなデータソースからデータを取り込むためのシンプルで摩擦のない体験を提供します。Power Queryでデータを抽出、変換、ロード（ETL）し、レポートを作成するための自己調整されたデータセットを自動生成します。


<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">手元のpbixからデータマートのSQLエンドポイントにつないでやってみたけどやっぱりパフォーマンスすごいのでデータマートのバックエンドがかなり賢いことがわかる。左：自動生成されたデータセット<br>右：SQLにつないで作成したデータセット（DQ） <a href="https://t.co/2HDHPBmZuk">pic.twitter.com/2HDHPBmZuk</a></p>&mdash; Ryoma Nagata (@ryomaru0825) <a href="https://twitter.com/ryomaru0825/status/1529676795368177664?ref_src=twsrc%5Etfw">May 26, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

ビジネス インテリジェンス ユーザー、データ サイエンティスト、データ エンジニア、その他のデータ分析の専門家など、datamart の作成者は、datamart にリレーションシップやポリシーを定義することも可能です。これらの関係やポリシーは、Power BI のレポートやダッシュボードを作成する際に活用することができます。また、使い慣れた T-SQL ツールを使用して、datamart にクエリを発行し、さらに分析を進めることも可能です。


# Power Automate および Power Automate for Desktop

## 従量課金プランと組み込み用ソフトウェア開発キット(SDK)

顧客や独立系ソフトウェアベンダー（ISV）がサードパーティアプリケーションに Power Automate を組み込み、使用した分だけを支払うという柔軟な方法を提供されます。（７月ごろの予定） 個人的にはまだ使い道がよくわかっていない機能です。


## ホストされたロボティックプロセスオートメーション（RPA）ボットによる自動スケール

Power Automateで利用できるようになったホスト型RPAボットのプレビューにより、クラウドによる自動化の次のステップを踏み出しました。RPAのための真のSaaSとして、無人RPAボットを作成し、Azureが提供するホストされた仮想マシン（VM）に自動的に拡張することができるようになりました。Power Automateのホスト型RPAボットでは、基本的なパラメータを設定してボットのグループを作成するだけで、無人RPAシナリオのために仮想マシンを自動的に拡張することができ、Azureのサブスクリプションは必要ありません。


# Power Apps


Microsoft Docs から提供されているこちらの記事が非常にためになります。

[RESTful Web API の設計](https://docs.microsoft.com/ja-jp/azure/architecture/best-practices/api-design)

それぞれのメソッド（GET や POSTなど）の解説はもちろんのこと、RESTの歴史まで解説してくれています。

Power Platform を触っていると、外部サービスへのアクセスをすることはよくありますが、こういった API の仕組みを知っていると、非常に理解がしやすくなるので、ぜひ１度読んでみてください。


# リンク


- [Power Platform redefines low-code with new products and features at Microsoft Build ](https://cloudblogs.microsoft.com/powerplatform/2022/05/24/power-platform-redefines-low-code-with-new-products-and-features-at-microsoft-build/)


# その他の Tips はこちらから

Power Apps
https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- 

Power Automate
https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA

Power Apps で 備品管理アプリを作ろう
https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn

Power Apps Tutorial
https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_