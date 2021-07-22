---
layout: post
title: "【#PowerApps】テンプレートスクリーンの解説【人々】"
description: "PowerApps に用意されているテンプレートスクリーンの「人々」の解説です。"
categories: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/blogpost/2019/2019-06-15_01.PNG
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2019/2019-06-15_01.PNG
tags: [PowerApps, 初心者向け, 解説, キャンバスアプリ]
redirect_from:
  - /2019/06/15/
---
# 概要
PowerApps に用意されているテンプレートスクリーンの「人々」の解説です。
空のキャンバスアプリを作成し、スクリーンから「人々」を追加した状態のものを解説します。

# 人々
PowerApps のキャンバスアプリのテンプレートスクリーンの1つで、組織内のユーザーを検索する機能を持っています。

# 検索方法

ビュー→データソースから確認できますが、 「Office365ユーザー」というコネクタを利用して検索を行っています。

<a class="post-image" href="/assets/blogpost/2019/2019-06-15_01.PNG">
<img itemprop="image" data-src="/assets/blogpost/2019/2019-06-15_01.PNG" src="/assets/blogpost/2019/2019-06-15_01.PNG" alt="ビュー→データソース" />
</a>

# 各機能の解説

基本的には UserBrowseGallery1 , Title2, iconRemove1, Title1 にそれぞれ定義されています。

##  UserBrowseGallery1 
名前の通り、ユーザー一覧の表示と検索を担っています。
機能は item プロパティに定義されています。


```

If(!IsBlank(Trim(TextSearchBox1.Text)), 'Office365ユーザー'.SearchUser({searchTerm: Trim(TextSearchBox1.Text), top: 15}))

```

### If関数
使い方 : If(条件,条件が正しい(true)の時処理,条件が正しくない(false)の時の処理)
条件分岐です。
今回の条件は

```
!IsBlank(Trim(TextSearchBox1.Text))
```
が正しい場合は

```
'Office365ユーザー'.SearchUser({searchTerm: Trim(TextSearchBox1.Text), top: 15})
```
の処理を行い、そうでない場合は書かれていないので、何もしないということになります。
https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-if

### IsBlank() と Trim()　と ! 
使い方 : IsBlank(指定した値)
指定した値が「空白」の場合 true,そうでない場合は false を返します。
PowerApps での空白の定義は少し特殊ですので、こちらを一読することをお勧めします。
https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-isblank-isempty

使い方: Trim(指定した文字列)
指定した文字列の余計なスペースを取り除きます。

https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-trim

使い方: !true
true と false の条件が逆になります。
!true であれば false に !false であれば 結果が true になります。

今回の場合は、

```
IsBlank(Trim(TextSearchBox1.Text))
```

ですので、TextSearchBox1 に入力された Textの値のスペースを取り除いた値が空白でない場合は true そうでない場合は false と読み解くことが可能です。

### 'Office365ユーザー'.SearchUser()
使い方 : 

```
'Office365ユーザー'.SearchUser({searchTerm: Trim(TextSearchBox1.Text)})
```

組織内のユーザーを検索することができます。
searchTerm に対して指定された文字列で検索を行います。

今回の場合は

```
 Trim(TextSearchBox1.Text) 
```

となっているので、 スペースを取り除いた TextSearchBox1 の Text で検索を行っています。
また、検索所のオプションとして、

```
top
```

を指定することができます。
これは検索結果を上から何件まで取得するかを指定できます。

```
top:15
```

とすることで、上から15件だけ取得することが可能です。

##  Title2
UserBrowseGallery1 は表示機能を担っていましたが、こちらは選択された時の処理を担当しています。

Title2 を選択した状態で、アクション→選択時を押すと処理を確認することができます。

```
/*Select user, clear search contents and if this user hasn't been added to MyPeople collection, add them*/
Concurrent(
Set(_selectedUser, ThisItem),
Reset(TextSearchBox1),
If(Not(ThisItem.UserPrincipalName in MyPeople.UserPrincipalName), Collect(MyPeople, ThisItem)))

```

### /**/ または //
PowerApps の関数の中にコメントを入力することができます。
後で見てもわかるように積極的に書いていきましょう。

### Set() と ThisItem
使い方 Set(変数名,値)
グローバル変数（任意の名前が可能です。ない場合は新たに作成され、すでに登録されている場合は上書きされます。）に指定した値を格納することができます。
グローバル変数はその名の通り、複数のスクリーンで値を共有することができます。
逆にスクリーンの中だけで値を一時的に利用したい場合は UpdateContext() というコンテキスト変数を利用することになります。

