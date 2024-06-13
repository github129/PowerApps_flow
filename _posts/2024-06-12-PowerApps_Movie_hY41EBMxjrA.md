---
layout: post
title: "【ひと手間デザイン】Power Apps のギャラリーコントロールで選択した行をハイライトする方法"
description: "【ひと手間デザイン】Power Apps のギャラリーコントロールで選択した行をハイライトする方法を動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/061201.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/061201.jpg
redirect_from:
  - /2024/06/12
---


#  概要

【ひと手間デザイン】Power Apps のギャラリーコントロールで選択した行をハイライトする方法


# アプリの作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/hY41EBMxjrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


使用した式は動画の概要欄をご確認ください

## Power Appsのギャラリーコントロールで選択した行をハイライトする方法

まず、アプリにギャラリーコントロールを配置します。ギャラリーコントロールはデータの一覧表示に適していて、垂直または水平の2種類が存在します。次に、各項目の背景色の設定を変更していきます。

この設定は、`TemplateFill`プロパティを修正することで実現が可能です。選択しているかどうかの条件によって色を変更するため、`If`関数を利用します。ギャラリーコントロールには、選択している項目を管理するための`ThisItem.IsSelected`プロパティがあり、これを活用します。

具体的には、`IsSelected`プロパティが true の場合、つまり行が選択されている場合は背景色を黄色`RGBA(255,255,0,0.5)`にし、そうでない場合は透明`RGBA(0,0,0,0)`にします。このように設定することで、選択した行が一目でわかるようになり、ユーザーの操作性が向上します。

実際に動作を確認すると、選択した行が黄色でハイライトされていることが確認できひと手間加えるだけで、ユーザーのアプリの利用のしやすさが向上します



# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [【ひと手間デザイン】Power Apps のギャラリーコントロールで選択した行をハイライトする方法](https://www.youtube.com/watch?v=hY41EBMxjrA)

