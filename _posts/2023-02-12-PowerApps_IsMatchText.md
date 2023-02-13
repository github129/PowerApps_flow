---
layout: post
title: "入力されたテキストに、指定した文字が含まれていたらラベルに true と表示する"
description: "Power Fx でテキストに指定した文字が含まれるか判定するには、IsMatch 関数や Find 関数を使うことができます"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2023/02/12
---


#  概要

Power Fx でテキストに指定した文字が含まれるか判定するには、IsMatch 関数や Find 関数を使うことができます

# 判定方法

## IsMatch での判定

IsMatch 関数は、テキスト文字列が通常文字、事前定義済みのパターン、または正規表現が含まれたパターンに一致するかどうかをテストします1。IsMatch 関数は、一致する場合は true を、一致しない場合は false を返します。

例えば、次の式は、IsMatch 関数を使って、TextInput1 に入力されたテキストに “Power” という文字が含まれるか判定する方法を示しています。

```
IsMatch(TextInput1.Text, "Power")
```

この式は、TextInput1 に “Power” という文字が含まれる場合は true を、含まれない場合は false を返します。この式をラベルの Text プロパティに設定すると、ラベルに true または false と表示されます。


## Find 関数での判定

Find 関数は、文字列を別の文字列内で検索し、大文字と小文字を区別します

例えば、次の式は、Find 関数を使って、TextInput1 に入力されたテキストに “Power” という文字が含まれるか判定する方法を示しています2。

```
Find("Power", TextInput1.Text)
```

この式は、TextInput1 に “Power” という文字が含まれる場合は、その開始位置を返し、含まれない場合は 空白を返します。この式をラベルの Text プロパティに設定すると、ラベルに開始位置または空白が表示されます。これを使って、0 以上であることを判定することで指定した文字を含んでいるかを確認することができます。


どちらの判定方法でも特に問題はありません。

# リンク


- [Power Apps での IsMatch、Match、および MatchAll 関数](https://learn.microsoft.com/ja-jp/power-platform/power-fx/reference/function-ismatch)
- [Power Apps での Find 関数](https://learn.microsoft.com/ja-jp/power-platform/power-fx/reference/function-find)

