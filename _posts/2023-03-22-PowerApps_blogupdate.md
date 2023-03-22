---
layout: post
title: "Power Apps の使用状況やパフォーマンスデータを自動的に Azure DataLake Storage Gen2 にエクスポートする"
description: "Power Apps は、ロー コード開発ツールとして多くの企業で活用されていますが、その管理や運用には課題もあります。たとえば、どのようなアプリが作成されているか、どれだけ利用されているか、どのような問題が発生しているかなどを把握することは容易ではありません。そこで役立つのが COE (Center of Excellence) Starter Kit です。COE Starter Kit は、Power Apps の管理やガバナンスを支援するテンプレート集です。COE Starter Kit には、アプリやフローのインベントリ管理、品質チェック、アーキテクチャ設計などを行うためのアプリやフローが含まれています"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2023/03/22
---


Power Apps ブログが更新されました

[https://powerapps.microsoft.com/ja-jp/blog/now-in-preview-coe-starter-kit-backed-by-data-from-self-serve-analytics-data-export/](https://powerapps.microsoft.com/ja-jp/blog/now-in-preview-coe-starter-kit-backed-by-data-from-self-serve-analytics-data-export/)

# ざっくり内容

Power Apps は、ロー コード開発ツールとして多くの企業で活用されていますが、その管理や運用には課題もあります。たとえば、どのようなアプリが作成されているか、どれだけ利用されているか、どのような問題が発生しているかなどを把握することは容易ではありません。そこで役立つのが COE (Center of Excellence) Starter Kit です。COE Starter Kit は、Power Apps の管理やガバナンスを支援するテンプレート集です。COE Starter Kit には、アプリやフローのインベントリ管理、品質チェック、アーキテクチャ設計などを行うためのアプリやフローが含まれています。

今回のブログでは、COE Starter Kit の新しい機能として Self-serve Analytics Data Export を紹介しています。

Self-serve Analytics Data Export は、Power Apps の利用状況やパフォーマンスデータを自動的に Azure Data Lake Storage Gen2 にエクスポートする機能です。これにより、COE Starter Kit のアプリやフローだけでなく、Power BI や Azure Synapse Analytics などのツールを使って Power Apps のデータ分析を行うことができます。

Self-serve Analytics Data Export を利用するには以下の手順が必要です。

1. Azure Data Lake Storage Gen2 のストレージ アカウントを作成する
2. Power Platform 管理センターから Self-serve Analytics Data Export を有効化する
3. COE Starter Kit のテンプレートから Self-serve Analytics Data Export モジュールをインストールする
4. Power BI Desktop から Self-serve Analytics Data Export モジュールに接続し、レポートを作成する


Self-serve Analytics Data Export を使えば、Power Apps の管理者や開発者は Power Apps の利用状況やパフォーマンスデータに基づいて最適化や改善策を検討できます。また、ビジネス ユーザーも Power BI や Azure Synapse Analytics などで自由にデータ分析を行えます。

ただし、現時点（2023/3/22）ではまだ私の環境では利用が確認できていません。



# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Now in preview: CoE Starter Kit backed by data from self-serve analytics data export](https://powerapps.microsoft.com/ja-jp/blog/now-in-preview-coe-starter-kit-backed-by-data-from-self-serve-analytics-data-export/)

