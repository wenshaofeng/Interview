## 生命周期函数
vue 生命周期分为四个阶段
- 组件创建时 created    (可以修改 data 里的数据 ，axios请求最早可以放在这)
- 组件渲染时 mounted    (只执行一次，一般在该处发送请求)
- 组件更新时 updated   (数据更新)
- 组件销毁时 destroyed (路由切换)
- **特殊情况** Vue中有一个内置的组件 `keep-alive` 自带有两个生命周期 
![](https://upload-images.jianshu.io/upload_images/9249356-99402fbfcd2a01cb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- created 和 mounted 这两个生命周期在组件渲染时只会被调用一次，且在使用服务端渲染(SSR) 的时候，`mounted`&&`beforeMount` 是不会被调用的

## axios 
>axios 是什么？ 怎么使用？ 描述使用它实现登录功能的流程？

>axios 特点
- axios 是基于`promise`的，用于浏览器和node.js的 http 客户端
- 主要作用就是向后台发送请求
- 支持 promise
- 提供了一些并发的方法
- 提供拦截器
- 浏览器支持防止 CSRF (跨站请求伪造) 

>axios fetch (jquery) 的区别
- 前两者是基于 promise 后者主要还是利用 callback 的形式 (但是jquery也支持promise)
- fetch 脱离了 xhr 对象，是新的语法 (默认不传 cookie 另外不像xhr对象，可以监听到请求的进度)


![](https://upload-images.jianshu.io/upload_images/9249356-1abd5f6e323d6a9a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/9249356-420561572d0e5ff2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## vuex 状态管理

- vuex 是一个专门为 vue 构建的状态集管理
- 主要是为了解决组件间状态共享的问题
- 强调的是集中式管理
- 主要是为了解耦，便于维护 ，没必要刻意使用

## 导航钩子有哪些 ？ 它们有哪些参数 

导航钩子 翻译过来就是路由的生命周期( vue-router )
- 全局
- 局部
    - 局部到单个路由
    - 局部到单个组件

全局的钩子函数
- beforeEach ：在路由切换开始时调用
- afterEach : 在路由切换离开时调用

局部到单个路由
- beforeEnter 
局部到组件的钩子函数
- beforeRouterEnter 
- beforeRouterUpdate 
- beforeRouterLeave

```html
to: 即将进入的目标对象
from: 当前导航要离开的导航对象
next: 是一个函数 调用 resolve 执行下一步
```

```javascript
const router = new VueRouter({
    routes:routes
})

const routes = [

    {
        path:'/',
        name:'/',
        component:Home
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path:'/buy',
        name:'buy',
        component:Buy,
        meta:{
            auth:true
        }
    }
]
//全局路由  简单的路由守卫例子
router.beforeEach((to,from,next)=>{
    if(to.meta.auth) {
        if(token) {
            next()
        }else{
            next({
                path : '/login'
            })
        }
    }
})

```


## 路由懒加载 (按需加载)

## 什么是 vue-loader
>vue-loader 是一个加载器 ，能把 .vue 文件转化成JavaScript模块

为什么要转译这个 vue 组件
- 可以动态地渲染一些数据
- 对三个标签都做了优化 `script` 中可以直接使用 es6 style 也默认可以使用 sass 并且还提供了作用域的选择
- 在开发阶段 ， 还提供了热加载

## 插槽(具名 、 匿名 、 作用域)
>vue 中的插槽，说白了就是一个占位的 ，我们可以指定是否往里面添加元素
- 默认插槽
- 具名插槽
- 作用域插槽

## 虚拟DOM

![](https://upload-images.jianshu.io/upload_images/9249356-1ee4463dfb0fd857.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



## MVVM 和 MVC 
[百度百科：MVC框架](https://baike.baidu.com/item/MVC%E6%A1%86%E6%9E%B6?fromtitle=MVC%E6%A8%A1%E5%BC%8F&fromid=713147)
[百度百科：MVP模式](https://baike.baidu.com/item/MVP%E6%A8%A1%E5%BC%8F/10961746?fr=aladdin)
MVC
![MVC](https://upload-images.jianshu.io/upload_images/9249356-e95a4c9c424ed62a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![](https://upload-images.jianshu.io/upload_images/9249356-39a3de3e5c65c644.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

MVP
![](https://upload-images.jianshu.io/upload_images/9249356-5aff1b466aec2c11.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

如何理解Vue的 MVVM (MV*)模式

mvvm 和 mvc 之间的区别
- mvc 相对而言 对数据的反映会比 mvvm 慢 ，不能简单地说 mvvm 就是数据双向绑定 ，mvvm 指的是数据层 (model层) 和 视图层 (view层) 是实时响应的，响应的速度更快
- vue 是专注于 view 和 viewModel 的框架 ，相比于 react 只专注于 view 层 ，vue 底层帮我们实现了 model 和 数据 的 绑定 ( 实时更新 ) ，而react 数据更新后需要我们手动调用 setState 方法去更新视图

## Vue中的keep-alive 

keep-alive 可以将不活动的组件缓存，提高性能，一般和路由匹配一起使用
它提供了 include 与 exclude 两个属性 允许组件有条件的缓存

>原理
在created 的时候 ，将需要缓存的vnode节点放到 cache(缓存) 中 ,在render 的时候，根据name再进行取出


## MVVM

```javascript
 Object.defineProperty(obj, 'school', {
    configurable: true,
    writable: true,
    enumerable:true,
    value: 'ljw',

    get(){
        
    },
    set(){

    }
})

```

![](https://upload-images.jianshu.io/upload_images/9249356-5643e315c7f94638.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

有了 get 和 set , 就不能再有 `writable`或`value`