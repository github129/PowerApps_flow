---
layout: post
title: "Power App でドロップダウンでギャラリーを絞り込むには？複数のドロップダウンにも対応"
description: "Power App でドロップダウンでギャラリーを絞り込むには？複数のドロップダウンにも対応"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/051401.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/051401.jpg
redirect_from:
  - /2022/05/14/
---


#  概要

Power Apps のキャンバスアプリでドロップダウン１つでギャラリーを絞り込む方法と、ドロップダウン２つ以上でギャラリーを絞り込む方法をご紹介します


# ドロップダウン１つ

<iframe width="971" height="546" src="https://www.youtube.com/embed/r4N7vbbUUpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

```
Filter(ImportData,性別 = Dropdown1.Selected.Value)
```

# ドロップダウン２つ以上

<iframe width="971" height="546" src="https://www.youtube.com/embed/QW106NeeTUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

```
Filter(ImportData, 性別=Dropdown1.Selected.Value && 所属=Dropdown1_1.Selected.Value)
```

- && であれば、すべての条件が一致していこと
- || であれば、どれか１つでも条件が一致していること

という形になります。

3つ以上やそれぞれを複数組み合わせて以下のような形で書くことも可能です。

```
Filter(ImportData, 性別=Dropdown1.Selected.Value && 所属=Dropdown1_1.Selected.Value || 名前=Dropdown2.Selected.Value)
```


この場合以下のような条件になっています。

「性別」　かつ　「所属」　が選択した値　**または** 名前が選択した値

このあたりはぜひいくつか組み合わせてチャレンジしてみてください。

# リンク


- [【１分で分かる】Power Appsでドロップダウンを１つ使ってギャラリーを絞り込む方法](https://www.youtube.com/watch?v=r4N7vbbUUpI)
- [【２分で分かる】ドロップダウンを２つ以上使ってギャラリーを絞り込む方法【Power Apps】](https://youtu.be/QW106NeeTUM)
