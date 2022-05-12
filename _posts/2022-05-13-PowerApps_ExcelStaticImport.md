---
layout: post
title: "Excel の static import 静的ファイルの読み込みの限界件数は何件・"
description: "Excel の 静的ファイル読み込みの限界数を調査しました"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/051301.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/051301.png
redirect_from:
  - /2022/05/13/
---


#  静的ファイルの読み取りとは

Power Apps では Excel を読み取る際に２種類のコネクタが存在します。

<img src="/assets/blogpost/2022/051301.png"/><br/>

## Excel Online(Business)

こちらは OneDrive や SharePoint 上に配置されているExcel ファイルへの読み書き等を使う際に利用するコネクタで一般的によく使う方のコネクタになります。

## Excel からインポート(static import)

今回解説する方のコネクタで書き込みや編集はできない静的なデータの代わりに 委任でよく出てくる 2,000件を超えてデータを扱うことができます。変更がほとんどないマスター系のデータ等につかるコネクタになります。

さて、ここで疑問になるのですが、果たしてこのコネクタは何件のデータを取り扱うことができるのでしょうか？実際に検証してみました。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Excel static import での最大件数は 15,000 件<a href="https://twitter.com/hashtag/PowerApps?src=hash&amp;ref_src=twsrc%5Etfw">#PowerApps</a> <a href="https://t.co/FALVSQDQLG">pic.twitter.com/FALVSQDQLG</a></p>&mdash; たく丸 (@taku_ma_ru) <a href="https://twitter.com/taku_ma_ru/status/1523558663239401472?ref_src=twsrc%5Etfw">May 9, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

検証した結果 15,000件のようです。
CountRows や Index 関数自体はもっと先まで（CountRows に関しては１億までは検証済み）読み取ることができるため、結果としては正しいです。


# まとめ

Excel ファイルの static import では 15,000 件までインポートすることができます。


