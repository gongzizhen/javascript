// 箭头函数非常适合嵌入函数到的场景
let ints = [1, 2, 3];
// 普通函数写法
let arr1 = ints.map(function (i) {
    return i + 1
});
// 箭头函数写法
let arr2 = ints.map((i) => {
    return i + 1
})

/**
 *  如果只有一个参数, 可以不用括号;
 *  没有参数,或者多个参数必须要有括号
 */

// 以下两种写法都有效
let double = (x) => { return 2 * x };
let triple = x => { return 3 * x }; // 省略参数括号
let sum = (a, b) => { return a + b }; // 多个参数需要括号

/**
 * 箭头函数也可以不用大括号;
 *  如果不使用大括号,那么箭头后边就只能有一行代码,
 *  比如一个赋值操作,一个表达式.
 *  并且,省略大括号 默认会返回这一行代码值
 */
// 以下两种写法都有效,而且返回相应的值
let double2 = (x) => { return 2 * x };
let triple2 = x => 3 * x; // 省略参数的括号 省略大括号

/**
 * 箭头函数有很多场景不使用,
 *  1.箭头函数不能使用 arguments,super和 new.target,不能用作构造函数
 *  2. 箭头函数没有 prototype 属性
 * 
 */
