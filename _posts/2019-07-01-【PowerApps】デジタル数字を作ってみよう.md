---
layout: post
title: "【PowerApps】デジタル数字を作ってみよう"
description: "PowerApps（キャンバスアプリ）のコンポーネントに最近（2019年5月）追加された OnResetプロパティを使ってデジタル数字を作ってみる"
categories: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2019/20190701003.PNG
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2019/20190701003.PNG
tags: [PowerApps, コントロール, 関数,コンポーネント, キャンバスアプリ]
redirect_from:
  - /2019/07/01/
---


# 概要
PowerApps（キャンバスアプリ）のコンポーネントに最近（2019年5月）追加された OnResetプロパティを使ってデジタル数字を作ってみる。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/PowerApps?src=hash&amp;ref_src=twsrc%5Etfw">#PowerApps</a> <br><br>ちょいと改造。ある程度表示させても動作に問題はなさそう。 <a href="https://t.co/GJR7YrdEvr">pic.twitter.com/GJR7YrdEvr</a></p>&mdash; たく丸 (@taku_ma_ru) <a href="https://twitter.com/taku_ma_ru/status/1145701023194816512?ref_src=twsrc%5Etfw">2019年7月1日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


# コンポーネントを利用するには

コンポーネントは現時点（2019/07/1）ではまだプレビュー機能です。そのため詳細設定から機能を追加します。

[PowerApps の Componentsについて紹介 ](https://qiita.com/h-nagao/items/daf143225f28acb7990f)


<a class="post-image" href="/assets/blogpost/2019/20190701001.PNG">
<img itemprop="image" data-src="/assets/blogpost/2019/20190701001.PNG" src="/assets/blogpost/2019/20190701001.PNG" alt="コンポーネント設定" />
</a>


# OnResetプロパティとは

OnResetプロパティは Reset関数でコンポーネントをリセットしたときに実行されるプロパティです。

```
Reset(Component1);
```

# 実践

今回はコンポーネントを使ってデジタル時計を作っていきます。

<a class="post-image" href="/assets/blogpost/2019/20190701002.PNG">
<img itemprop="image" data-src="/assets/blogpost/2019/20190701002.PNG" src="/assets/blogpost/2019/20190701002.PNG" alt="完成品" />
</a>

## カスタムプロパティの設定

コンポーネントはコンポーネント内で利用できるプロパティ（値のみ）を独自に実装することが可能です。
今回はカスタムプロパティの【入力】を利用して、外部から値を設定できるようにします。

| 表示名      |       名前 |      説明 |    プロパティの型 |    データ型 | 
|:-----------------|:------------------|:-----------------|----------------:|----------------:|
| date             |              datetime|      表示に利用する日付 |      入力       |       日時        |
| MidStartingPosition           |            MidStartingPosition |       表示する数字のMid関数開始地点       |      入力|      数値|
| ViewFill|              ViewFill|        表示時の色|      入力|      色|
| HideFill|                HideFill|         非表示時の色|        入力|        色|


なおデータ型以外は自由に設定してかまいません。（あくまで一例です）
また、もう少し細かく設定できるほうが汎用性も上がりますが、今回の内容の主旨ではないため省略します。

<a class="post-image" href="/assets/blogpost/2019/20190701003.PNG">
<img itemprop="image" data-src="/assets/blogpost/2019/20190701003.PNG" src="/assets/blogpost/2019/20190701003.PNG" alt="カスタムプロパティ" />
</a>

## コンポーネントの設定

ここで今回の OnResetプロパティを設定していきます。

|プロパティ|式|
|:--|:--|
|Height|App.Height|
|Width|App.Width|
|**OnReset**|Set(now,Component1.datetime);|

## デザインの作成

デジタル数字っぽくなるように、適当に四角または画像を配置します。（画像のように角丸にしたい場合は画像のImageをBlank()に設定、各Radiusを任意の値で設定してください。）

配置したコンポーネントのFillを次のように設定します。

```
Switch(
    Value(Mid(Text(now,"[$-ja]yyyymmddhhmmssfff"),Component1.MidStartingPosition,1)),// ここは改善ポイント
    1,Component1.HideFill,
    2,Component1.HideFill,
    3,Component1.HideFill,
    4,Component1.ViewFill,
    5,Component1.ViewFill,
    6,Component1.ViewFill,
    7,Component1.ViewFill,
    8,Component1.ViewFill,
    9,Component1.ViewFill,
    0,Component1.ViewFill,
    Component1.HideFill
)
```

各デジタル数字に合うように設定してください。
最終的にこうなります。

<a class="post-image" href="/assets/blogpost/2019/20190701003.PNG">
<img itemprop="image" data-src="/assets/blogpost/2019/20190701003.PNG" src="/assets/blogpost/2019/20190701003.PNG" alt="コンポーネント全体像" />
</a>

## スクリーンの設定

コンポーネントをスクリーンに配置します。
挿入→コンポーネントから先ほど作ったコンポーネントを配置します。

次にタイマーコントロールを配置し、以下の設定を行います。

|プロパティ|式|
|:--|:--|
|OnTimerEnd|Set(Date,Now());Concurrent(Reset(Component1_1)|
|AutoStart|true|
|Repeat|true|
|Duration|100|

最後にスクリーンに配置したコンポーネントの設定を以下のようにします。

|プロパティ|式|
|:--|:--|
|datetime|Date|
|MidStartingPosition|14|
|ViewFill|RGBA(0, 18, 107, 1)|
|HideFill|RGBA(230, 230, 230, 1)|


以上で完成です。

今回のサンプルはこちらからダウンロードできます。
[OnResetサンプル.msapp](/assets/files/PowerApps/OnResetサンプルアプリ.msapp)

# まとめ

1. コンポーネントでタイマーコントロールを利用している場合は外に出せる場合がある。
2. OnResetプロパティはデフォルト値に戻す。すなわち設定した値が動的に変化しない値（例えばNow()）のような場合は思い通りの動作を行わない。そのため今回一時的に変数に移している。
3. ギャラリーコントロールを使うようにするともう少しすっきりしたコンポーネントになる。
