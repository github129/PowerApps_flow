---
layout: post
title: "Power Pages とは"
description: "Power Pagesは、エンタープライズグレードのローコードSaaS（ソフトウェア・アズ・ア・サービス）プラットフォームで、豊富な外部ビジネスWebサイトの作成、ホスティング、および管理を可能にします"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/noimage_pages.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage_pages.png
redirect_from:
  - /2023/02/28
---

# 概要

本記事は Power Pages Architecture Whitepaper (Power Pages ホワイト ペーパー) を日本語訳した記事になります。

#  What is Power Pages( Power Pages とは)

Power Pagesは、エンタープライズグレードのローコードSaaS（ソフトウェア・アズ・ア・サービス）プラットフォームで、豊富な外部ビジネスWebサイトの作成、ホスティング、および管理を可能にします。

このプラットフォームは、市民開発者や専門の開発者が、組織や政府のユーザーが利用するために、独自の外部向けビジネスWebアプリケーションを簡単かつ迅速に作成およびローンチできるように支援します。

Power Pagesは、管理者、Webサイト作成者、およびWebサイトの訪問者に対して強化されたコントロール、保護、およびセキュリティを提供します。

これにより、メーカーはビジネスデータとプロセスを安全に外部ユーザーに拡張でき、コンプライアンスを確保することができます。

プラットフォームとして、グローバル、地域、政府、および業界固有のコンプライアンス基準にわたる包括的なコンプライアンスカバレッジを提供することで、最も信頼されるローコードアプリケーションプラットフォームの1つとなっています。

Webサイトユーザーがやり取りするビジネスデータは、Microsoft Dataverseに安全に保存されます。Power Pagesは、Power Apps、Power Automate、Power Virtual Agents、Power BI、およびMicrosoft SharePointなどの製品や機能と密接に統合されています。

# Why Power Pages? (どうして Power Pages なのか)

世界中の組織や政府は、前例のない速さでDXを進めています。デジタルテクノロジーの急速な採用により、リモートワークの急増、オンラインアプリケーションやサービスへの顧客の需要増加、業務プロセス、政府、市民サービスにおける先進技術の使用が大幅に増加しました。これらはすべて、クラウドによって支えられています。

ローコードアプリケーション開発と急速なエンタープライズ展開、セキュリティと保護を両立させることは可能です。Power Pagesは、マイクロソフトのローコードおよびプロ開発者向けアプリケーションプラットフォームであり、迅速なエンタープライズ規模の展開とスケーリング機能、包括的なセキュリティ、コンプライアンス、保護、ガバナンス、ビジネスデータの外部ユーザーへの認可されたアクセスを提供します。

Power Pagesは、マイクロソフトのPower Platformの一部です。Microsoft Azure上に構築され、Azureと同じセキュリティスタックを活用しており、世界で最も機密性の高いデータを保護し、Microsoft 365の最も高度な情報保護とコンプライアンスツールと統合しています。
また、ビジネスアプリケーション、プロセス、およびデータに業界をリードするセキュリティ、弾力性、および保護を提供します。現在、多くの国家安全保障機関、コミュニティサービス、金融機関、および医療提供者が、自分たちの最も機密性の高い情報をPower Pagesに委ねています。

ここでは、Power Pagesプラットフォームの機能とアーキテクチャについて説明し、プラットフォームが高い信頼性、パフォーマンス、可用性を提供するよう設計されている方法を説明します。また、内部および外部のユーザーがPower Pagesに認証する方法、これらのユーザーがDataverseに保存されたデータに接続する方法、およびPower Pagesが様々なユーザーに安全なアクセスを可能にする方法について説明します。

Power Pagesサービスは、商用ライセンス条項（microsoft.com）およびMicrosoft Enterpriseプライバシー声明によって規制されています。データの場所については、Microsoftプライバシーおよびセキュリティ条項のデータの場所セクションとデータ保護付加条項を参照してください。

コンプライアンス情報については、Microsoft Trust CenterがPower Pagesの主要なリソースです。Power Pagesチームは、最新のイノベーションと生産性を顧客に提供するために努力しています。Microsoftのコンプライアンス提供について詳しくは、Microsoftのコンプライアンス提供をご覧ください。

