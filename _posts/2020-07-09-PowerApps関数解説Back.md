---
layout: post
title: "Power Apps Back 関数の使い方と解説"
description: "Power Apps の キャンバスアプリ の Back に関する解説です。この記事を読むことで　Back の使い方をマスターすることができます。Back はキャンバスアプリで前のページに戻る際に利用します"
categories: [PowerApps]
tags: [Power Apps,初心者向け,関数解説,キャンバスアプリ]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2020/07/09/
---

#  概要

Power Apps のキャンバスアプリの関数・プロパティの解説と実際の使い方に関する記事。
今回解説する関数は Back 関数になります。
また、この情報は 2020/7/9 時点の日本環境でのものとなります。

# Back 関数とは

公式より
```
Back 関数は、最後に表示された画面に戻ります。
```

つまり、 Back 関数は前のページに戻るために利用する関数になります。


# 書き方
書き方は以下になります。

```
Back()
```

または

```
Back(アニメーション)
```

となり、実際にアニメーション値を入れると以下のように指定します。


```
Back(ScreenTransition.Fade)
```

規定値では None が指定されており、アニメーションを行わない設定になっています。指定しない場合はアニメーションは実行されずページが前のページに戻ります。
また、アニメーションは全部で以下になります。
- ScreenTransition.Cover
- ScreenTransition.CoverRight
- ScreenTransition.Fade
- ScreenTransition.None 
- ScreenTransition.UnCover
- ScreenTransition.UnCoverRight	
  
詳しくどんな感じにアニメーションするかは公式ページをご参照ください。


# 使い方

実際には以下のような場面で利用することになるかと思います。

- キャンバスアプリで前のページに戻る場合

Navigate 関数でも前ページに戻るように作成することは可能ですが、複数の画面からくる場合の時に正確に前のページに戻る場合は Back 関数を利用したほうがよいでしょう。

# まとめ

Back 関数とは以下のような特性を持っています。

1. Back 関数 はキャンバスアプリで前のページに戻る場合に利用します。


# 参考
[公式ドキュメント](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-navigate#back)
