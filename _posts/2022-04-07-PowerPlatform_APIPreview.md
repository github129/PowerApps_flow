---
layout: post
title: "Power Platform API がプレビュー公開されました"
description: "2022年3月31日よりMicrosoft Power Platform APIのパブリックプレビューを導入しています"
categories: [PowerPlatform]
tags: [PowerPlatform]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/040702.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/040702.png
redirect_from:
  - /2022/04/07/
---

#  概要

本記事は [Introducing Microsoft Power Platform API (preview)](https://powerapps.microsoft.com/ja-jp/blog/introducing-microsoft-power-platform-api-preview/) を日本語訳したものになります。

# 内容

年々、Microsoft Power Platform の機能は飛躍的に向上しています。大規模にテナントを管理しようとする管理者にとって、これは従来、Power Automate の Power Apps Administration PowerShell モジュールや Power Platform for Admins 管理コネクタなどのツールを検討することを意味していました。
管理者や API 愛好家のコミュニティは、これらのツールを動かす REST API の完全なドキュメンテーションを求めていますが、Power platform 内の各製品領域には、異なる認証メカニズムを持つ独自の API があり、公開されているのはそのごく一部に過ぎません。
このドキュメントのギャップを解消し、最終的には PowerShell モジュールとConnectorの自動更新をサポートするために、2022年3月31日よりMicrosoft Power Platform APIのパブリックプレビューを導入しています。


Power Platform API は、プラットフォームの各機能領域の内部API を調和させるゲートウェイまたは単一のAPI サーフェスとして機能します。これにより、お客様が使用できる単一のエンドポイント (例: api.powerplatform.com) と、Azure Active Directory から要求できるアクセス許可とクレームの統合セットが作成されます。
また、この新しいゲートウェイでは、新しい技術リファレンスドキュメントが自動的に更新されるため、常に最新の機能に更新されます。これは[次の場所](https://docs.microsoft.com/en-us/rest/api/power-platform/)にあります。

各機能領域は、名前空間と呼ばれるグループにきちんと収集されます。各名前空間には、指定した環境で azure の従量課金機能を有効にするために使用できる Licensing 名前空間の Billing Policies などを管理するリソースが含まれています。
テクニカル リファレンスに加えて、Azure Logic Apps で REST API を直接使用する方法を示す、AppSource からのアプリケーションのインストールに関する[ステップバイステップのチュートリアル](https://docs.microsoft.com/en-us/power-platform/admin/programmability-tutorial-install-application-environment?tabs=Azure)も用意されています。


<img src="/assets/blogpost/2022/040702.png"/><br/>

このチュートリアルでは、Power Platform CLI で同じ操作を行うための簡単なコマンドも示します。これは、2 月の [Power Platform CLI の最新情報](https://powerapps.microsoft.com/en-us/blog/general-availability-of-power-platform-tools-for-visual-studio-code-and-february-refresh-for-power-platform-cli/)で説明した Power Platform API を利用する、管理者が利用できるツールの優れた例です。

<img src="/assets/blogpost/2022/040703.png"/><br/>

今後は、リリースプランにさらに名前空間を追加して、[リリースプラン](https://docs.microsoft.com/en-us/power-platform-release-plan/2022wave1/power-platform-governance-administration/)の到着を予測できるようにします。機能のパリティ(? 同等? 同格?)が広がったら、このゲートウェイの自動化を使用して、PowerShell と Connector の新しいバージョンを生成し、Power Platform APIの機能を常に最新の状態にすることを検討します。




# リンク


- [Introducing Microsoft Power Platform API (preview)](https://powerapps.microsoft.com/ja-jp/blog/introducing-microsoft-power-platform-api-preview/)




