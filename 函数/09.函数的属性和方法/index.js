/***
 *   js 中的函数是对象,因此有属性和方法
 *   每个函数都有两个属性 length 和 prototype
 *  
 *  其中 length 属性保存函数定义的命名参数的个数;
 */
console.log('------------- Function.length ------------');
function sayName(name) { };
function sum(num1, num2) { };
function sayHi() { };
console.log(sayName.length, 'sayName'); // 1
console.log(sum.length, 'sum'); // 2
console.log(sayHi.length, 'sayHi'); //0

/***
 *  prototype  看原型
 */

/**
 *  函数 还有三个方法 apply() , call(),bind()
 *  
 *  apply  call  和  bind 都会改变函数的this对象
 *  apply 和 call 是直接调用函数,
 *  bind 是返回一个新的函数
 *  
 *  apply 接收两个参数 第一个是 指定的this对象,第二个参数是数组或者类数组对象,是被调用函数的参数
 *  
 *  call 方法和 apply 方法一样,只是传参形式不同, 
 *   第一个是 指定的this对象,而剩下的参数,是逐个传递给被调用函数的参数;
 * bind 方法 会创建一个新的函数,
 * 一个是 指定的this对象,而剩下的参数,是逐个传递给被调用函数的参数;
 */
console.log('------ apply  -------');
function sum2(num1, num2) {
  return num1 + num2
}
function callSum(num1, num2) {
    // 传入arguments
    return sum2.apply(this,arguments);
};
function callSum2(num1,num2) {
    return sum2.apply(this,[num1,num2]);
}
console.log(callSum(10,10)); // 20
console.log(callSum2(10,10)); // 20
console.log('------ call  -------');
function sum3(num1, num2) {
    return num1 + num2
  }
  function callSum3(num1, num2) {
      // 传入arguments
      return sum2.call(this,num1,num2);
  };
  console.log(callSum3(10,10)); // 20
  console.log('------ bind  -------');
  function sum4(num1, num2) {
    return num1 + num2
  }
  function callSum4(num1, num2) {
      // 传入arguments
      return sum2.bind(this,num1,num2)();
  };
  console.log(callSum4(10,10)); // 20