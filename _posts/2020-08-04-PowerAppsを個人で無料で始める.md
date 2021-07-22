---
layout: post
title: "個人で無料で始める Power Apps 2020年最新版【8月】"
description: "個人向けですが Power Apps を無料で始める方法は存在します。今回はそちらの解説を行います。あくまで個人での学習用の環境のため、決して企業内で本番環境として利用するなどはやめましょう。"
categories: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2020/0728-21.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2020/0728-21.png
tags: [Power Apps, ライセンス, 初心者向け, 解説]
redirect_from:
  - /2020/08/04/
---


# Power Apps とは

Power Apps とは Microsoft 製のローコード業務アプリケーション作成ツールです。様々なサービスやデータソースと１クリックで連携でき、非常に高速に業務アプリケーションを作成することができます。

使われる例として、

- 社内備品管理アプリ
- 市役所向けポータル（横浜市）
- 申請アプリ

などに利用されます。
また、変わり種として、Power Apps を使って 楽器を作成する方や、マリオのようなゲームを作成する方などもいます。


最近だと、MR機能等も導入されたりと、日々進化を繰り返しているサービスになります。

Power Apps は基本的に企業向けアカウント（onmicrosoft.comなど）が必要になり、個人で試すのは会社の許可が必要だと思っていませんか？

実はそんなことはなく、個人でも利用期間に限りはありますが、無料で利用することが可能です。（期限が過ぎたら再取得すれば何度でも可能。また、延長も可能）
今回はその方法を解説します。
本情報は 2020/8/4 時点での情報です。


# 個人での始め方

前提条件として、どういった状況であれ Power Apps を始めるには企業アカウントが必要です。そのため、まずは企業アカウントを作成します。そのためには現状 2 種類の方法が存在します。

## 方法１ Azure AD のアカウントを作成する

 Azure AD のアカウントのみを作成し、そのアカウントを利用して Power Apps を利用する方法です。こちらの場合は、 Power Apps はほぼすべての機能がり追う可能ですが、 Microsoft 365 (Office 365) が利用できないため、機能的に少し物足りない部分が出てくる可能性があります。（例えば Excel に書き込む、 SharePoint と連携するといったことが試しにくい）。もちろん試用版の Office 365 E3 ライセンス等を利用すれば連携は可能ですが、クレジットカードの登録が必要だったりで、少しハードルは高いです。そのため今回は方法２の方で環境を作成します。

 ## 方法２ 開発者プログラムを利用して環境を構築する

Microsoft 365 には開発者向けに 90日といった期間 E5相当のライセンスを無償で提供してくれる仕組みが存在します。こちらは期間の延長や、再取得が可能で、何度でも環境を構築することが可能です。
ただし、前提条件として、Microsoft アカウント(outlook.jp等)が必要となってきますので、もしまだ取得していない場合は、こちらから取得してください。
https://support.microsoft.com/ja-jp/help/4026324/microsoft-account-how-to-create

### 開発者プログラムに参加する

今回はこちらを利用して環境を構築します。まずは開発者プログラムに参加しましょう。下のURLにアクセスし、Microsoft 365 開発者プログラムに参加するを選択しましょう。

https://docs.microsoft.com/ja-jp/office/developer-program/microsoft-365-developer-program


<a class="post-image" href="/assets/blogpost/2020/0728-01.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-01.png" src="/assets/blogpost/2020/0728-01.png" alt="開発者プログラムへ参加01" />
</a>
<br>

「に参加する」を選択し、事前に用意した Microsoftアカウントでログインします。

<a class="post-image" href="/assets/blogpost/2020/0728-02.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-02.png" src="/assets/blogpost/2020/0728-02.png" alt="開発者プログラムへ参加" />
</a>
<br>

また、まだアカウントが用意できていない場合は以下の手順で作成してください。

<a class="post-image" href="/assets/blogpost/2020/0728-03.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-03.png" src="/assets/blogpost/2020/0728-03.png" alt="開発者プログラムへ参加" />
</a>
<br>
<a class="post-image" href="/assets/blogpost/2020/0728-04.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-04.png" src="/assets/blogpost/2020/0728-04.png" alt="開発者プログラムへ参加" />
</a>
<br>
<a class="post-image" href="/assets/blogpost/2020/0728-05.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-05.png" src="/assets/blogpost/2020/0728-05.png" alt="開発者プログラムへ参加" />
</a>
<br>
<a class="post-image" href="/assets/blogpost/2020/0728-06.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-06.png" src="/assets/blogpost/2020/0728-06.png" alt="開発者プログラムへ参加" />
</a>
<br>
<a class="post-image" href="/assets/blogpost/2020/0728-07.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-07.png" src="/assets/blogpost/2020/0728-07.png" alt="開発者プログラムへ参加" />
</a>
<br>
<a class="post-image" href="/assets/blogpost/2020/0728-08.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-08.png" src="/assets/blogpost/2020/0728-08.png" alt="開発者プログラムへ参加" />
</a>
<br>
記載されているサイトにアクセスし、アカウント情報を入力します。


