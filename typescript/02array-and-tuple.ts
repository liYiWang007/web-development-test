// 声明一个数字类型的数组 --结尾加[]
let arrOfNumbers: number[] = [1, 2, 3]

arrOfNumbers.push(3)

// 类数组
// function test() {
// console.log(arguments)
//arguments就是类数组，所以forEach会报错
// arguments.forEach(element => {
// }); 

//这里arr会报错是因为arguments是类数组
// 而系统判断any的类型是数组，两者类型不一致
// let arr:any[]=arguments

// HTMLCollection也是系统预设的类数组 array like Object
// let htmlCollection:HTMLCollection
// }

// 元组类型
//限定了数据类型的数组
let user: [string, number] = ['viking', 20]
// 元组可以通过push添加值，但是只能push元组中已被定义的类型
// （如下面只能push两种：string,number，push 布尔值会报错
// 没有定义布尔值所以push会报错
// user.push(true)
user.push(20)