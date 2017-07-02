// 字符串表达式的扩展
//  
{
	let name = 'list';
	let info = 'hello world';
	let m = `i am ${name},${info}`;
		console.log(m)
}

// startsWith
{
	let s1 = 'string';
		console.log(s1.includes('r'))
		console.log(s1.startsWith('str'))
		console.log(s1.endsWith('ng'))
		console.log(s1.repeat(2))

}

// 补白
{
		console.log('1'.padStart(2,'0'));
		console.log('1'.padEnd(2,'0'));
}

// 标签模板，处理多语言转换
