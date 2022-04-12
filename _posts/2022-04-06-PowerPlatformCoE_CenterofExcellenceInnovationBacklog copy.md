---
layout: post
title: "Power Platform CoE スターターキット Center of Excellence Innovation Backlog について"
description: "構築が必要なアプリとフローのアイデアを提出するようユーザーに依頼し、現在のプロセスの問題点を洗い出すためのソリューションです"
categories: [PowerPlatform]
tags: [PowerPlatform]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/040608.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/040608.png
redirect_from:
  - /2022/04/06/
---

#  概要


本記事は 2022/04/06 時点での内容です。


## CenterofExcellenceInnovationBacklog

Center of Excellence Innovation Backlog (以下システムとも記載)は以下のような特徴を持っています。

- アイデアや要望を募集することができる
- コストや価値などの入力が可能
- メインは 入力用のアプリ + 管理用のアプリの２つで構成されている


# 前提条件

また、本記事は Dataverse for Teams 環境にセットアップし、Center of Excellence Core Components Teams がセットアップされていること

[解説記事](https://www.powerplatform.work/PowerPlatformCoE_CenterofExcellenceCoreComponentsTeams/)


# セットアップ

まずは Dataverse for Teams 環境へ
CenterofExcellenceInnovationBacklog_2.5_managed.zip をインポートしましょう。

<img src="/assets/blogpost/2022/040601.png"/><br/>
<img src="/assets/blogpost/2022/040602.png"/><br/>

次に必要な環境変数を設定していきます。
今回はいずれの環境変数も入力せずにインポートします。

## InnovationBacklogAppURL

入力: 入力なし

メールで送信される際に使われるアプリのURLになります。アプリインポート後にしか設定できないため、インポート後に設定しましょう。



インポートが完了したら、以下のようにソリューションとして表示されます。
以上でインポートは完了です。では実際に動作を確認してみましょう。

<img src="/assets/blogpost/2022/040603.png"/><br/>


# 機能概要

Center of Excellence Innovation Backlog は 2 つ のアプリと 2つのクラウドフロー、そして 15の Dataverse で構成されています。


## Innovation Backlog

イノベーション(新しい切り口や技術革新)のアイデアや要望を入力し、Power Platformの開発者がそれを見つけて実行し、そのイノベーション作業のビジネス価値を導き出すために利用するアプリです。つまり、アイディアを募集し、それを Power Platform 開発者が開発を行い、ビジネスを効率的に改善するためのアプリです。


<img src="/assets/blogpost/2022/040604.png"/><br/>
<img src="/assets/blogpost/2022/040605.png"/><br/>

費用対効果まで設定が可能です。

<img src="/assets/blogpost/2022/040606.png"/><br/>
<img src="/assets/blogpost/2022/040607.png"/><br/>

追加するとこんな感じです。

<img src="/assets/blogpost/2022/040608.png"/><br/>


作業に入るとアサイン（作業担当者）が決められたり、ステータスを変更するとコスト等も入力させます。
<img src="/assets/blogpost/2022/040610.png"/><br/>

非常に使いやすく、すぐにでも導入できそうなソリューションですね。


## Innovation Backlog Admin

上記のアプリのデータをクリーンナップするための管理アプリです。
データを削除したり、マスターを新たに追加したりできるアプリですね。

<img src="/assets/blogpost/2022/040609.png"/><br/>

# リンク

- [イノベーション バックログ コンポーネントを使用する](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/innovationbacklog-components)

