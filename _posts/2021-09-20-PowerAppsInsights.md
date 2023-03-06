---
layout: post
title: "Power Apps のモニター機能を使って効率よくアプリをデバックする方法➀"
description: "Power Apps のモニター機能を使って効率よくアプリをデバックする方法をご紹介します"
categories: [Power Apps, モニター]
tags: [Power Apps, Power Apps Portals]
image: >-
  https://www.powerplatform.work/assets/img/thumbnail/2021-09-20.png
optimized_image: >-
  https://www.powerplatform.work/assets/img/thumbnail/2021-09-20.png
redirect_from:
  - /2021/09/20/
paginate: true
---

# Power Apps のモニター（監視）とは

Power Apps モニター機能を利用することで、公開されたバージョンのアプリケーションのデバッグを行うことができます。

例えば

「ボタンを押したときに土の順番で処理が行われているのか」とか

「通信時間の確認」とか

「裏側ではどういった処理を行っているのか」など事細かに確認することができます。この機能を利用することで、なぜかデータが表示されないとか、昨日までは正しく動作していたのに急におかしくなった、といった根本原因を素早く探すことができます。

# 監視機能を使う

監視機能はキャンバスアプリの高度なツールから利用することができます。


<a class="post-image" href="/assets/blogpost/2021/2021-09-20-01.png">
<img itemprop="image" src="/assets/blogpost/2021/2021-09-20-01.png" alt="高度なツール" />
</a>
<br>

起動すると以下のような画面になります。


<a class="post-image" href="/assets/blogpost/2021/2021-09-20-02.png">
<img itemprop="image" src="/assets/blogpost/2021/2021-09-20-02.png" alt="監視" />
</a>
<br>

この画面はおおよそ 60分ほどでセッションが切れます。セッションが切れると、正しくデバック情報が取得できなくなります。

そのため、長時間デバックを行う場合は、適度に開きなおすことをお勧めします。

試しに適当に Office365 コネクタで MyProfileV2 を変数に設定してみた結果です。

<a class="post-image" href="/assets/blogpost/2021/2021-09-20-03.png">
<img itemprop="image" src="/assets/blogpost/2021/2021-09-20-03.png" alt="監視" />
</a>
<br>

## ダウンロード

ダウンロードを選択することで、このログを JSON 形式で取得することができます。

<a class="post-image" href="/assets/blogpost/2021/2021-09-20-04.png">
<img itemprop="image" src="/assets/blogpost/2021/2021-09-20-04.png" alt="監視" />
</a>
<br>

## アップロード

前項でダウンロードした JSON ファイルの形式をアップロードボタンからアップロードし、表示し確認することができます。


<a class="post-image" href="/assets/blogpost/2021/2021-09-20-05.png">
<img itemprop="image" src="/assets/blogpost/2021/2021-09-20-05.png" alt="監視" />
</a>
<br>


## オプション

オプション機能は表示の仕方を変更する機能です。
オプション機能を使うことで、行の間隔や列の種類などを変更することができます。

### 行の密度

コンパクトを選択することで行の間隔を縮めることができます。
デフォルトの間隔は標準です。

標準

<a class="post-image" href="/assets/blogpost/2021/2021-09-20-07.png">
<img itemprop="image" src="/assets/blogpost/2021/2021-09-20-07.png" alt="監視" />
</a>
<br>

コンパクト

<a class="post-image" href="/assets/blogpost/2021/2021-09-20-06.png">
<img itemprop="image" src="/assets/blogpost/2021/2021-09-20-06.png" alt="監視" />
</a>
<br>

## 共同デバック（招待する）

監視機能ではユーザーを招待し、複数人で監視画面を表示することができます。
この機能を使うことで、例えば市民開発者では解決が難しい不具合をテクニカルサポートチームを招待することで解決することができます。

[モニターを使用した共同トラブルシューティング](https://docs.microsoft.com/ja-jp/powerapps/maker/monitor-collaborative-debugging)

このメールアドレスは Azure AD に登録されているメールアドレスを指定することができます。

また、監視対象のアプリを共有しなくても招待されたユーザーは監視機能を利用することができます。

# 参考

[モニターでキャンバス アプリをデバッグする](https://docs.microsoft.com/ja-jp/powerapps/maker/monitor-canvasapps)

