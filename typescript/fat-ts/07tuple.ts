// 元组
// 一般数组
// 缺点：把数据随意排序不会报错
const arrays: (string | number)[] = ['芒果', 1, '东南亚']
// 元组
// 优点：按顺序排放数据，放错了会报错
const arrays2: [string, string, number] = ['芒果', '东南亚', 1]

// CSV 格式  已过时
// 哈密瓜", "新疆", 4
// 西瓜", "新疆", 6
// 苹果", "烟台", 
// CSV形式的元组数组   注意此方法不常用
// const fruits:[string,string,number][]=[
//     ['芒果', '新疆', 4],
//     ['哈密瓜', '新疆', 6],
//     ['苹果', '烟台', 1]
// ]

// 一般都只用普通数组的方式
const fruits2:{ name:string, where:string, weight:number }[] = [
    { name: '芒果', where: '新疆', weight: 4 },
    { name: '哈密瓜', where: '新疆', weight: 6 },
    { name: '苹果', where: '烟台', weight: 1 }
]