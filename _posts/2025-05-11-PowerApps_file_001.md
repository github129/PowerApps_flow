---
layout: post
title: "コピペでOK！ Power Apps のスライダーで動かせるドーナツグラフ（ドーナツゲージ）"
description: "コピペでOK！ Power Apps のスライダーで動かせるドーナツグラフ（ドーナツゲージ）"
categories: [PowerApps]
tags: [PowerApps]
image: >-
  https://www.powerplatform.work/assets/noimage.png
optimized_image: >-
  https://www.powerplatform.work/assets/noimage.png
redirect_from:
  - /2025/05/11
---


#  概要

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/PowerApps?src=hash&amp;ref_src=twsrc%5Etfw">#PowerApps</a> <br>SVG の ドーナツグラフ <a href="https://t.co/VCEqsQSoyi">pic.twitter.com/VCEqsQSoyi</a></p>&mdash; たく丸 (@taku_ma_ru) <a href="https://twitter.com/taku_ma_ru/status/1921897428132802653?ref_src=twsrc%5Etfw">May 12, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


そのままコピペで利用できるSVGのドーナツグラフです。
スライダーで動かせる形にしていますので、ご自由にお使いください。
**本コードの使用に関しては、いかなる責任も負いかねますので、あらかじめご了承ください。**

# YAML コード

Power Apps で利用するためのページ単位の YAML コードです。


```

Screens:
  Screen1:
    Children:
      - Image2_1:
          Control: Image@2.2.3
          Properties:
            Height: =474
            Image: |-
              ="data:image/svg+xml,"& EncodeUrl($"
              <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg' style='background-color: white;'>
                <circle cx='100' cy='100' r='90' fill='none' stroke='#e0e0e0' stroke-width='20'/>

                <circle id='progress-circle'
                        cx='100' cy='100' r='90'
                        fill='none'
                        stroke='#ff0000'
                        stroke-width='20'
                        stroke-linecap='round'  pathLength='100'        stroke-dasharray='100'  stroke-dashoffset='{100-Slider1.Value}'  transform='rotate(-90 100 100)' />

                <text x='100' y='110' text-anchor='middle' font-size='40' font-weight='bold' fill='black'>
                  <tspan id='percentage-text'>{Slider1.Value}</tspan>
                  <tspan font-size='20'>%</tspan>
                </text>
              </svg>

              ")
            Width: =474
            X: =72
            Y: =279
      - Slider1:
          Control: Classic/Slider@2.1.0
          Properties:
            X: =39
            Y: =951

```





# その他の Tips はこちらから

[Power Apps Tips](https://www.youtube.com/watch?v=VrAQf3JQ7yM&list=PLVhFi1fb3DqakSLVMn22DDcySXh9jtzi- )


[Power Automate](https://www.youtube.com/watch?v=-YnJYT0ASEM&list=PLVhFi1fb3Dqbzic6GieqnLFgD3aTj-eHA)


[Power Apps で 備品管理アプリを作ろう](https://www.youtube.com/playlist?list=PLVhFi1fb3DqZM3HKb8Hea6XEL96990Fyn)


[Power Apps Tutorial](https://www.youtube.com/playlist?list=PLVhFi1fb3DqalxpL974VvAJvV4iWoSbe_)

