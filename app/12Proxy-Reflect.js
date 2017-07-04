{

    let obj = {
        time: "2017-7-7",
        name: 'net',
        _r: 123
    }

    let monitor = new Proxy(obj, {
        // 要代理的方法
        // 拦截对象属性的读取
        get(target, key) {
            return target[key].replace('2017', '2018')
        },

        // 拦截对象设置属性
        set(target, key, value) {
            // 除了name属性，其他不允许修改
            if (key === 'name') {
                return target[key] = value;
            } else {
                return target[key];
            }
        },

        // 拦截 key in object操作
        has(target, key) {
            // 除了name能暴露，其他不暴露
            if (key === 'name') {
                return target[key]
            } else {
                return false
            }
        },

        // 拦截delete

        deleteProperty(target, key) {
            // 是以下划线开头的属性可以删除
            if (key.indexOf('_') > -1) {
                delete target[key];
                return true
            } else {
                return target[key];
            }
        },

        // 拦截Object.keys，Object.getOwnPropertySymbol，Object.getOwnPropertyNames
        ownKeys(target) {
            return Object.keys(target).filter(item => item != 'time');
        }
    });

    // 读取
    console.log('get', monitor.time)

    // 修改
    monitor.time = '2018';
    console.log('set', monitor.time)

    monitor.name = 'nihao';
    console.log('set', monitor)

    // 暴露 in
    console.log('has', 'name' in monitor, 'time' in monitor)

    // 删除
    delete monitor.time;
    console.log('delete', monitor)

    delete monitor._r;
    console.log('delete', monitor)

    // 拦截遍历
    console.log('ownKeys', Object.keys(monitor)) //name ,_r

}


// Reflect 与Proxy使用的方法名一样
{
    let obj = {
        time: "2017-7-7",
        name: 'net',
        _r: 123
    }

    // 读取
    console.log('Reflect get', Reflect.get(obj, 'time'))
        // 设置
    console.log('Reflect set', Reflect.get(obj, 'name', 'nihao'))
        // has
    console.log('Reflect has', Reflect.has(obj, 'name'))
}

// Proxy Reflect实用，校验字段
{
    function validator(target, validator) {
        return new Proxy(target, {
            _validator: validator,
            set(target, key, value, proxy) {
                // 判断当前对象有没有key值
                if (target.hasOwnProperty(key)) {
                    let va = this._validator[key];
                    if (!!va(value)) {
                        // 如果存在
                        return Reflect.set(target, key, value, proxy)
                    } else {
                        throw Error(`不能设置${key}到${value}`)
                    }
                } else {
                    throw Error(`${key} 不存在`)
                }
            }
        })
    }

    // 设置过滤选项，校验条件，配置选项
    const personValidators = {
        name(val) {
            return typeof val === "string"
        },
        age(val) {
            return typeof val === "number" && val > 18
        }
    }

    // 构造函数，返回实例的代理proxy对象
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            return validator(this, personValidators)
        }
    }

    const person = new Person('lilei', 30);

    console.log(person)

    // person.name=48  //报错，不能修改

    person.name='Han mei mei'  
}
