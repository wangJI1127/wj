/**
 * https://juejin.cn/post/6844904116552990727#heading-7
 * 间隔执行
 */

function throttle(func, wait){
    let timeout = null;
    return function(){
        let context = this;
        let args = arguments;
        if(!timeout){
            timeout = setTimeout(() => {
                timeout = null;
                func.apply(context, args);
            }, wait);
        }
    };
}

//使用两个时间戳
function throttle2(func, wait){
    let prev = 0;
    return function(){
        let now = Date.now();
        let ocntext = this;
        let args = arguments;
        if (now - prev > wait){
            func.apply(context, args);
            prev = now;
        }
    };
}