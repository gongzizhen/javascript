/***
 *  js 函数没有重载.
 *  在java中,一个函数可以有两个定义,只要签名不同就行.(就是接收参数的类型和数量不同)
 *  如果定义两个同名的函数,则后定义的会覆盖先定义的
 */
let addSomeNumber = function(num) {
    return num + 100;
};
addSomeNumber = function(num) {
    return num + 200;
};
console.log(addSomeNumber(100)); // 300
