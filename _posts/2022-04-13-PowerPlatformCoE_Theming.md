---
layout: post
title: "Power Platform CoE スターターキット Theming について"
description: "Power Apps のキャンバスアプリで組織独自のテーマを作成するためのソリューションです"
categories: [PowerPlatform]
tags: [PowerPlatform]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/041303.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/041303.png
redirect_from:
  - /2022/04/13/
---


#  概要


本記事は 2022/04/11 時点での内容です。


## Theming

Theming (以下システムとも記載)は以下のような特徴を持っています。

- 自社用のテーマを作成することができます
- 作成後はそのテーマからアプリを作成することで利用することができます。



# 前提条件

また、本記事は Dataverse for Teams 環境にセットアップし、Center of Excellence Core Components Teams がセットアップされていること

[解説記事](https://www.powerplatform.work/PowerPlatformCoE_CenterofExcellenceCoreComponentsTeams/)


# セットアップ


まずは Dataverse for Teams 環境へ
Theming_2.4_managed.zip をインポートしましょう。


<img src="/assets/blogpost/2022/041301.png"/><br/>
<img src="/assets/blogpost/2022/041302.png"/><br/>


本アプリは特に環境設定などを設定する必要はありません。


# 機能概要

Theming は 5つのアプリと 3つの Dataverse で構成されています。


## AppTemplatePhone

ただの空のスマホレイアウトのアプリ。別のアプリからテンプレートを作成するためのアプリで普段は使うことはありません。

## AppTemplateTablet

上と同じ。但しこちらはタブレット用レイアウト。

## CoE Theme Editor

こちらがメインのアプリ各アプリのテーマを編集できます。
作成したテーマは Dataverse へ保存されます。但し、Teams 上だとあまりうまく動きませんでした。

<img src="/assets/blogpost/2022/041303.png"/><br/>

本来であればリンクのように動作するらしい。

[テーマ化コンポーネントを使用する](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/theming-components)


## CoE Theme Gallery

既存で作成されたテーマをダウンロードするためのギャラリーです。
事前に Theme Editor で共有されたテーマのみ表示されます。


<img src="/assets/blogpost/2022/041304.png"/><br/>

## Shared Component Library

このアプリはコンポーネントの再利用をするために利用するアプリになります。
中には

- Header
- TabControl 
- PreLoader

という３つのコンポーネントが含まれていて、展開するたびにこのアプリをコピーして利用します。
組織的にロジックやコンポーネントを統一したい場合にそれに合わせて編集し、利用するとよいと思います。


<img src="/assets/blogpost/2022/041305.png"/><br/>

# リンク

- [テーマ化コンポーネントを使用する](https://docs.microsoft.com/ja-jp/power-platform/guidance/coe/theming-components)
