---
layout: post
title: "このアプリには、安全でないコードが含まれている可能性があります とは"
description: "このアプリには、安全でないコードが含まれている可能性があります とは"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/051901.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/051901.png
redirect_from:
  - /2022/05/19/
---


#  概要

外部からソリューション等をインストールし編集を行った場合以下のような表示がされます。今回はその原因について解説します。


「このアプリには、安全でないコードが含まれている可能性があります」

<img src="/assets/blogpost/2022/051901.png"/><br/>


# 原因

これは編集しようとしているアプリにコードコンポーネントが含まれているためです。

[キャンバスアプリのコードコンポーネント セキュリティに関する考慮事項](https://docs.microsoft.com/en-us/power-apps/developer/component-framework/component-framework-for-canvas-apps#security-considerations)

現時点でこれを回避することはできないため、信頼できるソースやソリューションのみをインストールするようにしましょう。

# その他の Tips はこちらから

Power Apps
https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- 

Power Automate
https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA

Power Apps で 備品管理アプリを作ろう
https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn

Power Apps Tutorial
https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_

# リンク


- [キャンバス アプリのコード コンポーネント](https://docs.microsoft.com/en-us/power-apps/developer/component-framework/component-framework-for-canvas-apps#security-considerations)
