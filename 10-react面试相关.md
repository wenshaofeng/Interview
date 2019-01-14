### 1.redux 中间件的原理是什么？

改装dispatch(所谓中间件指的是 action 和 store 之间)

redux-thunk 源码
```javascript
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```



### 2.你会把数据统一放到redux中管理，还是共享数据放在redux中管理

统一放到redux管理：
- 为了后期维护能更清晰地定位错误，代码可调节
- 要从项目的整体考虑
- 统一放置后，组件的唯一数据源就是redux

### 3.componentWillReceiveProps 的调用时机 (被废弃的生命周期函数)
当Props改变的时候调用

### 4.react性能优化的最佳实践
`pureComponent`(内部自带`shouldComponentUpdate`) 
但是它只是个浅比较，如果比较结果没有改变，那么组件就不会更新,这样就可以提升性能
一般`pureComponent` 会和`immutable`这个库一起搭配时候


### 5.虚拟dom是什么？为什么虚拟dom会提升代码性能
Js对象


### 6.webpack中，是借助loader完成的JSX代码的转化，还是babel？

babel-preset-react

### 7.调用setState后，发生了什么

在代码中调用setState函数之后，React 会将传入的参数对象与组件当前的状态合并，然后触发所谓的调和过程(Reconciliation)。经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个UI界面。在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。在差异计算算法中，React 能够相对精确地知道哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。

```javascript
//不推荐
this.setState({
    age : this.state.age + 1 //有可能出bug ，因为setState是异步的
})

// 推荐使用函数式
this.setState((prevState) => ({
    age : ++ prevState.age
}))
```


### 8.setState是异步的，这个点你在什么时候遇到过坑

### 9.refs的作用是什么，你在什么业务场景下使用过refs
操作DOM， 放大镜功能(获取图片宽高)

>注意在 `window` 上绑定了事件，组件销毁时要解绑
![](https://upload-images.jianshu.io/upload_images/9249356-44b03ba19b60728b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/9249356-506bbda151276cb6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 10. ref是一个函数，有什么好处

### 11.高阶组件你是怎么理解的，它的本质是什么？
在react中，不要使用继承，组合优于继承。

高阶组件本质上是一个函数
![](https://upload-images.jianshu.io/upload_images/9249356-947746e3cd5008a8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 12.受控组件与非受控组件的区别
受控组件：受数据的控制
非受控组件：不受数据的控制，一般使用ref

### 13.函数组件和hooks

### 14.this指向问题你一般怎么解决
箭头函数
bind

### 15.函数组件怎么做性能优化

没有生命周期，没有props

### 16.哪个生命周期里发送ajax？
componentDidMount

### 17.ssr的原理是什么？
核心原理：借助了虚拟DOM

### 18.redux-saga 的设计思想是什么？ 什么是 sideEffects


### 19.react，jquery，vue是否有可能共存在一个项目 ？
可以,只需要让它们接管不同的DOM节点

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div></div>
    <div id="react"></div>  
    <div id="vue"></div>
</body>
</html>

ReactDom.render(<APP>,document.getElementbyId('react'))

以此类推
```


### 20.组件是什么？类是什么？类被编译成什么？

组件是页面上的一部分，
本质上组件是一个类，
而类被编译过后，实际上对应 ES5 就是构造函数

```javascript
class A extends Component {

}
function A(){

}

```


### 21.你是如何跟着社区成长的？

### 22.如何避免ajax重新获取
缓存数据，在react-redux中进行管理

### 23.react-router4 的核心思想是什么，和3有什么区别
路由变成了组件，可以放到任何地方

<Link></Link>
<Route></Route>

### 24.immutable.js 和 redux 的最佳实践



### 25.reselect 是做什么使用的？
(派生数据)类似于 vue 里面的 computed(计算属性),
对数据做了缓存，提升性能

### 26.react-router 的基本原理，hashHistory，browserHistory

hashHistory不需要后端配合，
browserHistory 需要后端在服务器(Apache/Nginx)上做配置


### 27.什么情况下使用异步组件(按需加载)
Reloadable 库
import('./home/header').then
require.ensure

### 28.XSS攻击在react 中如何防范



### 29.getDerivedStateFromProps ， getDerivedStateFromProps


