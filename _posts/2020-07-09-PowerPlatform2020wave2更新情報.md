---
layout: post
title: "Power Platform の 2020 wave2 の更新情報　Power Apps 編"
description: "Power Platform の 2020 wave2 の更新情報 の日本語翻訳となります。"
categories: [Dynamics365]
tags: [Power Platform,最新アップデート情報]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2020/07/09/
---

#  概要

Power Platform の 2020 wave2 の更新情報です。
https://docs.microsoft.com/en-us/power-platform-release-plan/2020wave2/
の機械翻訳になります。
今回は Power Apps の翻訳となります

# 2020年リリースウェーブ2の概要
Microsoft Power Platformは、ユーザーや組織がデータを分析、行動、自動化してビジネスをデジタル化することを可能にします。Microsoft Power Platformは現在、4つの製品で構成されています。Power BI、Power Apps、Power Automate、Power Virtual Agentsの4つの製品で構成されています。また、2つのアドオンがあります。AI BuilderとPower Appsポータルである。

- Power BIは、データ文化を推進する3つの主要分野、すなわち、驚くべきデータ体験、最新のエンタープライズBI、意思決定の場となるインサイトに投資しています。Power BI Desktopには、ユーザーが素早く簡単にコンテンツを作成できるようにするための多くの新機能が含まれており、ユーザーのエンパワーメント、エンタープライズグレードのコンテンツ作成、AIを取り入れたオーサリング体験を可能にしています。Power BI Mobileでは、iPadのスプリットビューのサポートが追加されました。Power BI Service は、Azure Synapse と統合して、大規模な Power BI モデル上でマテリアライズされたビューを自動的に作成して管理するだけでなく、SharePoint リストとの統合を強化して、追加のカスタム レポートを構築できるようになりました。データ保護機能の強化を継続し、お客様がセンシティブなデータを分類してラベル付けできるようにしました。

- Power Apps には、あらゆるスキルレベルの Power Apps 開発者のための大幅な改善が含まれており、Web やモバイルデバイスで作成されるアプリの洗練された操作性が向上しています。作成者は、Microsoft Teams内で直接Power Appsを作成し、Teamsエクスペリエンスを簡単にカスタマイズできるようになります。作成者は、アプリデザイナーを使用してモデル駆動型のアプリにカスタムページを追加することができ、カスタムレイアウトやコンポーネントを含むキャンバスとモデルの機能を最大限に活用できるようになります。

- AI Builderでは、レシートスキャンや翻訳のための新しいAIシナリオが導入され、リモートトレーニングデータに接続するための改善が行われています。AIビルダーのホームページとモデルの詳細ページが更新され、発見性が向上し、Power AppsおよびPower Automateとの統合が可能になりました。
Power Apps portalsは、Power Apps portals StudioのコンポーネントとしてPower Virtual Agentsを追加するとともに、Power Appsのコンポーネントフレームワークを使用して作成されたコードコンポーネントをサポートします。
Power Automateは、自動化されたフローにWinAutomationの最高の機能とクラウドベースのAI Builderとコネクタベースの機能を組み合わせるために提供を更新します。この新バージョンでは、Officeアプリから何十年も更新されていないレガシーな端末アプリまで、あらゆるものを自動化する方法を顧客に提供します。さらに、クラウド上で実行される自動化フローには、より豊富な自動化機能や承認エクスペリエンスなど、さらなる機能強化が予定されています。

- Power Virtual Agentsには、オーサリングエクスペリエンスの機能拡張、Microsoft Teamsとの統合の深化、よりリッチなコンテンツを作成するためのツール、アダプティブカード機能、認証の改善、Power Automateとの統合の改善などが含まれています。

- Microsoft Power Platformは、Power Apps、Power Automate、Common Data Serviceにまたがる幅広いガバナンスと管理機能を提供します。これらの機能は、組織内の管理者やIT担当者が、企業全体でのプラットフォームとそのコンポーネントの使用と採用のセットアップ、セキュリティ保護、管理、ガバナンス、監視を支援するために設計されています。

