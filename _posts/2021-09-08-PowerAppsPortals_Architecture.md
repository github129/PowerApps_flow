---
layout: post
title: "Power Apps Portal のアーキテクチャ"
description: "Power Apps Portals は、コミュニティ、顧客、パートナー、従業員などの外部向けに公開できるウェブサイトを管理・構築できるサービスです"
categories: [Power Apps, Power Apps Portals]
tags: [Power Apps, Power Apps Portals]
image: >-
  https://www.powerplatform.work/assets/img/thumbnail/2021-09-08.png
optimized_image: >-
  https://www.powerplatform.work/assets/img/thumbnail/2021-09-08.png
redirect_from:
  - /2021/09/08/
paginate: true
---

# Power Apps Portals （Power Apps ポータル）とは

Power Apps Portals は、コミュニティ、顧客、パートナー、従業員などの外部向けに公開できるウェブサイトを管理・構築できるサービスです。
Dataverse に保存された情報を外部へ発信したり、一般向けページ（匿名アクセス）と会員向けページ（ログインサイト）を組み合せたサイトも作成できます。

キャンバスアプリやモデル駆動型と同じく、ノーコードでも作成が可能ですが、社内向けアプリと違い、外部へ公開するためにそれなりに見た目や機能をこだわるためには、 HTML、CSS、Liquid, Javascript などの理解が必要となってきます。

# Power Apps Portals のアーキテクチャ

Power Apps Portals を構成する主要な要素として以下の３つが上げられます。


- ソリューション
- メタデータ
- Web アプリ

## ソリューション

Power Platform の環境には、多数の Dataverse ソリューションがインストールされています。 これらのソリューションには、ポータル メタデータを格納および管理するための、モデル駆動型のポータル管理アプリ、エンティティなどが含まれています。これらは Portals をプロビジョニング（利用を開始）すると同時に自動的に環境に対して作成、インストールがされます。

インストールされたソリューションは Power Apps や Power Automate のソリューションタブから確認ができます。（旧 Dynamics 365 Portals なのでその名前のソリューションになっています。）

<a class="post-image" href="/assets/blogpost/2021/2021-09-08-01.png">
<img itemprop="image" src="/assets/blogpost/2021/2021-09-08-01.png" alt="ソリューションの一覧" />
</a>
<br>

## メタデータ

メタデータはDataverse に格納され、ポータル Web サイト、Web ページ、Web テンプレート、コンテンツ スニペット、テーブル フォーム、テーブル リスト、サイト設定、その他の構成データを記述します。 

Power Apps ポータルの機能の特徴の 1 つとして、ポータル Web サイトの実行に必要な情報を保管するために、一元管理された保存先として Dataverse が使用されます。 メタデータやコンテンツなど、ポータルを実行するために必要なものはすべて Dataverse データベースに格納されます。

ソリューションをインストールすると、選択した特定のポータル テンプレートに基づいて、ポータル メタデータ レコードがアップロードされます。

これらはモデル駆動型アプリのポータル管理で管理することができます。

<a class="post-image" href="/assets/blogpost/2021/2021-09-08-02.png">
<img itemprop="image" src="/assets/blogpost/2021/2021-09-08-02.png" alt="メタデータ" />
</a>
<br>

### ポータルテンプレート

Power Apps のみの利用の場合、空のテンプレートしか存在しませんが、 Dynamics 365 が利用できる環境の場合、空のテンプレートに加えて、「コミュニティ」「お客様によるセルフサービス」「パートナー」「従業員によるセルフサービス」「顧客ポータル」が利用可能で、それぞれの特徴を持ったポータルサイトが作られます。

## Web アプリ

Web アプリ（Azure Web Apps）は、ポータル ソリューションとメタデータを使用してポータル サイトを実行するように構成されています。 Web アプリは、Dataverse 環境と同じリージョンに自動的に構成されます。 

<a class="post-image" href="/assets/blogpost/2021/2021-09-08-03.png">
<img itemprop="image" src="/assets/blogpost/2021/2021-09-08-03.png" alt="メタデータ" />
</a>
<br>


# 参考

[Microsoft Dataverse 環境へのポータルの接続性](https://docs.microsoft.com/ja-jp/powerapps/maker/portals/admin/connectivity)

