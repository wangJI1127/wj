/**
 * https://juejin.cn/post/6844904116552990727#heading-5
 * https://blog.csdn.net/q3254421/article/details/82999718
 */

Function.prototype.myBind = function(thisArg, ...args){
    // this:谁调用mybind()就指向谁
    let self = this;
    let fbound = function() {
         // 检测 New
        // 如果当前函数的this指向的是构造函数中的this 则判定为new 操作
        self.apply(this instanceof self ? this : thisArg, args.concat(Array.prototype.slice.call(arguments)));
    };
    fbound.prototype = Object.create(self.prototype);
    return fbound;
}

const obj = {
    name : 'lishan',
}
function showName() {
    console.log(this.name);
    console.log(arguments);
}

showName.bind(obj)();
showName.myBind(obj, 'a', 'b', 'c')();