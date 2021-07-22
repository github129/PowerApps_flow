---
layout: post
title: "PowerApps+ Microsoft Forms Pro + Flow を使ってユーザーごとに質問を変えるフォームを作成する"
description: "2019年7月にGAされた Forms Pro と PowerApps + Flow を使ってユーザーごとにフォームの質問内容を変えてみる"
categories: [PowerApps,Flow,FormsPro]
image: >-
  https://www.powerplatform.work/assets/blogpost/2019/2019-07-03-004.PNG
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2019/2019-07-03-004.PNG
tags: [PowerApps,キャンバスアプリ,Flow,Microsoft Forms Pro]
redirect_from:
  - /2019/07/03/
---


# 概要

GAされたばかり Forms Pro と PowerApps + Flow を使ってユーザーごとにフォームの質問内容を変えてみる

# Forms Pro の調査結果

[こちらから参照ください](https://qiita.com/github129/items/da20be6c34f0bb636afa)

# 作成

## Forms Pro

まず Forms Pro でフォームを作成します。

個人設定に
- タイトル
- 質問1
- 質問2

を作成します。

<a class="post-image" href="/assets/blogpost/2019/2019-07-03-006.PNG">
<img itemprop="image" data-src="/assets/blogpost/2019/2019-07-03-006.PNG" src="/assets/blogpost/2019/2019-07-03-006.PNG" alt="個人設定1" />
</a>
<br/>
<a class="post-image" href="/assets/blogpost/2019/2019-07-03-007.PNG">
<img itemprop="image" data-src="/assets/blogpost/2019/2019-07-03-007.PNG" src="/assets/blogpost/2019/2019-07-03-007.PNG" alt="個人設定2" />
</a>


## Flow

次に　Flow を作成します。
こちらは単純です。
PowerApps をトリガーにして Forms Pro コネクタの Send a survey アクションを指定します。

<a class="post-image" href="/assets/blogpost/2019/2019-07-03-001.PNG">
<img itemprop="image" data-src="/assets/blogpost/2019/2019-07-03-001.PNG" src="/assets/blogpost/2019/2019-07-03-001.PNG" alt="Flow" />
</a>


## PowerApps

最後に PowerApps で値を先ほど作成した Flow にわたるように作成して終了です。


<a class="post-image" href="/assets/blogpost/2019/2019-07-03-002.PNG">
<img itemprop="image" data-src="/assets/blogpost/2019/2019-07-03-002.PNG" src="/assets/blogpost/2019/2019-07-03-002.PNG" alt="PowerApps" />
</a>

宛先相手にはメールアドレスが指定できます。


このように質問内容が変化することが確認できます。



<a class="post-image" href="/assets/blogpost/2019/2019-07-03-003.PNG">
<img itemprop="image" data-src="/assets/blogpost/2019/2019-07-03-003.PNG" src="/assets/blogpost/2019/2019-07-03-003.PNG" alt="FormsPro1" />
</a>
<br/>
<a class="post-image" href="/assets/blogpost/2019/2019-07-03-004.PNG">
<img itemprop="image" data-src="/assets/blogpost/2019/2019-07-03-004.PNG" src="/assets/blogpost/2019/2019-07-03-004.PNG" alt="FormsPro2" />
</a>