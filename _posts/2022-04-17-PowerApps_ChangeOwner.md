---
layout: post
title: "退職者などで Power Apps のアプリの所有者を変更するにはどうすればいい？"
description: "PowerShell もしくは Power Apps for Admins Connector で所有者を変更することができます。"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/041703.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/041703.png
redirect_from:
  - /2022/04/17/
---


#  概要

Power Apps を作成した人が部署の移動や退職などで、所有者を変更しなければならない場面ありますよね？共同所有者に設定してもよいですし、作り直して問題がないアプリであれば作り直すのもありですね。

ただ、上記のような選択が取れない場合は所有者を変更するしかありません。
その場合は PowerShell もしくは Power Apps for Admins Connector を使いましょう

## PowerShell

こちらに関してはすでに詳しく書かれたブログがあるのでこちらをご参照ください。

[PowerApps の所有者を PowerShell で変更する](https://zenn.dev/karamem0/articles/2019_08_29_190000)


## Power Apps for Admins

こちらが一応今回の本題です。

[Power Apps for Admins](https://docs.microsoft.com/en-us/connectors/powerappsforadmins/)　は Power Apps の管理系操作ができるコネクタになります。

今回はその中でも「アプリ所有者を設定する」（Set App Owner）を使います。
下の画像はそのコネクタを使った簡単な例になります。


<img src="/assets/blogpost/2022/041701.png"/><br/>

<img src="/assets/blogpost/2022/041702.png"/><br/>

各項目は以下のように設定します。

|項目名|値|
|:---|:---|
|環境名|環境のIDを設定します。既定環境であれば、Default-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx のようなIDになります。|
|PowerApp 名|アプリ詳細から取得できるアプリのIDを設定します。|
|新しい PowerApp 所有者|ユーザーID（GUID）を設定します。Azure AD 等からも取得することが可能です。今回は Office 365 コネクタから取得してきています|

あとは実行するだけです。実際に実行してみた結果がこちらです。

<img src="/assets/blogpost/2022/041703.png"/><br/>



# リンク

- [PowerApps の所有者を PowerShell で変更する](https://zenn.dev/karamem0/articles/2019_08_29_190000)
- [Power Apps for Admins](https://docs.microsoft.com/en-us/connectors/powerappsforadmins/)　

