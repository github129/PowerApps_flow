---
layout: post
title: "PowerApps フォームの中にギャラリーを入れるには"
description: "PowerAppsのフォームコントロールには通常はいらないギャラリーを入れる方法です"
categories: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2019/2019-07-09-002.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2019/2019-07-09-002.png
tags: [PowerApps,キャンバスアプリ,小技]
redirect_from:
  - /2019/07/09/
---

# 概要

1. フォームコントロールの中にギャラリーコントロールを入れる方法
2. ギャラリーコントロールの中にギャラリーコントロールを入れる方法
3. スクロールスクリーンの中にギャラリーを入れる方法


# 結論

すべて可能(2019/07/09時点)

# やり方

## 1 フォームコントロールの中にギャラリーコントロールを入れる

普通に挿入するのでは不可能なので

手順
1. フィールドプロパティのロックを解除
2. ギャラリーをスクリーンに対して配置
3. 配置したギャラリーを コピー or 切り取り
4. 配置したいデータカードを選択して貼り付け

<a class="post-image" href="/assets/blogpost/2019/2019-07-09-002.png">
<img itemprop="image" data-src="/assets/blogpost/2019/2019-07-09-002.png" src="/assets/blogpost/2019/2019-07-09-002.png" alt="フォームinギャラリー" />
</a>


## 2 ギャラリーコントロールの中にギャラリーコントロールを入れる

普通に挿入してください。

ただし、ギャラリーの中のコントロールを指定した状態でないと入りません。

## 3 スクロールスクリーンの中にギャラリーを入れる方法

フォームと同じでコピー＆貼り付けで可能です

手順
1. ギャラリーをスクリーンに対して配置
2. 配置したギャラリーを コピー or 切り取り
3. 配置したいデータカードを選択して貼り付け

<a class="post-image" href="/assets/blogpost/2019/2019-07-09-001.PNG">
<img itemprop="image" data-src="/assets/blogpost/2019/2019-07-09-001.PNG" src="/assets/blogpost/2019/2019-07-09-001.PNG" alt="スクロールスクリーンinギャラリー" />
</a>


# まとめ

1. **入らなかったら基本はコピー＆貼り付け**
2. ギャラリーは２階層まで可能（ただし、条件次第で１階層しかできない場合もあります。試してください。）


サンプルのDLは[こちらから](/assets/files/PowerApps/20190709_sample001.msapp)