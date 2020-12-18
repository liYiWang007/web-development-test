// 创建类 animal
class Animal {

    constructor(name) {
        this.name = name

    }
    run() {
        return `${this.name} is running`
    }
}
const snake = new Animal('lily')
console.log(snake.run())

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
    run(){
        return 'Meow,'+ super.run()
    }
}
const maomao =new Cat('maomao')
console.log(maomao.run())

console.log(Cat.categories)










