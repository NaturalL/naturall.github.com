---
layout: post
title: Jekyll 代码高亮显示
description: "ekyll提供了对代码高亮的支持，首先需要包含一个定义代码高亮显示风格的CSS文件，使用很简单，只要添加highlight标签即可."
category: Jekyll
tags: [Jekyll]

---
{% include JB/setup %}


## Jekyll 高亮显示

Jekyll提供了对代码高亮的支持，首先需要包含一个定义代码高亮显示风格的CSS文件，使用很简单，只要添加highlight标签即可。	  
如：


{% raw %}
	{% highlight ruby %}
	def show
	  @widget = Widget(params[:id])
	  respond_to do |format|
	    format.html # show.html.erb
	    format.json { render json: @widget }
	  end
	end
	{% endhighlight %}
{% endraw %}


然后提交到github上，在我的显示风格下，就可以看到如下显示效果：

{% highlight ruby %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}


这里的syntax.css主要定义了代码的显示颜色，此外还需通过pre,code标签定义代码框背景，字体等。
syntax.css：

{% highlight css linenos=table %}
.hll { background-color: #404040 }
.c { color: #999999; font-style: italic } /* Comment */
.err { color: #a61717; background-color: #e3d2d2 } /* Error */
.g { color: #d0d0d0 } /* Generic */
.k { color: #6ab825; font-weight: bold } /* Keyword */
.l { color: #d0d0d0 } /* Literal */
.n { color: #d0d0d0 } /* Name */
.o { color: #d0d0d0 } /* Operator */
.x { color: #d0d0d0 } /* Other */
.p { color: #d0d0d0 } /* Punctuation */
.cm { color: #999999; font-style: italic } /* Comment.Multiline */
.cp { color: #cd2828; font-weight: bold } /* Comment.Preproc */
.c1 { color: #999999; font-style: italic } /* Comment.Single */
.cs { color: #e50808; font-weight: bold; background-color: #520000 } /*       Comment.Special Comment.Special */
.gd { color: #d22323 } /* Generic.Deleted */
.ge { color: #d0d0d0; font-style: italic } /* Generic.Emph */
.gr { color: #d22323 } /* Generic.Error */
.gh { color: #ffffff; font-weight: bold } /* Generic.Heading */
.gi { color: #589819 } /* Generic.Inserted */
.go { color: #cccccc } /* Generic.Output */
.gp { color: #aaaaaa } /* Generic.Prompt */
.gs { color: #d0d0d0; font-weight: bold } /* Generic.Strong */
.gu { color: #ffffff;} /* Generic.Subheading */
.gt { color: #d22323 } /* Generic.Traceback */
.kc { color: #6ab825; font-weight: bold } /* Keyword.Constant */
.kd { color: #6ab825; font-weight: bold } /* Keyword.Declaration */
.kn { color: #6ab825; font-weight: bold } /* Keyword.Namespace */
.kp { color: #6ab825 } /* Keyword.Pseudo */
.kr { color: #6ab825; font-weight: bold } /* Keyword.Reserved */
.kt { color: #6ab825; font-weight: bold } /* Keyword.Type */
.ld { color: #d0d0d0 } /* Literal.Date */
.m { color: #3677a9 } /* Literal.Number */
.s { color: #ed9d13 } /* Literal.String */
.na { color: #bbbbbb } /* Name.Attribute */
.nb { color: #24909d } /* Name.Builtin */
.nc { color: #447fcf;} /* Name.Class */
.no { color: #40ffff } /* Name.Constant */
.nd { color: #ffa500 } /* Name.Decorator */
.ni { color: #d0d0d0 } /* Name.Entity */
.ne { color: #bbbbbb } /* Name.Exception */
.nf { color: #447fcf } /* Name.Function */
.nl { color: #d0d0d0 } /* Name.Label */
.nn { color: #447fcf;} /* Name.Namespace */
.nx { color: #d0d0d0 } /* Name.Other */
.py { color: #d0d0d0 } /* Name.Property */
.nt { color: #6ab825; font-weight: bold } /* Name.Tag */
.nv { color: #40ffff } /* Name.Variable */
.ow { color: #6ab825; font-weight: bold } /* Operator.Word */
.w { color: #666666 } /* Text.Whitespace */
.mf { color: #3677a9 } /* Literal.Number.Float */
.mh { color: #3677a9 } /* Literal.Number.Hex */
.mi { color: #3677a9 } /* Literal.Number.Integer */
.mo { color: #3677a9 } /* Literal.Number.Oct */
.sb { color: #ed9d13 } /* Literal.String.Backtick */
.sc { color: #ed9d13 } /* Literal.String.Char */
.sd { color: #ed9d13 } /* Literal.String.Doc */
.s2 { color: #ed9d13 } /* Literal.String.Double */
.se { color: #ed9d13 } /* Literal.String.Escape */
.sh { color: #ed9d13 } /* Literal.String.Heredoc */
.si { color: #ed9d13 } /* Literal.String.Interpol */
.sx { color: #ffa500 } /* Literal.String.Other */
.sr { color: #ed9d13 } /* Literal.String.Regex */
.s1 { color: #ed9d13 } /* Literal.String.Single */
.ss { color: #ed9d13 } /* Literal.String.Symbol */
.bp { color: #24909d } /* Name.Builtin.Pseudo */
.vc { color: #40ffff } /* Name.Variable.Class */
.vg { color: #40ffff } /* Name.Variable.Global */
.vi { color: #40ffff } /* Name.Variable.Instance */
.il { color: #3677a9 } /* Literal.Number.Integer.Long */
{% endhighlight %}

pre 和 code标签：

{% highlight css %}
pre {
	font-size: 0.75em; /* Hack to make code look same size as body font */  
	line-height: 1.3em;	
	overflow: auto;

	display:block;
	padding:8.5px;
	margin:9px 0 9px 0;
	background-color:#f5f5f5;
	border:1px solid #ccc;
	border:1px solid rgba(0, 0, 0, 0.15);
	-webkit-border-radius:4px;
	-moz-border-radius:4px;
	border-radius:4px;
	white-space:pre;
	white-space:pre-wrap;
	word-break:break-all;
	word-wrap:break-word;
}

.highlight pre{
	background-color: rgb(32, 32, 32);
}

pre.prettyprint{margin-bottom:18px;}

code {
	font-family: 宋体,serif;
	font-size: 1.2em;
	line-height: 1.3em;
}
pre > code {
	background-color: transparent;
}
{% endhighlight %}

如果想要选择其他风格，或者在自己电脑上测试，需要安装Pygments,具体描述见此文：

<http://ppxu.net/blog/2013/01/18/support-pygments-in-jekyll-on-windows/>


## 遇到的问题

(1)使用easy_install安装Pygments时，几次都显示error:0,应该是网络原因导致的，多试几次解决。  

(2)安装好Pygments后，Jekyll serve --watch 报错，卸载pygments.rb 0,5.2 安装旧版后正常。

	gem uninstall pygments.rb --version "=0.5.2"
	gem install pygments.rb --version "=0.5.0" 

(3)写此篇博文时，发现Pygments似乎不能处理CSS里的这行注释/\* @group Code \*/，会导致Build failed.	  

(3)要在博客中显示liquid标签本身，需要加上raw标签：  

(5)使用项目-加空格自动生成项目标号后，空四格自动变代码竟然会失效，无语啊。   
{% raw %}
	{ % raw %}
		{% highlight ruby %}
		def show
		  @widget = Widget(params[:id])
		  respond_to do |format|
		    format.html # show.html.erb
		    format.json { render json: @widget }
		  end
		end
		{% endhighlight %}
	{ % endraw %}
	这里为了正常显示，“{”后打了空格，两个raw嵌套不行啊
{% endraw %}



