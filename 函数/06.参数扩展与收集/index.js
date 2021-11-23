function getSum(a,b,c,d) {
    console.log(a,b,c,d);  //-1,1 2 3 4
};
// 实参使用 扩展运算符 是参数扩展,就是把数组或者可迭代的对象打散,分别传入;
getSum(-1,...[1,2,3,4])

// 参数收集,把所有传入的参数收集成一个数组;
function setSum(str,...args) {
    console.log(str); // 第一参数
    console.log(args); // 收集剩余参数
};
setSum('其它',1,2,3,4,5)