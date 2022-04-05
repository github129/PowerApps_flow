---
layout: post
title: "Dataverse でフォームの列が誤って削除されないように列をロックしよう"
description: "フォームを設定していて他の人が誤って必要な列を削除してしまうことを防ぐには列のロックを行いましょう"
categories: [Dataverse]
tags: [Dataverse]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/040502.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/040502.png
redirect_from:
  - /2022/04/05/
---

#  概要

Dataverse は特定の列のロックをすることでその列を削除することを防ぐことができます。


# やり方

Dataverse のフォームの編集画面へ行きます。
その後画像のように列を選択し、「ロック」にチェックボックスをつけます。

<img src="/assets/blogpost/2022/040501.png"/><br/>

これで設定は完了です。この状態で削除を行うと「ロックされているフォーム フィールドは削除できません。」と表示されます。

<img src="/assets/blogpost/2022/040502.png"/><br/>


# リンク


- [フォーム上の列を追加、移動、構成する](https://docs.microsoft.com/ja-jp/power-apps/maker/model-driven-apps/add-move-or-delete-fields-on-form#column-properties)




