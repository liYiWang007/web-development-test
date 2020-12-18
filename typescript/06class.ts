// 创建类 animal
class Animal {
    readonly name: string
    // constructor是获取属性的意思 如bollean\date\string\array等
    constructor(name) {
        this.name = name

    }
    // protexted 只有自己以及子级能访问
    // protected run() {
    //     return `${this.name} is running`
    // }
    run() {
        return `${this.name} is running`
    }
}
const snake = new Animal('lily')

// readonly的作用
// snake.name = '123'

console.log(snake.run())
// exends是继承的意思，用来创建一个普通类或者内建对象的子类。
// 继承的.prototype必须是一个Object 或者 null。
//根据animal创建一个Dog的类 
class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}
const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())
console.log(xiaobao.bark())

class Cat extends Animal {
    // static 可以直接访问静态属性
    static categories = ['mammal']
    constructor(name) {
        // 父类方法要加
        super(name)
        console.log(this.name)
    }
    run() {
        return 'Meow,' + super.run()
    }
}
const maomao = new Cat('maomao')
console.log(maomao.run())

console.log(Cat.categories)










