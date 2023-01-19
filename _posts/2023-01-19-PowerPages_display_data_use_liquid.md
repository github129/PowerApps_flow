---
layout: post
title: "Liquid で特定のレコードを JavaScript などで利用する方法"
description: "Power Pages で使える Liquid を使って特定のレコードのデータを表示する方法をご紹介します"
categories: [PowerPages]
tags: [PowerPages]
image: >-
  https://www.powerplatform.work/assets/noimage_pages.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage_pages.png
redirect_from:
  - /2023/01/19
---


#  概要

Liquid を使って特定のレコードを表示する方法をご紹介します。

## Liquid と JavaScript の関係

Liquid はサーバーサイドでレンダリングされ、クライアントサイドに到達する前に実行されます。
JavaScript はクライアントサイドでレンダリングされます。そのため、JavaScript 内で Liquid を使うことはできますが、 Liquid 内で JavaScript の変数などを利用することはできません。（調査した限りはできませんでした。）

また、Liquid は読み取り専用の言語のため、何かデータを書き込んだりといったことはできません。そういった場合は Fetch XML 等を使うとよいでしょう。


## 特定のレコードを表示する

Liquid でフィードバックテーブルの Title 列を表示する場合は以下のような書き方になります。

Liquid がサイトの性質上記載できないため、波括弧を半角に置き換えて利用してください。

```

｛｛ entities.feedback["07bb8d13-fb95-ed11-aad1-xxxxxxxxxxxx"].title ｝｝

```

07bb8d13-fb95-ed11-aad1-xxxxxxxxxxxx の部分はIDで、Power Automate などでの "一意の値" にあたる部分になります。

## URL パラメータを使ってID部分を動的にする

JavaScript の 関数などを使いたいところですが、前述した通り使えません。そういった場合は Liquid の param を使います。
URLパラメータが id の場合

```

<script>
  // Liquid がサイトの性質上記載できないため、波括弧を半角に置き換えて利用してください。
  const test =  "｛｛ entities.feedback[request.params['id']].title ｝｝"
  alert(test)
</script>

```

JavaScript 内で Liquid の結果は出力できるので、 alert や console 上に表示することは可能です。




# Overview

Learn how to use Liquid to display specific records.

## Liquid and JavaScript relationship

Liquid is rendered on the server side and executed before reaching the client side.
JavaScript runs on the client side. Therefore, you can use Liquid in JavaScript, but you cannot use JavaScript variables in Liquid. (Liquid is read-only.)

Liquid is a read-only language, so it is not possible to write data to it. In such cases you should use Fetch XML or similar.


## Displaying a specific record

To display the title column of a feedback table in Liquid, write something like this

```

｛｛ entities.feedback["07bb8d13-fb95-ed11-aad1-xxxxxxxxxxxx"].title ｝｝

```

The part 07bb8d13-fb95-ed11-aad1-xxxxxxxxxxxxxxxx is the ID, which is the "unique value" in Power Automate, etc.

## Using URL parameters to make the ID part dynamic

You may want to use JavaScript functions, but as mentioned above, they are not available. In such cases, use Liquid's param.
If the URL parameter is an id


```
// Liquid cannot be listed due to the nature of the site, so please replace the curly brackets with single-byte characters.

<script>
  const test =  "｛｛ entities.feedback[request.params['id']].title ｝｝"
  alert(test)
</script>

```

The Liquid result can be output in JavaScript. So it is possible to display it on alert or console.


Translated with www.DeepL.com/Translator (free version)



# リンク


- [Power Apps Portals: Related Records Filtering on Lookups When Creating Records via Subgrid](https://www.engineeredcode.com/blog/power-apps-portals-related-records-filtering-on-lookups-when-creating-records-via-subgrid)

