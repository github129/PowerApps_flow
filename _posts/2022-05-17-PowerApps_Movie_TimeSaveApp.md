---
layout: post
title: "【簡易版】作業報告にも使える作業時間記録アプリの作り方【#PowerApps】"
description: "作業報告にも使える作業時間記録アプリの作り方"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/051701.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/051701.jpg
redirect_from:
  - /2022/05/17/
---


#  概要

Power Apps のキャンバスアプリで作業時間を記録するアプリの作成方法をご紹介します。


# 作業時間を記録するアプリの作成方法

<iframe width="971" height="546" src="https://www.youtube.com/embed/Urcx_jQ4i50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

使用した式

```
Set(glbNow,Now())
Text(glbNow,"hh:mm:ss")

Collect(logCollection,{label:"開始", time:Now()})
ColorFade(Self.Color, -15%)

SortByColumns(logCollection,"time",Descending)
```

[タイマーの説明動画](https://www.youtube.com/shorts/0zhy0dulmyA)




# その他の Tips はこちらから

Power Apps
https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- 

Power Automate
https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA

Power Apps で 備品管理アプリを作ろう
https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn

Power Apps Tutorial
https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_

# リンク


- [【簡易版】作業報告にも使える作業時間記録アプリの作り方【Power Apps】](https://www.youtube.com/watch?v=Urcx_jQ4i50)
