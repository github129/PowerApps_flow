---
layout: post
title: "Power Apps での複数人で同時に編集するには"
description: "Power Apps では GitHub リポジトリと連携することで複数人同時でのアプリの編集が可能になります"
categories: [PowerApps]
tags: [PowerApps,GitHub]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/2022-01-10-01.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/2022-01-10-01.png
redirect_from:
  - /2022/01/10/
---

#  概要

Power Apps には GitHub のリポジトリと連携することで複数人でのアプリの同時編集を可能にする機能が最近実験段階機能として追加されました。
この機能は 2022/01/10 時点ではプレビュー環境でのみ動作および設定が可能です。

# 必要なもの

- GitHub リポジトリ(現時点ではプライベートのみサポートされています。パブリックの場合、コミット等の連携を行う際にエラーが発生します。)
- プレビュー環境

# 設定

設定項目の実験段階機能の「バージョンコントロールの設定を表示する」をオンにします。


<img src="/assets/blogpost/2022/2022-01-10-02.png"/><br/>

オンにすることで左のメニューの中に「Git バージョン管理」が表示されますので、接続ボタンを押して、それぞれ設定を行っていきましょう。


<img src="/assets/blogpost/2022/2022-01-10-03.png"/><br/>

<img src="/assets/blogpost/2022/2022-01-10-01.png"/><br/>


上から以下のように項目を設定していきます。

- Git リポジトリのURL
  - リポジトリのURL https:// ~~~ .git を設定します。但しプライベートのリポジトリである必要があります。
- 分岐
  - ブランチ名を設定します。main や master等はデフォルトで存在しますが、存在しないブランチ名を設定した場合は自動的にそのブランチ名で新たなブランチが作成されます。
- ディレクトリ名
  - フォルダ名。なんでもいいです。なければ作成されます。


設定を行うと、次にログイン情報を入力し、サインインしましょう。

<img src="/assets/blogpost/2022/2022-01-10-04.png"/><br/>

サインインの時にパスワードを求められますが、必要なのはパスワードではなく、「Personal access tokens」
が必要な点に注意が必要です。


設定が完了すると、以下のようにGitHub の情報が表示されます。

<img src="/assets/blogpost/2022/2022-01-10-05.png"/><br/>

GitHubにもファイルが連携されているのが確認できます。

<img src="/assets/blogpost/2022/2022-01-10-06.png"/><br/>

また、連携自体は、「保存」「Ctrl+S」「発行」「コミット」を行うことで変更が反映されます。



# リンク


[キャンバス アプリでの共同編集 (試験段階)](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/git-version-control)
