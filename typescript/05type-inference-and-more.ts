// 类型推论 type inference
// str没有声明类型，但是赋值是string类型后，str也被推论为 string类型
let str = 'str'
// 此时让str赋值number类型的值就会报错
// str=123 

// 联合类型 union types
let numberOrString: number | string
numberOrString = 'abc'
numberOrString = 123

// 联合类型只能访问所有属性共有的方法
// .length()是string类型才有的方法，number没有，所以会报错
// numberOrString.length()
// toString()是两者共有的方法
numberOrString.toString()

function getLength(input: string | number): number {
    // 类型断言
    const str = input as string
    if (str.length) {
        return str.length
    } else {
        const num = input as number
        return num.toString().length
    }
}

// type guard
// 使用条件语句自动缩小类型范围
// 如typeof
function getLength2(input: string | number): number {
    // 跟上面是一样的效果
    if (typeof input === 'string') {
        return input.length
    }else{
        return input.toString().length
    }
}


