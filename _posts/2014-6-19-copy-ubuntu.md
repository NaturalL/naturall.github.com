---
layout: post
title: 迁移ubuntu到另一块硬盘
description: ""
category:
tags: [ubuntu]

---
{% include JB/setup %}


实验室的一块硬盘太旧了，提示即将损坏，所以决定把上面的ubuntu系统迁移到另一块硬盘上去。
## 复制分区
    #将分区 sdb3 复制到 sda9
    dd if=/dev/sdb3 of=/dev/sda9
这种方法将同时复制分区大小，分区的uuid。需要重新调整sda9的大小和uuid。
<!--break-->
## 修改fstab

复制完成后，修改/etc/fstab中的uuid. fstab中记录了启动时需要挂载的分区。


## 更新新硬盘上系统的grub
dd复制后的/boot/grub中仍然是旧的引导信息，我需要更新。

<http://askubuntu.com/questions/145241/how-do-i-run-update-grub-from-a-livecd>
<http://ubuntuforums.org/showthread.php?t=1581099/>


##总结
以上几步需要根据实际需求来。