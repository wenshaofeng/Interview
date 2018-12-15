### 页面布局

题：假设高度已知，请写出三栏布局，其中左栏、右栏宽度各为300px，中间自适应

- 浮动布局
- 绝对定位
- flex布局
- 表格布局
- 网格布局

优缺点：
去掉高度后哪些不能用了

页面布局小结
- 语义化
- 页面布局的理解
- CSS基础知识
- 思维灵活且积极上进
- 代码书写规范

练习：
![](https://upload-images.jianshu.io/upload_images/9249356-920a691c589b94b9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### CSS盒模型
- 基本概念：标准模型+IE模型
- 标准模型和IE模型区别
- CSS如何设置这两种模型
- JS如何设置获取盒模型对应的宽和高
- 实例题（根据盒模型解释边距重叠）
- BFC（边距重叠解决方案）



![](https://upload-images.jianshu.io/upload_images/9249356-73d9a1157800a237.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/9249356-5d849bda1a1f279e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### css如何设置两种模型
这里用到了CSS3 的属性 box-sizing
```
/* 标准模型 */
box-sizing:content-box;

 /*IE模型*/
box-sizing:border-box;
```

#### 边距重叠
```
<style media="screen">
        html * {
            margin: 0;
            padding: 0;
        }
        .demo{
            height:100px;
            background: #0f0;
        }
        .parent{
            height: 200px;
            background: #456;
        }
        .child{
            height: 100px;
            margin-top: 20px;
            background: #f00;
            width: 300px
        }
 </style>

//html

    <section class='demo'>
        <h2>为了下面更容易看出margin-top</h2>
    </section>
    <section class="parent">
        <article class="child">
            <h2>子元素</h2>
        </article>
            <h2>父元素（未设置margin-top）</h2>
    </section>
```
![](https://upload-images.jianshu.io/upload_images/9249356-6912023cb92428ca.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### [CSS画三角形原理（border）](http://www.i-meili.com/view-48.html)

#### BFC
- BFC的基本概念
    1.BFC 即 Block Formatting Contexts (块级格式化上下文)，它属于上述定位方案的普通流。
    2.具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。
    3.通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。
- BFC的原理
- 如何创建BFC
- BFC使用场景

##### 同一个BFC内垂直方向边距重叠
```
<section id="margin">
        <style>
            #margin {
                background: blue;
                overflow: hidden;
            }

            #margin>p {
                margin: 5px auto 25px;
                background: red;
            }
        </style>
        <p>1</p>
        <p>2</p>
        <p>3</p>
    </section>
```

![](https://upload-images.jianshu.io/upload_images/9249356-c68cca8a356dad01.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

再创建一个BFC
```
    <p>1</p>
    <div style="overflow:hidden">
        <!-- 消除重叠，创建BFC -->
        <p>2</p>
    </div>
    <p>3</p>
```
![](https://upload-images.jianshu.io/upload_images/9249356-67b62a243cd852d2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
##### BFC不与float重叠
![](https://upload-images.jianshu.io/upload_images/9249356-540aec2dc98e7b73.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


##### BFC子元素即使是float也会参与计算
![](https://upload-images.jianshu.io/upload_images/9249356-c3d485363634ee56.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
