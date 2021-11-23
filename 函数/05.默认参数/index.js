/**
 * 在es6 之前; 实现默认参数的一种常用方法就是检测某个参数值是否为undefined,
 *  如果是就意味着没有传值,然后赋值
 */
function makeKing(name) {
    name = name || '龚文涛'; // 添加默认值
    return `我是${name}`
};
console.log(makeKing()); // 我是龚文涛
console.log(makeKing('刘阳')); // 我是刘阳
console.log('___________________________________________________');
/**
 * es6 支持显示定义默认参数
 *  只要在函数定义中的参数后面用= 就可以为参数赋默认值
 */
function makeKingEs6(name = '拜登', joy = "保安") {
    return '${name} 是 ${保安}'
}
console.log('___________________________________________________');
/***
 *  arguments 对象的值不反映参数的默认值,
 *  arguments 只反映传递给函数的实参;
 *  修改命名参数不会影响arguments,
 *  arguments 始终以调用函数时传入的参数为准
 */
function makeKingArg(name = "特朗普") {
    name = '奥巴马';
    return arguments[0];
};
console.log(makeKingArg());//undefined
console.log(makeKingArg('克林顿')); //克林顿
console.log('___________________________________________________');
/**
 *  默认参数值并限于原始值和 对象类型;
 *  也可以调用函数返回值;
 *   默认参数 只有在函数调用时才会求值, 不会在函数定义时求值;
 *   并且 计算默认值的函数只有在调用函数,但没有传递参数才会被调用
 */
let num = [1, 2, 3, 4, 5, 6];
let numIndex = 0;
function getNum() {
    return num[numIndex++]
};
function makeKingFun(name = '鳌拜', num = getNum()) {
    return `${name} ___ getNum:(${num})`
};
console.log(makeKingFun());//鳌拜 ___ getNum:(1)
console.log(makeKingFun());//鳌拜 ___ getNum:(2)
console.log(makeKingFun());//鳌拜 ___ getNum:(3)
console.log('___________________________________________________');
/**  箭头函数也可以使用默认值  */

/**
 *   默认参数作用  与 暂时性死区
 *
 * 给多个参数定义默认值 实际上跟使用let声明变量顺序一样.
   function fun(name='阿拉蕾',age=12) {

   };
   函数fun 会按照定义参数的顺序依次赋值
   function fun() {
       let name = '阿拉蕾'
       let age = 12
   };
   所以, 后边参数可以,用前边的参数当默认值
   function fun(name='阿拉蕾',numerals = name) {

   };
   参数初始化遵循"暂时性死区",所以前边的参数,不能引用后边的参数
   function fun(numerals = name,name='阿拉蕾') {
     //  报错
   };
   参数 存在于自己的作用域中, 他们不能引用函数体中的变量,比如
   function fun(name='阿拉蕾',numerals=defaultNumeral) {
       let defaultNumeral = '234'; 
   };
调用时不传第二个参数会报错;
 */


