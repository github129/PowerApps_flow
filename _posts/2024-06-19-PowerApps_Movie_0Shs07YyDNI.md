---
layout: post
title: "Power Apps のフォームコントロールの外側から特定の項目を初期化する方法 【Reset関数はリセット可能なコントロールのみで使用できます。】#PowerApps"
description: "Power Apps のフォームコントロールの外側から特定の項目を初期化する方法 【Reset関数はリセット可能なコントロールのみで使用できます。】#PowerAppsを動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/061901.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/061901.jpg
redirect_from:
  - /2024/06/19
---


#  概要

Power Apps のフォームコントロールの外側から特定の項目を初期化する方法 【Reset関数はリセット可能なコントロールのみで使用できます。】#PowerApps


# 動画

<iframe width="983" height="553" src="https://www.youtube.com/embed/0Shs07YyDNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


使用した式は動画の概要欄をご確認ください

## Power Appsのフォームコントロール初期化のテクニック

通常、Power Apps で項目を初期化する場合は、`Reset`関数を用いてコントロールを初期化しますが、フォームコントロールの場合、初期化したい項目のデータカードの外側からはエラーが表示され、項目を初期化することができません。この問題を解決するためには、初期化が可能な各コントロールに用意されている`Reset`プロパティを利用する必要があります。

### ステップバイステップの解説

まず、ボタンコントロールで`UpdateContext`関数を使用して変数を作成します。この変数には真（`true`）を設定し、その後、同じ変数に偽（`false`）を設定するための関数を追加します。作成した変数を初期化したいコントロールのリセットプロパティに設定することで、リセットプロパティが偽から真に変わった時にそのコントロールを初期化することができます。

### 実際の動作確認

実際に動作を確認すると、正しく動作していることが確認できます。また、他にも初期化したいコントロールがある場合、同じ変数を複数のコントロールの`Reset`プロパティに設定することで、複数の項目を同時に初期化することが可能です。



# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [Power Apps のフォームコントロールの外側から特定の項目を初期化する方法 【Reset関数はリセット可能なコントロールのみで使用できます。】#PowerApps](https://www.youtube.com/watch?v=0Shs07YyDNI)

