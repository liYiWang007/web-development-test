// interface接口

// 造接口 声明类型 I开头=interface接口
interface IFruit {
    // 对象：类型
    name: string // 不用加逗号，
    weight: number
    place: string
    sweet?: number //加问号代表这个值可填可不填
    // 自定义对象类型 选填的
    // 名称：类型是字符串 对象类型是any(根据需要写)
    [propname: string]: any
    // 可在接口内定义方法，返回string类型
    say(): string
}

// 接口继承 extends
interface IVegetable extends IFruit{
    // 可在接口内定义方法，返回string类型
    teach():string
}

class OTomato implements IFruit {
    name= '西红柿'
    weight= .8
    place= '新疆'
    say() {
        return '我这瓜可甜了'
    }
    teach() {
        return '怎么看我熟没熟啊？'
    }
    
}

// 定义OFruit对象，O开头=对象
const OFruit = {
    name: '哈密瓜',
    weight: 1,
    place: '新疆',
    // sweet: .5  //甜度是可选项，
    color: '黄色',
    say() {
        return '我这瓜可甜了'
    },
    teach() {
        return '怎么看我熟没熟啊？'
    }
}
// 判断批不批发水果
// CFfruits对象传进去，符合 furit3的类型标准
const screenResume = (OFruit: IFruit) => {
    // if else的简化版
    OFruit.weight <= 1 && OFruit.place === '新疆' && console.log(OFruit.name + '批发')
    OFruit.weight > 1 || OFruit.place !== '新疆' && console.log(OFruit.name + '不买')
}
// 判断批发的水果细节
const getFruit = (OFruit: IFruit) => {
    console.log(OFruit.name + '产地是' + OFruit.place)
    console.log(OFruit.name + '重量是' + OFruit.weight)
    OFruit.sweet && console.log(OFruit.name + '甜度是' + OFruit.sweet)
    OFruit.color && console.log(OFruit.name + '表面颜色是' + OFruit.color)
    console.log(OFruit.say())
}
screenResume(OFruit)
getFruit(OFruit)

// 输出蔬菜数据
const getVegetable = (OFruit: IVegetable) => {
    console.log(OFruit.name + '产地是' + OFruit.place)
    console.log(OFruit.name + '重量是' + OFruit.weight)
    OFruit.color && console.log(OFruit.name + '表面颜色是' + OFruit.color)
    console.log(OFruit.teach())
}
getVegetable(OFruit)


