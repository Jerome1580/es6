//  set---array   map--object

{
    // 数据结构横向对比，增，删，查，改
    let map = new Map();
    let array = [];

    // 增
    map.set('t', 1);
    array.push({ 't': 1 })

    console.info('map-array', map, array);

    // 查

    let map_exist = map.has('t');
    let array_exist = array.find(item => item.t);

    console.info('map-array', map_exist, map_exist);

    // 改
    map.set('t', 2);
    array.forEach(item => item.t ? item = 2 : "")
    console.info('map-array-modify', map, array)

    //删除
    map.delete('t');
    let index = array.findIndex(item => item.t) //返回要删除的序号
    array.splice(index, 1)
    console.log('map-array-delete', map, array)
}

// set -array
{
    let set = new Set();
    let array = [];

    // 增
    set.add({ 't': 1 })
    array.push({ 't': 1 })

    // 查
    let set_exsit = set.has({ 't': 1 }) //false ,因为has中是要传入引用地址，，如果吧{'t':1}保存变量，再给出这个变量的地址，has就能查到，这里仅说明，set查询用has方法

    //改
    set.forEach(item => item.t ? item = 2 : "")
    array.forEach(item => item.t ? item = 2 : "")

    //删除
    set.forEach(item => item.t ? set.delete(item) : "")
}


// object  map set
{
    let item = {'t':1};
    let map = new Map();
    let set = new Set();
    let obj = {};

    // 增
    map.set('t',1);
    set.add(item);
    obj['t'] = 1

        console.log('map-set-obj',map,set,obj)

    //查
    map.has('t');
    set.has(item)
        console.log('t' in obj)

    //改
    map.set('t',2)
    item.t = 2  //因为set存储的是引用地址，直接改引用的值，如果存的不是引用的地址，那就要用forEach
    obj['t'] = 2

    //删除
    map.delete('t')
    set.delete(item);
    delete obj['t']
}

//以后做数据存储，优先考虑map set  如果强调数据唯一性用set  放弃object 和array
//以后做数据存储，优先考虑map set  如果强调数据唯一性用set  放弃object 和array
//以后做数据存储，优先考虑map set  如果强调数据唯一性用set  放弃object 和array