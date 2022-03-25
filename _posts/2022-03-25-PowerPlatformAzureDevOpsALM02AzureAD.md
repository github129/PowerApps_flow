---
layout: post
title: "Power Platform で Azure DevOps を使った ALM を実現する 準備編 Azure AD"
description: "Power Platform の開発、展開、検証などを自動で行うためのALMを実現するための方法をご紹介します"
categories: [PowerPlatform]
tags: [PowerPlatform,ALM]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/032501.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/032501.png
redirect_from:
  - /2022/03/25/
---

#  概要

Power Platform もある程度の規模になってくると開発→展開も苦労してきます。
１つのアプリケーションや１つのフローだけであれば、アプリそのものをエクスポート/インポートしても特段問題はありません。しかし、それが複数のアプリや複数のフロー、データ定義などを加味しながらの展開となると単体でのエクスポート/インポートでは難しくなってきます。

そういった問題を解決するために、ソリューションと Azure DevOps を使ったALMを構築し、展開などのアプリケーションライフサイクル管理を容易にしましょう。


# Azure AD の準備

今回 Azure DevOps では Dynamics の API を利用してソリューションのエクスポートやインポートなどの操作を行っていきます。そのために、個人用のアカウントではなく、 Azure AD にアプリケーションの登録が必要になります。

（今回はコマンドラインで操作していきますが、もちろんポータルで操作しても構いません）

以下のツールをコマンドラインを利用してインストールしてください。

```
Install-Module AzureAD -Scope CurrentUser
```

```
Install-Module Microsoft.PowerApps.Administration.PowerShell -Scope CurrentUser
```


以下のリンクよりコマンドパレットをDLします

[https://pabuildtools.blob.core.windows.net/spn-docs-4133a3fe/New-CrmServicePrincipal.ps1](https://pabuildtools.blob.core.windows.net/spn-docs-4133a3fe/New-CrmServicePrincipal.ps1)

スクリプトを保存したフォルダーに移動し、次のコマンドを使用してスクリプトのブロックを解除します

```
Unblock-File New-CrmServicePrincipal.ps1
```

エラーが発生する場合は、エラー内容で検索してください。
おそらく、管理者権限を持っていない等によって実行できていない可能性があります。


ブロックを解除したら、スクリプトを実行しましょう

```
.\New-CrmServicePrincipal.ps1
```

実行に成功すると、ログイン用のポップアップが２回出現します。

最初のログイン: Microsoft Power Platform テナントに関連するAADインスタンスに管理者としてログインする

2 番目のログイン: Microsoft Power Platform テナント自体にテナント管理者としてログインする

システム管理者であれば、どちらも同じで構いません。
ログインに成功すると、以下の３つの情報が表示されます。

- Power Platform TenantId
- Application ID
- クライアント シークレット 

<img src="/assets/blogpost/2022/032501.png"/><br/>


この３つの情報を使って Azure DevOps から 様々操作することになりますので、必ずどこかに控えておきましょう。

この時点で、Azure AD にも同様にアプリケーション登録がされていると思います。

<img src="/assets/blogpost/2022/032502.png"/><br/>


以上で Azure AD の準備は完了です。
次回は Azure DevOps の準備を行いましょう。



# リンク


[Microsoft Power Platform Build Tools for Azure DevOps](https://docs.microsoft.com/ja-jp/power-platform/alm/devops-build-tools)
