---
layout: post
title: "Microsoft Teamsへの遅延投稿アプリを作る"
description: "Power Apps でTeams への遅延投稿を実現してみた！？動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/061201.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/061201.jpg
redirect_from:
  - /2022/06/12/
---


#  概要

Power Apps と Power Automate を組み合わせて Microsoft Teams で遅延投稿をするためのアプリの作り方をご紹介します。


# アプリの作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/ByIK41vS0gw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


使用した式

```
Teamsへ投稿する.Run(Value(TextInput2.Text),RichTextEditor3.HtmlText)

$"{DateAdd(Now(),Value(TextInput2.Text),Hours)}に送信されます"
```



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


- [【簡易予約投稿】Teamsへの遅延投稿アプリを作る方法【#PowerApps #PowerAutomate】](https://www.youtube.com/watch?v=ByIK41vS0gw)
