---
layout: post
title: "ビジネスプロセスフローのステージ移動を制限する方法"
description: "ビジネスプロセスフローは、特定の業務に沿ってレコードを進めるのに便利な機能ですが、特定の状況でユーザーが自由に前後のステージに移動できると、データの整合性や品質に影響が出る可能性があります。そこで、この記事ではステージの移動を制限する方法を紹介します"
categories: [PowerApps,PowerAutomate]
tags: [PowerApps,PowerAutomate]
image: >-
  https://www.powerplatform.work/assets/blogpost/2023/062805.jpg
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2023/062805.jpg
redirect_from:
  - /2023/06/29
---


#  概要

ビジネスプロセスフローは、特定の業務に沿ってレコードを進めるのに便利な機能ですが、特定の状況でユーザーが自由に前後のステージに移動できると、データの整合性や品質に影響が出る可能性があります。そこで、この記事ではステージの移動を制限する方法を紹介します。

## ビジネスプロセスフローとは

Power Automate は、Microsoft が提供するクラウドベースのサービスで、さまざまなアプリケーションやシステム間でデータをやりとりしたり、自動化したりすることができます。Power Automate には、フローと呼ばれる自動化の単位がありますが、その中でもビジネスプロセスフローという種類があります。

ビジネスプロセスフローとは、特定の業務やタスクを実行するために必要な一連の手順を定義し、ユーザーにガイドする機能です。例えば、営業案件の獲得や顧客対応の流れなどをビジネスプロセスフローとして作成することができます。ビジネスプロセスフローは、Power Apps や Dynamics 365 などのアプリケーションに組み込むことができ、ユーザーは画面上に表示される手順に沿って作業を進めることができます。

ビジネスプロセスフローのメリットは、以下のようなものがあります。

- 業務の標準化や品質向上に貢献できる
- 業務が標準化されるためユーザーのトレーニングやサポートが容易になる
- ビジネスルールや条件分岐などを設定することで、業務の効率化やエラーの防止ができる
- 正しい流れで入力されるのでデータの収集や分析がしやすくなる


# 前後のステージに進ませない方法

私が調査した範囲では既定の機能や設定では前後のステージの移動を制限することは難しそうです。そのため今回は JavaScript を利用します。
様々調べたところ Dynamics の時から同じような課題があり、以下のようなコードを記載して解決しているようです。

```
let Acc = {};
Acc.formEvents = {
    form_load: function (e) {
        const fc = e.getFormContext();
        fc.data.process.addOnPreStageChange(Acc.formEvents.handlePreStage);
    },
    handlePreStage: function (e) {
        // get the event arguments
        const bpfArgs = e.getEventArgs();
  
        if (bpfArgs.getDirection() === "Previous") // back stage movement is not allowed; You can stop it depending on custom business logic as well
        {
          bpfArgs.preventDefault();
          const previousAlertStrings = { confirmButtonLabel: "OK", text: "Back stage movement is not allowed", title: "Sample title" };
          const previousAlertOptions = { height: 120, width: 260 };
          Xrm.Navigation.openAlertDialog(previousAlertStrings, previousAlertOptions);
          return;
        }

        if (bpfArgs.getDirection() === "Next") { // only next stage movement is allowed. You can stop it depending on custom business logic as well
            // stop the stage movement
            bpfArgs.preventDefault();
            const nextAlertStrings = { confirmButtonLabel: "OK", text: "Next stage movement is not allowed", title: "Sample title" };
            const nextAlertOptions = { height: 120, width: 260 };
            Xrm.Navigation.openAlertDialog(nextAlertStrings, nextAlertOptions);
            return;
        }
        // you can also play with the other properties of eventargs
        // get the stage - bpfArgs.getStage();
        // get the steps - bpfArgs.getStage().getSteps();
    }
}
```

Next 側をコメントアウトすることで、前のステージに進ませないようにしたり、フォームのデータから値を取得して条件に一致したら戻す動作を禁止にするといったことが可能かと思います。

この JavaScript ファイルを Webリソースとしてアップロードし、フォームの読み込み時のイベントに設定します。

<img src="/assets/blogpost/2023/062802.jpg"/><br/>
<img src="/assets/blogpost/2023/062803.jpg"/><br/>


正しく設定できている場合はステージを移動させる際にこのようにアラートが表示されるかと思います。

<img src="/assets/blogpost/2023/062804.jpg"/><br/>

# まとめ

ビジネスプロセスフローの次のステージや前のステージへの移動を禁止させるには今回のような方法が取れます。もし JavaScript を使わずに
設定などで可能であればコメント欄より教えていただけると幸いです。


# 参考

- [Restrict Business Process Flow (BPF) from going backwards](https://powerusers.microsoft.com/t5/Microsoft-Dataverse/Restrict-Business-Process-Flow-BPF-from-going-backwards/m-p/1768458)

