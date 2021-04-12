/**
 * https://juejin.cn/post/6844904116552990727
 */

function _const(key, value) {
    var desc = {
        value: value,
        writable: false,
    };
    Object.defineProperty(window, key, desc);
}

_const('obj', {
    a : 1
});
console.log(obj);