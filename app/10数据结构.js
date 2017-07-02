// set map   set---array   map--object
// map的key可以是任意数据类型,比如数组

{
    let a1 = new Set();
    a1.add(1);
    a1.add(2);
    console.log(a1);
}

// set 不允许添加重复的,去重,使用的严格相等
{
    let arr = [1, 2, 3, 1, '2'];
    let a1 = new Set(arr);
    console.log(a1)
    console.log(a1.size) //length
}

//api
{
    let arr = ['add', 'delete', 'clear', 'has']
    let a1 = new Set(arr);
    console.log('detele', a1.delete('delete'), a1)

}

// 遍历
{
    let arr = ['add', 'delete', 'clear', 'has']
    let a1 = new Set(arr);

    // 遍历key
    for (let keys of a1.keys()) {
        console.log('keys', keys); //'add','delete','clear','has'
    }


    // 遍历value
    for (let values of a1.values()) {
        console.log('values', values); //'add','delete','clear','has'
    }

    // 遍历
    for (let values of a1) {
        console.log('values', values); //'add','delete','clear','has'
    }

    // 遍历
    for (let [keys, values] of a1.entries()) {
        console.log('entries', keys, values);
    }

    a1.forEach(function(item, value) { console.log(item, value) })

}

// WeakSet    1、weakset元素只能是对象  2、weakset添加的对象不会检测对象是否被垃圾回收
// 没有size  没有clear 不能遍历
{
    let weakset = new WeakSet();
    let arg = {};

    weakset.add(arg);

    // weakset.add(2); 报错

    console.log('weakset', weakset)

}

// map

{
    let map = new Map();
    let arr = ['123'];

    map.set(arr, 456); //添加  区分set 的添加是add
    console.log('map', map)
    console.log('map key',map.get(arr))
}

{
    let map = new Map([['a',123],['b',456]])
        console.log('map args',map)
}

// WeakMap  1、keys一定是对象 2、没有size clear 不能遍历
{
    let weakmap = new WeakMap();

    let o ={};
    weakmap.set(o,123)
        console.log('weakmap',weakmap.get(o))
}
