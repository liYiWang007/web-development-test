// 记得给定义的name设定显性类型
//但是typescript即使报错了也会生成文件
var hello = function (name) {
    return "hello " + name;
};
hello('123');
// 以下为错误的表达：123不是string，是number,改为'123'即可
//hello(123)
// 正确的 hello('123')
