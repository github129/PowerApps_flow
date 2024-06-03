---
layout: post
title: "SharePoint リストでデータを更新したときだけクラウドフローを実行する方法【トリガーの条件の設定の方法】 #PowerAutomate"
description: "SharePoint リストでデータを更新したときだけクラウドフローを実行する方法【トリガーの条件の設定の方法】 #PowerAutomateを動画で分かりやすく解説"
categories: [PowerAutomate]
tags: [PowerAutomate]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/060201.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/060201.jpg
redirect_from:
  - /2024/06/02
---


#  概要


SharePointリストが更新された際にのみクラウドフローを実行する方法を利用したい場面はそれなりにあります。SharePointコネクターのトリガーは「作成または更新された時」に実行されるものがありますが、「更新された時のみ」実行されるトリガーは存在しません。この動画では、作成時にフローが動作しないように、特定の条件を追加する方法を学びます。

# 動画

<iframe width="983" height="553" src="https://www.youtube.com/embed/91r1ITNGNRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


使用した式は動画の概要欄をご確認ください


### トリガーの条件の設定

トリガー自体を実行させないためには、トリガーの設定にある「トリガーの条件」を利用します。具体的には、SharePointリストの「登録日時」と「更新日時」の列を比較し、これらが一致していない場合にのみフローを実行する条件を設定します。データが作成された時は、これらの値は同じであり、データが更新された時にのみ「更新日時」が変更されるため、この差異を利用するのです。

もちろんトリガーはしてもよいということであれば、フローのアクションで条件分岐することも可能です。

### 式の記載とフィルターの利用

式の記載に不慣れな方でも、アレーのフィルターアクションを利用することで、簡単に条件を設定することができます。動画では、実際の利用方法とその設定が正しく機能していることを確認できます。



# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [SharePoint リストでデータを更新したときだけクラウドフローを実行する方法【トリガーの条件の設定の方法】 #PowerAutomate](https://www.youtube.com/watch?v=91r1ITNGNRw)

