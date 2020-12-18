// ?是选填的意思
//此处add没有声明类型，但是却因为赋值给函数（=代表赋值）自动获取了类型
// 原因
//赋值过程中，ts会进行类型推论，把赋值的类型也声明给add
const add = (x: number, y: number, z?: number): number => {
    if (typeof z === 'number') {
        return x + y + z
    } else {
        return x + y
    }
}
// let resule = add(1, 3) 




// 无法重新声明块范围变量“add2”。ts(2451)
// 不能将类型“(x: number, y: number, z?: number) => number”分配给类型“string”。
// let add2:string=add

//冒号后相当于声明类型，下面把add2声明为number类型
//声明类型跟实际代码没有关系（js中也不会渲染），所以可以赋值给add
//直接声明类型需要用=>号
// let add2: (x: number, y: number, z?: number) => number = add

interface ISum {
    // 在interface中声明函数类型用的是冒号：
    (x: number, y: number, z?: number): number
}
// ISum声明了类型后，再去add2里声明ISum类型，add2跟add类型就会相等
// let add2: ISum = add



// 开发过程中偶尔会被 IDE 提示「无法重新声明块范围变量」
// 最简单的解决方法是在报错的文件底部添加一行代码：export {}
// 这行代码会「欺骗」tslint 使其认为当前文件是一个 ESModule 模块，因此不存在变量重复声明
export { }
