// // interface接口

// // 用Interface的写法
// // 造接口 声明类型 I开头=interface接口
// //interface 必须在内部声明对象的类型
// interface IFruit {
//     // 对象：类型
//     name: string // 不用加逗号，
//     weight: number
//     place: string
//     sweet?:number //加问号代表这个值可填可不填
// }
// type TFruit1 =string //类型别名可以直接声明类型
// // 定义fruits4对象，O开头=对象
// const OFruits = {
//     name: '哈密瓜',
//     weight: 2,
//     place: '新疆',
//     // sweet: .5  //甜度是可选项
// }
// // 判断批不批发水果
// // CFfruits对象传进去，符合 furit3的类型标准
// const screenResume = (OFruits:IFruit) => {
//     // if else的简化版
//     OFruits.weight <= 1 && OFruits.place === '新疆' && console.log(OFruits.name + '批发')
//     OFruits.weight > 1 || OFruits.place !== '新疆' && console.log(OFruits.name + '不买')
// }
// // 判断批发的水果细节
// const getFruit = (OFruits:IFruit) => {
//     console.log(OFruits.name + '产地是' + OFruits.place)
//     console.log(OFruits.name + '重量是' + OFruits.weight)
//     OFruits.sweet&&console.log(OFruits.name+'甜度是'+OFruits.sweet)
// }
// screenResume(OFruits)
// getFruit(OFruits)

// // 上下效果是一样的，但是interface更简洁


// // 一般的筛选  冗余
// // const screenResume = (name: string, weight: number, place: string) => {
// //     weight <= 1 && place === '新疆' && console.log(name + '批发')
// //     weight > 1 || place !== '新疆' && console.log(name + '不买')
// // }
// // screenResume('苹果', 2, '烟台')
// // const getFruit = (name: string, weight: number, place: string) => {
// //     console.log(name + '产地是' + place)
// //     console.log(name + '重量是' + weight)
// // }
// // screenResume('哈密瓜', 1, '新疆')
// // getFruit('哈密瓜', 1, '新疆')