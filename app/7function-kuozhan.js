// 数组的扩展

// 把一组集合转化为数组
// 函数参数默认值
{
    // 有默认值的参数，后面若再有参数，必须有默认值，否则报错
    // 如:function test(x,y="22",c)  //错误
    function test(x, y = 'world') {
        console.log(x, y)
    }

    test('hello')
}

// 作用域
{
    let x = 'test';

    function test(x, y = x) {
        console.log('作用域', x, y)
    }

    test('kill') //kill,kill

}

{

    let x = 'test';

    function test2(c, y = x) {
        console.log('作用域', c, y)
    }

    test2('kill') //kill,test

}

// rest参数
{
    //不知道参数情况下，讲参数转化成数组
    //rest参数后面不能再跟参数
    function test3(...arg) {
        for (let v of arg) {
            console.log(v)
        }
    }
}

// 扩展运算符   和rest参数像是逆运算
{
    console.log(...[1, 2, 3]) //1,2,3
}

// 箭头函数
{

    let arrow = v => v * 2;

    console.log(arrow(3)) //6

    // 空参数
    let arrow = () => 5
}

// 尾调用  函数最后一句话是不是函数，是就是尾调用
{
	function tail(x){
			console.log(x)
	}

	function fx(x){
		return tail(x);
	}

	fx(123)
}
