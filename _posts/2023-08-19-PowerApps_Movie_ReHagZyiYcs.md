---
layout: post
title: "日本マイクロソフト社員有志が作った Power Platform  のサンプルから eVoice アプリの中身を解説"
description: "日本マイクロソフト社員有志が作った Power Platform  のサンプルから eVoice アプリの中身を解説を動画で分かりやすく解説"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2023/081901.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2023/081901.jpg
redirect_from:
  - /2023/08/19
---


#  概要

日本マイクロソフト社員有志が作った Power Platform  のサンプルから eVoice アプリの中身を解説


# アプリの作成方法

<iframe width="983" height="553" src="https://www.youtube.com/embed/ReHagZyiYcs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


使用した式は動画の概要欄をご確認ください


```

今回は、日本マイクロソフトの社員有志が作成したサンプルアプリ、eVoice の中身を解説します。このアプリに関してはこちらの動画をご確認ください。
まずこのアプリは VoteScreenという投票を行うスクリーンと、TotalizationScreenという投票結果を確認する２つのスクリーンで構成されています。
コネクタは Office 365 ユーザーコネクタと、データ登録用の Dataverse コネクタが利用されています。また別途７つのコレクションが画面上で作られています。まずはVoteScreenから解説します。
一番うえのラベルでは Today 関数と Year 関数を組み合わせて年数を表示しています。来年になっても 2023 の部分が自動で変わるような形になっています。
その下のラベルでは varUserProfile の givenName、 というプロパティで名前を表示しています。varUserProfile は App の OnStart プロパティで作成されている変数で、Office 365ユーザー コネクタの myProfile が入っています。
次に投票のための星の部分ですが、ここはなんと、フォームコントロールで作られています。このアプリでは４つのチームに対して投票することが可能ですが、 Patch 関数などを複数実行しているわけではなく、フォームを４つ並べて SubmitForm を４回実行してデータを登録する形になっています。
その式が登録ボタンに書かれています。フォームが編集可能な状態だったら SubmitForm するという式が４回書かれています。つまり５つ目のチームを作りたい場合はフォームを追加して、この部分にSubmitForm を追記する形になります。
また高速でデータを登録する仕組みとして、Concurrent 関数も使われています。Concurrent 関数 を使うことで、その中に書かれている関数が非同期に実行され、処理が高速になります。よくわかる解説。 Power Apps では式の中で処理を記載した場合、上の処理が終了したら下の処理が実行されます。そのため実行に掛かる時間の合計はすべての実行時間の合計になります。 Concurrent 関数 を利用すると、複数の処理が同時に実行されます。そのため処理の終了時間は一番時間がかかった実行の時間になるため、合計実行時間が短縮されます。ただし、同時に実行されるため、処理１が終わった後に処理３を実行したいケースや、処理１の結果を見て処理３の内容を変化させる、といったことはできない点に注意が必要です。今回のケースではどの順番にデータが登録されても問題ないため利用できています。
フォームでデータが登録できた時の処理も確認しておきましょう。通知を表示した後に、データを初期化し、コレクションを作成しています。このコレクションはフォームコントロールの item プロパティに設定されています。この式の場合データが大量にあると正しく取得できない可能性があるため、修正する場合は colSbumitResultsAll の時点でメールアドレスでデータを絞り込むか、ビューなどを使って対策した方が良さそうです。データを取得した後は、データが存在しなければフォームを編集可能な状態に、そうでなければ読み取り専用にするように式が記載されています。合計スコアは、すべての合計に対してvarVotingRate という変数を掛け算した値になります。この varVotingRate は Appの OnStart プロパティで作成されていて、おそらく特別審査員のようなユーザーの点数は高く登録されるような形となっています。
他にもこの OnStart プロパティでは、ユーザーのプロフィールを取得したり、データをコレクションに登録したりといったことが記載されています。投票ボタンの DisplayMode には、すべてのフォームが View 、つまりデータが登録済みであればボタンが押せないような式が記載されています。次にデータ更新アイコンですが一見複雑な式が書かれているように見えますが、フォームの成功時の処理を１つにまとめただけになります。データを更新んして、コレクションを作成し、フォームの状態を変更させるといった処理を４つのフォーム分行っている形になります。

次に、結果を表示するスクリーンを見てみましょう。一番下のラベルですが、投票者が増えるごとに自動で人数の部分が増えるように、varVotersCountsという変数で管理されています。３秒ごとにデータを更新すると記載があるので、タイマーコントロールを確認してみましょう。タイマーコントロールには Select 関数で 更新アイコンが指定されています。つまり、３秒ごとに更新アイコンの OnSelect プロパティが実行されている形になります。
更新アイコンですが、１、２行目でデータを更新、３行目ではデータをチームごとにまとめています。４行目ではチームごとにまとまったデータの得点を合計するように記載されています。５行目では、投票データを人数が重複しないようにカウントした結果を、先ほどの変数に設定しています。

最後に、各画面の OnVisible プロパティを確認しましょう。
TotalizationScreen の OnVisible プロパティには更新アイコンと同じ処理が記載されています。画面を表示したタイミングで常に最新のデータが表示されるようになっています。
VoteScreen の OnVisible プロパティも確認してみましょう。こちらも更新アイコンと同じ処理が記載されています。
eVoice アプリはこれらの仕組みによって、常に最新のデータが表示されるようになっています。

```

# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)


# リンク


- [日本マイクロソフト社員有志が作った Power Platform  のサンプルから eVoice アプリの中身を解説](https://www.youtube.com/watch?v=ReHagZyiYcs)

