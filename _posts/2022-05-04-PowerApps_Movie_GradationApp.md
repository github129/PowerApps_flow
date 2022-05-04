---
layout: post
title: "Power Apps でおしゃれなグラデーション背景のアプリを作成する"
description: "本記事では Power Apps のキャンバスアプリでおしゃれなグラデーション背景のアプリの作成方法について解説します"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/050401.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/050401.png
redirect_from:
  - /2022/05/04/
---


#  概要

本記事では Power Apps のキャンバスアプリでおしゃれなグラデーション背景のアプリの作成方法について解説します

# 作成方法

<iframe width="756" height="425" src="https://www.youtube.com/embed/5KIG382mFuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

使用した式は以下になります。

```

"<div
style=""
width:"&App.Width&"px;
height:"&App.Height-1&"px;
background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);""
/>"


```

上記の式の

```
background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
```

を好きなグラデーションに変えて使ってみましょう。

# リンク

- [Power Apps でおしゃれなグラデーション背景のアプリを作成する](https://www.youtube.com/embed/5KIG382mFuc)


