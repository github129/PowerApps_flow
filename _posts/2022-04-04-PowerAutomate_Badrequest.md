---
layout: post
title: "Power Automate で Bad request という言葉が含まれていた場合の対策"
description: "執筆中"
categories: [PowerAutomate]
tags: [PowerAutomate]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/033102.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/033102.pngs
redirect_from:
  - /2022/04/04/
---

#  概要

Power Automate では フローを実行した際にエラーが発生する場合があります。
その原因を調べるにはエラーメッセージを確認する手段がもっともよいです。

その中でも今回は Bad request が含まれていた場合の原因について解説します。



## 原因

Bad request が発生する原因は主に *** アクションの構成 *** によるものです。

このエラーは要求する側つまり作成者側に何かしらの問題がある場合に 「 Bad request or Not found 」といった言葉 とともに表示されることが多いです。

## そのほかのエラー

500 や 502 といったエラーが表示されている場合は 一時的あるいは一過性の障害が発生しています。 再送信 をクリックまたはタップして、フローをもう一度試みてください。


また、認証関連のエラーの場合は 401 や 403 が返されます。

ライセンスに関するエラーの場合も同様に別のエラーが表示されます。
- [User does not have a service plan adequate for the non-Standard connection](https://support.microsoft.com/ja-jp/topic/error-user-does-not-have-a-service-plan-adequate-for-the-non-standard-connection-44b9121f-2eb0-bcb0-60e6-6da0a5043dd2)



# リンク


- [認証エラー](https://docs.microsoft.com/ja-jp/power-automate/fix-flow-failures#authentication-failures)
- [アクションの構成](https://docs.microsoft.com/ja-jp/power-automate/fix-flow-failures#action-configuration)
- [その他のエラー](https://docs.microsoft.com/ja-jp/power-automate/fix-flow-failures#other-failures)