- データ統合は、Microsoft Power Platformなどとのビルトイン接続性を提供し、何百ものビジネスシステムにまたがるデータとの接続性を提供し、リッチでインテリジェントな体験を可能にします。今回のリリースでは、デュアルライト、データレイクへのエクスポート、Microsoft Power Platformコネクタ、Microsoft Power Platformデータフロー、Microsoft Power Platformゲートウェイ、Power Query Onlineなどの分野で多くの新機能が追加されています。

# Power Apps

このトピックでは、2020 年 10 月から 2021 年 3 月までにリリース予定の機能をリストアップします。このトピックでは、まだリリースされていない可能性のある機能をリストアップしているため、納期が変更されたり、予測される機能がリリースされない場合があります（マイクロソフトのポリシーを参照してください）。

一般的な利用可能性の欄では、その機能は記載されている月内に配信されます。配信日は、その月内の任意の日にすることができます。リリースされた機能には、リリース日を含む完全な日付が表示されます。

このチェックマーク (この機能はリリースされています。) は、パブリック プレビューまたは早期アクセス用にリリースされた機能と、一般的な利用可能性のためにリリースされた機能を示しています。

## Power Apps ポータルの改善
Power Appsポータルは、ローコードメーカーが幅広い外部オーディエンスにエクスペリエンスを展開することを可能にしています。

