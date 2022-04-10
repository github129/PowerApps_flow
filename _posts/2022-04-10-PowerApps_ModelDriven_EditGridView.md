---
layout: post
title: "モデル駆動型のビュー内からテーブルの値を更新するには？"
description: "編集可能なグリッドコントロールをテーブルに追加しましょう"
categories: [Dataverse]
tags: [Dataverse]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/041006.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/041006.png
redirect_from:
  - /2022/04/10/
---

#  概要

モデル駆動型は ビューで一覧を表示し、フォームで編集するというのが普通の流れです。しかし、要件によっては Excel のように一覧を直接編集したいこともあると思います。
その際は 編集可能なグリッドコントロール を利用して実現します。以下はその設定方法になります。

# やり方

ソリューションエクスプローラーを起動します。([起動方法](https://www.powerplatform.work/Dataverse_SolutionExplorerOpen/))

左メニューのエンティティの一覧から追加したいエンティティを選択します。今回はユーザーエンティティを選択しています。

<img src="/assets/blogpost/2022/041002.png"/><br/>

コントロールタブからコントロールの追加を選択します。

<img src="/assets/blogpost/2022/041003.png"/><br/>

一番下（2022/04/06 時点）の編集可能グリッド を追加します。

<img src="/assets/blogpost/2022/041004.png"/><br/>
<img src="/assets/blogpost/2022/041005.png"/><br/>

表示したい箇所のラジオボタンを設定しましょう。今回はPC画面(Web)でのみ編集可能グリッドを追加します。
追加したら左上の保存ボタンを押しましょう。

<img src="/assets/blogpost/2022/041006.png"/><br/>

以上で設定は完了です。実際にモデル駆動型アプリを使って動作を確認してみましょう。
（実際にビューに反映されるまでに 5分ほど掛かる場合があります）

<img src="/assets/blogpost/2022/041006.png"/><br/>

画像のようにビュー内で編集が可能になりました。

# リンク


- [編集可能グリッドの有効化](https://docs.microsoft.com/ja-jp/power-apps/developer/model-driven-apps/use-editable-grids#enable-editable-grids)




