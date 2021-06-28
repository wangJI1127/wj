import {useEffect, useState} from "react";

export const isFalsy = (value) => value === 0 ? false : !value;

export const cleanObject = (object) => {
    // Object.assign({}, object)
    const result = {...object};
    Object.keys(object).forEach(key => {
        const value = object[key];
        if (isFalsy(value)){
            delete result[key];
        }
    })
    return result;
}

export const useMount = (callback) => {
    useEffect(() => {
        callback();
    }, []) // [] 表示只执行一次
}

//防抖函数
// const debounce = (func, delay) => {
//     let timeout;
//     return () => {
//         if (timeout){
//             clearTimeout();
//         }
//         timeout = setTimeout(function (){
//             func();
//         }, delay);
//     }
// }

export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => setDebounceValue(value), delay);
        // 清除函数 在调用一个新的 effect 之前对前一个 effect 进行清理
        return () => clearTimeout(timeout);
    }, [value, delay])
    return debounceValue;
}
