---
layout: post
title: "Power Automate で フロー数の上限を超えたときの対処法"
description: "執筆中"
categories: [PowerAutomate]
tags: [PowerAutomate]
image: >-
  https://www.powerplatform.work/assets/noimage_flow.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage_flow.png
redirect_from:
  - /2022/04/03/
---

#  概要

Power Automate では １人のユーザーが所有できるフロー数には上限があります。
その上限に関する問題を解決する方法をご紹介します。

# 解決方法

１人当たりのマイフローの所有数の上限は2022/04/03 時点で 600 となっています。
この上限を超えてフローを作る場合の解決方法は単純で、フローを *** ソリューションの一部として フローを配置、使用する *** ことで解決します。

この内容はドキュメントにも書かれています。

[マイフローの制限](https://docs.microsoft.com/ja-jp/power-automate/limits-and-config#my-flows-limit)

マイフローはあくまで個人的なものを自動化する感じにし、組織的に利用するものはソリューションの一部として使用した方が無難でしょう。


# リンク

[マイフローの制限](https://docs.microsoft.com/ja-jp/power-automate/limits-and-config#my-flows-limit)

