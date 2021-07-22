---
layout: post
title: "Power Apps Acceleration シグナルの使い方と解説"
description: "Power Apps の キャンバスアプリ の Acceleration プロパティに関する解説です。この記事を読むことで Acceleration の使い方をマスターすることができます。Acceleration は デバイスの画面に対して相対的な 3 次元におけるデバイスの加速度を返します "
categories: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
tags: [Power Apps,初心者向け,関数解説,キャンバスアプリ]
redirect_from:
  - /2020/06/29/
---

#  概要

Power Apps のキャンバスアプリの関数・プロパティの解説と実際の使い方に関する記事。
今回解説する関数は Acceleration シグナルになります。
また、この情報は 2020/6/29 時点の日本環境でのものとなります。

# Acceleration プロパティとは

公式より
```
Acceleration シグナルは、デバイスの画面に対して相対的な 3 次元におけるデバイスの加速度を返します。 加速度は、9.81 m/秒2 単位または 32.2 ft/秒2 単位、つまり g (地球の重力によって地上の物体に与えられる加速度) で表されます。
```

つまり、Acceleration シグナルを利用することで、デバイスの3次元加速度を理ゆすることができるようになります。また、Acceleration シグナルは PC では利用できず、 2020/06/29 時点ではスマートフォンのみで利用可能です。

# 書き方
書き方は以下になります。

```
Acceleration.X
```

また、他に Y 軸と Z 軸を指定することができます。

```
Acceleration.Y
```

```
Acceleration.Z
```



# 使い方

実際には以下のような場面で利用することになるかと思います。

- デバイスを傾けたときに動作させるアプリケーションの作成
- 傾きや加速度を利用するゲームの作成

実際にはこれら以外にもあるかと思いますが、ゲーム等に向いているシグナルで、業務アプリケーションにはあまり利用する機会はないかと思います。

# まとめ

Acceleration シグナルとは以下のような特性を持っています。

1. Acceleration シグナルは デバイスの3次元加速度を取得することができます
2. Acceleration シグナルは基本的にモバイルでのみ動作します。



# 参考
[公式ドキュメント](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/signals#acceleration)
