---
layout: post
title: "Power Automate のクラウドフローを共有するとエラーが発生して共有できない"
description: "クラウドフローは特定の条件下ではエラーが発生して共有することができません。"
categories: [PowerAutomate]
tags: [PowerAutomate]
image: >-
  https://www.powerplatform.work/assets/noimage_flow.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage_flow.png
redirect_from:
  - /2022/04/08/
---

#  概要

マイフローを同僚等に共有する場合に、エラーが発生し共有できない場合があります。
本記事はその原因を解説した記事になります。



# クラウドフローを共有できない条件

ドキュメントの記載では、以下のような状態の場合クラウドフローを共有することはできません。

- Power Automate ライセンス (無料ライセンスを除く) または制限付き付帯ライセンス (Office 365、Dynamics 365 Enterprise プラン、Dynamics 365 Professional プラン、Dynamics 365 Team Member、Power Apps (キャンバスおよびモデル駆動型アプリ) - アプリごとのプラン、Power Apps ユーザーごとのプラン、Windows ライセンス) のいずれかが必要です。
  - Free のライセンスでは共有することはできません（M365 についてくるライセンスではなく、個人向けのライセンスになります。）
- クラウド フローの所有者を追加または削除するには、作成者または所有者である必要があります。


また、以下詳細な条件は不明ですが、エラーが発生することがありました。

- 元の所有者が組織内にいない場合
  - 共同所有者がいてもエラーになる場合があった。
    - おそらく接続情報がらみかな？？


# リンク


- [前提条件](https://docs.microsoft.com/ja-jp/power-automate/create-team-flows#prerequisites)