https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-set
https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-updatecontext

使い方 ThisItem や ThisItem.UserName 等
ギャラリー内のその値（レコード）を表します。
つまり、ThisItem.UserName だった場合　ギャラリー内のその値（レコード）の UserName の値という意味になります。

今回の場合は

```
Set(_selectedUser, ThisItem)
```

ですので、 _selectedUser という変数に ThisItem (Title2コントロール)を格納しています。

### Reset()
使い方 Reset(特定のコントロール)
指定されたコントロールを初期化します。(Defaultに戻す)
ただし、 Reset が行えないコントロールも存在しますので、Docsを参照ください。

```
Reset(TextSearchBox1)
```
とありますので、TextSearchBox1 を Default 状態に戻します。（TextSearchBox1.Default には今回値が設定されていませんので、空白になります。）

### Collect()
使い方 Collect(コレクション名,レコード値またはテーブル値)
指定した名前の コレクションを作成、または既に存在する場合は値を追加します。
コレクションとは PowerApps 内で一時的に利用できる（アプリを閉じると消えます）データの保管先です。Excelのテーブルをイメージするとわかりやすいかもしれません。
https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-clear-collect-clearcollect

```
 Collect(MyPeople, ThisItem)
```

MyPeopleというコレクションがなければ新たに作成して ThisItem を追加、存在すれば ThisItem を追加するとなります。

### Not() と in
使い方 Not(true)
! と同じです。
https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-logicals

使い方 値 in コレクションのカラム
指定したコレクションのカラムに値が存在する場合は true 存在しない場合は false を返します。

今回の場合は

```
ThisItem.UserPrincipalName in MyPeople.UserPrincipalName
```

なので、そのレコードの UserPrincipalName が MyPeopleコレクションのUserPrincipalNameカラムに登録されているか？となり、すべてを組み合わせると、


```
If(Not(ThisItem.UserPrincipalName in MyPeople.UserPrincipalName), Collect(MyPeople, ThisItem)))
```

「MyPeople コレクションの UserPrincipalName カラムに 選択した, UserPrincipalName が存在しない場合は MyPeople コレクションに新たに ThisItem（レコード）を追加する」となります。


### Concurrent()
使い方: Concurrent(処理1,処理2)
指定した複数処理を同時に実行します。ただし、関係性は適当になるので注意が必要です。
https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-concurrent


以上ここまでの関数とコントロールの組み合わせでユーザー検索(UserBrowseGallery1.item)とユーザーの保管(Title2.OnSelect)を行っています。

## iconRemove1

PeopleAddedGallery1の中に入っています。
PeopleAddedGallery1のitemには先ほど保管された MyPeople コレクションが指定されています。
そのため、Title2 で指定したユーザーが表示される仕組みとなっています。

iconRemove1 はユーザー削除機能が実装されています。

```
Remove(MyPeople, LookUp(MyPeople, UserPrincipalName = ThisItem.UserPrincipalName))
```


### Remove()
使い方: Remove(コレクション,削除するレコード)
指定したコレクションの指定したレコードを削除します。
https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-remove-removeif

### LookUp()
使い方: LookUp(コレクション,条件)
条件にマッチした初めの１件目のレコードを取得します。この関数はPowerAppsを扱う中で非常に重要な関数になるので、必ず覚えましょう。
https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/functions/function-filter-lookup

つまり、Remove()とLookUp()を組み合わせることで、
iconRemove1 が押されたときに押されたレコードの UserPrincipalName が含まれているMyPeopleコレクションの最初のレコードを取得し、そのレコードを MyPepoleコレクションから削除する。
となります。

## Title1 

PeopleAddedGallery1の中に入っています。

```Title1.Onselect
Set(_selectedUser, ThisItem)
```

選択されたときに、_selectedUserグローバル変数にそのレコードをセットしているだけです。
この_selectedUser変数は実はこのテンプレートスクリーンではセットしているだけで、ほかに利用していないので特に意味はないです。

# まとめ
PowerApps のキャンバスアプリのテンプレートスクリーン「人々」について解説しました。
「人々」は実はほかのテンプレートスクリーン（「会議」や「電子メール」など）とも組み合わされて、テンプレートスクリーンのスタート地点のような存在ですので、読み解けるようになりましょう。

