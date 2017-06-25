/*var config = require("./config.json");

document.write(config.text);
*/
/*var sum = (a,b) => a+b;
alert(sum(1,2))*/




/**
 * 3块级作用域
 */

//3.1 变量不提升
/*function fun(){
	let num = 100;
	if(true){
		let num = 200;
	}
		console.log(num)
}

fun();*/

// 3.2 函数不提升
/*function fun(){
		console.log("我在外面")
}

(function(){
	if(false){
		function fun(){
				console.log("我在里面")
		}
	}

	fun() //fun不是一个函数  fun是undefined

}())*/


/**
 * 4暂时性死区
 */
/*if(true){
		console.log(Pi);
		let Pi = 3.1415926;

}
*/

/**
 * 5冻结对象
 */
const preson = Object.freeze({
	name : "张三"
});

console.log(preson.name) 