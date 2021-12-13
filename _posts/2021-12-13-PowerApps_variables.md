---
layout: post
title: "Power Apps にローカル変数は存在しません"
description: ""
categories: [Power Apps, 初心者向け]
tags: [Power Apps, 変数]
image: >-
  https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/183354/9fb0516f-e8c7-dc74-137c-ef664ee65f1e.png
optimized_image: >-
  https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/183354/9fb0516f-e8c7-dc74-137c-ef664ee65f1e.png
redirect_from:
  - /2021/12/13/
paginate: true
---


# Power Apps にはローカル変数が存在しません

Power Apps にはプログラミング言語のように変数が存在します。

よくPower Apps の動画やブログなどでは**グローバル変数**と**ローカル変数**と紹介されていますが、このうちローカル変数は実は存在しません。

Power Apps 公式ドキュメントでは以下のように記載されています。

```
Power Apps には 3 種類の変数があります。

- グローバル変数
- コンテキスト変数
- コレクション

```

実際に Power Apps には **3種類** の変数が存在し、そのうちローカル変数は存在せず、代わりに **コンテキスト変数** が存在します。このコンテキスト変数は宣言したスクリーン内のみで使える変数なので実質ローカル変数です。　公式ドキュメントでも以下のように記載されています。


```
別のプログラミング ツールを使用したことがある場合、コンテキスト変数をローカル変数とほぼ同じものだと考えてもよいでしょう。
```

# 結論

Power Apps には用語としてローカル変数は存在しませんが、機能としては存在します。


# 参考

- [UpdateContext](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-updatecontext)
- [変数の種類](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/working-with-variables#types-of-variables)

