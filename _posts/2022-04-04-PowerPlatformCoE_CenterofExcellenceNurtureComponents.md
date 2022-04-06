---
layout: post
title: "Power Platform CoE スターターキット Center of Excellence Nurture Components について"
description: "Power Platform の作成者や内部コミュニティを育成するためのトレーニングなどを管理するためのソリューションです"
categories: [PowerPlatform]
tags: [PowerPlatform]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/040810.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/040810.png
redirect_from:
  - /2022/04/04/
---

#  概要

本記事は Power Platform CoE スターターキット Center of Excellence Nurture Components のセットアップとその機能についての内容です。


# 前提条件

また、本記事は Dataverse for Teams 環境にセットアップし、Center of Excellence Core Components Teams がセットアップされていること

[解説記事](https://www.powerplatform.work/PowerPlatformCoE_CenterofExcellenceCoreComponentsTeams/)

# セットアップ

まずは Dataverse for Teams 環境へインポートしましょう。

<img src="/assets/blogpost/2022/040801.png"/><br/>

次に必要な環境変数を設定していきます。
今回はいずれの環境変数も入力せずにインポートします。

## Training In a Day - Feedback Form

入力: 推奨


ラベルの通り、フィードバック用のURLを入力します。 Microsoft Forms や Teams のスレッドなどを用意し、そのURLを入力しましょう

Link to the Feedback form for your Training in a day course

```
Training in a dayコースのフィードバックフォームへのリンクです。
```

全ての機能を使うには入力しておきましょう。

## Maker Assessment Admin Email

入力: 推奨

管理者用のメールアドレスを入力します。

Admin Email where you would like the communications to be sent from the apps.

```
管理者メールアドレス, アプリからのコミュニケーションを送信する場所です。
```

全ての機能を使うには入力しておきましょう。

## InnovationBacklogLink

任意

別のアプリ [Center of Excellence Innovation Backlog]() をインストールした際にそのアプリのURLを入力します。

OPTIONAL. Link to the Innovation Backlog app, if you have it installed and running in your tenant. This lets users add very detailed information about their desired app.

```
オプション テナントでInnovation Backlogアプリをインストールし、実行している場合は、そのアプリへのリンク。これにより、ユーザーは希望するアプリについて非常に詳細な情報を追加することができます。
```

## Community URL

任意

社内の Power Platform のコミュニティのURLを入れます。Ymmer や Teams のURLなんかでよいです。

Link to your internal Microsoft Power Platform community (for example, Yammer or Teams)

```
Microsoft Power Platform の社内コミュニティ（Yammer や Teams など）にリンクします。
```


インポートが完了したら、以下のようにソリューションとして表示されます。
以上でインポートは完了です。では実際に動作を確認してみましょう。

<img src="/assets/blogpost/2022/040802.png"/><br/>

# 機能概要

Center of Excellence Nurture Components は 5 つ のアプリと 7つのクラウドフロー、そして７つの Dataverse で構成されています。


## Maker Assessment

Maker Assessmentアプリは、ユーザーが計画しているソリューションのターゲット層、データ、サポートに関する一連の質問を行い、ソリューションの開発を始める前にメーカーが留意すべきガバナンス、サポート、ライセンスに関する事項を知らせるために使用することができます。


<img src="/assets/blogpost/2022/040803.png"/><br/>
<img src="/assets/blogpost/2022/040804.png"/><br/>
<img src="/assets/blogpost/2022/040805.png"/><br/>

問題がなければ、ソリューションを作成する といった流れになります。
（２枚目のチェックボックスが動作しなかった...）

また、レスポンシブになっていないため、デザインが崩れる箇所も存在しました。


## Maker Assessment Admin App

Maker Assessment　管理者が、アプリに掲載されている質問、回答、カテゴリを入力または更新するために使用するキャンバスアプリです。

先ほどのアプリとセットで使います。

<img src="/assets/blogpost/2022/040806.png"/><br/>
<img src="/assets/blogpost/2022/040807.png"/><br/>

このように追加した内容は Maker Assessment に反映されます。
ガバナンスの管理やよくある質問などに使えそうです。

<img src="/assets/blogpost/2022/040808.png"/><br/>

## Template Catalog

CoE管理者が、アプリやコンポーネントのテンプレート、ベストプラクティスのドキュメントを作成者と共有するために使用するキャンバスアプリです。

Center of Excellence Core Components の時にインポートされた [App Catalog](https://www.powerplatform.work/PowerPlatformCoE_CenterofExcellenceCoreComponentsTeams/#app-catalog) と同じようなアプリです。

## Power Platform Training Management

こちらがこのソリューションの本命のアプリになります。

Power Platformのトレーニングイベントを新規に作成し、参加者を管理するためのアプリです。

タイトル、詳細、開始・終了日時、場所、最大登録者数、イベントの画像 などが設定できます。

<img src="/assets/blogpost/2022/040809.png"/><br/>
<img src="/assets/blogpost/2022/040810.png"/><br/>

## Power Platform Training Registration

Power Platform Training Management で作成したイベントに対して、こちらのアプリでユーザーは登録を行います。


<img src="/assets/blogpost/2022/040811.png"/><br/>
<img src="/assets/blogpost/2022/040812.png"/><br/>
<img src="/assets/blogpost/2022/040813.png"/><br/>


実際に登録が行われると、Management 側でも確認・削除ができます。

<img src="/assets/blogpost/2022/040814.png"/><br/>



# リンク

- [育成コンポーネントの使用](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/nurture-components)
