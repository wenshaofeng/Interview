## 生命周期函数
vue 生命周期分为四个阶段
- 组件创建时 created    (执行DOM的操作一般放在这)
- 组件渲染时 mounted    (只执行一次，一般在该处发送请求)
- 组件更新时 updated   (数据更新)
- 组件销毁时 destroyed (路由切换)

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

