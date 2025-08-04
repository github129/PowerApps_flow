---
layout: post
title: "Copilot Studio連携！エージェントフローに Word 作成の新アクション登場　テンプレートを利用しない新しい Word ファイルの作成手順を確認してみましょう　#CopilotStudio"
description: "Copilot Studio連携！エージェントフローに Word 作成の新アクション登場　テンプレートを利用しない新しい Word ファイルの作成手順を確認してみましょう　#CopilotStudioを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2025/080201.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2025/080201.jpg
redirect_from:
  - /2025/08/02
---


#  概要

Copilot Studio連携！エージェントフローに Word 作成の新アクション登場　テンプレートを利用しない新しい Word ファイルの作成手順を確認してみましょう　#CopilotStudio

Copilot Studioのエージェントフローに新たに追加されたWord文書作成機能について詳しく解説します。従来のテンプレートベースの手法とは異なり、マークダウンやHTMLを活用してWordファイルを動的に生成できる革新的な機能です。

## エージェントフローとは

エージェントフローは、Copilot Studioから呼び出して利用できる自動化機能で、Power Automateと同様の機能を持ちます。エージェントは様々なタスクを実行できるようになり、基本的な機能はPower Automateと共通していますが、エージェントフロー独自の機能も提供されています。

**重要な注意点：** この機能は現在プレビュー環境でのみ利用可能で、すべての環境で表示されているわけではありません。

## 新しいWord作成機能の特徴

### 従来の方法との違い
- **テンプレート不要**: Wordテンプレートを事前に用意する必要がありません
- **動的コンテンツ生成**: マークダウン形式、HTML、CSSを利用してコンテンツを作成
- **自動保存**: 作成されたファイルは実行者のOneDriveに自動的に保存されます

### サポートされるフォーマット
- **マークダウン**: 太文字、打ち消し線、リンク、表などの基本的な書式
- **HTML/CSS**: より高度なデザインが可能（インラインCSSのみ対応）

## 実装手順

### 1. エージェントフローの設定
1. エージェントフロー内で「追加」ボタンを押す
2. 「word」で検索
3. 「指定されたコンテンツでMicrosoft Word文書を作成する」アクションを選択

### 2. コンテンツとファイル名の設定
- マークダウン形式またはHTML形式でコンテンツを入力
- ファイル名を設定（OneDriveに自動保存）
- 作成されたWordファイルのURLをエージェントが返すよう設定

### 3. エージェントへの統合
- Copilot Studioのエージェントにフローを追加
- 挨拶トピックなどにツールとして組み込み
- メッセージノードでURLをユーザーに送信

## 現在の制限事項

### 日本語文字化け問題
現在のプレビュー版では、日本語で入力した文章が文字化けしてしまう問題があります。英語での文章作成は正常に動作することが確認されています。

### OneDrive限定保存
作成されるファイルはOneDriveにのみ保存され、SharePointへの直接保存には追加の工夫が必要です。

### HTML/CSS制限
- スタイルタグには対応していません
- CSSはすべてインラインで記載する必要があります

## 推奨利用シーン

**適している場合：**
- 英語でのドキュメント作成
- OneDriveへの保存で問題ない場合
- 動的なコンテンツ生成が必要な場合

**不向きな場合：**
- 日本語でのドキュメント作成
- OneDrive以外への保存が必要な場合
- 決まったテンプレートを使用したい場合

# アプリの作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/Df5SAlY97FI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

動画では、Copilot Studioのエージェントフローを使用したWord文書作成の実際の手順を詳しく解説しています。テンプレート不要で、マークダウンやHTMLを活用してWordファイルを動的に生成する方法を、実際の画面操作とともに確認できます。

## 実演内容
1. エージェントフローでのWord作成アクションの設定
2. マークダウン形式でのコンテンツ作成例
3. HTML/CSSを使用した高度なデザイン例
4. エージェントへの統合とテスト実行
5. 作成されたWordファイルの確認

現在はプレビュー機能のため制限がありますが、エージェントに文書作成能力を持たせる非常に将来性のある機能として注目しています。

使用した式は動画の概要欄をご確認ください


# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Copilot Studio連携！エージェントフローに Word 作成の新アクション登場　テンプレートを利用しない新しい Word ファイルの作成手順を確認してみましょう　#CopilotStudio](https://www.youtube.com/watch?v=Df5SAlY97FI)

