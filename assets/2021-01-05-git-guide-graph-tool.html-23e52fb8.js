import{_ as r,a}from"./3_vscode_gitlens-a4f4dcf9.js";import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as d,c as l,b as e,d as t,e as o,f as c}from"./app-b927363b.js";const u={},h={href:"https://desktop.github.com/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.sourcetreeapp.com/",target:"_blank",rel:"noopener noreferrer"},p=c('<h3 id="用命令行还是可视化辅助工具" tabindex="-1"><a class="header-anchor" href="#用命令行还是可视化辅助工具" aria-hidden="true">#</a> 用命令行还是可视化辅助工具？</h3><p>命令行是 git 原生的使用方式，所以我们学习 git 时要通过命令行来理解 git 工作的方式。在使用可视化工具时，一定要清楚工具中所做的操作实际上是运行了哪些命令。建议使用 Sourcetree 的同学留意一下 &quot;Always display full console output&quot; 这个选项（在 Tools -&gt; Options -&gt; General -&gt; Repo Settings 选项里），开启它可以在每次执行 git 操作时展示对应的命令。使用时如下图：</p><figure><img src="'+a+`" alt="Sourcetree" tabindex="0" loading="lazy"><figcaption>Sourcetree</figcaption></figure><p>当你熟悉了 git 的命令，自然会了解到命令行有哪些不足。下面就是我认为在工作中需要使用可视化工具来提升使用体验的几个功能点：</p><ol><li>对不同版本代码进行 diff 比较</li><li>查看 commit history</li><li>和开发环境的功能整合</li></ol><p>接下来说说我自己是怎么解决以上需求的。</p><h4 id="diff-比较" tabindex="-1"><a class="header-anchor" href="#diff-比较" aria-hidden="true">#</a> diff 比较</h4><p>如果使用 Github Desktop 或 Sourcetree，比较 commit 之间的差异通过鼠标点选就可以了。如果和命令行结合使用，可以用 <code>git diff</code> 和 <code>git difftool</code>。根据 git 的说明，后者是在内部调用前者的，所以使用 <code>git difftool</code> 就可以。可以设置一个你常用的比较工具作为 difftool。以 vscode 为例，需要修改 .gitconfig 文件（Windows系统中位于 <code>C:\\Users\\YourUserName\\.gitconfig</code>），添加以下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[diff]
    tool = default-difftool
[difftool &quot;default-difftool&quot;]
    cmd = code --wait --diff $LOCAL $REMOTE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看-commit-history" tabindex="-1"><a class="header-anchor" href="#查看-commit-history" aria-hidden="true">#</a> 查看 commit history</h4><p>Github Desktop 和 Sourcetree 都提供了直观的提交历史查看，没什么需要特别介绍的了。</p><h4 id="结合开发环境使用" tabindex="-1"><a class="header-anchor" href="#结合开发环境使用" aria-hidden="true">#</a> 结合开发环境使用</h4>`,12),g={href:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",target:"_blank",rel:"noopener noreferrer"},m=e("figure",null,[e("img",{src:r,alt:"GitLens使用截图",tabindex:"0",loading:"lazy"}),e("figcaption",null,"GitLens使用截图")],-1),_=e("h3",{id:"github-desktop-和-sourcetree-的对比",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github-desktop-和-sourcetree-的对比","aria-hidden":"true"},"#"),t(" Github Desktop 和 Sourcetree 的对比")],-1),b=e("p",null,"这两个工具都实现了可视化工具的主要功能（上文中的功能点1和2），但是也有一些各自的优势，下面列举一下：",-1),v=e("ul",null,[e("li",null,"Github Desktop 可以绑定 Github 账号，能带给 Github 用户很大的便利"),e("li",null,"Sourcetree 有更多的界面操作，建分支、拉代码都可以通过界面按钮完成（有利有弊，初学者不要太依赖界面）"),e("li",null,"Sourcetree 的 History 界面最左边的 Graph 列很好地反映了分支间的关系，Github Desktop 没有这个功能")],-1),k=e("p",null,"这篇就先写到这儿，感谢您的阅读！希望您能分享自己的更好的经验！",-1);function x(G,S){const i=n("ExternalLinkIcon");return d(),l("div",null,[e("p",null,[t("这篇文章是 git 系列第二篇，想介绍一下结合可视化工具使用 git 的经验。可视化工具多种多样，我自己常用的是 "),e("a",h,[t("Github Desktop"),o(i)]),t("，文章中也会介绍一下 "),e("a",f,[t("Sourcetree"),o(i)]),t("。")]),p,e("p",null,[t("通常 IDE 都提供了 git 库文件状态查看的功能，让用户方便地得知自己地开发过程中有哪些文件发生了改变。除此之外，我熟悉的 vscode 还有这样一个功能，提供了很好的使用体验：开发者把鼠标放在某一行代码上一段时间，会弹出一个当前行代码最近一次修改的详情。这让开发者在翻阅代码时很快的得知代码的修改近况。这是通过 "),e("a",g,[t("GitLens"),o(i)]),t(" 插件实现的。")]),m,_,b,v,k])}const w=s(u,[["render",x],["__file","2021-01-05-git-guide-graph-tool.html.vue"]]);export{w as default};
