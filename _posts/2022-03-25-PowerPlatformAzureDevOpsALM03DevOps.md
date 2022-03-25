---
layout: post
title: "Power Platform で Azure DevOps を使った ALM を実現する 準備編 Azure DevOps"
description: "Power Platform の開発、展開、検証などを自動で行うためのALMを実現するための方法をご紹介します"
categories: [PowerPlatform]
tags: [PowerPlatform,ALM]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/032505.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/032505.png
redirect_from:
  - /2022/03/25/
---

#  概要

Power Platform もある程度の規模になってくると開発→展開も苦労してきます。
１つのアプリケーションや１つのフローだけであれば、アプリそのものをエクスポート/インポートしても特段問題はありません。しかし、それが複数のアプリや複数のフロー、データ定義などを加味しながらの展開となると単体でのエクスポート/インポートでは難しくなってきます。

そういった問題を解決するために、ソリューションと Azure DevOps を使ったALMを構築し、展開などのアプリケーションライフサイクル管理を容易にしましょう。


# Azure DevOps の準備


**準備の状況によっては Microsoft への問い合わせが必要な場合があります。その際 １週間（私の場合は４営業日）程度掛かる場合があります。事前に準備し、パイプラインの Who Am I まで動くことを確認することをお勧めします。**


Azure DevOps でプロジェクトを作成しましょう。

[https://azure.microsoft.com/ja-jp/services/devops/](https://azure.microsoft.com/ja-jp/services/devops/)

無料で始めるから、アカウントサインインから流れにしたがって、プロジェクトを作成しましょう。
プロジェクトを作成すると以下のようになります。

<img src="/assets/blogpost/2022/032503.png"/><br/>

必要な Power Platform の ビルドツールを作成したプロジェクトへインストールします。

[https://marketplace.visualstudio.com/items?itemName=microsoft-IsvExpTools.PowerPlatform-BuildTools](https://marketplace.visualstudio.com/items?itemName=microsoft-IsvExpTools.PowerPlatform-BuildTools)

リンク内の Get it Free を選択肢、こちらも流れに従ってインストールしましょう。

<img src="/assets/blogpost/2022/032504.png"/><br/>

# 接続情報の作成

ここがおそらく Azure DevOps を使ったことがない方最大の引っ掛かりポイントだと思います（ドキュメントの説明がない）


以下のように操作し、Azure AD のステップで作成した情報を入力し、接続情報を作成しましょう。


<img src="/assets/blogpost/2022/032505.png"/><br/>

Project Settings → Service connections → New service connection の順に進み、 Power Platform を選択します。
その後、前回の手順で作成した情報を入力しましょう

- Server URL
  - 環境のURLを入力します。 https://orgxxxxxx.crm7.dynamics.com/ のようなURL
  - 画像ではセッション情報からとっていますが、Power Platform 管理センターから取得しても問題ありません。
- Tenant ID
  - Azure AD の準備時に取得できた TenantId を入力します
- Application ID
  - Azure AD の準備時に取得できた ApplicationId を入力します
- Client secret of Application ID
  - Azure AD の準備時に取得できた、Clientsecret を入力します
- Service connection name
  - 任意の名前を入力します。おそらく半角英数にしておいた方がいいです。（下手な不具合を防止するため）
  - 今回は Power Platform と入力しています
- Security
  - チェックを入れておきます


全ての入力が完了したら Save を押して作成しましょう。画像のように１つ接続情報が作成されます。


<img src="/assets/blogpost/2022/032506.png"/><br/>

これで接続情報の作成が完了しました。
次回のステップでは実際にパイプラインを作成していきましょう




# 各リンク

- [Power Platform で Azure DevOps を使った ALM を実現する](https://www.powerplatform.work/PowerPlatformAzureDevOpsALM01/)
- [Power Platform で Azure DevOps を使った ALM を実現する 準備編 Azure AD](https://www.powerplatform.work/PowerPlatformAzureDevOpsALM02AzureAD/) 
- [Power Platform で Azure DevOps を使った ALM を実現する 準備編 Azure DevOps](https://www.powerplatform.work/PowerPlatformAzureDevOpsALM03DevOps/)
- [Power Platform で Azure DevOps を使った ALM を実現する 準備編 Azure DevOps パイプライン](https://www.powerplatform.work/PowerPlatformAzureDevOpsALM03DevOpsWhoAmI/)

# リンク


[Microsoft Power Platform Build Tools for Azure DevOps](https://docs.microsoft.com/ja-jp/power-platform/alm/devops-build-tools)
