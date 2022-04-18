---
layout: post
title: "数字を3桁区切りで表示するにはどうすればいい？"
description: "Power Apps で金額等の数字を３桁区切りで表示する方法を紹介します"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/noimage_apps.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage_apps.png
redirect_from:
  - /2022/04/18/
---


#  概要

Power Apps で金額などを表示する際に３桁区切り「1,000」のように表示したいときありますよね？

Power Apps のキャンバスアプリでそれを実現する方法をご紹介します。

# フォーマットを変更する場合はText関数

Text 関数を使いましょう。
以下のように使います。


```
Text(1000, "#,###") // 1,000 と表示される
```

桁数が増えたときも同様です。


```
Text(10000000,"#,###") // 10,000,000 と表示される
```

注意点としては、最初に与える値（1000 や 10000000 の部分）が「数値型」になっていることです。
よくフォーラムなどで質問がある場合大抵この最初に与える値が数値型以外になっていることがほとんどです。（大抵テキスト型）その場合は Value 関数を組み合わせて以下のようにしてみましょう。

```
Text(Value("1000"), "#,###") // 1,000 と表示される
```

このように Value 関数はテキスト型を数値型に変更することができるため、対象となる値や列を Value 関数で囲み、それをさらに Text 関数で囲むといったやり方になります。


# リンク

- [Power Apps での Text 関数](https://docs.microsoft.com/ja-jp/power-apps/maker/canvas-apps/functions/function-text#number)

