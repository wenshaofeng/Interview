function Nice(options = {}) {
    this.$options = options; //将所有属性挂载到$options
    // this._data
    var data = this._data = this.$options.data;
    observe(data)

    //数据代理 this 代理了 this._data
    for(let key in data) {
        Object.defineProperty(this,key,{
            enumerable:true, //可枚举
            get(){
                return this._data[key] //this.a = 
            },
            set(newVal){
                this._data[key] = newVal
            }
        })
    }    
}

function Observe(data) { //这里写主要逻辑
    for (let key in data) {
        //把 data 属性通过object.defineProperty 的方式 定义属性
       
       let val = data[key]

       //定义属性
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: true,
            get() {
                return val 
            },
            set(newVal) { //更改值的时候
                if(newVal === val) {
                    return
                }
                val = newVal 

                observe(newVal) //实现深度数据劫持
            }
        })
    }
}

function observe(data) {
    return new Observe(data)
}

/* 
 vue 特点不能新增不存在的属性，不存在的属性没有get和set，那么
 vue 就不能监控它的变化，也就不能做到响应式 */

//  深度响应: 因为每次赋予一个新对象时，会给这个新对象增加数据劫持(递归设置Object.defineProperty)