// 对象的扩展

{
    // 简介表示法

    let o = 1;
    let k = 2;

    let es5 = {
        o: o,
        k: k
    }

    let es6 = {
        o,
        k
    }

    let es5_method = {
        hello: function() {
            console.log('hello')
        }
    }

    let es6_method = {
        hello() {
            console.log('hello')
        },
        world() {
            console.log('world')
        }
    }

    console.log(es6_method.world())

}


{
    //属性表达式
    let a = 'b';
    let es5_obj = {
        'a': 'c',
        'b': 'c'
    }

    let es6_obj = {
        [a]: 'c'
    }

    console.log(es5_obj, es6_obj)
}

{
    // 新增api  Object.is  相当于 ===
    console.log('字符串', Object.is('abc', 'abc'), 'abc' === 'abc')
    console.log('数组', Object.is([], []))

    // console.log('拷贝', Object.assgin({ a: 'a' }, { b: 'b' }))
        // 将{b:'b'}拷贝到{a:'a'}  变成{a:'a',b:'b'}
        // 浅拷贝
        // 不拷贝继承的属性


    let test = { k: 123, o: 456 };

    for (let [key, value] of Object.entries(test)) {
        console.log(key, value);
    }

    

}
