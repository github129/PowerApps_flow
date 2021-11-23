---
layout: post
title: "Power Apps のモニター機能を使って効率よくアプリをデバックする方法➀"
description: ""
categories: [Power Apps, モニター]
tags: [Power Apps, Power Apps Portals]
image: >-
  https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/183354/9fb0516f-e8c7-dc74-137c-ef664ee65f1e.png
optimized_image: >-
  https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/183354/9fb0516f-e8c7-dc74-137c-ef664ee65f1e.png
redirect_from:
  - /2021/11/23/
paginate: true
---


# 概要

Power Apps モニター機能を使って公開されているアプリをデバックする方法を記載しています。

なお本記事は Power Apps のバージョンが 3.20042 以降を使って公開されたアプリが必要です。古いアプリの場合は再度公開する必要があります。


# モニター（監視）機能とは

この機能はアプリの操作や通信などをログ形式で表示し、そこからパフォーマンスや問題点などを調査、修正するために提供されている機能です。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/183354/55448c47-47fa-351d-d7e1-8fe90472199c.png)


ログ形式のため、開発者でない方は表示されている項目に最初はお手上げっ状態になってしまいますが、何が表示されているのかを以下のサイトからご確認いただければ、徐々にわかってくるかと思います。

[モニターの概要](https://docs.microsoft.com/ja-jp/powerapps/maker/monitor-overview)

編集時のモニター機能の使い方は以下の記事になりますのでご確認ください。
[編集時のデバック機能を使う](https://qiita.com/taku_maru/private/3aef8ef38429cd83374a)

# やり方

公開されているアプリの監視を選択し、モニターを表示します。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/183354/9fb0516f-e8c7-dc74-137c-ef664ee65f1e.png)

すると、編集時のモニターとほぼ同じ画面が表示されます。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/183354/551f1c27-5bd7-e315-c3f5-cf3458c2470d.png)

「ほぼ」の理由は編集時とは右上の項目が2つ増えていることがわかります。
順番に解説します。

## 公開したアプリの再生

公開されたアプリを起動するボタンです。
ここからアプリを起動することで、モニターにログを表示することができます。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/183354/8414a1dd-98cc-0208-4e87-dc36f8d07324.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/183354/6490f24c-039a-49a4-42f9-aaf7348267e4.png)

モニターされているアプリは左上に赤い監視アイコンが表示されるのが特徴です。

## ユーザー接続

テナント内のユーザーのメールアドレスを入力することで、アプリを起動するリンクを作成し、そのリンクからアプリを起動することで、起動されたアプリのログをモニターに表示する機能です。
なお、リンクは 60分後に自動的に削除され、招待したユーザーのみそのリンクを利用することができます。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/183354/51312ed7-4d16-a5f5-b2af-85bd4027272c.png)
[参考](https://docs.microsoft.com/ja-jp/powerapps/maker/monitor-collaborative-debugging)

起動されたアプリは「公開したアプリの再生」を押したのと同様に左上に赤い監視アイコンが表示されます。

これによって、特定のユーザーの時にしか発生しない不具合や、権限によってアクセスできないデータによる不具合のデバックなどが可能になる非常に便利な機能です。


# ログを確認する

アプリを起動した後表示されたログを確認し、デバックを行います。
どういったログが表示されているのかはこちらをご確認ください。

[モニターダッシュボード](https://docs.microsoft.com/ja-jp/powerapps/maker/monitor-overview#monitor-dashboard)


# 制限事項

この機能には 2021/11/23 時点でいくつか制限があるので、こちらの記事をご確認ください。
[サポートされていないモニターのシナリオ](https://docs.microsoft.com/ja-jp/powerapps/maker/monitor-advanced#unsupported-scenarios-for-monitor)

# まとめ

ログ機能を用いることで、効率よく修正箇所を探すことができます。小規模なアプリでは必要になることはそこまでありませんが、パフォーマンスをある程度求められるアプリや、機能が多く複雑なアプリのデバックの効率は格段に上がるため、ぜひ覚えておきましょう。

# 参考

- [モニターの概要](https://docs.microsoft.com/ja-jp/powerapps/maker/monitor-overview)
- [モニターを使用した共同トラブルシューティング](https://docs.microsoft.com/ja-jp/powerapps/maker/monitor-collaborative-debugging)
- [モニターでキャンバス アプリをデバッグする](https://docs.microsoft.com/ja-jp/powerapps/maker/monitor-canvasapps)
- [高度なモニタリングの概要](https://docs.microsoft.com/ja-jp/powerapps/maker/monitor-advanced)
- [サポートされていないモニターのシナリオ](https://docs.microsoft.com/ja-jp/powerapps/maker/monitor-advanced#unsupported-scenarios-for-monitor)

