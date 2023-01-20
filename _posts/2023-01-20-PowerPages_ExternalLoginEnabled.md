---
layout: post
title: "Power Pages のプロフィール画面のメールの変更と外部認証の管理を消す方法"
description: "Power Pages のプロフィール画面のメールの変更と外部認証の管理を設定のみで消す方法をご紹介します。JavaScript は使用しません。"
categories: [PowerPages]
tags: [PowerPages]
image: >-
  https://www.powerplatform.work/assets/blogpost/2023/012001.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2023/012001.jpg
redirect_from:
  - /2023/01/20
---


#  概要

Power Pages のプロフィール画面のメールの変更や外部認証の管理を設定のみで消す方法をご紹介します。

## メールの変更

ポータル管理アプリからサイトの設定に行き、以下の設定の値を false に変更します。

```
Authentication/Registration/EmailConfirmationEnabled

```

<img src="assets/blogpost/2023/012003.jpg"/><br/>



## 外部認証の管理

ポータル管理アプリからサイト設定に行き、以下の設定の値を false に変更します。既定では設定の中にないので、新規で追加しましょう。

```

Authentication/Registration/ExternalLoginEnabled

```

<img src="assets/blogpost/2023/012002.jpg"/><br/>


# 余談

パスワードだけが設定ではうまくいかなかったので、他の方法を模索する必要がありそうです。 ちなみにJavaScript を利用すれば表示だけは消すことはできます。


# Overview
Learn how to change the email on the Power Pages profile screen and turn off external authentication management by configuration only.

## Change Email

From the portal management app, go to the site settings and change the value of the following setting to false

```
Authentication/Registration/EmailConfirmationEnabled

```

<img src="assets/blogpost/2023/012003.jpg"/><br/>

## Manage external authentication

From the Portal Management app, go to the site settings and change the value of the following setting to false. It is not in the settings by default, so add a new one.

```

Authentication/Registration/ExternalLoginEnabled

```

<img src="assets/blogpost/2023/012002.jpg"/><br/>

# A side note

The password is the only setting that did not work, so you will have to find another way. By the way, you can turn off only the display by using JavaScript.



# リンク


- [ローカル認証、登録、その他の設定](https://learn.microsoft.com/ja-jp/power-apps/maker/portals/configure/set-authentication-identity#authentication-overview)

