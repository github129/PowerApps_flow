---
layout: post
title: "Power Apps Portal のキャッシュ"
description: ""
categories: [Power Apps, Power Apps Portals]
tags: [Power Apps, Power Apps Portals]
image: >-
  https://www.powerplatform.work/assets/img/thumbnail/2021-09-10.png
optimized_image: >-
  https://www.powerplatform.work/assets/img/thumbnail/2021-09-10.png
redirect_from:
  - /2021/09/10/
paginate: true
---

# Power Apps Portals （Power Apps ポータル）とは

Power Apps Portals は、コミュニティ、顧客、パートナー、従業員などの外部向けに公開できるウェブサイトを管理・構築できるサービスです。
Dataverse に保存された情報を外部へ発信したり、一般向けページ（匿名アクセス）と会員向けページ（ログインサイト）を組み合せたサイトも作成できます。

キャンバスアプリやモデル駆動型と同じく、ノーコードでも作成が可能ですが、社内向けアプリと違い、外部へ公開するためにそれなりに見た目や機能をこだわるためには、 HTML、CSS、Liquid, Javascript などの理解が必要となってきます。

# Power Apps Portals のキャッシュ

ポータルは、キャッシュという仕組みで表示の高速化を行っています。

キャッシュという仕組みによって高速化がされているため、常に最新の Dataverse のデータが Power Apps Portals に表示されているとは限りません。

ポータルのバージョンが9.2.6.x 以降のバージョンはそのキャッシュの機能は向上していますが、
データが反映されるには最大 15分の遅延が存在します。

## キャッシュを強制的にリセットする

Power Apps Portals で管理者としてサインインを行います。(Azure AD)
その後以下のURLにアクセスします。

https://[path].powerappsportals.com/_services/about

すると以下のような画面が表示されますので、キャッシュのクリアのボタンを選択することでキャッシュがクリアされます。


<a class="post-image" href="/assets/blogpost/2021/2021-09-10-01.png">
<img itemprop="image" src="/assets/blogpost/2021/2021-09-10-01.png" alt="ポータル設定画面" />
</a>
<br>

説明文に書いてある通り、キャッシュをクリアすることで、再度 Dataverse のデータを取得するため、一時的にパフォーマンスが低下する点に注意が必要です。


# 参考

[ポータルのサーバサイド キャッシュ](https://docs.microsoft.com/ja-jp/powerapps/maker/portals/admin/clear-server-side-cache)

