---
layout: post
title: "Power Apps の Patch 関数とは　その使い方も解説"
description: "本記事では Power Apps のキャンバスアプリの Patch 関数とその使い方を解説します"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2022/05/05/
---


#  概要

本記事では Power Apps のキャンバスアプリの Patch 関数とその使い方を解説します。

# Patch 関数とは

公式サイトの説明はこちら

[Power Apps の Patch 関数](https://docs.microsoft.com/ja-jp/power-apps/maker/canvas-apps/functions/function-patch)

```
データ ソース 内で 1 つ以上の レコード を変更または作成するか、データ ソースの外部でレコードをマージします。
```


つまり、データソース（例えば Excel や SharePoint Lists、SQLDatabase など）に対して、編集や追加といったことを可能にする関数です。

# フォームの Submit との違いは？

基本的にはフォームコントロールの Submit と同じような動きをしますが、こちらはフォームコントロールを配置せずに使える点がメリットでしょうか。また、更新したい列にのみ影響を与えることができるのもメリットだと思います。

逆にフォームコントロール側は直感的に利用でき、また、エラーや成功時などの処理も簡単に記載できるというメリットはあります。

ただし、どちらもデータの編集や追加ができるといった点に違いはありません。

# 使い方

新規追加時と編集時では微妙に使い方が異なります。

新規追加時

```
Patch( Customers, Defaults( Customers ), { Name: "Contoso" } )
```


編集時

```
Patch( Customers, First( Filter( Customers, Name = "Contoso" ) ), { Name: "Contoso" } )
```

ポイントは２つ目の引数（渡している値）である

```
Defaults( Customers )
First( Filter( Customers, Name = "Contoso" ) )
```

の部分になります。この２つ目の引数のことを「基本レコード」といいます。

基本レコード がデフォルト（既定値）の場合はレコードを新規追加します。（新規追加時）逆に、基本レコードに特定のデータソースの行が指定されている場合はその行を更新します（編集時）

そのため、例えばギャラリーに直接データソースが指定されている場合は、
[動画](https://youtu.be/YNUsVwzQUVU)のように Gallery.Selected という値を基本レコードに指定することができます。


# Tips

実はデータソースに対してデータを追加できる関数は他にも存在します。ぜひこちらの記事をご確認ください。

[Power Apps でデータを追加する時はCollect関数とPatch関数はどちらを使うべき？２つの関数の違いは？](https://www.powerplatform.work/PowerApps_CollectFunc_vs_PatchFunc/)

# リンク

- [Power Apps の Patch 関数](https://docs.microsoft.com/ja-jp/power-apps/maker/canvas-apps/functions/function-patch)


