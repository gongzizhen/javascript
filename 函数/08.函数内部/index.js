/**
 *   在es5 中,函数内部存在两个特殊的对象 arguments 和 this;
 *   es6 中 有新增了 new.targer 属性
 * 
 */
console.log('-------- arguments  ----------');
/**
 *   arguments 是一个类数组对象,包含调用函数时传入的参数;
 *   arguments 只有以function 关键字定义函数时才会有;
 *   arguments 对象 还包含一个 callee [考利 呼唤着] 属性,
 *   callee 属性 是一个 指向arguments 对象所在函数的指针
 *  严格模式下 会报错
 * 
 */
function fun(num) {
    // arguments.callee属性就是当前执行函数
    console.log(arguments.callee === fun); //true
};
fun(1);
// 递归函数
function factorial(num) {
    if (num <= 1) {
        return 1
    } else {
        // 使用callee 属性 意味着无论函数叫什么名,都可以引用正确的函数
        return num * arguments.callee(num - 1)
    }
};
console.log(factorial(5)); // 120
console.log('-------- this  ----------');
/**
 *   this对象,
 *   在标准函数中,this就是把函数当成方法调用的上下文对象;
 *   全局上下文中调用函数时,this指向windows 严格模式下 在全局上下文调用函数 this 是 undefined
 *   
 *  箭头函数中,this是定义箭头函数的上下文对象,也就是父级上下文
 */
function funThis() {
    console.log(this); // 指向window
};
funThis();

let obj = {
    name: '刘阳',
    say: () => {
        console.log(this);
    }
};

console.log('------ new.target ------');
/***
 *  js中的函数始终可以作为构造函数实例化对象,也可以作为普通函数被调用.
 *  es6 中 新增了检测函数是否使用 new 关键字调用的; 
 *  如果是正常调用, new.target 的值是undefined;
 *  如果是使用 new 关键字调用的,则 new.target将引用被调用的构造函数;
 */
function King() {
    console.log(new.target); //undefined
};
King(); //undefined
new King(); //King() { console.log(new.target);  }

