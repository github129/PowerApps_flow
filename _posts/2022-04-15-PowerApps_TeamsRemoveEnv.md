---
layout: post
title: "Dataverse for Teams の環境ってチームを削除すると消えるけど、環境を復元したらチームってどうなるの？"
description: "ショートカットを駆使することで、飛躍的にアプリを作る速度が向上します。"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/041508.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/041508.png
redirect_from:
  - /2022/04/15/
---


#  概要

本記事は 2022/04/13 時点での内容です。また、画像に移っているチームは実際のチームではなく、Microsoft が提供しているサンプルのチームになります。

Dataverse for Teams の環境は基本的に Microsoft Teams のチームと連動しています。そのため、セキュリティロールの管理は所有者やメンバーといった権限に対して行ったり、チームを削除すると環境そのものも削除されます。

さて、Power Platform の管理センターには削除された環境の復元という機能が存在します。もし、チームを削除した後に環境を復元した場合はどういった動きをするのでしょうか。実際に試してみました。

# 検証

## 環境の作成

まずはサクッとチームと Dataverse for Teams 用の環境を作成します。

<img src="/assets/blogpost/2022/041501.png"/><br/>
<img src="/assets/blogpost/2022/041502.png"/><br/>

管理センターにも表示されています。
次のステップでチームを削除してみましょう。

## チームを削除する

sample というチームを削除してみます。

<img src="/assets/blogpost/2022/041503.png"/><br/>
<img src="/assets/blogpost/2022/041504.png"/><br/>

直後に管理センターに確認しに行きましたが、Redy の状態なので、すぐには削除されないようですね。少し時間をおいてみましょう。

<img src="/assets/blogpost/2022/041505.png"/><br/>

１時間ほど待ったところ、一覧から削除されました。

<img src="/assets/blogpost/2022/041506.png"/><br/>

## 復元してみる

削除された環境を復元してみましょう。

<img src="/assets/blogpost/2022/041507.png"/><br/>
<img src="/assets/blogpost/2022/041508.png"/><br/>

続行を選択します。

<img src="/assets/blogpost/2022/041509.png"/><br/>

復元が完了しました。

<img src="/assets/blogpost/2022/04110.png"/><br/>

一覧に Redy の状態で戻っていることも確認できました。

<img src="/assets/blogpost/2022/04111.png"/><br/>

## チームの方はどうなっている？

当然といえば当然ですが、チームは削除された状態のままになります。

<img src="/assets/blogpost/2022/04112.png"/><br/>

通常であれば、画像のようにアプリを共有することも可能ですが、

<img src="/assets/blogpost/2022/04113.png"/><br/>

セキュリティグループもなくなっているため、共有することもできません。

<img src="/assets/blogpost/2022/04114.png"/><br/>

もしチームを復元する場合は、管理センターから復元する形になります。

<img src="/assets/blogpost/2022/04115.png"/><br/>

復元後は問題なく共有ができるようになっています。

<img src="/assets/blogpost/2022/04116.png"/><br/>

# まとめ

チームなどを削除した際に Dataverse for Teams の環境も削除されますが、元に戻したい場合は、環境の復元に加えて、グループの復元も必要です。


# リンク

- [環境のライフサイクル](https://docs.microsoft.com/ja-jp/power-platform/admin/about-teams-environment#environment-lifecycle)
