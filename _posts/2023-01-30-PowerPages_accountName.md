---
layout: post
title: "Power Pages でログインしている取引先企業名を表示する方法"
description: "Power Pages で Liquid を使ってログインしている取引先担当者の取引先企業名を表示する方法をご紹介します。"
categories: [PowerPages]
tags: [PowerPages]
image: >-
  https://www.powerplatform.work/assets/noimage_pages.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage_pages.png
redirect_from:
  - /2023/01/30
---

# Power Pages とは



Power Pages は、顧客やパートナーなどの外部や社内ユーザーなどとの情報共有のために、ドラックアンドドロップや Liquid 等を用いてWebサイトやフォームを構築して公開することができるサービスです。

Power Pages は以下のような特徴を持っています。

1. ローコード構築: Power Pagesは、ローコード技術を使用してWebサイトやフォームを構築できます。
2. 外部ステークホルダー向け: 顧客やパートナーなどの外部ステークホルダーとの情報共有に最適です。
3.  自分でカスタマイズ可能: Power Pages は、ユーザーのニーズに合わせてカスタマイズすることができます。
4. レスポンシブデザイン: Power Pages は、モバイルデバイスでも正確に表示されるレスポンシブデザインを採用しています。
5. フォーム自動化: フォーム入力を自動化でき、データ入力エラーを減らすことができます。
6. セキュリティー強化: ユーザー認証やアクセス制限など、Webサイトのセキュリティーを強化する機能があります。
7. マルチ言語対応: 多言語に対応しているため、グローバルな顧客ベースに対応できます。

Power Pages はもともと Power Apps Portals と呼ばれており、それより前は Dynamics 365 Portals と呼ばれていたサービスで 2022年10月に正式リリースされたサービスになります。


#  概要

Power Pages で Liquid を使ってログインしている取引先担当者の取引先企業名を表示する方法をご紹介します。

## ログインしている取引先担当者名を表示する方法

まずはよく使う取引先担当者名を表示する方法です。

Liquid がサイトの性質上記載できないため、波括弧を半角に置き換えて利用してください。

```
｛｛ user.fullname ｝｝
```



## ログインしている取引先担当者のその他の情報を表示する方法

user プロパティを使うこで、取引先担当者レコードにアクセスできます。そのため、他の列を表示する場合は該当の列の論理名を指定することで表示することが可能です。 

Liquid がサイトの性質上記載できないため、波括弧を半角に置き換えて利用してください。

例) 取引先電子メール

```
｛｛ user.emailaddress1 ｝｝
```


## ログインしている取引先担当者の取引先企業(会社名)を表示する方法

先ほどの要領で行えばよいですが、ポイントは取引先企業側の列をスキーマ名で指定する点です。

Liquid がサイトの性質上記載できないため、波括弧を半角に置き換えて利用してください。

```
｛｛ user.parentcustomerid.Name ｝｝
```


# Overview

Learn how to use Liquid in Power Pages to display the name of a logged in contact person's business partner company.

## How to display the name of a logged-in contact person

The first step is to display the name of a frequently used contact.

Since Liquid cannot be listed due to the nature of the site, please replace the curly brackets with half-width characters.

````
｛｛ user.fullname ｝｝
````



## To view other information about the logged on contact

The user property gives you access to the contact person record. Therefore, other columns can be displayed by specifying the logical name of the corresponding column. 

Since Liquid cannot be listed due to the nature of the site, please replace the curly brackets with half-width characters.

e.g.) Business Partner E-Mail


```
｛｛ user.emailaddress1 ｝｝
```


## To view the business partner company (company name) of the logged-in business partner person

You can follow the same procedure as before, but the key point is to specify the columns for the client company by schema name.

Since Liquid is not allowed due to the nature of the site, replace the curly brackets with half-width characters.

```
｛｛ user.parentcustomerid.Name ｝｝
```



# リンク


- [Fetching logged in users account name in power apps portals](https://powerusers.microsoft.com/t5/Power-Apps-Portals/Fetching-logged-in-users-account-name-in-power-apps-portals/m-p/666651)

