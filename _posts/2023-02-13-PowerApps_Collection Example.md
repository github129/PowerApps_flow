---
layout: post
title: "Power Apps 関数問題集 コレクション操作その１"
description: "問題形式で様々な式を学ぶことで体系的にコレクションに関する操作を学ぶことができます"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2023/02/13
---


#  概要

コレクションの操作を学ぶことができる問題集です。
問題形式で様々な式を学ぶことで体系的にコレクションに関する操作を学ぶことができます。

本記事は実験的な意味合いが強いです。また回答に誤りがあった場合はコメントなどで指摘していただけると助かります。

好評であれば第２弾以降も計画しています。

# 問題

問題１：コレクションAnimalsには、動物の名前と分類の列があります。

|名前|分類|
|---|---|
|ライオン|哺乳類|
|カエル|両生類|
|イルカ|哺乳類|
|ワニ|爬虫類|
|ペンギン|鳥類|

DropDown3には、分類の一覧が表示されています。DropDown3で選択された分類に対応する動物のみをGalleryに表示するには、GalleryのItemsプロパティにどのような式を入力すればよいでしょうか？<br/>
A) Filter(Animals, 分類 = DropDown3.Selected.Value)<br/>
B) Filter(Animals, 名前 = DropDown3.Selected.Value)<br/>
C) Search(Animals, DropDown3.Selected.Value, "分類")<br/>
D) Search(Animals, DropDown3.Selected.Value, "名前")<br/>

<details>
<summary>答えを見る</summary>
答え：A or C
</details>
<br/>
問題２：コレクションBooksには、本のタイトルと著者の列があります。

|タイトル|著者|
|---|---|
|ハリー・ポッターと賢者の石|J.K.ローリング|
|吾輩は猫である|夏目漱石|
|1984|ジョージ・オーウェル|
|銀河鉄道の夜|宮沢賢治|
|百年の孤独|ガブリエル・ガルシア・マルケス|

TextInput2に入力された文字列で、本のタイトルが終わるレコードのみをGalleryに表示するには、GalleryのItemsプロパティにどのような式を入力すればよいでしょうか？

A) Filter(Books, StartsWith(タイトル, TextInput2.Text))<br/>
B) Filter(Books, EndsWith(タイトル, TextInput2.Text))<br/>
C) Search(Books, TextInput2.Text, "タイトル")<br/>
D) Search(Books, TextInput2.Text, "著者")<br/>

<details>
<summary>答えを見る</summary>
答え：B
</details>
<br/>
問題３：コレクションCustomersには、顧客の名前と住所の列があります。

|名前|住所|
|---|---|
|山田太郎|東京都渋谷区|
|鈴木花子|神奈川県横浜市|
|佐藤一郎|大阪府大阪市|
|田中美紀|愛知県名古屋市|
|高橋健太|福岡県福岡市|

ComboBox2には、都道府県の一覧が表示されています。ComboBox2で選択された都道府県に含まれる住所のみをGalleryに表示するには、GalleryのItemsプロパティにどのような式を入力すればよいでしょうか？

A) Filter(Customers, 住所 in ComboBox2.SelectedItems.Value)<br/>
B) Filter(Customers, 名前 in ComboBox2.SelectedItems.Value)<br/>
C) Search(Customers, ComboBox2.SelectedItems.Value, "住所")<br/>
D) Search(Customers, ComboBox2.SelectedItems.Value, "名前")<br/>

<details>
<summary>答えを見る</summary>
答え：A
</details>
<br/>
問題４：コレクションSalesには、売上番号と売上日の列があります。

|売上番号|売上日|
|---|---|
|1001|2022/01/01|
|1002|2022/01/02|
|1003|2022/01/03|
|1004|2022/01/04|
|1005|2022/01/05|

DropDown4には、月の一覧が表示されています。DropDown4で選択された月に対応する売上のみをGalleryに表示するには、GalleryのItemsプロパティにどのような式を入力すればよいでしょうか？

A) Filter(Sales, Month(売上日) = DropDown4.Selected.Value)<br/>
B) Filter(Sales, Month(売上番号) = DropDown4.Selected.Value)<br/>
C) Search(Sales, DropDown4.Selected.Value, "売上日")<br/>
D) Search(Sales, DropDown4.Selected.Value, "売上番号")<br/>

<details>
<summary>答えを見る</summary>
答え：A or C
</details>
<br/>
問題５：コレクションFlowersには、花の名前と色の列があります。

|名前|色|
|---|---|
|バラ|赤|
|チューリップ|黄|
|スイセン|白|
|ヒマワリ|黄|
|さくら|桃|

TextInput3に入力された文字列で、花の名前か色のどちらかに一致するレコードのみをGalleryに表示するには、GalleryのItemsプロパティにどのような式を入力すればよいでしょうか？<br/>
A) Filter(Flowers, 名前 = TextInput3.Text || 色 = TextInput3.Text)<br/>
B) Filter(Flowers, 名前 = TextInput3.Text && 色 = TextInput3.Text)<br/>
C) Search(Flowers, TextInput3.Text, "名前", "色")<br/>
D) Search(Flowers, TextInput3.Text, "名前" && "色")<br/>

