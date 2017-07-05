{
    // 基本定义和生成实例
    class Parent {
        // 默认值
        constructor(name = 'nihao') {
            this.name = name;
        }
    }

    let v_parent = new Parent('v');
    console.log('构造函数实例', v_parent)
}

// 继承
{
    class Parent {
        // 默认值
        constructor(name = 'nihao') {
            this.name = name;
        }
    }

    class Child extends Parent {

    }

    console.log('继承', new Child())
}

// 继承传递值
{
    class Parent {
        // 默认值
        constructor(name = 'nihao') {
            this.name = name;
        }
    }

    class Child extends Parent {
        constructor(name = 'child') {
            super(name); //在子类构造函数中，传递参数给父类
            this.type = 'child'; //this 一定要放在super之后！！！ 
        }

    }

    console.log('父类', new Parent())
    console.log('继承传递参数', new Child())
}


// getter，setter
{
    class Parent {
        // 默认值
        constructor(name = 'nihao') {
            this.name = name;
        }

        // 这里是属性
        get longName() {
            return 'mk' + this.name;
        }

        set longName(value) {
            this.name = value;
        }
    }



    let v = new Parent();
    console.log('getter', v.longName);

    v.longName = 'hello'
    console.log('setter', v.longName);
}


// 静态方法
{
    class Parent {
        // 默认值
        constructor(name = 'nihao') {
                this.name = name;
            }
        // 静态方法
        static tell() {
            console.log('tell')
        }
    }



    Parent.tell();
}

// 静态属性
{
    class Parent {
        // 默认值
        constructor(name = 'nihao') {
                this.name = name;
            }
        // 静态方法
        static tell() {
            console.log('tell')
        }
    }


    // 定义静态属性
    Parent.type = 'test';

    console.log('静态属性', Parent.type)
}