Power Pagesサービスは、セキュリティ開発ライフサイクル（SDL）に従っています。SDLは、ソフトウェアの脆弱性の数と深刻度を減らし、開発コストを削減することによって、開発者がより安全なソフトウェアを構築するのを支援する厳格なセキュリティプラクティスです。Microsoftセキュリティ開発ライフサイクルプラクティスで詳しく確認できます。

# Power Pages Platform Capabilities (Power Pages プラットフォームの機能)

Power Pages Platform の主な機能は、エンタープライズグレードのコアプラットフォームレイヤーと、Webサイト作成用のアセットレイヤーの2つのレイヤーで表すことができます。 

## レイヤー 1: エンタープライズグレードのコアプラットフォーム

Dataverse を使用してビジネスデータを安全に収集、保存、共有します。さまざまな認証モデルにより、外部ユーザーのログイン体験を可能にし、堅牢な承認によりユーザーがビジネスデータやWebサイトページへのアクセスを管理します。プラットフォームは高いレベルのセキュリティとコンプライアンスを実現し、サイト管理やガバナンスによりメーカーに制御権を提供します。最後に、プラットフォームは自動的にWebサイトをモバイル、デスクトップ、タブレットなどのさまざまなフォームファクターに応じてレスポンシブレンダリングします。

## レイヤー 2: Webサイト作成用のアセットレイヤー

クリックアンドドラッグインターフェイスを使用して豊富なビジネスWebサイトを構築するWebサイトメーカー体験が含まれます。

プロ開発者は、カスタムテーマや Visual Studio/VS Code の統合を通じて、これらのアプリをカスタマイズしたり、洗練されたWebサイトのインタラクションを作成したりできます。これらのプロ開発者向けの機能により、作成者は GitHub や Visual Studio Code にサイト構成をチェックインしたり、Azure Dev Ops や GitHub Automation を利用して継続的な統合や展開を行ったりできます。Out of the Box (OOB) の高価値ソリューションテンプレートにより、作成者はモダンで洗練されたビジネスWebサイトの作成を迅速に開始できます。拡張可能なデータモデルにより、作成者は自分たちが収集・共有するビジネスデータを記述できます。さらに、作成者は Power BI、Power Automate、Power Virtual Agents を使用して、Power Pages 上でダッシュボードやレポート、ワークフロー自動化やボット体験を実現できます。

# Power Pages の Architecture

ホスティングプラットフォームとしての Azure は、Power Pages がエラスティックスケーリング、高可用性、プラットフォームレイヤーのセキュリティ、自動インフラストラクチャおよびオペレーティングシステムのセキュリティパッチ適用とアップグレード、高度な脅威対策などの機能を活用できるようにします。

Power Pages は世界中の多くのデータセンターで利用できます。各 Power Pages サイトは、Webサイトへの悪意のあるリクエストを監視、フィルタリング、ブロックする WAF を設定できます。WAF は、HTTP トラフィックに対して一連のセキュリティルールを適用することでセキュリティを強化し、SQL インジェクションやクロスサイトスクリプティング (XSS)、ファイルインクルージョンや不適切なシステム構成などの一般的な攻撃からアプリケーションを保護します。

# Power Pages の Data storage

Power Pages は、メタデータやビジネスデータのストアとして Microsoft Dataverse を活用しています。各サイトは Dataverse 環境に接続されています。Dataverse は、ビジネスアプリケーションで使用されるデータを安全に保存・管理します。Dataverse には、典型的なシナリオをカバーする標準テーブルのコアセットが含まれており、さまざまなビジネスユースケースをサポートするカスタムテーブルの作成も可能です。このデータは、転送中および保存中に暗号化されます。

# Power Pages の 事業継続・災害復旧 (BCDR)

特定の地域に関するドキュメントで特に記載されていない限り、各 Power Pages サイトは、2 つの異なるアプリケーションサーバー（プライマリおよびセカンダリ）にデプロイされます。

これらのアプリケーションサーバーは、ビジネス継続性と災害復旧をサポートするために、同じ地域内の 2 つの異なる Azure リージョンに配置されています。Azure リージョンは、ビジネスクリティカルなワークロードの信頼性と回復力を実現するように設計されています。各 Azure リージョンは、レイテンシー定義済みの境界内にデプロイされたデータセンターで構成されています。これらは専用の地域内低レイテンシーネットワークで接続されています。この設計により、任意のリージョン内の Azure サービスは最高のパフォーマンスとセキュリティを提供します。

