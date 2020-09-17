---
title:  "一个使用index作为虚拟DOM的key而导致的问题"
share: false
last_modified_at: 2020-09-17
tags:
  - React
  - Vue
  - 虚拟DOM
  - data driven
---

0. bug的表现形式，展示gif，修复的经过
1， 原理：react、vue要求开发者在数组产生的dom时设置唯一key，原因是基于虚拟DOM比较渲染
    数据驱动
    虚拟DOM比较
    谈一下自己学习前端的起点
2. 问题的root cause：由于增删和排序，reat、vue错误识别了虚拟DOM，进而执行对应的css动画
    演示代码
3. ant的List组件也有这个问题


