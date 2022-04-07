---
layout: post
title: "2022年4月にパワーアップして再登場!! 新たな Windows 用 Power Apps アプリを試してみた"
description: "この度 Windows 用の Power Apps アプリがパワーアップし新たに Windows Store に再登場したので早速試してみました"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/040704.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/040704.png
redirect_from:
  - /2022/04/07/
---

# 注意点

本記事は　2022/04/07 時点での情報です。
プレビューでの公開のため、機能や動作などに変更があるかもしれません。予めご了承ください。

#  満を持してパブリックプレビューが公開

[Announcing Public Preview of a new Power Apps application on Windows](https://powerapps.microsoft.com/ja-jp/blog/announcing-public-preview-of-a-new-power-apps-application-on-windows/)

にもありますが、この度 Windows 用の Power Apps アプリがパワーアップし新たに Windows Store に再登場しました。

<img src="/assets/blogpost/2022/040704.png"/><br/>

[DL リンクはこちらです。](https://www.microsoft.com/store/productId/9MVC8P1Q3B29)

以前の Windows 用のアプリはあくまで私個人の環境ですが、かなり不安定かつ、 Web とは微妙に異なる動作をする（Lounch関数が正しく動かない）等があり、正直私はお勧めできるものではなく、基本的に Web を推奨していました。

## オフラインの対応

PC ではなかなか難しかった、オフライン対応が iOS や Android と同じような感覚で対応が可能になりました。わざわざ PC かどうかを判断し、それによって処理を変える等の必要性が薄くなってきますね。


## デバイスの機能を利用する

Windows PC についているバーコードスキャナー等の機能とも連携し、ドキュメントや電話アプリから重要な情報を自動的に登録することがるようになりました。かなり事務的な作業に役立つほか、レジのようなアプリ、スマホやタブレットだと使いにくかったアプリ等の作成に役立ちそうです。

## Microsoft Intune で Power Apps を管理

新しいPower Apps(プレビュー)アプリケーションは、ユニバーサルWindowsアプリケーションであり、アプリケーション管理のためにIntuneをネイティブにサポートしています。これにより、アプリケーションをインストールできるデバイスやユーザーを制御できます。また、必要に応じてアプリケーションの自動更新を制御することもできるそうです。

## 新しいアプリを使ってみる

以下のリンク（Microsoft Store）よりダウンロードできます。

[DL リンクはこちらです。](https://www.microsoft.com/store/productId/9MVC8P1Q3B29)



## これから登場する機能

以下の機能は今後のアップデートで追加される機能になります。
待ち遠しいですね。

- Push Notifications
- Guest access
- Recent and Favorite apps
- Pin to start

# 調査 & 比較

## 調査環境

Windows 11 で調査しています。

## 新しいアプリは何で作られている？

[ライセンス](https://powerapps.microsoft.com/ja-jp/legal/third-party-notices/)から見るにおそらく Cordova

## 各画面の比較

今回 Dataverse の ユーザー テーブルから作成される自動のスマホレイアウトのアプリの画面で比較していきます。作成 → 保存 → Windows アプリをリフレッシュの順で準備しました。

左から、 新しいアプリ（新アプリ）、Web、旧アプリ の順で並んでいます。

### DL のタイミング

旧アプリは事前にダウンロードが必要ですが、新アプリはダウンロードの必要がありません（初回のロード時間が２回目以降の起動に比べて長いのでおそらく初回起動時にダウンロードしています）。旧アプリはダウンロードした瞬間に起動します（個人的にはこの機能は嫌いでした）。

<img src="/assets/blogpost/2022/041008.png"/><br/>

### スプラッシュ画面

新アプリはモダンな感じのスプラッシュ画面に対して、旧アプリは Web と同じようなスプラッシュ画面ですね。

<img src="/assets/blogpost/2022/041009.png"/><br/>

## 一覧への戻り方(アプリの終了のやり方)

旧アプリではアプリコマンド→終了 とアプリコマンドを毎回押す必要がありましたが、新アプリは右上から戻れるようになっています。

<img src="/assets/blogpost/2022/041013.png"/><br/>
<img src="/assets/blogpost/2022/041014.png"/><br/>


### アプリの動作

新アプリは正しく動作しますが、旧アプリは動作しませんでした。(旧アプリは2年くらい前からずっとこんな感じ)

<img src="/assets/blogpost/2022/041010.png"/><br/>

また、旧アプリではスクロール（フォーム）が正しく動作しませんが、新アプリは Web と同じく正しく動作します。

<img src="/assets/blogpost/2022/041011.png"/><br/>

画面サイズを小さくしても新アプリはそのサイズで自動的に調整してくれます。旧アプリはアプリ以下のサイズにできず、Webはリサイズアイコンを選択しない限り潰れます。
<img src="/assets/blogpost/2022/041012.png"/><br/>

## スライダーループおよびタイマーループの動作検証

１つずつ検証していきます。

Web

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/PowerApps?src=hash&amp;ref_src=twsrc%5Etfw">#PowerApps</a> <br>検証用<br>Web <a href="https://t.co/Ihtp7LrU8u">pic.twitter.com/Ihtp7LrU8u</a></p>&mdash; たく丸 (@taku_ma_ru) <a href="https://twitter.com/taku_ma_ru/status/1511879733570838528?ref_src=twsrc%5Etfw">April 7, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

新アプリ

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/PowerApps?src=hash&amp;ref_src=twsrc%5Etfw">#PowerApps</a><br><br>新アプリ <a href="https://t.co/r5kryPYauQ">pic.twitter.com/r5kryPYauQ</a></p>&mdash; たく丸 (@taku_ma_ru) <a href="https://twitter.com/taku_ma_ru/status/1511878298825289728?ref_src=twsrc%5Etfw">April 7, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

旧アプリ

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/PowerApps?src=hash&amp;ref_src=twsrc%5Etfw">#PowerApps</a> <br>動作比較用<br>旧アプリ <a href="https://t.co/0cQHDpRtiX">pic.twitter.com/0cQHDpRtiX</a></p>&mdash; たく丸 (@taku_ma_ru) <a href="https://twitter.com/taku_ma_ru/status/1511879192182673409?ref_src=twsrc%5Etfw">April 7, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


何度か動作検証しましたが、 新アプリと Web はそこまで差を感じず、旧アプリは圧倒的に遅かったです。

# ネイティブ機能の検証

アプリやカメラを使っている場合は当然ですが、利用許可が求められますね。

<img src="/assets/blogpost/2022/041015.png"/><br/>

実験的に StreemCam で バーコードスキャンを試してみましたが、問題なくスキャンができました。

<img src="/assets/blogpost/2022/041016.png"/><br/>

この部分は後でバーコードスキャナーを手に入れて別途動作を確認したいです。


MR系は動かないみたいですね。

<img src="/assets/blogpost/2022/041017.png"/><br/>



# リンク


- [Announcing Public Preview of a new Power Apps application on Windows](https://powerapps.microsoft.com/ja-jp/blog/announcing-public-preview-of-a-new-power-apps-application-on-windows/)




