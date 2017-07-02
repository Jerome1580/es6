// Symbol 独一无二

//Symbol 与 Symbol.for      Symbol永远独一无二，，for可以还原
{
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1 === a2); //false

    let a3 = Symbol.for('www');
    let a4 = Symbol.for('www');
    console.log(a3 === a4) //true

}

//Symbol的应用，下例中如果没用Symbol，会有2个key值为abc的，会覆盖
{
    let a1 = Symbol.for('abc');
    let obj = {
        [a1]: '123',
        'abc': '789',
        'c': '456'
    }
    console.log(obj)
}


// Symbol声明的，不能用for in和let of遍历取出
{
    let a1 = Symbol.for('abc');
    let obj = {
        [a1]: '123',
        'abc': '789',
        'c': '456'
    }
    for (let [key, value] of Object.entries(obj)) {
        console.log('let of', key, value);
    }

    //Object.getOwnPropertySymbol(obj)拿Symbol的属性值，是一个数组
    Object.getOwnPropertySymbols(obj).forEach(function(item) {
        console.log(obj[item]);
    })

    Reflect.ownKeys(obj).forEach(function(item, index, arr) {
            console.log('ownkeys', item, obj[item])
        })
        // Reflect  es6新增对象，，这样可以拿所以的key val
}