<details>
<summary>答えを見る</summary>
答え：A or C
</details>

問題６：コレクションOrdersには、注文番号、注文日、顧客名、商品名、数量、単価の列があります。

|注文番号|注文日|顧客名|商品名|数量|単価|
|---|---|---|---|---|---|
|O001|2022/01/01|山田太郎|A|10|100|
|O002|2022/01/02|鈴木花子|B|20|200|
|O003|2022/01/03|佐藤一郎|C|30|300|
|O004|2022/01/04|田中美紀|D|40|400|
|O005|2022/01/05|高橋健太|E|50|500|

DatePicker1には、注文日の範囲を選択できます。DatePicker1で選択された範囲に含まれる注文のみをGallery1に表示するには、Gallery1のItemsプロパティにどのような式を入力すればよいでしょうか？<br/>
A) Filter(Orders, 注文日 >= DatePicker1.SelectedDate && 注文日 <= DatePicker1.SelectedDate)<br/>
B) Filter(Orders, 注文日 <= DatePicker1.SelectedDate && 注文日 >= DatePicker1.SelectedDate)<br/>
C) Search(Orders, DatePicker1.SelectedDate & DatePicker1.SelectedDate, "注文日")<br/>
D) Search(Orders, DatePicker1.SelectedDate || DatePicker1.SelectedDate, "注文日")<br/>

<details>
<summary>答えを見る</summary>
答え：A

解説：Filter関数は、指定した条件に合致するレコードをフィルターします。この場合、DatePicker1で選択された範囲に含まれる注文日のレコードをGallery1に表示します。>=は以上を表し、<=は以下を表します。Search関数は、指定した列のいずれかに一致するレコードを検索します。この場合、DatePicker1で選択された範囲に含まれる注文日のレコードをGallery1に表示することはできません。
</details>
<br/>

問題７：コレクションSalesには、売上日、店舗名、商品名、数量、単価の列があります。

|売上日|店舗名|商品名|数量|単価|
|---|---|---|---|---|
|2022/01/01|A店|X|10|100|
|2022/01/01|B店|Y|20|200|
|2022/01/02|A店|Z|30|300|
|2022/01/02|B店|X|40|100|

このコレクションは以下の式で作成できます

```
ClearCollect(Sales, {売上日: Date(2022, 1, 1), 店舗名: "A店", 商品名: "X", 数量: 10, 単価: 100}, {売上日: Date(2022, 1, 1), 店舗名: "B店", 商品名: "Y", 数量: 20, 単価: 200}, {売上日: Date(2022, 1, 2), 店舗名: "A店", 商品名: "Z", 数量: 30, 単価: 300}, {売上日: Date(2022, 1, 2), 店舗名: "B店", 商品名: "X", 数量: 40, 単価: 100} )
```

TextInput1には、商品名の一部を入力できます。DropDown1には、店舗名の一覧が表示されます。TextInput1とDropDown1で検索条件を指定した場合、その条件に合致する売上のみをGallery4に表示するには、Gallery4のItemsプロパティにどのような式を入力すればよいでしょうか？また検索条件がない場合は、全てのデータを表示するものとします。<br/>

A) If(TextInput1.Text = "", Sales, Search(Sales, TextInput1.Text, "商品名")) && If(DropDown1.Selected.Value = "", Sales, Filter(Sales, 店舗名 = DropDown1.Selected.Value))<br/>
B) If(TextInput1.Text = "", Sales, Search(Sales, TextInput1.Text, "商品名")) || If(DropDown1.Selected.Value = "", Sales, Filter(Sales, 店舗名 = DropDown1.Selected.Value))<br/>
C) If(TextInput1.Text = "" && DropDown1.Selected.Value = "", Sales, Search(Filter(Sales, 店舗名 = DropDown1.Selected.Value), TextInput1.Text, "商品名"))<br/>
D) If(TextInput1.Text = "" || DropDown1.Selected.Value = "", Sales, Search(Filter(Sales, 店舗名 = DropDown1.Selected.Value), TextInput1.Text, "商品名"))<br/>

<details>
<summary>答えを見る</summary>
答え：C

解説：If関数は、指定した条件が true か false かに応じて、異なる値を返します。この場合、TextInput1とDropDown1の両方が空の場合は、Salesの全てのレコードを返します。そうでない場合は、Filter関数とSearch関数を使って検索条件に合致するレコードを返します。Filter関数は、指定した条件に合致するレコードをフィルターします。この場合、DropDown1で選択された店舗名と一致するレコードをSalesから抽出します。Search関数は、指定した列の値に含まれる文字列を検索します。この場合、TextInput1で入力された商品名の一部と一致するレコードをFilter関数の結果から抽出します。
Dの場合は、テキスト入力が空の場合、店舗が絞り込まれないため誤りになります。
</details>
<br/>