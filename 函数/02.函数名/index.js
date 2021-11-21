/**
 *   函数名就是指向函数的指针,
 *   函数名具有跟其他包含对象指针的变量相同的行为;
 *    一个对象还可以赋值给多个变量
 *    函数也可以包含多个名称
 *   因为 函数名称只是储存函数的指针; 
 */
function sum(num1, num2) {
    return num1 + num2
};
console.log(sum(10, 20)); // 30

let anotherSum = sum;  // 不带括号的函数名会访问函数指针,而不是执行函数;
console.log(anotherSum(10, 10)); // 20

sum = null
console.log(anotherSum(1, 8)); // 9

/**
 *  ECMAScript 6 的所有函数对象都会暴露一个只读的 name 属性, 包含关于函数的信息
 *  多数情况下,函数的name属性保存的就是一个函数标识符,或者说是一个字符串化的变量名.
 *   即使函数没有名称,name也会如实显示成 空字符串
 *   如果函数是通过 Function 构造函数创建的,则name的值 'anonymous';
 */
function foo() { };
let bar = function () { };
let baz = () => { };
console.log(foo.name); // foo
console.log(bar.name); // bar
console.log(baz.name); // baz
console.log((() => { }).name); // "" 空字符串
console.log((new Function()).name); //anonymous

/***
 *  如果函数是一个获取函数(get())  或者 设置函数(set())
 *  或者 使用bind() 实例化, 函数名会加上前缀;
 */
function foo() { };
//使用bind() 实例化
console.log(foo.bind(null).name); //bound foo

let dog = {
    years: 1,
    get age() {
        return this.years;
    },
    set age(value) {
        this.years = value;
    }
}
//Object.getOwnPropertyDescriptor 方法返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）
let propertyDescriptor = Object.getOwnPropertyDescriptor(dog,'age');
console.log(propertyDescriptor.get.name); // get age
console.log(propertyDescriptor.set.name); // set age
