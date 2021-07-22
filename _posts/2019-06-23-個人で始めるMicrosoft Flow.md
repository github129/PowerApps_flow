---
layout: post
title: "個人で無料で始める Microsoft Flow"
description: "Microsoft Flow を企業や Office365 がないと利用できないと思っていませんか？Microsoft Flow はいくつかの制限はありますが、個人で無料で利用できるサービスです。"
categories: [Flow]
tags: [Flow, 初心者向け, 解説]
image: >-
  https://www.powerplatform.work/assets/blogpost/2019/2019-06-23-01.PNG
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2019/2019-06-23-01.PNG
redirect_from:
  - /2019/06/23/
---

# Microsoft Flowとは

Microsoft 製の [IFTTT](https://ifttt.com/) のようなサービスで、None Code で 様々な他のサービスと連携することが可能です。

<iframe width="560" height="315" src="https://www.youtube.com/embed/4EKWKJc4b4c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

よく使われる場面として、

- 「何かを自動化したい」
- 「どこかにデータを渡したい」

に利用されます。

具体的に

- 「特定のメールは上司に転送する」
- 「決まったタイミングでTweet」
- 「ボタンを押すだけで休みますメールの送信」
- 「サイトの更新(RSS)をチェックして自動で Microsoft Teams に投稿する」

等が簡単に作れてしまいます。

Microsoft Flow を企業や Office365 がないと利用できないと思っていませんか？Microsoft Flow はいくつかの制限はありますが、個人で無料で利用できるサービスです。これを機に利用してみましょう。

# IFTTTと Microsoft Flow

先ほど IFTTT のようなサービスと紹介しましたが、決定的に違う場面は間に処理が挟めることです。

IFTTTの場合は 
```
もし何かが起こったら（トリガー）　これを実行する（アクション）
```

という１トリガー１アクション考えに対し

Microsoft Flowは

```
もし何かが起こったら(トリガー) 　これを実行して（アクション）　その後これを実行する（アクション）
```

といったような １トリガー N アクション が可能です。
その分複雑にはなってきますので、Microsoft Flowと比べて IFTTT のほうがライトユーザー向けになっています。


# 個人での始め方

Microsoft Flow は制限はありますが、個人アカウント（Microsoftアカウント）で利用できます。
つまり今から始める場合は hogehoge@outlook.jp といったアドレスで利用可能です。

## Microsoft アカウントを持っていない方

作成する場合は[こちらから](https://account.microsoft.com/account)

<a class="post-image" href="/assets/blogpost/2019/2019-06-23-01.PNG">
<img itemprop="image" data-src="/assets/blogpost/2019/2019-06-23-01.PNG" src="/assets/blogpost/2019/2019-06-23-01.PNG" alt="Microsoft アカウント作成01" />
</a>
<br>
<a class="post-image" href="/assets/blogpost/2019/2019-06-23-02.PNG">
<img itemprop="image" data-src="/assets/blogpost/2019/2019-06-23-02.PNG" src="/assets/blogpost/2019/2019-06-23-02.PNG" alt="Microsoft アカウント作成02" />
</a>
<br>
<a class="post-image" href="/assets/blogpost/2019/2019-06-23-03.PNG">
<img itemprop="image" data-src="/assets/blogpost/2019/2019-06-23-03.PNG" src="/assets/blogpost/2019/2019-06-23-03.PNG" alt="Microsoft アカウント作成03" />
</a>

## Microsoft アカウントをお持ちの方

Microsoft アカウントすでに持っている又は作成後は Microsoft Flowへアクセス、ログインを行います。

[https://japan.flow.microsoft.com/ja-jp/](https://japan.flow.microsoft.com/ja-jp/)

<a class="post-image" href="/assets/blogpost/2019/2019-06-23-04.PNG">
<img itemprop="image" data-src="/assets/blogpost/2019/2019-06-23-04.PNG" src="/assets/blogpost/2019/2019-06-23-04.PNG" alt="Microsoft Flow ログイン01" />
</a>
<br>

任意の国を選択し「開始」を選択します。

<a class="post-image" href="/assets/blogpost/2019/2019-06-23-05.PNG">
<img itemprop="image" data-src="/assets/blogpost/2019/2019-06-23-05.PNG" src="/assets/blogpost/2019/2019-06-23-05.PNG" alt="Microsoft Flow ログイン02" />
</a>

以上で個人で Microsoft Flowを始めるスタート地点には立ちました。

もちろん個人でなくとも、業務であればお使いの Office365 にログインしているアカウントでも利用可能です。

具体的な Flow は次回以降に作成します。

# Freeプランの制限について

個人での利用に制限というわけではなく Freeプランに制限があります。

[https://japan.flow.microsoft.com/ja-jp/pricing/](https://japan.flow.microsoft.com/ja-jp/pricing/)

## コネクタ

標準コネクタと呼ばれるものと、組み込み済みのコネクタの一部のみ利用可能です。Premium コネクタと呼ばれるものは Microsoft Flow Plan1以上で利用が可能になります。

## 実行回数

１か月あたり 750回 という制限があります。

## SLA

保証されていません

## Flow の実行頻度

Microsoft Flowには実行頻度という考え方があります。

例えば 

「ファイルが作成されたときに処理を実行する」

といった処理場合 Microsoft Flow がファイルの差分を見に行くわけですが、その頻度が Freeプランの場合 15 分に 1 回となります。


<a class="post-image" href="/assets/blogpost/2019/2019-06-23-06.PNG">
<img itemprop="image" data-src="/assets/blogpost/2019/2019-06-23-06.PNG" src="/assets/blogpost/2019/2019-06-23-06.PNG" alt="Microsoft Flow プラン01" />
</a>
<br>
<a class="post-image" href="/assets/blogpost/2019/2019-06-23-07.PNG">
<img itemprop="image" data-src="/assets/blogpost/2019/2019-06-23-07.PNG" src="/assets/blogpost/2019/2019-06-23-07.PNG" alt="Microsoft Flow プラン02" />
</a>