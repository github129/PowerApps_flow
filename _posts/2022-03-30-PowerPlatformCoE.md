---
layout: post
title: "Power Platform CoE スターターキット について"
description: "Microsoft Power Platform CoE スターター キットは、コンポーネントとツールのコレクションで、Power Apps および Power Automate に焦点をあて、Microsoft Power Platform の採用とサポートの戦略開発を始めるのに役立つように設計されています"
categories: [PowerPlatform, CoE]
tags: [PowerPlatform, CoE]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2022/03/30/
---

#  概要

Microsoft Power Platform CoE スターター キットは、コンポーネントとツールのコレクションで、Power Apps および Power Automate に焦点をあて、Microsoft Power Platform の採用とサポートの戦略開発を始めるのに役立つように設計されたツール群です。

スターターキット はあくまでツール（手段）のため、CoE(center of excellence) 全体を包括しているわけではありません。CoE の最終目標を達成するにはツールだけではなく、コミュニケーションやプロセス、人、要件といったものを各部署等のニーズに合わせて慎重に設計する必要があります。

# 内容

最新のスターターキットは以下になります。

[coe-starter-kit](https://github.com/microsoft/coe-starter-kit)

スターターキットに問題があった場合の報告先

[報告先](https://aka.ms/coe-starter-kit-issues)

最新のスターターキットのダウンロードURL
[ダウンロード](https://aka.ms/CoEStarterKitDownload)



## DLPの制限事項

スターターキットを利用するためには最低限以下のコネクタがDLPポリシーでビジネスに設定する必要があります。

- 承認
- HTTP
- Azure AD での HTTP
- Microsoft Dataverse
- Microsoft Dataverse (レガシ)
- Microsoft Teams
- Office 365 グループ
- Office 365 Outlook
- Office 365 ユーザー
- Power Apps for Admins
- 作成者向け Power Apps
- 管理者用 Power Automate
- Power Automate 管理
- Power Platform for Admins
- RSS
- SharePoint

## インストールする環境

運用環境 または Dataverse for Teams の環境が必要です。
それぞれ必要に応じたライセンスが必要になります。また、それぞれのデータソースには制限もありますのでそれも併せて選択してください。

[スターターキットの環境について](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/setup#prepare-your-environment)

## キットに含まれているツール

2022/03/30 時点で CoE スターターキットに含まれているツールは以下の通りです。

<img src="/assets/blogpost/2022/033001.png"/><br/>


### ALMAcceleratorForMakers

Power Platform で ALM を達成するためのツールで主に作成者や開発者側が使うツールになります。

- [公式サイト](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/almaccelerator-components)
- [解説記事]()


### CenterofExcellenceALMAccelerator

Power Platform で Azure DevOps と ALM でソリューションを展開するために利用します。
このシステムを使うことで、 ALM に関する深い知識を必要とせずに ALM を実装できます。

- [公式サイト](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/almacceleratorpowerplatform-components)
- [解説記事]()


### CenterofExcellenceALMAccelerator

Power Platform で Azure DevOps と ALM でソリューションを展開するために利用します。
このシステムを使うことで、 ALM に関する深い知識を必要とせずに ALM を実装できます。

- [公式サイト](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/almacceleratorpowerplatform-components)
- [解説記事]()

### CenterofExcellenceAuditComponents

監査関連 (確認中) 

- [公式サイト](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/setup-auditlog)
- [解説記事]()

### CenterofExcellenceAuditLogs

監査ログ関連 (確認中) 

- [公式サイト](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/setup-auditlog)
- [解説記事]()


### CenterofExcellenceCoreComponents

CenterofExcellenceCoreComponentsは、Center of Excellence (CoE) のセットアップを開始するためのコアを提供します

- [公式サイト](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/core-components)
- [解説記事]()

### CenterofExcellenceCoreComponentsTeams

CenterofExcellenceCoreComponentsTeams は、Center of Excellence (CoE) のセットアップを開始するためのコアを提供します (for Teams 用)

- [公式サイト](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/core-components)
- [解説記事]()

### CenterofExcellenceInnovationBacklog

構築が必要なアプリとフローのアイデアを提出するようユーザーに依頼し、現在のプロセスの問題点を洗い出すためのソリューションです

- [公式サイト](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/innovationbacklog-components)
- [解説記事]()

### CenterofExcellenceNurtureComponents

Power Platform の作成者や内部コミュニティを育成するためのトレーニングなどを管理するためのソリューションです

- [公式サイト](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/nurture-components)
- [解説記事]()

## Theming

Power Apps のキャンバスアプリで組織独自のテーマを作成するためのソリューションです

- [公式サイト](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/theming-components)
- [解説記事]()

## ダッシュボード

各種環境用のダッシュボードが含まれています。

- [公式サイト](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/setup-powerbi)


# リンク

- [Center of Excellence (CoE) の概要](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/overview)


