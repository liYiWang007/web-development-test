"use strict";
exports.__esModule = true;
// ?是选填的意思
//此处add没有声明类型，但是却因为赋值给函数（=代表赋值）自动获取了类型
// 原因
//赋值过程中，ts会进行类型推论，把赋值的类型也声明给add
var add = function (x, y, z) {
    if (typeof z === 'number') {
        return x + y + z;
    }
    else {
        return x + y;
    }
};