<a class="post-image" href="/assets/blogpost/2020/0728-09.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-09.png" src="/assets/blogpost/2020/0728-09.png" alt="開発者プログラムへ参加" />
</a>
<br>

再度アクセスし直し、参加を行います。
https://developer.microsoft.com/ja-JP/microsoft-365/dev-program


<a class="post-image" href="/assets/blogpost/2020/0728-10.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-10.png" src="/assets/blogpost/2020/0728-10.png" alt="開発者プログラムへ参加" />
</a>
<br>

必要な情報をすべて記載しましょう。
ポイントとして国に関しては会社で Microsoft 365 をご利用の場合はそちらと合わせておくと良いでしょう。（選択する国によっては提供されていない機能なども存在するため）



<a class="post-image" href="/assets/blogpost/2020/0728-11.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-11.png" src="/assets/blogpost/2020/0728-11.png" alt="開発者プログラムへ参加" />
</a>
<br>
<a class="post-image" href="/assets/blogpost/2020/0728-12.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-12.png" src="/assets/blogpost/2020/0728-12.png" alt="開発者プログラムへ参加" />
</a>
<br>
<a class="post-image" href="/assets/blogpost/2020/0728-13.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-13.png" src="/assets/blogpost/2020/0728-13.png" alt="開発者プログラムへ参加" />
</a>
<br>

これで開発者プログラムに参加しました。
続いて E5サブスクリプションをセットアップしましょう。

<a class="post-image" href="/assets/blogpost/2020/0728-14.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-14.png" src="/assets/blogpost/2020/0728-14.png" alt="開発者プログラムへ参加" />
</a>
<br>
<a class="post-image" href="/assets/blogpost/2020/0728-15.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-15.png" src="/assets/blogpost/2020/0728-15.png" alt="開発者プログラムへ参加" />
</a>
<br>

SMSを受け取れる電話番号を入力しコードの送信を選択します。

<a class="post-image" href="/assets/blogpost/2020/0728-16.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-16.png" src="/assets/blogpost/2020/0728-16.png" alt="開発者プログラムへ参加" />
</a>
<br>
<a class="post-image" href="/assets/blogpost/2020/0728-17.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-17.png" src="/assets/blogpost/2020/0728-17.png" alt="開発者プログラムへ参加" />
</a>
<br>
<a class="post-image" href="/assets/blogpost/2020/0728-18.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-18.png" src="/assets/blogpost/2020/0728-18.png" alt="開発者プログラムへ参加" />
</a>
<br>

1分ほど待つと無事作成が完了しました。

<a class="post-image" href="/assets/blogpost/2020/0728-19.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-19.png" src="/assets/blogpost/2020/0728-19.png" alt="開発者プログラムへ参加" />
</a>
<br>

これで Microsoft 365 を無料で利用できる 開発者プログラムへの参加と E5 環境の作成が完了しました。次に このアカウントに Power Apps のライセンスを付与していきます。


### Power Apps Community Plan を取得する

以下のサイトにアクセスします。

https://powerapps.microsoft.com/ja-jp/communityplan/

<a class="post-image" href="/assets/blogpost/2020/0728-20.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-20.png" src="/assets/blogpost/2020/0728-20.png" alt="コミュニティプラン" />
</a>
<br>
個人環境の作成を選択します。

1つ前の手順で作成したアカウント (onmicrosoft.com) でログインを行います。

<a class="post-image" href="/assets/blogpost/2020/0728-21.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-21.png" src="/assets/blogpost/2020/0728-21.png" alt="コミュニティプラン" />
</a>
<br>
セキュリティ情報の入力が必要な場合は入力を行ってください。

<a class="post-image" href="/assets/blogpost/2020/0728-22.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-22.png" src="/assets/blogpost/2020/0728-22.png" alt="コミュニティプラン" />
</a>
<br>

Japan を選択して、「同意する」を選択します。

<a class="post-image" href="/assets/blogpost/2020/0728-23.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-23.png" src="/assets/blogpost/2020/0728-23.png" alt="コミュニティプラン" />
</a>
<br>

<a class="post-image" href="/assets/blogpost/2020/0728-24.png">
<img itemprop="image" data-src="/assets/blogpost/2020/0728-24.png" src="/assets/blogpost/2020/0728-24.png" alt="コミュニティプラン" />
</a>
<br>

これで Power Apps が利用できる個人環境が作成できました。もし、画面が表示されない場合は、F5 等でページを再リロードしてください。

以上で Power Apps の環境の作り方は完了です。


# まとめ

今回は Power Apps の個人環境である Community Plan と Office 365 開発者プログラムを利用した、個人学習用の無料環境を作成してみました。

今回作成した環境はあくまで個人の学習用の環境ですので、会社での運用などでの利用はライセンスに違反する可能性があるので控えるようにしましょう。

また、開発者プログラムには期限がありますので、もし延長ができなかった場合は、上記の手順で再取得しましょう。
