let arr = [1, [2, 3], [4, 5, 6]];
let arr1 = arr.flat(Infinity);
console.log(arr1);

// 序列化后正则
const str = `[${JSON.stringify(arr).replace(/(\[|\])/g, '')}]`;
let arr2 = JSON.parse(str);
console.log(arr2);

//递归
function myflat(arr){
    let result = [];
    for(const item of arr){
        item instanceof Array ? result = result.concat(myflat(item)) : result.push(item);
    }
    return result;
}
let arr3 = myflat(arr);
console.log(arr3);

// reduce() 递归
function reduceFlat(arr){
    return arr.reduce((prev, cur) => {
        return prev.concat(cur instanceof Array ? reduceFlat(cur) : cur);
    }, []);
}
let arr4 = reduceFlat(arr);
console.log(arr4);

//迭代+展开运算符
while(arr.some(Array.isArray)){
    arr = [].concat(...arr);
}
console.log(arr);