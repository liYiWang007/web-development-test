// 类型注解  类型推断

// 类型注解
let count: number;

// 鼠标移上去count上，title会显示count是number类型
count = 123


//类型推断
//赋值后能推断变量的类型用let时能判读 变量是 number
let coninterferne = 123

// 用const时就直接赋值，不显示类型
const one = 1
const two = 2
// 运用了运算后，three会显示类型
const three = one + two

// 不正确的写法
// 此时 one,two类型都是any,
// function getTotal(one,two){
//     return one+two
// }
// total类型为any
// const total = getTotal(1, 2)

// 正确写法
// 手动添加类型注解
function getTotal(one: number, two: number) {
    return one + two
}
// 加了类型后total就会自动变number类型
// total不需要另外加类型注解
const total = getTotal(1, 2)

// 潜规则：
// 如果有类型判断，就不需要手动加
// 如果类型判断为any，就必须手动+类型注解
const fruit = {
    name: '西瓜',
    weight: 1
}