/**
 * 1、解构赋值
 */

/*var [a,b,c] = [1,2,3];

	console.log(a)
	console.log(b)
	console.log(c)
*/
/**
 * 2、不完全解构
 */

/*var [a,[b],c] = [1,[2,3],4];

	console.log(a)
	console.log(b)
	console.log(c)
*/
/**
 * 3、指定默认值
 */

/*var [a = 1] = [];

	console.log(a)
*/


/*{
 
 let a,b,rest;
 [a,b,...rest] = [1,2,3,4,5,6];
 	console.log(a,b,rest)
}*/

// 对象解构赋值
/*{
	
	let a,b;
	({a,b} = {a:1,b:2});
		console.log(a,b)
}*/

/*{
	let o ={p:222,q:'ddd'}
	let {p,q} = o;
		console.log(p,q)
}*/



// 变量交换
/*{
	let a = 1, b=2;
	[a,b] = [b,a];
		console.log(a,b)
}
*/


// 接受函数返回值
/*{
	function f(){
		return [444,555]
	}

	let [a,b] =f();
		console.log(a,b)
}*/


// 接受返回的某几个变量

/*{
	function f(){
		return [1,2,3,4,5]
	}

	let [a,,...b] = f();
		console.log(a,b)
}*/


// 返回的json用对象解构赋值解析
/* {
   let obj = {
        'index': 1,
        'msg': [{
            city: '安徽',
            pid: 23
        }, {
            city: '广州',
            pid: 34
        }]
    }

    let {index:index,msg:[{city:pro},{pid:ppid}]} = obj;
    	console.log(index,pro,ppid);
    

    let { index: index, msg: arr } = obj;
    console.log(index, arr); //arr = [是数组]

 }*/

/*{
	let obj = {
        'index': 1,
        'msg': {
        	success:0,
        	arr:[{index:10},{party:20}]
        }
    }

    let { index:index,msg:{success:code,arr:[{index:data},{party:place}]}} = obj;
    	console.log(index,code,data,place)
}*/
