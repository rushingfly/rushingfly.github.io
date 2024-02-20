import{_ as r,a}from"./2_git_space-dcd20498.js";import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as l,c as n,b as t,d as e,e as o,f as h}from"./app-b927363b.js";const s={},m=t("p",null,"最近想写一篇 git 的向导，由于 git 的使用方式非常灵活，每个人对 git 也有不同的使用偏好，所以写一下自己的经验还是很值得的。另外，现在总结一下使用经验，今后开展项目可以做到有备无患。根据我的总结，git 还是有不少东西值得写的，所以想把我写的东西分成几块，有个前后顺序。这是第一篇，介绍一下基本的入门知识，再讲讲 git 的整体结构是什么样的。Let's go!",-1),g=t("h3",{id:"什么是-git",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#什么是-git","aria-hidden":"true"},"#"),e(" 什么是 git")],-1),p={href:"https://en.wikipedia.org/wiki/Version_control",target:"_blank",rel:"noopener noreferrer"},u=h('<ul><li>分布式：git 不依赖于集中的版本控制服务器，不同的用户创建自己的库后，可以自由地在其基础上做版本管理</li><li>免费开源</li></ul><h3 id="git-repositories-的空间视角" tabindex="-1"><a class="header-anchor" href="#git-repositories-的空间视角" aria-hidden="true">#</a> git repositories 的空间视角</h3><p>总的来说，git repository 是一个复杂的数据结构，开发者需要对整体有一个基本的了解。我建议把工作中使用的 git repository 看作一个三维的空间。下面就来说一下 git 空间的三个维度。</p><h4 id="第一维度-commit-history" tabindex="-1"><a class="header-anchor" href="#第一维度-commit-history" aria-hidden="true">#</a> 第一维度：commit history</h4><p>commit 是一次代码提交，它实现版本管理最基础的功能 —— 把修改历史划分为不同的版本。它也是 git 在切换不同版本时的最小单位。我们平时写代码时，每一次写完一个完整的代码逻辑，就可以做一次代码提交。每一次提交都要确保达到以下要求：</p><ol><li>项目可以编译成功</li><li>未实现的部分能显示合理的提示或者抛出 <code>NotImplementedException</code> 之类的异常</li></ol><h4 id="第二维度-branch" tabindex="-1"><a class="header-anchor" href="#第二维度-branch" aria-hidden="true">#</a> 第二维度：branch</h4><p>branch 是代码的副本，服务于团队开发中不同的开发者专注于各自的工作任务。除了默认的 master 分支，我们在创建分支时都会基于一个原有的分支进行拷贝，创建完成后，新分支也保留了原有分支的 commit hostory。</p><h4 id="第三维度-remote" tabindex="-1"><a class="header-anchor" href="#第三维度-remote" aria-hidden="true">#</a> 第三维度：remote</h4><p>和你的本地库产生关联的远程库叫remote。我们经常使用 <code>git clone</code> 命令去拷贝别人的代码，这个命令生成的本地库就带有 remote 信息。可以使用 <code>git remote -v</code> 查看当前库的 remote 的详细信息。虽然 git 是分布式的，但是开展团队开发工作时通常还是把 repository 分为“团队的库”和“自己的库”，另外，团队还会使用 Github 这样的代码托管服务。通常的团队开发中，每个开发者（对于同一个项目）会用到三个库，两个远程的，一个本地的。下面说明一下这三个库：</p><table><thead><tr><th>简称</th><th>remote主机名</th><th>host在哪里</th><th>用途</th></tr></thead><tbody><tr><td>自己的本地库</td><td>-</td><td>开发者本地</td><td>进行本地开发和调试，解决代码合并时的冲突</td></tr><tr><td>自己的远程库</td><td>origin</td><td>github之类的代码托管服务</td><td>代码远程存储，更便捷地使用托管服务的Pull Request等功能</td></tr><tr><td>团队的远程库</td><td>upstream</td><td>github之类的代码托管服务</td><td>管理产品源代码，管理开发迭代中的代码，代码权限管理</td></tr></tbody></table><p>产品开发过程中，代码的流向应该是这样的：</p><figure><img src="'+r+'" alt="remote之间的关系" tabindex="0" loading="lazy"><figcaption>remote之间的关系</figcaption></figure><p>解释一下上图中的步骤：</p><ol><li>local -&gt; origin：一般是准备提交到团队库之前就先提交到origin，或者是需要远程备份自己的代码时这么做。这里的虚线是从自己的远程备份下载代码时这么做。</li><li>origin -&gt; upstream：提交 Rull Request 时这样操作。</li><li>upstream -&gt; local：需要从团队库更新代码时这样做。我的习惯是直接 pull（信任团队的代码是可靠的），就不分步 fetch 和 merge 了。</li></ol><p>这样就形成了图中所示的逆时针工作流。</p><div class="hint-container info"><p class="hint-container-title">直接把团队库当成origin岂不更好？</p><p>这样只是看上去简单，对团队整体而言是不好的。团队的库是要做权限管理的，不宜把团队库的某个分支当作“自己的远程库”。</p></div><p>基于以上的空间划分，git 的空间视角应该是这样的：</p><figure><img src="'+a+`" alt="git空间视角" tabindex="0" loading="lazy"><figcaption>git空间视角</figcaption></figure><p>图中的每个圆点代表一个 commit，每个横向的直线+箭头代表一个分支，每一个平面代表一个 repository 副本。（图中的虚线没有实际意义，只是为了看上去像是立体的）</p><h3 id="使用-checkout-命令在-git-空间中-穿梭" tabindex="-1"><a class="header-anchor" href="#使用-checkout-命令在-git-空间中-穿梭" aria-hidden="true">#</a> 使用 checkout 命令在 git 空间中“穿梭”</h3><p>checkout 命令有很多用法，最主要的有两个：在不同的分支间切换；在不同的 commit 状态间切换。前者是基本操作，后者显得高级一点。这里主要说一下后者，因为在 commit 间切换使 git 用法更加灵活，但容易遇到问题。开发者每次提交之后，生成的 commit 都有一个对应的 <code>SHA-1</code> 哈希值（通过 <code>git log</code> 或图形化工具也能拿到这个值），通过使用 <code>git checkout</code> 后面加上这个哈希值就能实现在 commit 之间切换，像下面这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout dc3966be219e95abe2b098858e1ef4dd79f4b84d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样使用 checkout 命令会让 git 处于 detached HEAD 状态，字面意思看，是“脑袋错位了”。开发者要注意，如果你处于 detached HEAD 状态，一定是为了查看某个 commit 后状态的代码（或在此基础上做调试），查看完之后一定要通过“某种方式”还原到正常状态，否则可能会出问题。说到这里，有几个事情必须解释一下：</p><ol><li>**什么是 HEAD？**HEAD是一个指针，它指向目前你本地文件所处的状态。我们可以把 commit history 看作一个链表，每个 commit 是链表上的一个节点，开发者本地文件的状态必然是处于某一个节点上，HEAD 正是指向这个节点。正常状态下 HEAD 总是处于这个链表的最后一个节点。</li><li>**什么是 detached HEAD？**当我们执行 checkout 命令且把哈希值作为参数切换到某个 commit 之后的状态时， HEAD就不再指向“正常”的位置了，这种状态就是 detached HEAD。</li><li>**上文中提到的“某种方式”是什么？**为了回到正常状态，你有两种选择：1. 使用 <code>git checkout [branchName]</code> 回到某个分支；2. 在当前的 commit 状态下建一个新的分支，使用 <code>git checkout -b [newBranchName]</code>。</li><li>**不从 detached HEAD 状态切换回正常状态会导致什么问题？**处于 detached HEAD 状态下也可以提交新的 commit，如果开发者在这种状态下提交新的 commit，commit history 这个链表就分叉了！如果开发者对眼前的状态不是很清楚，可能会把自己要提交的内容弄丢。</li></ol><p>这篇就先写到这儿，主要是想说一下“如何看 git”。一些代码提交、修改的知识比较零碎，准备放在今后的文章里写，目前来看，还有以下几篇是今后要写的：</p><ul><li>图形化辅助工具</li><li>代码的提交/合并</li><li>团队使用规范</li></ul>`,27),_={href:"https://marklodato.github.io/visual-git-guide/index-en.html",target:"_blank",rel:"noopener noreferrer"},f=t("p",null,"感谢您的阅读，欢迎提出您的看法。",-1);function b(x,k){const i=d("ExternalLinkIcon");return l(),n("div",null,[m,g,t("p",null,[e("git 是一个用于软件开发的代码 "),t("a",p,[e("版本控制系统"),o(i)]),e("。它有以下特点：")]),u,t("p",null,[e("最后再推荐一篇攻略，我觉得这篇借助图形讲得非常好："),t("a",_,[e("A Visual Git Reference"),o(i)])]),f])}const A=c(s,[["render",b],["__file","2020-11-02-git-guide-space.html.vue"]]);export{A as default};
