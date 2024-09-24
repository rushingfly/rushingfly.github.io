const t=JSON.parse(`{"key":"v-3f6e1df2","path":"/zh/posts/2023-11-02-git-guide-space.html","title":"git 经验谈（一）：认识 git 的结构","lang":"zh-CN","frontmatter":{"title":"git 经验谈（一）：认识 git 的结构","date":"2023-11-02T00:00:00.000Z","tag":["git","项目管理","版本管理"],"description":"最近想写一篇 git 的向导，由于 git 的使用方式非常灵活，每个人对 git 也有不同的使用偏好，所以写一下自己的经验还是很值得的。另外，现在总结一下使用经验，今后开展项目可以做到有备无患。根据我的总结，git 还是有不少东西值得写的，所以想把我写的东西分成几块，有个前后顺序。这是第一篇，介绍一下基本的入门知识，再讲讲 git 的整体结构是什么样的。Let's go! 什么是 git git 是一个用于软件开发的代码 版本控制系统。它有以下特点：","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://rushingfly.github.io/posts/2023-11-02-git-guide-space.html"}],["meta",{"property":"og:url","content":"https://rushingfly.github.io/zh/posts/2023-11-02-git-guide-space.html"}],["meta",{"property":"og:site_name","content":"因纽特猎人Blog"}],["meta",{"property":"og:title","content":"git 经验谈（一）：认识 git 的结构"}],["meta",{"property":"og:description","content":"最近想写一篇 git 的向导，由于 git 的使用方式非常灵活，每个人对 git 也有不同的使用偏好，所以写一下自己的经验还是很值得的。另外，现在总结一下使用经验，今后开展项目可以做到有备无患。根据我的总结，git 还是有不少东西值得写的，所以想把我写的东西分成几块，有个前后顺序。这是第一篇，介绍一下基本的入门知识，再讲讲 git 的整体结构是什么样的。Let's go! 什么是 git git 是一个用于软件开发的代码 版本控制系统。它有以下特点："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-24T06:23:46.000Z"}],["meta",{"property":"article:author","content":"因纽特猎人"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:tag","content":"项目管理"}],["meta",{"property":"article:tag","content":"版本管理"}],["meta",{"property":"article:published_time","content":"2023-11-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-24T06:23:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"git 经验谈（一）：认识 git 的结构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-24T06:23:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"因纽特猎人\\",\\"url\\":\\"https://rushingfly.github.io\\"}]}"]]},"headers":[{"level":3,"title":"什么是 git","slug":"什么是-git","link":"#什么是-git","children":[]},{"level":3,"title":"git repositories 的空间视角","slug":"git-repositories-的空间视角","link":"#git-repositories-的空间视角","children":[]},{"level":3,"title":"使用 checkout 命令在 git 空间中“穿梭”","slug":"使用-checkout-命令在-git-空间中-穿梭","link":"#使用-checkout-命令在-git-空间中-穿梭","children":[]}],"git":{"createdTime":1727159026000,"updatedTime":1727159026000,"contributors":[{"name":"Charles","email":"wangch2204@hotmail.com","commits":1}]},"readingTime":{"minutes":6.33,"words":1899},"filePathRelative":"zh/posts/2023-11-02-git-guide-space.md","localizedDate":"2023年11月2日","excerpt":"<p>最近想写一篇 git 的向导，由于 git 的使用方式非常灵活，每个人对 git 也有不同的使用偏好，所以写一下自己的经验还是很值得的。另外，现在总结一下使用经验，今后开展项目可以做到有备无患。根据我的总结，git 还是有不少东西值得写的，所以想把我写的东西分成几块，有个前后顺序。这是第一篇，介绍一下基本的入门知识，再讲讲 git 的整体结构是什么样的。Let's go!</p>\\n<h3> 什么是 git</h3>\\n<p>git 是一个用于软件开发的代码 <a href=\\"https://en.wikipedia.org/wiki/Version_control\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">版本控制系统</a>。它有以下特点：</p>","autoDesc":true}`);export{t as data};
