---
layout: post
title: Timing attack-计时攻击
description: ""
category: Security
tags: [attack]

---
{% include JB/setup %}


看tj的cookie-signature时，有一行代码很奇怪。

	return exports.sign(mac, secret) == exports.sign(val, secret) ? str : false;

其中sign函数的作用是对message生成hmac-sha256消息验证码,只要mac 等于 val,返回结果肯定相同。
为什么多次一举，而不直接写成:

	return mac === val ? str : false;

查看github上的 History.md后得知，这是为了防止计时攻击（Timing-attack）。
因为如果这样写，如果mac等于111111,val等于222222,那么只要比较第一个字符就能确定不相等，这就泄漏了时间信息，就可能可以通过调整val的第一个字符，比较时间长短，最终得知mac的第一个字符为1，进而泄漏整个mac。

而且第一种写法也不正确，已经修改为：

	return sha1(mac) == sha1(val) ? str : false;

通过再次sha1,能够保证足够的随机性，即使mac和val只有一个字符不同，sha1处理后也是完全不同的。





##参考：
[github上的讨论](https://github.com/tj/node-cookie-signature/issues/15)

[cookie-signature](https://github.com/tj/node-cookie-signature)