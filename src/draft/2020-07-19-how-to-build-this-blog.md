---
title:  "如何搭建这个blog"
date: 2020-07-26
---

此文介绍一下我是如何搭建这个blog的。

## 我的需求
我希望有时间的话自己能总结和分享一些东西，包括学习和生活。针对这个目的，我想了一下我的博客需要具备哪些功能。

1. 要支持markdown。因为工作中使用markdown写文档已经很多了，这是我最为熟悉的码字放式。以后迁移到其他平台也方便，都是一样的语法。

2. 要支持git，当然也就是支持Github。可以作为一个项目去管理，这是一个码农喜闻乐见的。

3. 友好的手机浏览。也是必须的，毕竟需要分享。

基于以上的想法，我开始考察实现blog的方案，结论是搭建一个以jekyll为基础的博客，host在Github Pages。jekyll是一个基于Ruby的快速生成静态网页的工具，可以把“码字”到“作为网站展示”的过程大大简化；Github Pages是Github提供的免费的静态网页host服务，可以做到“提交代码即可发布网页”。两者结合，码农可以愉快地搭建一个blog了。需要注意的是，如果你对软件开发很陌生，需要慎重选择我的方案，因为git，jekyll包管理等内容需要先学习，比较麻烦，还不如选择一个传统的博客服务提供商。

## 搭建步骤

我是按照 [CSDN里的一篇攻略](https://blog.csdn.net/jave_f/article/details/79101592) 做的，自己再写一遍实在没必要，所以罗列一下步骤和一些注意事项。

### 1. 安装Ruby和Ruby DevKit。

我最开始想在Windows环境使用 [Windows Subsystem](https://docs.microsoft.com/zh-cn/windows/wsl/about) 去安装，这样能让我保持对linux的熟悉程度，但是失败了，因为找不到一个叫 ```zlib``` 的包（这个包是github-pages的依赖项）。后来我调查了一下，原来在Ubuntu上 ```zlib``` 这个包的名字叫 ```zlib1g``` ，可真奇怪，没继续研究此问题的workaround，决定下载Windows下传统的Ruby安装包，绕过这个问题了。

::: warning 注意
安装好Ruby之后第一件事就是改源，默认的源下载速度太慢了，慢到怀疑人生（有VPN另说）。通过命令把源改成 ```https://gems.ruby-china.com``` ，命令看 [这里](https://gems.ruby-china.com/) 。另外，前面提到的CSDN攻略里的源地址已经不能用了，别用他那个！
:::

### 2. 安装jekyll

这部分内容攻略里都有，非常简单，我就不copy了。值得一提的是，其实jekyll有很多主题都有公开的gtihub项目，直接一键fork他们的库，然后按照Github提供的开启github pages的步骤就可以轻松发布自己的博客，及其简洁，但是这样做无法实现本地预览和一些自定义的前端内容，所以我没有选择这种。

::: info 关于一键Fork
后来我想了想，这种简单的方式应该很多人会喜欢，所以你可以试一试。下面的“[有用的链接](#有用的链接) ”里的LOFFER就支持。
:::

### 3. 选一个主题

官方推荐了 [几个网站](https://jekyllrb.com/docs/themes/) ，上面有各种各样免费的主题，可以挑选一个适合自己的。这些主题大多都像上个步骤说的一样，有个github库，所以使用起来比较方便。当你选好一个主题后，可以看看该主题自己的wiki，可能会包含一些自己的小特色，使用技巧等等。我选的这个主题是 [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes) ，我觉得很好看。

### 4. 开始写博文

关于如何写博文，你需要看一下 [jekyll的官方文档](https://jekyllrb.com/docs/) ，因为jekyll有一套自己的用法，还好没什么难的，就是有点琐碎。具体到写文章本身，你只需要会使用markdown语法就够了，你可以用 [Typora](https://typora.io/) 这样的编辑器去写。写好之后，使用 ```bundle exec jekyll serve``` 命令在本地预览你的文章。另外，如果你觉得图片打开速度太慢，可以使用图床，比如 [sm.ms](https://sm.ms/) 这种。

### 5. 评论功能（可选）
为你的博客添加评论区有很多选择，大多是选择一个第三方的服务。评论区虽然不是必须的，但是我也花了不少时间在这上面，因为每一次发布品论区相关的功能，救必须提交到Github才能看到，本地预览不了。我觉得选择评论区功能你要考虑以下因素：
- 开发起来简单
- 用户发表评论要方便
- 确保国内用户能访问，别被墙

基于以上原因我选择了 [Gitalk](https://github.com/gitalk/gitalk/)，用户可以使用Github账号登录，发表评论。关于评论区，这里还有一个 [攻略]([https://fromendworld.github.io/LOFFER/document/#%E5%8F%AF%E9%80%89%E6%B7%BB%E5%8A%A0%E8%AF%84%E8%AE%BA%E5%8C%BA](https://fromendworld.github.io/LOFFER/document/#可选添加评论区)) 可以参考。



## 有用的链接

除了上文已经提到的连接，以下这些也会有用。
- [Github Pages官方的使用jekyll搭建静态网页的介绍](https://docs.github.com/en/github/working-with-github-pages/setting-up-a-github-pages-site-with-jekyll)

- [LOFFER，不错的中文主题](https://github.com/FromEndWorld/loffer)


