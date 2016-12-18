---
layout: post
title: "Chrome里,body {display:flex;}导致JQuery toggle行为改变"
description: "toggle,css,jquery,datepicker"
category: 
tags: [前端,css,jquery]

---
{% include JB/setup %}

kibana里加上bootstrap-datepicker，在chrome里today按钮排版乱了，发现th被加上了display:block样式，默认应该是table-cell.

先看bootstrap-datepicker的代码，是在通过jquery创建html元素后，但并未写入document时，调用的toggle;再看jquery toggle的代码，发现未写入document的元素，display属性是""，toggle显示时会去获取th标签的默认display属性。获取方式如下：


    /**
     * Try to determine the default display value of an element
     * @param {String} nodeName
     */
    function defaultDisplay( nodeName ) {
        var doc = document,
            display = elemdisplay[ nodeName ];

        if ( !display ) {
            display = actualDisplay( nodeName, doc );

            // If the simple way fails, read from inside an iframe
            if ( display === "none" || !display ) {

                // Use the already-created iframe if possible
                iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

                // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
                doc = iframe[ 0 ].contentDocument;

                // Support: IE
                doc.write();
                doc.close();

                display = actualDisplay( nodeName, doc );
                iframe.detach();
            }

            // Store the correct default display
            elemdisplay[ nodeName ] = display;
        }

        return display;
    }


    // Called only from within defaultDisplay
    function actualDisplay( name, doc ) {
        var style,
            elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

            // getDefaultComputedStyle might be reliably used only on attached element
            display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

                // Use of this method is a temporary fix (more like optimization) until something better comes along,
                // since it was removed from specification and supported only in FF
                style.display : jQuery.css( elem[ 0 ], "display" );

        // We don't have any data stored on the element,
        // so use "detach" method as fast way to get rid of the element
        elem.detach();

        return display;
    }

可见是通过在一个iframe里写入对应标签再去获取display属性，但是kibana页面包含css body {display:flex;}，获取到th标签的默认display却是block，按理说iframe里的不会被外部css影响的啊。

### 解决方法

对于date-picker，可以通过添加show事件，修正display.

    $('#sandbox-container input').datepicker({
        todayBtn: "linked"
    }).on('show', function(e) {
        $('.today').css('display','table-cell')
    });

对于其他情况，使用toogleClass应该更明确、可控。



### jsfiddle示例
[document外](https://jsfiddle.net/zjmove/L0huqLeu/)


[document内](https://jsfiddle.net/zjmove/8qvtvcjr/)

