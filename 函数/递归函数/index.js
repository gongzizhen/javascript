/***
 * 递归函数 通常的形式是一个函数通过名称调用自己,
 */
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        // 先入栈的后出来, 后入栈的先出来,所以先执行 factorial(num - 1)
        let str = factorial(num - 1);
        return num * str;
    }
};
let a = factorial(3);
console.log(a); //6 
/***
*  执行栈 [factorial(3),factorial(2),factorial(1)]
* 1.  等factorial(1) 执行完 返回 1;
*   执行 factorial(2)   2 * 1;
* 2. 等 factorial(2)执行完 返回 2;
*  执行 factorial(3) 3 * 2;
* 3. 最终返回 6;
*
*/

/***
 *  经典的递归阶乘,虽然这样写可以但是有弊端,比如
 *  let anotherFactorial = factorial;
    factorial = null;
    anotherFactorial(5)
    把factorial() 函数保存在另一个变量 anotherFactorial;
    然后把 factorial 设置为 nul
    只保留了 anotherFactorial 对函数的引用
    所以 递归调用 factorial() 会报错
    要避免这问题,可以使用 arguments.callee;
    arguments.callee 指向正在执行的函数
    但是这种方法 严格模式下不支持 

 */

function factorial2(num) {
    if (num <= 1) {
        return 1;
    } else {
        // 先入栈的后出来, 后入栈的先出来,所以先执行 factorial(num - 1)
        let str = arguments.callee(num - 1);
        return num * str;
    }
};
let anotherFactorial = factorial2;
factorial2 = null;
let b = anotherFactorial(5);
console.log(b); 120

/***
 *  可以使用 命名函数表达式;
 */
const factorial3 = (function f(num){
    if (num <= 1) {
        return 1;
    } else {
        // 先入栈的后出来, 后入栈的先出来,所以先执行 factorial(num - 1)
        let str = f(num - 1);
        return num * str;
    }
});
// 命名函数表达式  名字是不变的 