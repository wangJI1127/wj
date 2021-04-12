/**
 * https://juejin.cn/post/6844904116552990727#heading-3
 * call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数
 */

Function.prototype.myCall = function (thisArg, ...args) {
    const fn = Symbol('fn'); // 声明一个独有的Symbol属性， 防止fn覆盖已有属性
    thisArg = thisArg || window; //如果没有传入this， 默认绑定window对象
    thisArg[fn] = this; // this指向调用call的对象，即要改变this指向的函数
    const result = thisArg[fn](...args); //执行当前函数
    delete thisArg[fn];
    return result;
};

function showName() {
    console.log(this.name);
}

const wj = {
    name : 'wj',
};

showName();   //undefined
showName.call(wj);  //wj
showName.myCall(wj); //wj