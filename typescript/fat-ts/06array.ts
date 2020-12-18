// 类型别名
//类型推断 numberArr类型：number 
const numberArr = [1, 2, 3]

//手动加:number[]类型注释也能把numberArr2定义为数字数组类型
const numberArr2: number[] = [1, 2, 3]
// 类型注释：字符串数组
const stringArr: string[] = ['a', 'b', 'c']
// 类型注释：未定义数组--数组类型只能是undefined
const undefinedArr: undefined[] = [undefined, undefined]
// 类型注释：含有两种或以上的类型时
const Arr: (number | string)[] = [1, 'a']
// 类型注释：对象类型
// 方法1
const fruits: { name: string, weight: number }[] = [
    { name: '西瓜', weight: 1 },
    { name: '苹果', weight: .5 },
    { name: '哈密瓜', weight: .8 }
]
// 方法2
//类型别名 type alias
type vegType = { name: string, weight: number }
// 多个地方使用同样的对象类型时，直接声明一个类型别名：vegType
const vegetables: vegType[] = [
    { name: '菠菜', weight: 1 },
    { name: '胡罗北', weight: 1 },
    { name: '冬瓜', weight: 1 }
]
// 方法3
// 用类方法去搞对象
class vegeType2 {
    name: string
    weight: number
}
const vegetables2: vegeType2[] = [
    { name: '菠菜', weight: 1 },
    { name: '胡罗北', weight: 1 },
    { name: '冬瓜', weight: 1 }
]