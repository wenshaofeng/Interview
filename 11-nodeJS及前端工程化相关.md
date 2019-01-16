- node 是一个系统级的 JS运行平台
- node 是 CommonJS 的规范,不可以使用`import '' `这种ES6的语法引入

```javascript
const fs = require('fs') // 正确
import fs from 'fs' // 错误方式
```


### 为什么学node ?
因为 前端越来越趋向于工程化
 webpack npm 是基于 node 写的
目的是为了了解前端的工程化
实际上 node 写后端性能比较差，计算性能比较糟糕，在 node 里做大量的计算不太靠谱
对于前端来说，node 更应该往打包工具、往前端工程化方面考虑

### node 的版本,为什么有时候要进行升级？
新的ES语法、新的API 的补丁
webpack 在node的新版本中，打包速度一般会更快（有新的api）

### 模块化的区别， AMD、CMD、CommonJS 、 ESMODULE

- AMD(异步加载): 依赖前置
- CMD 和 CommonJS 差不多，都是动态引入 (require 语法)
- ESmodule 是静态引入模块，`import './xxx'`需要放在最前面，可以进行代码的预分析，有利于提升打包速度

### 登录鉴权时，token 一般存在哪里 ，过期怎么处理？
一般存在cookie 里，存在localStorage里，存在兼容性问题
过期就跳回登录页，让用户重新登录

### vue 的history 模式
history 模式的话，需要后端支持，通常是nignx 代理

### mongo 与 mysql 对比

### 工程化上的按需加载
require ensure
import('a.js').then()

### CSS module
scope 底层是 webpack 中CSS-loader 中的module 

### 设计模式
- 单例模式
- 观察者模式
- 发布订阅模式
- 工厂模式 (模板)
- 组合模式
- 继承模式

模块是一个单例设计模式


### 后端环境的搭建