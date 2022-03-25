---
layout: post
title: "Power Platform で Azure DevOps を使った ALM を実現する"
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


# What is Power Platfrom ALM

以下公式ドキュメントより

```
ALM は、ガバナンス、開発、メンテナンスを含む、アプリケーションのライフサイクル管理です。 さらに、要件管理、ソフトウェア アーキテクチャ、開発、テスト、メンテナンス、変更管理、継続的インテグレーション、プロジェクト管理、展開およびリリース管理などの分野も含まれます。 ALM ツールは、ソフトウェア開発チームとテストや操作などの関連部署との間の通信とコラボレーションのための標準化されたシステムを提供します。 これらのツールは、ソフトウェアの開発と配布のプロセスを自動化することもできます。 その目的で、ALM はプロセスのすべての側面に関係する分野を組み合わせて、予測可能および反復可能なソフトウェアの配布を通じて効率を向上させるという目標を達成します。
```

つまり、ALM あくまで手段であり、目的ではありません。
目的は、上記のようなメンテナンス性の改善だったり、展開のための管理だったりが目的です。そのため、小規模なシステムや１度しか使わないようなシステムで無理にALMを導入する必要はないと思います。

# What is Solution

ALM を理解するにはソリューションの概念を理解することが必須となります。（.NET 開発者であれば、 VS のソリューションがかなりイメージに近いです。）

ソリューションに関してはこちらの記事をご覧ください。

[ソリューションの概要](https://docs.microsoft.com/ja-jp/power-platform/alm/solution-concepts-alm)

# ALM を実現するために必要なもの

以下が今回 ALM を構築する上で必要になるものです。

- Azure AD のアプリケーション登録
  - ポータルでの操作、コマンドラインでの操作どちらでも構いません
- Azure DevOps
  - 無料枠で問題ありません
- Power Platform の環境（開発環境）
- Power Platform の環境（公開先）
  - ソリューションでのシステムの展開を行うため、２つ以上の環境が必要です。ちなみに公式サイトでは 開発用 + テスト用 + 本番用 の３つ以上を推奨しています。


# 各リンク




# リンク

[Microsoft Power Platform でのアプリケーション ライフサイクル管理サービスの概要](https://docs.microsoft.com/ja-jp/power-platform/alm/overview-alm)
