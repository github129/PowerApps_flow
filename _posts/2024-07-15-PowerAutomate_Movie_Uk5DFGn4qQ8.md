---
layout: post
title: "クラウドフローでエラーが発生したときのトラブルシューティングを迅速に対応するために、クラウドフローの実行履歴のURLをworkflow関数を利用して作成する #PowerAutomate"
description: "クラウドフローでエラーが発生したときのトラブルシューティングを迅速に対応するために、クラウドフローの実行履歴のURLをworkflow関数を利用して作成する #PowerAutomateを動画で分かりやすく解説"
categories: [PowerAutomate]
tags: [PowerAutomate]
image: >-
  https://www.powerplatform.work/assets/blogpost/2024/071501.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2024/071501.jpg
redirect_from:
  - /2024/07/15
---


#  概要

クラウドフローでエラーが発生したときのトラブルシューティングを迅速に対応するために、クラウドフローの実行履歴のURLをworkflow関数を利用して作成する #PowerAutomate


# 作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/Uk5DFGn4qQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## クラウドフローの実行履歴URLを取得する方法

エラーが発生した際に迅速にトラブルシューティングを行うことは重要です。今回は、クラウドフローの実行履歴のURLを取得する方法について解説します。

### 実行履歴のURLの構成

クラウドフローの実行履歴は、実行するたびに成功や失敗などの情報とともに保存されます。この履歴ページを表示するためのURLは、以下のような項目が動的に変化します。

1. 環境ID
2. フローID
3. 実行履歴のID

### URLの作成方法

まず、環境IDを取得するために、`workflow`関数の`tags`の中の`environmentName`を使用します。次に、フローIDは`workflow`関数の`name`プロパティで取得可能です。最後に、実行履歴のIDも`workflow`関数の`run`プロパティの中の`name`プロパティを指定することで取得できます。

以下は、具体的なURLの作成手順です。

```markdown
concat('https://make.powerautomate.com/enviro...)['tags']['environmentName'],'/flows/',workflow()['name'],'/runs/',workflow()['run']['name'])

```

## まとめ

このクラウドフローの実行履歴のURLを取得する方法を利用することで、エラー発生時のトラブルシューティングが効率化されます。是非、この方法を試してみてください。


# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [クラウドフローでエラーが発生したときのトラブルシューティングを迅速に対応するために、クラウドフローの実行履歴のURLをworkflow関数を利用して作成する #PowerAutomate](https://www.youtube.com/watch?v=Uk5DFGn4qQ8)

