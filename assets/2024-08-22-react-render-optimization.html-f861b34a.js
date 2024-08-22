const e=JSON.parse('{"key":"v-22b4dfa3","path":"/posts/2024-08-22-react-render-optimization.html","title":"React 渲染优化：提升性能的实用技巧","lang":"en-US","frontmatter":{"title":"React 渲染优化：提升性能的实用技巧","date":"2024-08-22T00:00:00.000Z","tag":["React"],"description":"最近参加了一些技术面试，其中不少聊到了React渲染优化的问题。这个话题很值得汇总一下，以便更系统的理解React的渲染机制和优化途径。 在React应用中，随着组件数量和复杂度的增加，渲染性能导致的问题可能会逐渐地凸显出来。主要的现象是页面出现卡顿，影响用户体验。下面我来介绍一下React中常见的渲染优化方法。 组件级别的优化方法 useMemo useMemo是一个React Hook，用于缓存计算结果，避免在每次渲染时重复执行高开销的计算。 假设我们有一个计算结果的函数，它执行大量复杂的计算：","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://rushingfly.github.io/zh/posts/2024-08-22-react-render-optimization.html"}],["meta",{"property":"og:url","content":"https://rushingfly.github.io/posts/2024-08-22-react-render-optimization.html"}],["meta",{"property":"og:site_name","content":"因纽特猎人Blog"}],["meta",{"property":"og:title","content":"React 渲染优化：提升性能的实用技巧"}],["meta",{"property":"og:description","content":"最近参加了一些技术面试，其中不少聊到了React渲染优化的问题。这个话题很值得汇总一下，以便更系统的理解React的渲染机制和优化途径。 在React应用中，随着组件数量和复杂度的增加，渲染性能导致的问题可能会逐渐地凸显出来。主要的现象是页面出现卡顿，影响用户体验。下面我来介绍一下React中常见的渲染优化方法。 组件级别的优化方法 useMemo useMemo是一个React Hook，用于缓存计算结果，避免在每次渲染时重复执行高开销的计算。 假设我们有一个计算结果的函数，它执行大量复杂的计算："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:author","content":"因纽特猎人"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:published_time","content":"2024-08-22T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"React 渲染优化：提升性能的实用技巧\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-22T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"因纽特猎人\\",\\"url\\":\\"https://rushingfly.github.io\\"}]}"]]},"headers":[{"level":2,"title":"组件级别的优化方法","slug":"组件级别的优化方法","link":"#组件级别的优化方法","children":[{"level":3,"title":"useMemo","slug":"usememo","link":"#usememo","children":[]},{"level":3,"title":"useCallback","slug":"usecallback","link":"#usecallback","children":[]},{"level":3,"title":"React.memo","slug":"react-memo","link":"#react-memo","children":[]},{"level":3,"title":"类组件的shouldComponentUpdate","slug":"类组件的shouldcomponentupdate","link":"#类组件的shouldcomponentupdate","children":[]},{"level":3,"title":"PureComponent","slug":"purecomponent","link":"#purecomponent","children":[]}]},{"level":2,"title":"项目级别的优化方法","slug":"项目级别的优化方法","link":"#项目级别的优化方法","children":[{"level":3,"title":"代码分割","slug":"代码分割","link":"#代码分割","children":[]},{"level":3,"title":"React Compiler （React 19新特性）","slug":"react-compiler-react-19新特性","link":"#react-compiler-react-19新特性","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.17,"words":952},"filePathRelative":"posts/2024-08-22-react-render-optimization.md","localizedDate":"August 22, 2024","excerpt":"<p>最近参加了一些技术面试，其中不少聊到了React渲染优化的问题。这个话题很值得汇总一下，以便更系统的理解React的渲染机制和优化途径。<br>\\n在React应用中，随着组件数量和复杂度的增加，渲染性能导致的问题可能会逐渐地凸显出来。主要的现象是页面出现卡顿，影响用户体验。下面我来介绍一下React中常见的渲染优化方法。</p>\\n<h2> 组件级别的优化方法</h2>\\n<h3> useMemo</h3>\\n<p><code>useMemo</code>是一个React Hook，用于缓存计算结果，避免在每次渲染时重复执行高开销的计算。<br>\\n假设我们有一个计算结果的函数，它执行大量复杂的计算：</p>","autoDesc":true}');export{e as data};
