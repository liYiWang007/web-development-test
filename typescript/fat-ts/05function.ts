// 手动添加类型注解
// :number  相当于返回类型注解，能即使检查函数内部类型是否正确
function getTotal(one: number, two: number): number {
    return one + two
}
// 加了类型后total就会自动变number类型
// total不需要另外加类型注解
const total: number = getTotal(1, 2)


// :void 无，没有返回值
function sayHello(): void {
    console.log('hello godson')
    //有:void 后，函数内部就不能+return，会报错
    // return
}

// 函数永远执行不完,就用:never
function errorFunction(): never {
    throw new Error()
    // 抛出异常后，下面的console永远也执行不了
    console.log('hello godson')
}

function forNever(): never {
    while (true) { }
    // while 一直在执行，所以下面的console就无法执行
    console.log('hello godson')
}


//现在传的参数 {three,four}是对象，跟第一行的不一样
// 对象声明类型在后面:{对象：类型}
function add({ three, four }: { three: number, four: number }) {
    return three + four
}
const total2 = add({ three: 3, four: 4 })
