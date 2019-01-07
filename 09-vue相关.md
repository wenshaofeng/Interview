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