# Power Pages の 耐障害性(fault tolerance)

耐障害性とは、アプリケーションが自身のコンポーネントの一つ以上が故障しても、中断されることなく動作を続ける能力のことです。

よく設計された耐障害性の高いシステムは、単一障害点から発生する中断を防ぎ、ミッションクリティカルなアプリケーションの高可用性とビジネス継続性を確保します。 耐障害性を考慮した設計、単一障害点の除去、地域全体やグローバルな停電のリスクの軽減は、アプリケーションの回復力と信頼性にとって重要です。

Power Pages は高い回復力を持ち、ほとんどのソフトウェアやインフラストラクチャの障害に対して耐性があります。各 Power Pages サイトは Azure 上でサンドボックス化された環境でホストされ、完全に分離されており、[ノイジー・ネイバー問題](https://www.climb.co.jp/blog_vmware/setup-7715)に影響されません。

Azure 上でホストされている各サイトは、メタデータ（権限、パーミッション、Webサイトレイアウト（Webページ、Webテンプレート、コンテンツスニペット、ヘッダー、フッターなど）やデータ（カスタムテーブルなど）によって定義される一つのWebサイトを固有に表します。Webサイトメタデータとデータは Dataverse に格納されており、ビジネスデータに対する分離、レプリケーション、耐障害性が可能になります。

各サイトのバックエンドアプリケーションサーバーは，冗長化のために複数インスタンスで拡張するように構成することができます。これらのマルチインスタンス展開では，インフラストラクチャレベルで分離と耐障害性が提供されます。

 Power Pagesの各サイトは、独立して展開、管理、実行、運用が可能です。このシェアードナッシング アーキテクチャと地理的な冗長性により、Power Pages がソフトウェア、ハードウェア、またはインフラストラクチャの故障に無関係であることを保証されています。

# Power Pages の高可用性 (High availability)

ドキュメントで特に記載されていない限り、各サイトのデプロイメントは、高可用性のために同じ地域内のデータセンターペアでセットアップされています。

トラフィックマネージャーがプライマリサーバーがダウンしていることを検出した場合、Webトラフィックはセカンダリアプリケーションサーバーにフェイルオーバーします。この設計により、Azureデータセンターの一つが完全にダウンした場合や、ネットワーク可用性が中断された場合などのシナリオでも、アプリケーションの可用性が途切れることなく確保されます。

# Power Pages の ルーティング（Traffic routing）

Webサイトのトラフィックは、トラフィックマネージャーによって決定された優先ルーティングに基づいて、各サイトのプライマリアプリケーションサーバーにルーティングされます。トラフィックマネージャーは定期的にヘルスチェックを行い、プライマリアプリケーションサーバーが正常でない場合や到達できない場合に、自動的にトラフィックをセカンダリアプリケーションサーバーに切り替えるタイミングを判断します。

# Power Pages の 可用性と信頼性 (Availability and reliability)

Power Pagesは、Webサイトのリクエストに高い信頼性を提供します。

このプラットフォームは、匿名ユーザーと認証済みユーザーの両方を対象とした数十億のリクエストを処理し、独立した認証、ストレージ、コンプライアンス要件を持つソフトウェアやサービスの国内ホスティングを提供する主権クラウドを含む複数のデータセンターでホストされています。

高度な弾力的スケーリング機能により、各ポータルバックエンドサーバーは動的なワークロードに合わせて自動的に垂直または水平にスケールすることができ、バーストトラフィックパターンに対応するためのスケーリング調整能力も備えています。

Power Pages上のこのスケーリングは、各サイトに割り当てられたライセンス容量に基づいて決定されます。高度なスケーリング能力により、このプラットフォームは市民、政府、国家、組織向けのインターネット規模のワークロードを実行することができます。

例えば、Power Pagesの一部のサイトでは、95パーセンタイル性能が1秒未満で18,000リクエスト/秒を受け付けたことがあります。

# Hyper Scale

予測不可能なバーストや変動する負荷パターンに対処するには、従来のオートスケーリングルールでは不十分です。このようなパターンでは、フラッシュセールやマーケティングイベント、チケット登録やワクチン登録などのシナリオで、トラフィックが瞬時に数百万人の同時ユーザーに急増します。

次のグラフは、Power Pagesサイトのリクエスト量を時間とともにプロットしたものです。トラフィックが5分以内に2000倍に急増することを示す急勾配な曲線に注目してください。

<img src="/assets/blogpost/2023/022801.jpg"/><br/>

 Power Pagesは高いスケーラビリティと市民規模のデプロイメントをサポートするための能力を備えています。Power PagesはAzure CDN（Azure Content Delivery Network）とのターンキーインテグレーションを提供し、エッジキャッシングを利用してハイパースケールとエンドユーザー体験のパフォーマンス向上を実現します。

# Dataverse の の統合と認証

各Power Pagesサイトは、Microsoft Dataverseとの間でセキュアな接続を使用します。各サイトのアイデンティティは、テナント内のAzure Active Directoryアプリケーションとして一意に表されます。このテナント内にホストされたAzure Active Directoryアプリケーションにより、Power Pagesは高度なAzure Identityセキュリティ機能を利用できます。

# Power Pagesでの認証

認証は、Power Pages上のユーザーのアイデンティティを検証します。Power Pagesを使用する組織は、さまざまな認証プロバイダーから選択したり、匿名ユーザーによる安全なアクセスをPower Pagesサイトに許可したりすることができます。

Power Pagesの認証フレームワークは、Microsoft Identity Platformに基づいており、これはidentity-as-a-serviceを提供し、OpenID Connect (OIDC)、SAML 2.0、WS-FedおよびOAuth 2.0という業界標準のプロトコルでそれぞれ認証と承認を実装します。

MicrosoftのAzure ADとAzure AD B2C Identitiesは、Conditional Accessという高度な機能を提供します。これはセキュリティ境界を組織の境界を越えて拡張し、組織がアクセス制御の判断の一部としてアイデンティティ駆動型のシグナルを使用できるようにします。Azure ADとAzure AD B2Cアイデンティティプロバイダーは、多要素認証やパスワードレス認証などの追加機能もPower Pagesで構成できます。


## 1.Auth 2.0 を介した ID

OAuth 2.0 プロトコル標準は、Webサイトやアプリケーションがユーザーに代わって他のWebアプリにホストされたリソースにアクセスできるようにします。Power Pages では、OAuth 2.0 を使用して外部 ID で認証することができます。これには、Microsoft、Twitter、Facebook、Google、LinkedIn などが含まれます。

## 2.独自の ID プロバイダーを持ち込む

Power Pages は、業界標準のエンタープライズ認証プロバイダーと連携するように設定することができます。これには、Open ID Connect、WS-Federation、SAML 2.0 プロトコルを使用して Azure AD、Azure AD B2C、Okta、Auth0 などが含まれます。

### Open ID Connect

Open ID はオープンな標準で分散型の認証プロトコルです。ID プロバイダー (IdP) はこれを使用してユーザーが IdP (Identity Provider) にサインインし、その後他のWebサイトやアプリにログインしたりサインイン情報を共有したりせずにアクセスできるようにします。ユーザーがサインインするとき、ID プロバイダーはテナント詳細やメールアドレスなど一部のユーザー情報を含むクレームを提供します。これらのクレームは ID プロバイダーで設定可能です。これらのクレームを使用すると、Power Pages 上のコンタクトレコードにユーザーをマッピングしてさまざまなシナリオをサポートできます。Azure Active Directory や Azure Active Directory B2C など人気のあるプロバイダーは Power Pages 上で Open ID Connect を使用して設定することができます。 

### WS-Federation and SAML 2.0

オンプレミス Active Directory や ADFS や Okta などの他の ID サービスと連携するために使用されます。 Power Pages サービスへのユーザー認証は、ユーザーのブラウザと Power Pages サービスまたは Power Pages が使用する Azure サービス間で一連の要求・応答・リダイレクトから構成されます。このドキュメントでは Power Pages で使用できるさまざまな認証プロバイダーについて説明します。

# Authorization(認可)

認可は、Power Pages でWebサイトのユーザー (匿名または認証済み) がアクセスできるリソース (Webサイトページ、ビジネスデータ) を決定します。Power Pages は、ビジネスデータやWebサイトコンテンツが保護されていることを確実にするために堅牢なセキュリティモデルを実装しています。

このセキュリティモデルは、ロールベースのアクセス制御メカニズムに基づいて実装されており、Web ロールはユーザーをグループ化する方法を提供し、テーブル権限とページ権限はビジネスデータとWebサイトコンテンツへのアクセスを制御・保護します。次の節では、これらの3つの要素について定義します。

<img src="/assets/blogpost/2023/022802.jpg"/><br/>

## Webロール

Webロールとは、ユーザーがサイト上で特別な操作を行ったり、保護されたコンテンツやデータにアクセスしたりできるように作成することができるものです。Webロールは、ユーザー、テーブル権限、ページ権限と関連付けられます。コンタクトに複数のWebロールを割り当てることができるので、サイトのリソースへの累積的なアクセスを提供することができます。認証済みユーザー（コンタクト）は自動的に Authenticated Users Webロールに割り当てられます。サイトは匿名ユーザー（未認証）によって訪問され、Anonymous Users Webロールを通じてアセットへのアクセスを与えることができます。Authenticated と Anonymous Webロールは Power Pages にデフォルトで存在します。メーカーはカスタムなユースケースのためにWebロールを作成し、テーブル権限やページ権限に関連付けて細かいアクセス制御を実装することができます。


## テーブルのアクセス許可

テーブル権限は、リスト、フォーム、または Liquid や Web API を介してWebサイトページでアクセスされるビジネスデータに対するアクセスを保護することで、パワーページでのセキュリティを適用します。テーブルのアクセス許可では、メーカーが Dataverse テーブルに格納されたレコードへのアクセスレベルや特権を異なるレベルで設定できます。

テーブル列に対して細かい制御が必要な場合は、列レベルの権限を適用できます。テーブルのアクセス許可はWebロールに関連付けられており、Webサイトユーザーに適切なビジネスデータへのアクセスを提供します。

## Power Pages でのページのアクセス許可

コンテンツやその他のコンポーネントを含む個々のWebサイトページも、ページのアクセス許可を設定して保護することができます。ページのアクセス許可はWebロールに関連付けられており、アクセスを許可します。

# Security

Power Pagesは、Microsoftと[Power Platformのセキュリティスタック](https://learn.microsoft.com/ja-jp/power-platform/admin/security/overview)のベストを利用して、OWASP Top 10セキュリティリスクを含むさまざまなセキュリティ脅威からの多層的な保護を提供する多層防御(Defense-in-Depth)を提供します。

この多層的なセキュリティスタックは、Power Pagesアプリケーションの全体的なセキュリティを向上させることで、セキュリティ侵害の確率を低減します。セキュリティは共同責任です。Power Pagesプラットフォームは、メーカーや管理者に、自分たちのサイトやデータに対するセキュリティやガバナンスを強化するために必要なコントロールを提供します。[Power Pages Securityホワイトペーパー](https://learn.microsoft.com/ja-jp/power-pages/guidance/white-papers/security)では、Power Pagesがデフォルトでエンタープライズグレードのセキュリティを提供する方法や、メーカーや管理者が自分たちのユーザーやデータに対するセキュリティをさらに強化するために活用できるツールや機能について説明しています。

# Compliance

Power Pagesは、グローバル、地域、政府、業界別のコンプライアンス基準に対して包括的なコンプライアンス対応を提供します。個人のデータの収集や利用に関する国家、地域、業界別の要件に準拠するために、Microsoftは包括的なコンプライアンスオファリング（認証や検証を含む）を提供しています。

Power Platform の管理者は、組織のコンプライアンス活動を支援するためのツールを利用することができます。これには、データ保護、データロケーション、グローバルデータ保護規則 (GDPR)、および欧州連合データ境界規則への準拠を管理するためのリソースが含まれますが、これらに限定されるものではありません。


# リンク


- [Power Pages ホワイト ペーパー](https://learn.microsoft.com/ja-jp/power-pages/guidance/white-papers/)
