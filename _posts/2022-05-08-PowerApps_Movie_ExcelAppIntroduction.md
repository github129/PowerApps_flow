---
layout: post
title: "フォームコントロールを使わずに Excel を編集するアプリを作成する"
description: "本記事ではPower Apps のキャンバスアプリでフォームコントロールを使わずにExcelを編集する方法をご紹介します"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/050801.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/050801.png
redirect_from:
  - /2022/05/08/
---


#  概要

本記事ではPower Apps のキャンバスアプリでフォームコントロールを使わずにExcelを編集する方法をご紹介します

# 作成方法

<iframe width="1028" height="578" src="https://www.youtube.com/embed/YNUsVwzQUVU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## 使用した式

```
Navigate(Screen2)

Back()

Patch(ImportData,Gallery1.Selected,{名前: TextInput1.Text, 名前_カナ:TextInput1_1.Text});

```


# リンク

- [Power Apps で Excel を更新できるアプリを作る方法](https://www.youtube.com/watch?v=YNUsVwzQUVU)


