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
/**
 * es6 支持显示定义默认参数
 *  只要在函数定义中的参数后面用= 就可以为参数赋默认值
 */
function makeKingEs6(name = '拜登', joy = "保安") {
 return '${name} 是 ${保安}'
}