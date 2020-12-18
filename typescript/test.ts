
// 记得给定义的name设定显性类型
//但是typescript即使报错了也会生成文件
const hello = (name: string) => {
    return `hello ${name}`
}

hello('godson')
// 以下为错误的表达：123不是string，是number,改为'123'即可
//hello(123)

// 正确的 hello('123')

let isDone: boolean = false
let age: number = 10
let firstName: string = 'godson'
let message: string = `Hello,${firstName}`

let u: undefined = undefined
let n: null = null

let num: number = undefined

// any代表任意类型都可以，系统自动判断，但一般不建议，这样会让ts的事先类型判断失去作用，跟js无异
let notSure: any = 4
notSure='maybe a string'
notSure=true

notSure.myName
notSure.getName()