/**
 * https://juejin.cn/post/6844904116552990727#heading-6
 * 在设定时间之内没有操作之后的才执行，延迟执行
 */

function debounce(func, wait) {
    let timeout = null;
    return function(){
        let context = this;
        let args = arguments;
        if(timeout){
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
        
    };
}

function lishan(){
    console.log(111)
    return 222
}

// debounce(lishan, 2000)

const p1 = new Promise(lishan);
p1.then(msf => {
    console.log(msf)
}).then(msg => {
    console.log(msg)
})