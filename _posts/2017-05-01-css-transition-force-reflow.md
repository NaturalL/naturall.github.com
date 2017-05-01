---
layout: post
title: "CSS transition force reflow"
description: "transition,css,translate3d"
category: 
tags: [前端,css]

---
{% include JB/setup %}

最近需要修改bootstrap的轮播插件，把隐藏slide从display:none改为visibility:hidden，修修补补改完后在Firefox可以运行，但是在Chrome就不行了。

发现两个浏览器用的不是相同的CSS，Firefox通过transition: 0.6s ease-in-out left;产生过渡动画，而Chrome是通过transition: transform 0.6s ease-in-out，这种方式可能有硬件加速吧。

[jsfiddle 问题demo](https://jsfiddle.net/25d3ga9j/28/)

通过打印transform属性发现，display:block并且包含transition时，force reflow没有生效（没有到最终状态，即过渡动画结束时的状态）。

取消next的过渡效果，问题就解决了。（https://jsfiddle.net/25d3ga9j/25/）




### force reflow
(http://semisignal.com/?p=5298)

