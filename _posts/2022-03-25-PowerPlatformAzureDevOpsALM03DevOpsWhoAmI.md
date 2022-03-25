---
layout: post
title: "Power Platform で Azure DevOps を使った ALM を実現する 準備編 Azure DevOps パイプライン"
description: "Power Platform の開発、展開、検証などを自動で行うためのALMを実現するための方法をご紹介します"
categories: [PowerPlatform]
tags: [PowerPlatform,ALM]
image: >-
  https://www.powerplatform.work/assets/blogpost/2022/032507.png
optimized_image: >-
  https://www.powerplatform.work/assets/blogpost/2022/032507.png
redirect_from:
  - /2022/03/25/
---

#  概要

Power Platform もある程度の規模になってくると開発→展開も苦労してきます。
１つのアプリケーションや１つのフローだけであれば、アプリそのものをエクスポート/インポートしても特段問題はありません。しかし、それが複数のアプリや複数のフロー、データ定義などを加味しながらの展開となると単体でのエクスポート/インポートでは難しくなってきます。

そういった問題を解決するために、ソリューションと Azure DevOps を使ったALMを構築し、展開などのアプリケーションライフサイクル管理を容易にしましょう。


# Azure DevOps Pipelines の準備


**準備の状況によっては Microsoft への問い合わせが必要な場合があります。その際 １週間（私の場合は４営業日）程度掛かる場合があります。事前に準備し、パイプラインの Who Am I まで動くことを確認することをお勧めします。**


Pipelines の準備を行う前に、パイプラインの YAML を配置するためのリポジトリを作成する必要があります。どういったリポジトリでも構いませんので、 Azure DevOps の Repos からリポジトリを作成しましょう。


リポジトリ作成後以下のような手順でパイプラインを作成します。


<img src="/assets/blogpost/2022/032506.png"/><br/>

Piplines → New Pipline

<img src="/assets/blogpost/2022/032507.png"/><br/>

Azure Repos Git　→　作成したリポジトリ → SterterPipilne

YAML を以下のように編集します。


```
# Starter pipeline
# Start with a minimal pipeline that you can customize to build and deploy your code.
# Add steps that build, run tests, deploy, and more:
# https://aka.ms/yaml

trigger:
- none

pool:
  vmImage: windows-latest

steps:
- script: |
- task: PowerPlatformToolInstaller@0
  inputs:
    DefaultVersion: true
- task: PowerPlatformWhoAmi@0
  displayName: 'Who Am I'
  inputs:
    authenticationType: 'PowerPlatformSPN'
    PowerPlatformSPN: 'Azure DevOps 準備時に作成した接続名を入力してください'


```

今回のYAMLでは特にビルドなどは行っていません。
単純に Power Platform Tool のインストールを行い、その後、接続情報を確認しているだけです。

[Microsoft Power Platform ビルド ツール タスク](https://docs.microsoft.com/ja-jp/power-platform/alm/devops-build-tool-tasks)


入力が完了したら、 Save and Run で実行してみましょう。
この時 Free プランの場合、 parallel jobs に関するエラーとリンクがセットで送られてくる場合があります。

<img src="/assets/blogpost/2022/032508.png"/><br/>

その際はそのURL（Microsoft Forms）へアクセスし、問い合わせを行ってください。

<img src="/assets/blogpost/2022/032509.png"/><br/>

３日前後でメールが届き問題なく実行できるようになります。

あとはご自身の環境などに合わせて Build の YAML を組んでいきましょう。
おそらく設定すると以下のようなYAMLになるかと思います。

```
trigger: none

pool:
  vmImage: windows-latest

steps:
  - task: PowerPlatformToolInstaller@0
    inputs:
      DefaultVersion: true
  - task: PowerPlatformWhoAmi@0
    inputs:
      authenticationType: 'PowerPlatformSPN'
      PowerPlatformSPN: 'Power Platform'
  - task: PowerPlatformPackSolution@0
    inputs:
      SolutionSourceFolder: 'solution'
      SolutionOutputFile: 'solution.zip'
  - task: PublishPipelineArtifact@1
    inputs:
      targetPath: 'solution.zip'
      artifact: 'Solution Archive'
      publishLocation: 'pipeline'
  - task: PowerPlatformImportSolution@0
    inputs:
      authenticationType: 'PowerPlatformSPN'
      PowerPlatformSPN: 'Power Platform'
      SolutionInputFile: 'solution.zip'
      AsyncOperation: true
      MaxAsyncWaitTime: '60'
  - task: PowerPlatformPublishCustomizations@0
    inputs:
      authenticationType: 'PowerPlatformSPN'
      PowerPlatformSPN: 'Power Platform'
```


# リンク


[Microsoft Power Platform ビルド ツール タスク](https://docs.microsoft.com/ja-jp/power-platform/alm/devops-build-tool-tasks)
