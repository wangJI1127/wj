/**
 * https://juejin.cn/post/6844904116552990727
 * var声明的变量会挂到window上，而let和const不会
 * var声明的变量存在变量提升，而let和const不会
 * let和const声明形成块作用域，只能在块作用域里访问，不能跨块访问，也不能跨函数访问
 * 同一作用域下let和const不能声明同名变量，而var可以
 * 暂时性死区，let和const声明的变量不能在声明前被使用(因为无法被提升)
 */

/**
 * 定义在函数作用域中，在作用域之外无法调用在函数中定义的变量
 */
(function(){
    var a = 1111;
    console.log(a);
})();

// console.log(a);  //报错