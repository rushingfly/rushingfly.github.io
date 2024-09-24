---
title:  "React 渲染优化：提升性能的实用技巧"
date: 2024-08-22
tag:
  - React
---

最近参加了一些技术面试，其中不少聊到了React渲染优化的问题。这个话题很值得汇总一下，以便更系统的理解React的渲染机制和优化途径。
在React应用中，随着组件数量和复杂度的增加，渲染性能导致的问题可能会逐渐地凸显出来。主要的现象是页面出现卡顿，影响用户体验。下面我来介绍一下React中常见的渲染优化方法。

## 组件级别的优化方法
### useMemo
```useMemo```是一个React Hook，用于缓存计算结果，避免在每次渲染时重复执行高开销的计算。
假设我们有一个计算结果的函数，它执行大量复杂的计算：
``` jsx
import React, { useState, useMemo } from 'react';

function ExpensiveComponent({ a, b }) {
  const [count, setCount] = useState(0);

  // 使用useMemo缓存计算结果
  const expensiveValue = useMemo(() => {
    console.log('Calculating...');
    return a * b; // 假设这是一项复杂的计算
  }, [a, b]);

  return (
    <div>
      <p>Expensive Calculation Result: {expensiveValue}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}
```

在上面的代码中，useMemo确保了只有在a或b发生变化时，才会重新计算expensiveValue，从而避免每次渲染时重复进行不必要的计算。

### useCallback
```useCallback```和```useMemo```类似，也是一个通过缓存的方式节省计算资源的React Hook，区别之处是它缓存的是回调函数，以避免在组件重渲染时创建新的函数实例。
``` jsx
const memoizedCallback = useCallback(() => {
  // 这里的代码不会因为每次组建渲染而重新执行
  handleClick();
}, [dependencies]);
```
useCallback会返回一个记忆化的回调函数，只有在依赖项发生变化时才会更新。

### React.memo
React.memo是一个高阶组件，用于缓存组件的渲染结果，以避免重复渲染。
``` jsx
const MyComponent = React.memo((props) => {
  // 组件内容
});
```
React.memo会对比前后的props。如果props未变化，则返回缓存的组件结果，以此方式来避免重新渲染。

### 类组件的shouldComponentUpdate
```shouldComponentUpdate```是类组件中的生命周期方法，用于控制组件是否需要重新渲染。
``` jsx
class MyComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // 自定义逻辑，返回true或false
  }
}
```
### PureComponent
```PureComponent```是Component的一个子类，提供了浅层比较的```shouldComponentUpdate```实现：组件的```props```或```state```发生变化时才会重新渲染组件。
``` jsx
class MyComponent extends React.PureComponent {
  // 组件内容
}
```

## 项目级别的优化方法
### 代码分割
在大型React应用中，所有代码捆绑在一起会导致初始加载时间过长。通过代码分割，可以按需加载某些部分，优化加载性能。React提供了```React.lazy```和```Suspense```，使得代码分割的实现变得简单。下面是一个示例：
``` jsx
import React, { Suspense } from 'react';

// 使用 React.lazy 动态导入组件
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <h1>My React App</h1>
      {/* 使用 Suspense 包裹懒加载组件，提供加载状态 */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
```
代码解析
* React.lazy: 这是React内置的用于动态导入组件的函数。```React.lazy(() => import('./LazyComponent'))```会返回一个可以懒加载的组件。
* Suspense: React提供的组件，用来在懒加载的组件加载完成前显示一个后备内容（如加载动画）。```fallback```属性指定在加载期间显示的内容。
### React Compiler （React 19新特性）
React 19 引入了一个新的编译器，旨在优化组件渲染的性能。编译器通过在构建时进行更多静态优化，使得运行时的计算量减少。例如，它可以自动识别和优化不需要频繁更新的部分，从而提升整体渲染效率。因为React 19目前还未正式发布，就不多做介绍了，希望它是未来可期的吧！

希望本文能对你有帮助😄