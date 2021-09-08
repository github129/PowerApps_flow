---
layout: post
title: "Power Apps モデル駆動型のアプリサイドペイン（翻訳練習）"
description: "アプリサイドペインがパブリックプレビューになりました。"
categories: [Power Apps, モデル駆動型, 翻訳練習]
tags: [Power Apps, モデル駆動型, 翻訳練習]
image: >-
  https://www.powerplatform.work/assets/noimage_apps.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage_apps.png
redirect_from:
  - /2021/09/8/
paginate: true
---

本記事は筆者の翻訳練習のための記事です。
誤訳などの可能性があるため、必ず情報元での確認をお願いします。


# 情報元

[App side panes available for public preview with model-driven apps](https://powerapps.microsoft.com/ja-jp/blog/app-side-panes-available-for-public-preview-with-model-driven-apps/)


# 翻訳

アプリサイドペインのパブリックプレビューでは、開発者はモデル駆動型アプリの右側に一つ以上のペインを Cilient API を使うことで開くことができます。
このペインにはビューやフォームといったモデル駆動型アプリのページはもちろん、新しい[カスタムページ](https://powerapps.microsoft.com/en-us/blog/custom-pages-for-converging-model-driven-apps-and-canvas-apps/)も含めることができます。


このアプリサイドペインは別のタブをクリックすることでペインを切り替えることができ、アクティブなペインをクリックすることで閉じることができます。

ペインはその場でのナビゲーションはもちろん、ページ戻るボタンを使ったバックナビゲーションもサポートしています。


以前私たちは、１つのペインを開けることのみをサポートしていましたが、別の authors やカスタマイザーがペインを追加したときコンフリクトを引き起こしていました。 2021 Wave2 release の一環として、 Customer Service ワークプレイスとオムニチャネルユーザーは、３つの生産性ペイン？にこれを使用することを開始します。

このようなモデル駆動型アプリでは、カスタマイザーは今回追加されたペインを追加することができます。


アプリサイドペインは [LoadPanel Client API](https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-panel/loadpanel) を使った既存の単一右ペインと [Channel Integration Framework v1.0](https://docs.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/overview-channel-integration-framework) を置き換えます。これにより、複数のペインが可能になります。もし、レガシーな loadPanelのみを使う場合、動作はこれまでと同じです。ただし、もしすでに１つ以上のアプリサイドペインを追加していた場合は、loadPanel はアプリサイドペイン内のタブに配置されます。


アプリサイドペインの詳細情報は Creating side panes using client API をご覧ください。この機能はパブリッククラウドで展開されており、まもなく他の地域でも利用可能になる予定です。私たちは、コミュニティポスト[「Feedback on App Side Pane public previe」](https://powerusers.microsoft.com/t5/Building-Power-Apps/Power-Apps-App-Side-Panes-Feedback-discussion-thread/m-p/1261035#M331075)にて皆さんのフィードバックを楽しみにしています。

