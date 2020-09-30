# Hooks

## Class base 迁移

### 1. 执行初始化操作，模拟生命周期

- componentDidMount：useEffect(() => {}, [])，第二个参数传空数组，useEffect 作为函数内的同步代码，至少会执行一次，没有依赖项时，不会触发二次执行
- componentDidMount & componentDidUpdate：useEffect(() => {})，不传第二个参数

### 2. 做一些清理操作

useEffect 第一个参数的返回函数，React 会在每次执行新的 Effect 之前，执行该函数

### 3. useState 与 Class 版本的区别

Class 版本会做 state 合并，我们在 setState 的时候只需要增量 set，Hooks 中的修改 state 需要传入完整的修改后的 state，因为会覆盖之前的 state。

### 4. 减少不必要的渲染

Class Component 开发时，我们可以通过 shouldComponentUpdate 优化渲染，Hooks 中如何减少不必要的渲染 ？

- React.memo

这不是一个 Hook，你可以把它理解为 Class base 里的 PureComponent，会做 props 的浅比较

- useMemo

这是一个 Hook，我们通过官方例子直观了解下。

```js
function Parent({ a, b }) {
  // Only re-rendered if `a` changes:
  const child1 = useMemo(() => <Child1 a={a} />, [a]);
  // Only re-rendered if `b` changes:
  const child2 = useMemo(() => <Child2 b={b} />, [b]);
  return (
    <>
      {child1}
      {child2}
    </>
  );
}
```

用法有点类似于 useEffect，第二个参数是一个依赖数组，只有依赖项发生变化时，才会触发 re-render 重新渲染。

### 5. 为什么不能用 condition 包裹 useHook 语句

与 Hooks 实现原理有关，React Hooks 并不是通过 Proxy 或者 getters 实现的，而是通过数组实现的，每次 useState 都会改变下标，如果 useState 被包裹在 condition 中，那每次执行的下标就可能对不上，导致 useState 导出的 setter 更新错数据。

### 6. 异步如何访问过去或未来的 state ？

使用 useRef 缓存 state，useRef 的作用相当于让你在 Class 组件的 this 上添加属性。

### 7. state 初始值优化

初始值很复杂时，推荐使用 useState 函数形式，useState 允许传入一个函数，React 只会在首次渲染时调用这个函数。
