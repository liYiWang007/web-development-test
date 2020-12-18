//statci Typing
// 如 定义为number类型就永远是number，否则会报错
let count: number = 1;

// 类型不一样，报错
// count= 'ddd'

interface Godson {
    uname: string,
    age: number
}

const dog: Godson = {
    uname: '狗剩',
    age: 54
}
console.log(dog.age)








