---
layout: post
title: "Power Apps Portal のライフサイクル"
description: "ポータル ライフサイクル　「試用版」「運用版」「停止」「削除」が存在し、各段階への変更時にトースト通知と電子メールで通知されます"
categories: [Power Apps, Power Apps Portals]
tags: [Power Apps, Power Apps Portals]
image: >-
  https://www.powerplatform.work/assets/img/thumbnail/2021-09-09.png
optimized_image: >-
  https://www.powerplatform.work/assets/img/thumbnail/2021-09-09.png
redirect_from:
  - /2021/09/09/
paginate: true
---

# Power Apps Portals （Power Apps ポータル）とは

Power Apps Portals は、コミュニティ、顧客、パートナー、従業員などの外部向けに公開できるウェブサイトを管理・構築できるサービスです。
Dataverse に保存された情報を外部へ発信したり、一般向けページ（匿名アクセス）と会員向けページ（ログインサイト）を組み合せたサイトも作成できます。

キャンバスアプリやモデル駆動型と同じく、ノーコードでも作成が可能ですが、社内向けアプリと違い、外部へ公開するためにそれなりに見た目や機能をこだわるためには、 HTML、CSS、Liquid, Javascript などの理解が必要となってきます。

# Power Apps Portals のライフサイクル

ポータルは、試用版として常に作成されます。 仕様版は 30日後に有効期限が切れ、その後ポータルは停止されシャットダウンされます。 

停止から 7 日後に、試用版ポータルは削除されます。 

ポータル ライフサイクル　「試用版」「運用版」「停止」「削除」が存在し、各段階への変更時にトースト通知と電子メールで通知されます。


<a class="post-image" href="/assets/blogpost/2021/2021-09-09-01.png">
<img itemprop="image" src="/assets/blogpost/2021/2021-09-09-01.png" alt="ライフサイクル" />
</a>
<br>

## 試用版

すべてのポータルは、30 日後に有効期限が切れる試用版ポータルとして開始されます。
こちらを試す場合は、 Developer Plan で利用することができます。

## 運用版

運用時のポータル。仕様版または停止状態から変更が可能。
ただし、変更には **適切なライセンス** が必要です。

## 停止

仕様版が 30日経過した場合、自動的に停止状態になります。
停止状態になったポータルへのアクセスはできなくなりますが、７日以内であれば、運用版への変更が可能です。

## 削除

停止状態から７日が経過すると自動的にポータルは削除されます。ポータルのメタデータは削除されませんが、環境で使用されていたポータルの領域は解放され、新たに試用版を作ることが可能です。

# 参考

[Power Apps ポータルのライフサイクル](https://docs.microsoft.com/ja-jp/powerapps/maker/portals/admin/portal-lifecycle)

