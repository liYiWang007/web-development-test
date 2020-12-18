// 定义的名称前最好加个大写的类型缩写，如Interface 接口 的就是I+定义名=IPerson
interface IPerson {
    //添加只读接口 readonly
    readonly index: number
    // 定义了两个接口
    name: string
    age: number
    // 接口后接问好?代表接口可选
    id?: number
}
let godson: IPerson = {
    index:1,
    name: 'viking',
    age: 20,
    // id:1
}
// 因为 readonly是只读属性，无法被赋值，所以报错
// godson.index = 1