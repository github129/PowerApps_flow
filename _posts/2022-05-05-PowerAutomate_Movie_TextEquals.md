---
layout: post
title: "Power Automate でテキストを比較する２つの方法"
description: "本記事では Power Apps のキャンバスアプリでおしゃれなグラデーション背景のアプリの作成方法について解説します"
categories: [PowerAutomate]
tags: [PowerAutomate]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/050501.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/050501.png
redirect_from:
  - /2022/05/05/
---


#  概要

本記事では Power Automate でテキストの比較方法を２種ご紹介します。

# 作成方法

<iframe width="756" height="425" src="https://www.youtube.com/embed/-YnJYT0ASEM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

使用した式は以下になります。

```

if(equals(variables('Text'),'TEST'),true,false)

```

比較するには equals 関数を使用し比較します。今回は if 関数は必要ありませんが、実際に利用する際には比較だけで使うことはほとんどないため、必要はないですが、あえて記載しています。



# リンク

- [【式が無効です】Power Automate で テキストを比較する２つの方法](https://www.youtube.com/embed/-YnJYT0ASEM)


