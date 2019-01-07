关于面试，来自于慕课网课程的笔记[前端跳槽面试必备技巧](https://coding.imooc.com/class/129.html)


![](https://upload-images.jianshu.io/upload_images/9249356-3082b834a855416e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/9249356-636586d895ce013e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/9249356-15450d308da8defb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Elements: 调试DOM元素   
Console:    报错
Soures: 源代码  
Network:    加载顺序 时长
Performance: 性能
Memory: 关于内存相关    
Application:    整个网站的应用
security: 安全
audits: 性能

**head部分**

双核浏览器优先渲染
![](https://upload-images.jianshu.io/upload_images/9249356-38a42469023e5de3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

DNS预解析

![](https://upload-images.jianshu.io/upload_images/9249356-c4170275d1dd017d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/9249356-ce93be551b4f2f47.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 项目问题
- 做过哪些项目，有什么技术栈
    - 梳理做过的项目
    - 打造一个比较满意的项目(哪个是你最满意的项目)
    - 技术栈的深度、广度
- 为什么要用这样的框架
- 在项目中的角色是什么？解决过哪些难题,用到了什么技术方案
- 通过项目学到了什么？对自己的项目是否满意？有改进空间吗？

### Vue 和 React 比较
![](https://upload-images.jianshu.io/upload_images/9249356-c117a37736a725a1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 相同点：

    1.都支持服务器端渲染 React(next.js) Vue(nuxt.js)

    2.都有Virtual DOM,组件化开发,通过props参数进行父子组件数据的传递,都实现webComponent规范

    3.数据驱动视图

    4.都有支持native的方案,React的React native,Vue的weex

    5.都有管理状态，React有redux,Vue有自己的Vuex（自适应vue，量身定做）

#### 不同点：

    1.React严格上只针对MVC的view层,Vue则是MVVM模式

    2.virtual DOM不一样,vue会跟踪每一个组件的依赖关系,不需要重新渲染整个组件树.
    而对于React而言,每当应用的状态被改变时,全部组件都会重新渲染,所以react中会需要shouldComponentUpdate这个生命周期函数方法来进行控制

    3.组件写法不一样, React推荐的做法是 JSX + inline style, 也就是把HTML和CSS全都写进JavaScript了,即'all in js';
    Vue推荐的做法是webpack+vue-loader的单文件组件格式,即html,css,jd写在同一个文件;

    4.数据绑定: vue实现了数据的双向绑定,react数据流动是单向的

    5.state对象在react应用中不可变的,需要使用setState方法更新状态;
    在vue中,state对象不是必须的,数据由data属性在vue对象中管理；

![](https://upload-images.jianshu.io/upload_images/9249356-fb8eae38a1a35082.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- [01-CSS相关](./01-CSS相关.md) 
    - layout.html
    - CSSbox.html
- [02-JS相关和HTTP](./02-JS相关(外加HTTP).md) 
    - proto.html
    - oop.html
    - event.html
- [03-通信](./03-通信.md) 
    - ajax.html
- [04-web安全](./04-web安全.md) 
- [05-算法类](./05-算法类.md) 
- [06-渲染机制、JS运行机制](./06-渲染机制、JS运行机制.md) 
    - process.html
- [07-页面性能、错误监控](./07-页面性能、错误监控.md) 
    - perfomance.html 
    - error.html
    - async1.js async2.js
    - defer1.js defer2.js

    