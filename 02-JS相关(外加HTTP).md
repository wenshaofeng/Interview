### DOM事件

![](https://upload-images.jianshu.io/upload_images/9249356-ffb3eb5489a559ac.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/9249356-26ddde319fe40ed8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
false 是指捕获还是冒泡

事件模型：事件捕获和事件冒泡

事件流：
1. 捕获阶段
2. 目标阶段
3. 冒泡阶段

**DOM事件捕获的具体流程**
![](https://upload-images.jianshu.io/upload_images/9249356-e29e9dbb3c20dc6d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### Event对象的常见应用
![](https://upload-images.jianshu.io/upload_images/9249356-252d02f57b3354c4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 阻止默认事件
- 阻止冒泡
- 例：一个按钮绑定了两个click事件，一个a一个b，那么当点击按钮时，如果不作处理，两个事件都会被触发。 
 而如果在a事件的响应函数中加入event.stopImmediatePropagation()就可以阻止b事件的执行（事件响应优先级）
- 当前所绑定的事件对象
- 当前被点击的元素

##### 自定义事件
![](https://upload-images.jianshu.io/upload_images/9249356-f995ff9051460961.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
自定义事件、自定义触发时间
**CustomEvent可以传参**

### HTTP协议类

![](https://upload-images.jianshu.io/upload_images/9249356-fdd53e0f6a521094.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### HTTP特点
- 简单快速
- 灵活
- 无连接
- 无状态（无法区分身份）

#### HTTP报文组成
- 请求报文
    1.请求行
    2.请求头
    3.空行
    4.请求体
- 响应报文
    1.状态行
    2.响应头
    3.空行
    4.响应体

#### HTTP方法
![](https://upload-images.jianshu.io/upload_images/9249356-2554f64962ad4cb9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### POST和GET的区别

![](https://upload-images.jianshu.io/upload_images/9249356-8c304d5c08f1a5f9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### HTTP状态码
![](https://upload-images.jianshu.io/upload_images/9249356-ecf1e82144e6c761.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/9249356-6be5f3616465d984.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/9249356-196a3c8e3f60194e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


#### HTTP持久连接
![](https://upload-images.jianshu.io/upload_images/9249356-ad00faf190192de5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### HTTP管线化
![](https://upload-images.jianshu.io/upload_images/9249356-61cde4d523e051eb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/9249356-ad44cb329631120c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 原型链

![](https://upload-images.jianshu.io/upload_images/9249356-65ef1e3785de2e4b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 创建对象的几种方法
![](https://upload-images.jianshu.io/upload_images/9249356-028b6905ba4c94d3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```javascript
<script type="text/javascript">
      // 第一种方式：字面量
      var o1 = {name: 'o1'};
      var o2 = new Object({name: 'o2'});
      // 第二种方式：构造函数
      var M = function (name) { this.name = name; };
      var o3 = new M('o3');
      // 第三种方式：Object.create
      var p = {name: 'p'};
      var o4 = Object.create(p);

      M.prototype.say = function () {
          console.log('say hi');
      };
      var o5 = new M('o5');


      var new2 = function (func) {
          var o = Object.create(func.prototype);
          var k = func.call(o);
          if (typeof k === 'object') {
              return k;
          } else {
              return o;
          }
      };


    </script>

```
![](https://upload-images.jianshu.io/upload_images/9249356-a7f7441afeeb633b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


#### 原型、构造函数、实例、原型链

#### instance of 原理
>Instanceof运算符的第一个变量是一个对象，暂时称为A；第二个变量一般是一个函数，暂时称为B。
Instanceof的判断队则是：沿着A的__proto__这条线来找，同时沿着B的prototype这条线来找，如果两条线能找到同一个引用，即同一个对象，那么就返回true。如果找到终点还未重合，则返回false。

![image](http://upload-images.jianshu.io/upload_images/9249356-e37013930162ac1a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

通过上面的图片，可以解释以下情况
```
  console.log(Object instanceof Function)  // true
   console.log(Function instanceof Function) // true
   console.log(Function instanceof Object )   // true
```

#### new运算符
![](https://upload-images.jianshu.io/upload_images/9249356-61ae89b1a9409c5d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```javascript
 // new运算符的原理
      var new2 = function (func) {
          var o = Object.create(func.prototype);//一个新对象被创建（空对象）,继承自func.prototype
          var k = func.call(o);
         /*  如果构造函数返回了一个“对象”，那么这个对象会取代整个
          new出来的结果。如果构造函数没有返回对象，那么new出来的
          结果为步骤1创建的对象 */
          if (typeof k === 'object') {
              return k;
          } else {
              return o;
          }
      };

```

![](https://upload-images.jianshu.io/upload_images/9249356-f15dd13477aa59ca.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 面向对象
