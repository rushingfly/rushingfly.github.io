import{_ as t,a as p,b as o,c as i}from"./1_useKey-9bba483c.js";import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c as u,b as n,d as a,e,f as d}from"./app-b927363b.js";const k={},h=d('<p>我之前遇到过一个设计师开的bug，是说当用户在一个列表里添加了一行记录时，界面上的 CheckBox 异常地执行了一个动画效果。接到这个bug时第一反应是看看 CheckBox 对应的布尔值有没有发生变化，确认没有之后，我觉得这需要调查一下控件CSS的实现逻辑了，所以这个bug就被我放在一边了，因为没有影响到数据，被认为是低优先级的问题。直到后来有机会去处理手上残留的bug，才再次尝试解决。</p><h2 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述" aria-hidden="true">#</a> 问题描述</h2><p>我用一个例子去描述当时我遇到的问题。假设我们用一个列表去实现某个业务上的功能，列表的每一行最左面是个 CheckBox，右面有一些文本信息。列表还支持增加行，按一下按钮（下图中的 Add to top），列表的最上方会加上一行。界面像是下面这样（暂时忽略那个Reverse按钮）。</p><figure><img src="'+t+`" alt="list" tabindex="0" loading="lazy"><figcaption>list</figcaption></figure><p>我在写这里的代码时顺理成章地把这个列表用一个数组作为数据源，然后用 <code>map</code> 函数返回JSX去创建这个列表，由于 React 要求每个从数据动态创建的虚拟DOM都有一个 key，所以用数组的 index 作为 key 是再合适不过了。所以列表这里我写了这样的代码：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> <span class="token comment">/* 用index作为key */</span><span class="token operator">&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span>
        <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>checked<span class="token punctuation">}</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">/* handle click action */</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Typography.Text</span></span> <span class="token attr-name">code</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Typography.Text</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么这里遇到了什么问题呢？就是新建一个行时，下面某一行的 CheckBox 执行了一个动画，这个动画是每次用户点击 CheckBox 而导致 CheckBox 的布尔值变化时应该执行的。语言有点难形容，我录了个屏来展示：</p><figure><img src="`+p+'" alt="使用index作为key" tabindex="0" loading="lazy"><figcaption>使用index作为key</figcaption></figure><p>看到了没，每次点按钮，倒数第二条都执行一个动画。（图里其实还是不明显，我们的产品中的动画效果更明显一点...）如果你实在get不到问题是什么样的，可以看看 antd 控件库的 CheckBox 组件的源代码... （开个玩笑，不过我真的看了一下 antd 代码佐证了一下）</p><h2 id="大的背景" tabindex="-1"><a class="header-anchor" href="#大的背景" aria-hidden="true">#</a> 大的背景</h2><div class="hint-container info"><p class="hint-container-title">提示</p><p>介绍一下基本概念，知道的话可以跳过。</p></div><p>要说清楚这个问题为什么会发生，还是得把前端开发的一些背景说一下。我在学习前端开发的时候，已经到了前端技术逐渐趋于统一和稳定的时代，“数据驱动”和“虚拟DOM技术”已经获得了广泛的认可和应用。简单解释一下这两个概念：</p><ul><li>数据驱动：意思是说，开发者致力于处理数据，前端库根据数据去渲染DOM节点，这种说法是相对于开发者直接操作DOM节点和浏览器事件而言。在本文的例子中，我们就是在关注数据（CheckBox的布尔值），CSS动画的渲染交给控件库去实现。</li><li>基于虚拟DOM的渲染：简单地说，基于虚拟DOM的渲染是使用 JavaScript 对象表示DOM节点，通过比较对象的差异来判断真实DOM节点的变化，这样做最终形成一个“缓冲”机制，尽量避免浏览器渲染流程中不必要的计算开销。在 React 和 Vue 中，算法根据虚拟DOM的 key（在同类DOM节点中）识别具体是哪个节点。</li></ul><h2 id="寻找原因" tabindex="-1"><a class="header-anchor" href="#寻找原因" aria-hidden="true">#</a> 寻找原因</h2><p>为了让虚拟DOM节点可以被识别，React 和 Vue 都要求开发者给动态生成DOM节点设置 key，否则会报这样的警告：<code>Warning: Each child in a list should have a unique &quot;key&quot; prop.</code> 为了便于实现，开发者首先会考虑使用数组的 index 作为 key，然而数组的 index 一定能准确地识别唯一的虚拟DOM节点吗？让我们来用本文的例子比较一下数组 index 和虚拟DOM节点之间的关系。</p><figure><img src="'+o+'" alt="按按钮前后对比" tabindex="0" loading="lazy"><figcaption>按按钮前后对比</figcaption></figure><p>在上图按按钮前后过程中，React的虚拟DOM比较算法认为发生了以下变化：</p><ul><li>key为0的节点的 CheckBox 值没有发生变化。（算法断错了，这里实际是新增了 &quot;electric blue&quot; 这一行）</li><li>key为1的节点的 CheckBox 值由 <code>false</code> 变成了 <code>true</code>，需要执行一个表示值变化的CSS动画（算法判断错了，&quot;ocean of noise&quot; 这行没有发生变化）</li><li>新增了一个key为2的节点。（算法断错了，&quot;some text&quot; 这行没有发生变化）</li></ul><p>这样看来，用 index 作为 key 让算法晕头转向，根本就没搞清谁是谁。这是在对数组进行增删是会产生的问题，如果数组没有变化（比如本文的例子中，产品本身没有增加记录的需求），其实不会出现这个问题。除此之外，给数组排序也会导致这个问题，可想而知。（图片中的 Reverse 按钮就是我用来测试排序的）</p><h2 id="问题的解决" tabindex="-1"><a class="header-anchor" href="#问题的解决" aria-hidden="true">#</a> 问题的解决</h2><p>解决这个问题很容易，使用一个能正确标识数组元素的字段作为虚拟DOM的 key 就可以了。有时得益于业务上的便利，前端开发者经常能拿到一些后端 API 提供的唯一性 id，如果没有的话，自己创建一个随机数作为 id 也行。下图展示一下使用正确的 key 后的点击效果（没有那个一闪而过的动画了）：</p><figure><img src="'+i+'" alt="使用正确的key" tabindex="0" loading="lazy"><figcaption>使用正确的key</figcaption></figure><h2 id="antd-控件中-list-的实现" tabindex="-1"><a class="header-anchor" href="#antd-控件中-list-的实现" aria-hidden="true">#</a> antd 控件中 List 的实现</h2>',23),g={href:"https://github.com/ant-design/ant-design/blob/master/components/list/index.tsx#L121",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"引用的资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#引用的资料","aria-hidden":"true"},"#"),a(" 引用的资料")],-1),x={href:"https://github.com/rushingfly/rushingfly.github.io/tree/master/docs/_code/sample1.js",target:"_blank",rel:"noopener noreferrer"},f={href:"https://time.geekbang.org/course/detail/100024601-86448",target:"_blank",rel:"noopener noreferrer"};function b(v,_){const s=l("ExternalLinkIcon");return r(),u("div",null,[h,n("p",null,[a("我顺便看了一下 antd 的 List 控件是如何处理 key 问题的，从 "),n("a",g,[a("源代码"),e(s)]),a(" 可以看到，List 首先选用 rowKey，没有的话会尝试用数据源中的 key 字段，如果再没有，就用一个基于 index 的字符串。所以提供官方API支持的 rowKey 是最好的选择。")]),m,n("ul",null,[n("li",null,[n("a",x,[a("本文例子的源代码"),e(s)])]),n("li",null,[n("a",f,[a("提到这个问题的 Vue 教程（我是看这个教程后才引起注意的，感谢这个教程）"),e(s)])])])])}const M=c(k,[["render",b],["__file","2020-09-17-issue-when-use-index-as-key.html.vue"]]);export{M as default};
