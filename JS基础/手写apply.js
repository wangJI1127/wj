/**
 * https://juejin.cn/post/6844904116552990727#heading-4
 * apply()和call()类似，区别在于call()接收参数列表，而apply()接收一个参数数组
 */

Function.prototype.myApply = function (thisArg, args) {
    const fn = Symbol('fn');
    thisArg = thisArg || window;
    args = args || [];  //如果没有传入参数，则默认为空数组
    thisArg[fn] = this;
    // 执行当前函数（此处说明一下：虽然apply()接收的是一个数组，但在调用原函数时，依然要展开参数数组。可以对照原生apply()，原函数接收到展开的参数数组）
    const result = thisArg[fn](...args); 
    delete thisArg[fn];
    return result;
};

function showName() {
    console.log(this.name);
}

const obj = {
    name : 'lishan'
};
showName.apply(obj);
showName.myApply(obj);