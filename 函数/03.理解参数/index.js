/***
 *   ECMAScript 函数的参数在内部表现为一个数组. 
 *   函数被调用时总会接收一个数组,但函数并关系这个数组中包含什么;
 *   所以,js中函数不关心参数个数,也不关系参数的数据类型;
 *    定义函数时设置两个形参,并不意味着调用函数就必须传递两个实参,
 *    可以传一个,三个,...或者不传递.解释器都不会报错
 * 
 *  在使用function 关键字定义函数时(非箭头函数),可以在函数内部 访问 arguments 对象,从中取得传进来的每个参数值
 *  arguments 对象是一个类数组对象,可以使用 arguments[索引] 访问其中的元素;
 *  可以访问 arguments.length 属性 获取参数个数
 *  arguments 对象可以跟命名参数(形参) 一起使用;
 * 
 * 
 *  arguments 对象的值始终会与对应的命名参数同步.
 */
function doAdd(num1, num2) {
    arguments[1] = 10;
    console.log(num2); //10
    console.log(arguments[0] + num2);
};
doAdd(1, 2);
/***
 *  doAdd() 函数把 第二个参数的值重写为10, 
 *  因为 arguments对象会自动同步到对应的命名参数,
 *  所以修改arguments[1] 也会同步修改num2的值;
 *  但是这并不意味着,他们都访问同一个内存地址,它们在内存中还分开的;
 *  
 *   注意: 命名参数,如果调用函数时没有传递这个参数,那么这个值是undefiend. 这类似于 定义了变量没有赋值;
 *   调用doAdd2函数 没有给 参数num2 传值; 参数num2 的值 undefined; 
 *    当修改arguments[1] 时, 也不会改变 num2的值;
 *    这是因为 arguments 对象的长度是根据传入的参数个数,不是定义函数时给出的命名参数个数;
 */
function doAdd2(num1, num2) {
    console.log(arguments.length); // 1 
    arguments[1] = 10;
    console.log(num2); //undefined
    console.log(arguments[0] + num2);
};
doAdd2(1);
/***
 *   严格模式下,不能修改arguments 对象;
 * 
 */

console.log('-------------  以下是箭头函数参数 ----------------');
/***
 * 箭头函数 没有arguments对象,只能通过命名参数访问;
 *  let bar = ()=> {
      console.log(arguments); // arguments is not defiend
   }
   bar(2);
 */
// 虽然箭头函数没有arguments 对象,但可以在包装函数中把它提供给箭头函数
function foo() {
    let bar = ()=> {
       console.log(arguments); //可以打印
    };
    bar();
}
foo(5)