| 機能 |    有効化    | パブリックプレビュー|早期アクセス|GA|
|:-----------------:|:------------------:|:------------------:|:------------------:|:------------------:|:------------------:|
| [Power Apps Portals StudioのコンポーネントとしてのPower Virtual Agents](https://docs.microsoft.com/ja-jp/power-platform-release-plan/2020wave2/power-apps/power-virtual-agents-as-component-power-apps-portals-studio)|  管理者、メーカー、またはアナリストか自動的| 2020年10月|-|-|
| [Power Appsポータルスタジオを使用したエンティティ権限設定のサポート](https://docs.microsoft.com/ja-jp/power-platform-release-plan/2020wave2/power-apps/support-entity-permission-configuration-using-power-apps-portals-studio)|  管理者、メーカー、またはアナリストか自動的| 2020年10月|-|-|
| [Power AppsポータルでのPCFサポート](https://docs.microsoft.com/ja-jp/power-platform-release-plan/2020wave2/power-apps/power-apps-component-framework-control-support-power-apps-portals)|  管理者、メーカー、またはアナリストか自動的| 2020年12月|-|-|
| [Power AppsのポータルのWeb API](https://docs.microsoft.com/ja-jp/power-platform-release-plan/2020wave2/power-apps/power-apps-portals-web-api-generally)| 管理者、メーカー、またはアナリストか自動的|-| -|2021年2月|
	

# 統一されたプラットフォーム上の洗練されたアプリ

| 機能 |    有効化    | パブリックプレビュー|早期アクセス|GA|
|:-----------------:|:------------------:|:------------------:|:------------------:|:------------------:|
| [ビジネスQ&AとCommon Data Serviceの関連性検索との連携](https://docs.microsoft.com/ja-jp/power-platform-release-plan/2020wave2/power-apps/business-qa-integration-common-data-service-relevance-search)| エンドユーザー、自動的に| -|2020年10月|-|
| [コンポーネントを使ってアプリ内のビジネスロジックを整理する](https://docs.microsoft.com/ja-jp/power-platform-release-plan/2020wave2/power-apps/business-qa-integration-common-data-service-relevance-search)| 管理者、メーカー、またはアナリストか自動的|2020年10月| -|-|
| [メーカーはモデル駆動型アプリデザイナーでカスタムページを追加できる](https://docs.microsoft.com/ja-jp/power-platform-release-plan/2020wave2/power-apps/makers-add-custom-page-model-driven-app-designer)| 管理者、メーカー、またはアナリスト、エンドユーザー|2020年12月| -|-|
| [最新のモデル駆動型アプリデザイナーをプレビューし、サイトマップを有効にすると、生産性が向上します](https://docs.microsoft.com/ja-jp/power-platform-release-plan/2020wave2/power-apps/preview-modern-model-driven-app-designer-sitemap-enable-more-productive)| 管理者、メーカー、またはアナリストか自動的|2020年12月| -|-|
| [モバイルアプリでメールを操作する機能](https://docs.microsoft.com/ja-jp/power-platform-release-plan/2020wave2/power-apps/ability-interact-emails-mobile-app)| エンドユーザー、自動的に|-| 2020年8月|2020年10月|
| [Unified Interfaceの主要なチャートのカスタマイズのギャップに対処](https://docs.microsoft.com/ja-jp/power-platform-release-plan/2020wave2/power-apps/address-key-chart-customization-gaps-unified-interface)| エンドユーザー、自動的に|-| 2020年8月|2020年10月|
| [モバイルエンドユーザーのサブグリッドとフォームタブのUX改善](https://docs.microsoft.com/ja-jp/power-platform-release-plan/2020wave2/power-apps/ux-improvements-sub-grids-form-tabs-mobile)| エンドユーザー、自動的に|-| 2020年8月|2020年10月|
| [モデル駆動型アプリのグローバル検索体験を新たに向上](https://docs.microsoft.com/ja-jp/power-platform-release-plan/2020wave2/power-apps/ux-improvements-sub-grids-form-tabs-mobile)| 管理者、メーカー、アナリスト エンドユーザー|-| -|2020年10月|
| [モデル駆動型アプリのヘッダー、サイトマップ、アプリの切り替えを改善](https://docs.microsoft.com/ja-jp/power-platform-release-plan/2020wave2/power-apps/improved-model-driven-app-header-sitemap-app-switching)| エンドユーザー、自動的に|-| 2020年8月|2020年10月|
| [Power BIレポートまたはダッシュボードをモデル駆動型のアプリシステムのダッシュボードにすることが可能](https://docs.microsoft.com/ja-jp/power-platform-release-plan/2020wave2/power-apps/enable-power-bi-report-or-dashboard-be-model-driven-app-system-dashboard)| 管理者、メーカー、アナリスト エンドユーザー|2020年7月| - |2020年11月|
| [Power BIレポートまたはダッシュボードをモデル駆動型のアプリシステムのダッシュボードにすることが可能](https://docs.microsoft.com/ja-jp/power-platform-release-plan/2020wave2/power-apps/enable-power-bi-report-or-dashboard-be-model-driven-app-system-dashboard)| 管理者、メーカー、アナリスト エンドユーザー|2020年7月| - |2020年11月|
| [Unified Interfaceへの以降](https://docs.microsoft.com/ja-jp/power-platform-release-plan/2020wave2/power-apps/transition-unified-interface)|エンドユーザー、自動的に|- |2020年8月| 2020年12月|
| [キャンバスアプリ用のPCF](https://docs.microsoft.com/ja-jp/power-platform-release-plan/2020wave2/power-apps/power-apps-component-framework-canvas-apps)| 管理者、メーカー、アナリスト エンドユーザー|2020年2月26日| - |2021年3月|



> 2020年8月3日の早期アクセスの一環として、エンドユーザーに影響を与えるすべての強制的な変更を含め、一部の機能をオプトインすることができます。アーリーアクセスの詳細については、[こちら](https://docs.microsoft.com/ja-jp/dynamics365/get-started/release-schedule)をご覧ください。

### 列の値に対して有効にするの説明

- エンドユーザー、自動的に・・・これらの機能には、エンドユーザーのユーザーエクスペリエンスへの変更が含まれており、自動的に有効になります。

- 管理者、メーカー、またはアナリスト、自動的・・・これらの機能は、管理者、メーカー、またはビジネス アナリストが使用することを意図しており、自動的に有効になります。

- 管理者、メーカー、またはアナリストによるエンド ユーザー・・・これらの機能をエンド ユーザーが利用できるようにするには、管理者、メーカー、またはビジネス アナリストが有効にするか、設定する必要があります。



# 参考
[公式ドキュメント](https://docs.microsoft.com/en-us/power-platform-release-plan/2020wave2/)
