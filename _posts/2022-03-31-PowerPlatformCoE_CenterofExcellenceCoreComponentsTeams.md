---
layout: post
title: "Power Platform CoE スターターキット Center of Excellence CoreComponents Teams について"
description: "Center of Excellence CoreComponents Teams は 管理者向けのコア機能を備えたシステム（ソリューション）で申請アプリや BI ダッシュボードなども備えています"
categories: [PowerPlatform, CoE]
tags: [PowerPlatform, CoE]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/033102.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/033102.png
redirect_from:
  - /2022/03/31/
---

#  概要

本記事は 2022/03/31 時点での内容です。


## CenterofExcellenceCoreComponentsTeams

Center of Excellence Core Components Teams (以下システム)は以下のような特徴を持っています。

- DLPポリシーや アプリの管理といった管理者向けのコア機能を持っています
- 作成者向けにはポータルアプリや申請アプリなどを持っています
- そのほかのCoEスターターキットを正しく使うためにセットアップする必要があります
  - なくても無理やりセットアップすることも可能ですが、セットアップした方が管理面等も含めて楽にできます。


# 前提条件

1. 利用するには Teams の環境および利用するためのライセンスと DLP ポリシーが必要になります。
以下の記事をご確認ください。

[Power Platform CoE](https://www.powerplatform.work/PowerPlatformCoE/)

2. Teams で Dataverse for Teams が利用できるような状態になっていること
3. プレミアムコネクタを利用するため、 (Azure AD HTTP など)　有料ライセンスが必要です。（今回は Power Apps per User の試用版 を利用しています）

# セットアップ方法

今回は Web の Teams を利用しています。

Teams で Dataverse for Teams を開き、ソリューションを選択します。
その後 インポート → ソリューションのインポートと進みます。

<img src="/assets/blogpost/2022/033101.png"/><br/>

CenterofExcellenceCoreComponentsTeams .zip をインポートします。


<img src="/assets/blogpost/2022/033102.png"/><br/>

次へ と進むと 各接続情報を要求されます。
すでにある場合は あるものを選択し、ない場合は新規に作成します。

- Power Automate Management の認証形式は FirstPrity である必要があります
- [https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/setup-core-components#create-connections](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/setup-core-components#create-connections) の4にもある通り、こちらの説明にもある通り、 Azure AD 関連の設定時に求められる URL はどちらも https://graph.microsoft.com を設定します。


全ての接続情報の入力が完了すると、次へが選択できる状態になりますので、次へを選択してください。

<img src="/assets/blogpost/2022/033103.png"/><br/>


必要な項目を入力していきましょう。なお、インポート時には 「Leave blank on Import. 」と記載があるものは入力しなくて良いです。（インポート時は空欄でという意味です）また、そのような記載がない場合でも後程設定が可能なものもあります。(最終的にすべて設定していきます)

3_15_managed では最低限以下の項目の入力が必要でした。

- Admin Email
  - 管理者用のメールアドレスを入力してください
- PowerApp Player Environment Variable
  - こちらの記載に合わせて入力してください[https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/setup-core-components#gather-environment-variable-values](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/setup-core-components#gather-environment-variable-values)
  - 商用環境であれば https://apps.powerapps.com/ と入力してください
- Power Automate Environment Variable
  - こちらの記載に合わせて入力してください[https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/setup-core-components#gather-environment-variable-values](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/setup-core-components#gather-environment-variable-values)
  - 商用環境であれば https://flow.microsoft.com/manage/environments/ と入力してください


<img src="/assets/blogpost/2022/033104.png"/><br/>

入力が完了したらインポートボタンを押しましょう。
インポートが正常に完了すると以下のように表示がされます。


<img src="/assets/blogpost/2022/033105.png"/><br/>
<img src="/assets/blogpost/2022/033106.png"/><br/>

しかし、この時点ではまだ、まともに システムは動作しません。

次にクラウドフローの以下のフローを以下の順番でオンにします。


1. HELPER - CanvasAppOperations
2. HELPER - CloudFlowOperations
3. HELPER - Maker Check
5. HELPER - Send Email
4. HELPER - ObjectOperations
6. CLEANUP HELPER - Check Deleted (Canvas Apps)
7. CLEANUP HELPER - Check Deleted (Cloud Flows)
8. CLEANUP HELPER - Check Deleted (Custom Connectors)
9. CLEANUP HELPER - Check Deleted (Model Driven Apps)
10. CLEANUP HELPER - Check Deleted (PVA)
11. CLEANUP HELPER - Power Apps User Shared With



ここまで行うと、 以下のフローがオンにできます。

12. CLEANUP - Admin  Sync Template v3 (Check Deleted)


オンになると CLEANUP - Admin  Sync Template v3 (Check Deleted) は タイマートリガーなので、自動的に１度だけ実行されます。

<img src="/assets/blogpost/2022/033111.png"/><br/>


13.   Admin  Sync Template v3 (Connectors)
    1.  こちらもオンにすると自動的に実行されます。成功したことを確認しましょう。処理時間はおよそ10分前後掛かります。 
14. .   Admin  Sync Template v3 (Apps)
15.  Admin  Sync Template v3 (Custom Connectors)
16.  Admin  Sync Template v3 (Desktop Flow - Runs)
17.  Admin  Sync Template v3 (Desktop flows)
18.  Admin  Sync Template v3 (Flow Action Details)
19.  Admin  Sync Template v3 (Flows)
20.  Admin  Sync Template v3 (Model Driven Apps)
21.  Admin  Sync Template v3 (Portals)
22.  Admin  Sync Template v3 (PVA)
23.  Admin  Sync Template v3 (Sync Flow Errors)
24.  Admin  Sync Template v3 Configure Emails
25.  Admin  Sync Template v3
     1. タイマートリガーなので自動で実行されます。オンにした後すぐにオフにしましょう。
     2. 実行にはかなりの時間がかかります（ディレイが 最大900分設定されているため） そこまで待ちたくない場合は、ディレイの設定を適当に変えましょう



COE Settings にデータを追加します。
データを編集から入力しても良いですし、もしエラーが発生する場合は Power Automate 等を経由して列を追加しましょう。


<img src="/assets/blogpost/2022/033112.png"/><br/>


以上で CenterofExcellenceCoreComponentsTeams の設定が完了です。
各アプリの動作を確認してみましょう。


# 各アプリの内容

## App Catalog

組織内の特定のアプリを可視化するためのキャンバスアプリです。
App Catalog　を初めて開くと、そこにはアプリが表示されていません。Power Apps の App テーブルに In App Catalog というフィールドがあり、これは 2 つのオプションからなる集合型フィールド（Boolean）です。値がYesに設定されている場合、アプリはカタログに表示されます。


<img src="/assets/blogpost/2022/033113.png"/><br/>
<img src="/assets/blogpost/2022/033116.png"/><br/>
<img src="/assets/blogpost/2022/033114.png"/><br/>
<img src="/assets/blogpost/2022/033115.png"/><br/>

## DLP Editor V2

DLP Editor v2 は、データ損失防止（DLP）ポリシーを読み込んで更新しながら、ポリシー設定によって影響を受けるアプリやフローのリストを表示するキャンバスアプリです。

このアプリは次のような用途に使用します。

- DLP ポリシーを変更する。
- 各変更がどのような影響を及ぼすかを確認する。
- 作成者に連絡し、リスクを軽減する。

<img src="/assets/blogpost/2022/033117.png"/><br/>
<img src="/assets/blogpost/2022/033118.png"/><br/>

このあたりは管理ポータルと違う部分ですね。

<img src="/assets/blogpost/2022/033119.png"/><br/>


## Developer Compliance Center (Teams version)

Power Apps の作成者が自分のアプリケーションを閲覧したり、より多くの情報を送信して、Center of Excellenceからより良いサポートを受けるためのポータルサイトです。

<img src="/assets/blogpost/2022/033120.png"/><br/>

## Power Platform Admin View

D4Tで MDA(モデル駆動型アプリ) がサポートされていないため、Production Coreで提供されているモデル駆動型アプリのキャンバス版です。Dataverseのカスタムテーブルの項目を参照したり、カスタムフィールドを簡単に拡張したりするためのインターフェイスを提供します。

<img src="/assets/blogpost/2022/033121.png"/><br/>


## Set App Permissions

グローバル管理者、環境管理者、ビジネスアプリケーション管理者は、このアプリを使用して、アプリの所有者の役割を再割り当てしたり、アプリに新しいユーザーを追加したりすることができます。

<img src="/assets/blogpost/2022/033122.png"/><br/>

## Set Flow Permissions

グローバル管理者、環境管理者、ビジネスアプリケーション管理者は、このアプリを使用して、アプリの所有者の役割を再割り当てしたり、フローに新しいユーザーを追加したりすることができます。

<img src="/assets/blogpost/2022/033123.png"/><br/>

## Maker - Command Center

他のCoE Starter Kitのリソースに移動するための作成者向けコマンドおよびセットアップセンター。
（特に何も出てこないので使う用途が不明）

<img src="/assets/blogpost/2022/033124.png"/><br/>

## Admin - Command Center

Command and Setup Center for Adminsから他のCoE Starter Kitリソースに移動することができます。

<img src="/assets/blogpost/2022/033125.png"/><br/>

## Maker - Environment Request

作成者は、新しい環境や DLP ポリシー変更の適用などの Power Platform Admin サービスとリソースを要求するためのアプリです。

<img src="/assets/blogpost/2022/033126.png"/><br/>
<img src="/assets/blogpost/2022/033128.png"/><br/>

## Admin - Environment Request

作成者が出したリクエストを管理者はアプリを使って管理することができます。

<img src="/assets/blogpost/2022/033127.png"/><br/>



## Power BI 系

以下のアプリは BI ダッシュボードと一緒に使うアプリになります。

- Admin - Access this App
- Admin - Access this Flow




# 各種リンク・参考サイト


- YouTube
  - [CoE Starter kit for the Power Platform in Dataverse for Teams environment](https://www.youtube.com/watch?v=Pz8RLbdaglk)
  - [Center of Excellence Starter Kit - Setup Instructions](https://www.youtube.com/watch?v=Z9Vp2IxFzpU)
- ブログ、記事
  - [インベントリ コンポーネントを設定する](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/setup-core-components)
  - [運用環境へのソリューションのインストール](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/faq#installing-a-solution-in-a-production-environment)
  - [CoE スタート キットを設定する前に](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/setup)



