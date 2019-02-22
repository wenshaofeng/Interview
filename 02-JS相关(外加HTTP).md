### [Javascript 中的非空判断 undefined,null, NaN的区别](https://blog.csdn.net/oscar999/article/details/9353713)

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

#### 本地存储
- cookie
1. name: cookie 的名称
2. domain: cookie 生效的域名 (**注意**domain 是有作用域概念的，比如某一级域名只能操作自身和上一级域名的cookie,而不能操作其他同级域名的cookie，也不能操作其子域名的cookie)
3. path: cookie 生效的路径
4. expires: cookie 过期时间
5. HttpOnly： 用户端不可更改

- session
1. 服务端保存请求信息的机制
2. sessionId 通常存放在cookie 里
3. 会话由浏览器控制，会话结束，session失效

- localStorage
1. H5新特性
2. 有域名限制，不存在作用域概念
3. 只有key-value
4. 没有过期时间
5. 浏览器关闭后不消失

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

#### typeof 类型判断
- `typeof null` 结果是`object` ,实际这是`typeof`的一个bug ， `null` 是原始值 ，非引用类型

- `typeof [1,2,3]`结果是 `object`,结果中没有`array`这一项，引用类型除了`function` 其他的全是 `object`

- `typeof Symbol()` 用 `typeof `获取`symbol` 类型的值得到的是`symbol` ,这是ES6 新增的
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
![image.png](https://upload-images.jianshu.io/upload_images/9249356-aa51afdf8696b392.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 类的声明 和 实例化
```javascript
/*
    类的声明
 */
var Animal = function () {
    this.name = 'Animal';
};

/*
 es6中class的声明
*/
class Animal2 {
    constructor () {
        this.name = 'Animal2';
    }
}

 /**
* 实例化  虽然声明方式不一样，但是实例化的方式是一样的
* 如果构造函数没有传参，new Animal 后面的（）可以不写
*/
console.log(new Animal(), new Animal2());

```

##### 类的继承

**借助构造函数继承**
>原理是改变了 Parent 构造函数的 this指向，改成了指向 Child 的 实例
```javascript
/**
* 借助构造函数实现继承
*/
function Parent1 () {
    this.name = 'parent1';
}
Parent1.prototype.say = function () {
    console.log('kobe haha');
};
function Child1 () {
    Parent1.call(this);
    this.type = 'child1';
}
console.log(new Child1);
/* 下面会报错，借助构造函数实现继承的缺陷是，
无法继承 Parent1 的原型对象上的属性或方法，
个人理解为浅继承 Child1 的__proto__还是指向Object*/
console.log(new Child1(), new Child1().say()); 
```

**原型链继承**

```javascript
 /**
* 借助原型链实现继承
*/
function Parent2 () {
    this.name = 'parent2';
    this.play = [1, 2, 3];
}
function Child2 () {
    this.type = 'child2';
}
Child2.prototype = new Parent2();

var s1 = new Child2();
var s2 = new Child2();
console.log(s1.play, s2.play);
s1.play.push(4);

/* 缺点：原型链中原型对象是共用的，所以改变其中一个实例，其他实例都会改变 */
```
**组合继承**
```javascript
/**
* 组合方式
*/
function Parent3 () {
    this.name = 'parent3';
    this.play = [1, 2, 3];
}
function Child3 () {
    Parent3.call(this);
    this.type = 'child3';
}
Child3.prototype = new Parent3();//这样写，Parent3 的构造函数执行了两次
Child3.prototype = Parent3.prototype;//优化
console.log(new Child3);

var s3 = new Child3();
var s4 = new Child3();
s3.play.push(4);
console.log(s3, s4);
console.log(s3.constructor);
console.log(s4.constructor);

```
实例之间不会影响，原因是其覆盖的是自身的属性
![](https://upload-images.jianshu.io/upload_images/9249356-05be9b4498b26307.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
缺点：无法确定实例是真正由谁创建的,子类的原型对象就是父类的原型对象

**优化**
```javascript

function Parent5 () {
    this.name = 'parent5';
    this.play = [1, 2, 3];
}
function Child5 () {
    Parent5.call(this);
    this.type = 'child5';
}
Child5.prototype = Object.create(Parent5.prototype); //关键
Child5.prototype.constructor = Child5 //上面的不能这样改，因为改的同时也改变了父类的constructor

var s7 = new Child5()
console.log(s7 instanceof Child5, s7 instanceof Parent5);
console.log(s7.constructor);
```




##### bind 、 call 和apply
`函数.call(指定任何对象) ;`//可以直接执行函数

`let 新函数 = 函数.bind(obj)`
// 新函数的this，会永久的指向 obj ，因此我们说this 被绑定了

```javascript
//手动实现一个bind方法
Function.prototype.bind = function(target) {
    var fn = this ;
    return function () {
        fn.apply(target ,arguments);
    }
}
```

##### 箭头函数 中 的 this

箭头函数不能 new ，因为 箭头函数没有自己的 this

```javascript
<script>
    let obj = {
        id: 99,
        hello: () => {
            // 如何判断箭头函数中的 this 指向 ： 一句话，当箭头函数不存在
            console.log(this.id) //指向 window 对象  
        },
        print: function () {
            /* setTimeout(function () {
                console.log(this.id); // 这个this指向 window 
            }, 200) */
            setTimeout(() => {
                console.log(this.id); //假装没有写过这个函数,类似于下面
            }, 200)
        },
        //类似于
        print: function () {
            this.id
            setTimeout(function () {

            }, 200)
        }
    }
    obj.hello()
    
    obj.print()
</script>
```

##### eval 函数

eval() 能把函数里的字符串当成JS代码执行

应用：requireJS ==> AMD 模块化规范

```javascript
define(["jquery","moduleA","moduleB"],function($,a,b){

})

加载不同模块的JS 时，引入的实际上是
<script src='xxx.js' type="text/html">  </script>

怎么控制 它们的异步加载，用的就是 eval(xxx.js) 动态执行代码

 setTimeout("alert(123)", 2000)  //这也是eval() 的一种写法

```

`use strict` 下，eval() 有自己的作用域,只能在()里面
```html
 <script>
    // "use strict"
    var a = 100

    function test() {
        eval("var a = 20")
        console.log(a);
    }
    test() //  20  "use strict" 时 打印出 100
</script>
```

#####  函数防抖 和 函数节流

两者的区别：
- 函数防抖 ===> 每次调用函数时，延迟执行 (固定的单位时间内，反复触发，只执行最后一次)
- 函数节流 ===> 降低函数执行的频率 (固定的单位时间内，就会执行一次)

>一个是终止前一个函数执行 (防抖)
一个是延迟下一个函数执行 (节流)



**函数防抖**

>当用户在做某些操作的时候(滚动页面时弹出返回顶部、搜索框输入关键字弹出下拉列表)，大部分情况下可能只是需要在用户操作结束后返回用户所需要的内容，而不用短时间内触发多次,所以我们可以通过定时器 减少短时间内响应触发的次数

```javascript
function debounce(callback, delay) {
    var t = null;
    return function (e) {
        clearTimeout(t);
        t = setTimeout(() => {
            callback.call(e)
        }, delay)
    }
}

window.onscroll = debounce(function () {
    console.log("调用了一次");
}, 500)

```

![](https://upload-images.jianshu.io/upload_images/9249356-a897bf3b262e6a31.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
>如果函数执行的次数太频繁，低于我们设置的最小时间，就把前面执行的函数都关掉，以最后要执行的函数为准


**函数节流**

减少函数执行的频率

```javascript
function throttle(callback, duration = 200) {
    var lasttime = new Date().getTime()
    return function () {
        var now = new Date().getTime()
        if (now - lasttime > duration) {
            lasttime = now
            callback()
        }
    }
}

window.onscroll = throttle(function () {
    console.log("调用了一次");
}, 500)
```

![](https://upload-images.jianshu.io/upload_images/9249356-7e6351665de6d97a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


##### 函数的柯里化 ===>函数的多参 ，变成单参

fn(2,3,4); ===> fn(2)(3)(4) == 24

```javascript
function fn(a,b,c) {
    return a*b*c;
}

function fn(a) {
    return function(b) {
        return function(c) {
            return a*b*c  //典型的闭包
        }
    }
}

//下面把第一种函数变成第二种函数的过程，就叫函数柯里化

fn(1,2,4)
fn(1,5,6)
fn(1,3,5)
fn(1,3,4)

let ft = fn(1)

ft(2,4)
ft(5,6)
ft(3,5)
ft(3,4)

```



##### 作用域对象

```javascript
    var name = 'li'
    window // 全局作用域对象

    function test() {
        // 可以理解为 创建了一个作用域对象
        // var  ScopeTest （不存在）
        var num = 0

        function mc() {
                // var  ScopeMc （不存在）
            var num = 100
            console.log(num);
        }
        //作用域.mc() 看不见的对象(编译时)
        mc();
    }

    对象.方法();
    方法();
```

##### 垃圾回收机制

[5张动图带你看懂垃圾回收算法](https://blog.csdn.net/gg_18826075157/article/details/73327492) 

- 引用计数法  (容易产生无数的碎片) 为什么闭包容易造成泄露，因为引用的变量有标记
- 标记清除法
- 标记整理法
- 复制整理法 (比较好的 ，java里的算法) 

**内存泄露**
- 闭包
- 全局变量(模块化编程后一般不会出现这种问题)
- 定时器忘了关
- DOM元素的引用

```html

<button id="btn" type="button">按钮</button>
<script>
    let btn = document.getElementById('btn')
    btn.remove()
</script>

```
按钮看起来是在页面上被删除了，但是
![](https://upload-images.jianshu.io/upload_images/9249356-d84ecffd0bfaedce.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### Promise

##### 深拷贝 和 浅拷贝
![概览](https://upload-images.jianshu.io/upload_images/9249356-2aa9e85bb4bbd11c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


浅拷贝 (第一层的复制)
可以将对象的最外层属性全部复制 ，里层的属性仍然是引用关系

```javascript
var obj = {
    a: 1,
    b: 2,
    c: {
        d: 10,
        e: 50
    }
}
var obj1 = {}
// 浅拷贝 方式 1 
/*   for (var key in obj) {
        obj1[key] = obj[key]
    } */
// 浅拷贝 方式 2 
Object.assign(obj1, obj)
obj.b = 20
obj.c.d = 40
console.log(obj1); //b:2  d:40
console.log(obj); //b:2  d:40
```
![](https://upload-images.jianshu.io/upload_images/9249356-8ffe19af20b4ec6a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

深拷贝

```javascript
var obj = {
    a: 1,
    b: 2,
    c: {
        d: 10,
        e: 50,
        f: undefined
    }
}
var obj1 = {}
//深拷贝 方式 1
obj1 = JSON.parse(JSON.stringify(obj))

function cloneObject(target, source) {

}

obj.b = 20
obj.c.d = 40
console.log(obj1); //b:2  d:40
console.log(obj); //b:2  d:40
```
![](https://upload-images.jianshu.io/upload_images/9249356-17f81d84346185d3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


使用`obj1 = JSON.parse(JSON.stringify(obj))`的缺点：
- 会忽略 undefined
- 会忽略 symbol
- 不能序列化函数
- 不能解决循环引用的对象(不可遍历属性)

Zepto 中深拷贝的代码
```javascript
    // 内部方法：用户合并一个或多个对象到第一个对象
    // 参数：
    // target 目标对象  对象都合并到target里
    // source 合并对象
    // deep 是否执行深度合并
    function extend(target, source, deep) {
        for (key in source)
            if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
                // source[key] 是对象，而 target[key] 不是对象， 则 target[key] = {} 初始化一下，否则递归会出错的
                if (isPlainObject(source[key]) && !isPlainObject(target[key]))
                    target[key] = {}

                // source[key] 是数组，而 target[key] 不是数组，则 target[key] = [] 初始化一下，否则递归会出错的
                if (isArray(source[key]) && !isArray(target[key]))
                    target[key] = []
                // 执行递归
                extend(target[key], source[key], deep)
            }
            // 不满足以上条件，说明 source[key] 是一般的值类型，直接赋值给 target 就是了
            else if (source[key] !== undefined) target[key] = source[key]
    }

    // Copy all but undefined properties from one or more
    // objects to the `target` object.
    $.extend = function(target){
        var deep, args = slice.call(arguments, 1);

        //第一个参数为boolean值时，表示是否深度合并
        if (typeof target == 'boolean') {
            deep = target;
            //target取第二个参数
            target = args.shift()
        }
        // 遍历后面的参数，都合并到target上
        args.forEach(function(arg){ extend(target, arg, deep) })
        return target
    }

```

![](https://upload-images.jianshu.io/upload_images/9249356-82acde3ee66a4e33.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
原文章→[js 深拷贝 vs 浅拷贝](https://juejin.im/post/59ac1c4ef265da248e75892b)

>实际上，实现一个完整的深拷贝是很困难的，需要考虑许多边界条件，实际应用中推荐使用 loadsh 这个第三方函数库来实现

```javascript
var _ = require('lodash');
var obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
var obj2 = _.cloneDeep(obj1);
console.log(obj1.b.f === obj2.b.f);
// false


```
##### Proxy 代理

```javascript

 var obj = {
    a: 1,
    b: 2
}
var handler = {
    //             obj      a      20
    set: function (target, key, value) {
        console.log("设置属性");
        target[key] = value
    },
    get: function (target, key) {
        console.log("获取属性");
        return target[key]
    },
    has: function (target, key) {
        return key in target //key是不是属于target
    }

}
var p = new Proxy(obj, handler)
p.a = 20
console.log(obj);
console.log(p.a); //获取属性
console.log("a" in p); // true
console.log("b" in p); // true
console.log("c" in p); // false
```

