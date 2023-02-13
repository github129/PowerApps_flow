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

解説：Filter関数は、指定した条件に合致するレコードをフィルターします。この場合、DatePicker1で選択された範囲に含まれる注文日のレコードをGallery1に表示します。>=は以上を表し、<=は以下を表します。Search関数は、指定した列のいずれかに一致するレコードを検索します。この場合、DatePicker1で選択された範囲に含まれる注文日のレコードをGallery1に表示することはできません。&は文字列の連結を表し、||は論理和を表します。
</details>
<br/>
