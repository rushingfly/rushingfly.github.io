---
title:  "git 经验谈（二）：可视化辅助工具"
date: 2023-11-05
tag:
  - git
  - 项目管理
  - 版本管理
---

这篇文章是 git 系列第二篇，想介绍一下结合可视化工具使用 git 的经验。可视化工具多种多样，我自己常用的是 [Github Desktop](https://desktop.github.com/)，文章中也会介绍一下 [Sourcetree](https://www.sourcetreeapp.com/)。

### 用命令行还是可视化辅助工具？

命令行是 git 原生的使用方式，所以我们学习 git 时要通过命令行来理解 git 工作的方式。在使用可视化工具时，一定要清楚工具中所做的操作实际上是运行了哪些命令。建议使用 Sourcetree 的同学留意一下 "Always display full console output" 这个选项（在 Tools -> Options -> General -> Repo Settings 选项里），开启它可以在每次执行 git 操作时展示对应的命令。使用时如下图：

![Sourcetree](/assets/images/2021-01-05-git-guide-graph-tool/3_st_show_command.png)

当你熟悉了 git 的命令，自然会了解到命令行有哪些不足。下面就是我认为在工作中需要使用可视化工具来提升使用体验的几个功能点：

1. 对不同版本代码进行 diff 比较
2. 查看 commit history
3. 和开发环境的功能整合

接下来说说我自己是怎么解决以上需求的。

#### diff 比较

如果使用 Github Desktop 或 Sourcetree，比较 commit 之间的差异通过鼠标点选就可以了。如果和命令行结合使用，可以用 ```git diff``` 和 ```git difftool```。根据 git 的说明，后者是在内部调用前者的，所以使用 ```git difftool``` 就可以。可以设置一个你常用的比较工具作为 difftool。以 vscode 为例，需要修改 .gitconfig 文件（Windows系统中位于 ```C:\Users\YourUserName\.gitconfig```），添加以下内容：
```
[diff]
    tool = default-difftool
[difftool "default-difftool"]
    cmd = code --wait --diff $LOCAL $REMOTE
```
#### 查看 commit history

Github Desktop 和 Sourcetree 都提供了直观的提交历史查看，没什么需要特别介绍的了。

#### 结合开发环境使用

通常 IDE 都提供了 git 库文件状态查看的功能，让用户方便地得知自己地开发过程中有哪些文件发生了改变。除此之外，我熟悉的 vscode 还有这样一个功能，提供了很好的使用体验：开发者把鼠标放在某一行代码上一段时间，会弹出一个当前行代码最近一次修改的详情。这让开发者在翻阅代码时很快的得知代码的修改近况。这是通过 [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) 插件实现的。

![GitLens使用截图](/assets/images/2021-01-05-git-guide-graph-tool/3_vscode_gitlens.png)

### Github Desktop 和 Sourcetree 的对比

这两个工具都实现了可视化工具的主要功能（上文中的功能点1和2），但是也有一些各自的优势，下面列举一下：

* Github Desktop 可以绑定 Github 账号，能带给 Github 用户很大的便利
* Sourcetree 有更多的界面操作，建分支、拉代码都可以通过界面按钮完成（有利有弊，初学者不要太依赖界面）
* Sourcetree 的 History 界面最左边的 Graph 列很好地反映了分支间的关系，Github Desktop 没有这个功能

这篇就先写到这儿，感谢您的阅读！希望您能分享自己的更好的经验！
