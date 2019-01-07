## v-model
[深入理解 Vue 单向数据流](https://github.com/wengjq/Blog/issues/17)

### `v-model`在`input`元素上
`v-model`在使用的时候是双向绑定，但是 Vue 是单项数据流，v-model 只是语法糖而已：

```javascript
<input v-model="something" />
<input v-bind:value="something" v-on:input="something = $event.target.value" />
```
第一行的代码其实只是第二行的语法糖。然后第二行代码还能简写成这样：

```javascript
<input :value="something" @input="something = $event.target.value" />
```

要理解这行代码，首先你要知道 input 元素本身有个 oninput 事件，这是 HTML5 新增加的，类似 onchange ，每当输入框内容发生变化，就会触发 oninput ，通过 $event 把最新的 value 传递给 something。

>我们仔细观察语法糖和原始语法那两行代码，可以得出一个结论：
在给 input 元素添加 `v-model` 属性时，默认会把 value 作为元素的属性，然后把 'input' 事件作为实时传递 value 的触发事件


### `v-model`在组件上

```javascript
<currency-input v-model="price"></currency-input>
Vue.component('currency-input', {
  template: '\
    <span>\
      $\
      <input\
        ref="input"\
        v-bind:value="value"\
        v-on:input="updateValue($event.target.value)"\
      >\
    </span>\
  ',
  props: ['value'], // 为什么这里要用 value 属性，value在哪里定义的？
  methods: {
    // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
    updateValue: function (value) {
      var formattedValue = value
        // 删除两侧的空格符
        .trim()
        // 保留 2 位小数
        .slice(
          0,
          value.indexOf('.') === -1
            ? value.length
            : value.indexOf('.') + 3
        )
      // 如果值尚不合规，则手动覆盖为合规的值
      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue
      }
      // 通过 input 事件带出数值
      // <!--为什么这里把 'input' 作为触发事件的事件名？`input` 在哪定义的？-->
      this.$emit('input', Number(formattedValue))
    }
  }
})
```

```javascript
<currency-input v-model="price"></currency-input>
所以在组件中使用时，它相当于下面的简写：
//上行代码是下行的语法糖
<currency-input :value="price" @input="price = arguments[0]"></currency-input>
```
>所以，给组件添加 v-model 属性时，默认会把 value 作为组件的属性，然后把 'input' 值作为给组件绑定事件时的事件名。这在写组件时特别有用。

### Vue原理上支持双向绑定吗？
Vue 的依赖追踪是【原理上不支持双向绑定，v-model 只是通过监听 DOM 事件实现的语法糖】

vue的依赖追踪是通过 Object.defineProperty 把data对象的属性全部转为 getter/setter来实现的；当改变数据的某个属性值时，会触发set函数,获取该属性值的时候会触发get函数，通过这个特性来实现改变数据时改变视图；也就是说只有当数据改变时才会触发视图的改变，反过来在操作视图时，只能通过DOM事件来改变数据，再由此来改变视图，以此来实现双向绑定

大致过程如下

```
    //data
    var obj = {
        'message':'hello'
    }

    //vm
    var val = obj.message
    Object.defineProperty(obj,'message',{
        get(){
            return val
        },
        set(value){
            val = value
            updataView()
        }
    })

    function updataView(){
        box.innerHTML = obj.message //触发get
    }

    // init
    updataView()

    textIpt.oninput = function(){
        obj.message = this.value //触发set
    }

```
双向绑定是在同一个组件内，将数据和视图绑定起来，和父子组件之间的通信并无什么关联；
组件之间的通信采用单向数据流是为了组件间更好的解耦，在开发中可能有多个子组件依赖于父组件的某个数据，假如子组件可以修改父组件数据的话，一个子组件变化会引发所有依赖这个数据的子组件发生变化，所以vue不推荐子组件修改父组件的数据，直接修改props会抛出警告



## 双向数据绑定和单向数据绑定
#### 单向数据绑定：
指的是我们先把模板写好，然后把模板和数据（数据可能来自后台）整合到一起形成HTML代码，然后把这段HTML代码插入到文档流里面。
![](https://upload-images.jianshu.io/upload_images/9249356-c3b0d49fbc6136e6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 缺点:HTML代码一旦生成完以后，就没有办法再变了，如果有新的数据来了，那就必须把之前的HTML代码去掉，再重新把新的数据和模板一起整合后插入到文档流中。

#### 双向数据绑定：
数据模型（Module）和视图（View）之间的双向绑定。
![](https://upload-images.jianshu.io/upload_images/9249356-1a0c95090827d702.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

用户在视图上的修改会自动同步到数据模型中去，同样的，如果数据模型中的值发生了变化，也会立刻同步到视图中去。
双向数据绑定的优点是无需进行和单向数据绑定的那些CRUD（Create，Retrieve，Update，Delete）操作
双向数据绑定最经常的应用场景就是表单了，这样当用户在前端页面完成输入后，不用任何操作，我们就已经拿到了用户的数据存放到数据模型中了。
目前。实现双向数据绑定的前端框架主要有AngularJS，VueJS（通过引入vuex来实现单项的数据监控）等 

大名鼎鼎的angular实现双向绑定的原理就是通过$watch来进行脏检查，但是这种脏效率很如果是大量的检查那就不敢想象了。

#### 两者的使用场景
>单向绑定的优点是相应的可以带来单向数据流，这样做的好处是所有状态变化都可以被记录、跟踪，状态变化通过手动调用通知，源头易追溯，没有“暗箱操作”。同时组件数据只有唯一的入口和出口，使得程序更直观更容易理解，有利于应用的可维护性。缺点则是代码量会相应的上升，数据的流转过程变长，从而出现很多类似的样板代码。同时由于对应用状态独立管理的严格要求(单一的全局store)，在处理局部状态较多的场景时(如用户输入交互较多的“富表单型”应用)，会显得啰嗦及繁琐。

>基本上双向绑定的优缺点就是单向绑定的镜像了。优点是在表单交互较多的场景下，会简化大量业务无关的代码。缺点就是由于都是“暗箱操作”，我们无法追踪局部状态的变化(虽然大部分情况下我们并不关心)，潜在的行为太多也增加了出错时 debug 的难度。同时由于组件数据变化来源入口变得可能不止一个，新手玩家很容易将数据流转方向弄得紊乱，如果再缺乏一些“管制”手段，最后就很容易因为一处错误操作造成应用雪崩。

最后总结:我们要通过自己的业务场景合理的选择