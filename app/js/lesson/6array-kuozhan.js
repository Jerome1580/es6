// 数组的扩展

// 把一组集合转化为数组
{
    let arr = Array.of(3, 4, 7, 9, 11)
    console.log(arr)

    let empty = Array.of();
    console.log(empty)
}

// 把伪数组转成真数组
{
	let p = document.querySelectorAll('p');
	let pArr = Array.from(p);

		// 转化数组，同时传入fun，map映射每个值，返回新数组
		console.log(Array.from([1,3,5],function(item){ return item*2}))
}

// 填充fill
{
		console.log([1,'a',undefined].fill(7))
		//[7,7,7]
		console.log([1,'a',undefined].fill(7,1,3))
		//[1,7,7]
}

// 遍历
{	
	// keys 下标
	for(let index of ['1','c','ks'].keys()){
			console.log('keys',index)
	}

	// values 值   
	// 必须要有兼容性 balel-polyfill
	// 必须要有兼容性 balel-polyfill
	for(let index of ['1','c','ks'].values()){
			console.log('values',index)
	}

	// entries()
	for(let [index,value] of ['1','c','ks'].entries()){
			console.log('values',index,value)
	}

}


{
	// copyWithin
}

{
	// 查找
	//find  只找第一个符合条件的
		console.log([1,2,3,4,5].find(function(item){ return item >3})) 
		//4
		console.log([1,2,3,4,5].findIndex(function(item){ return item >3})) 
		//3
}

{
	//includes 包括
		console.log([1,2,NaN].includes(1))  //true
}