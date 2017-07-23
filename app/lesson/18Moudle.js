// 导出
export let A = 123;

export function test() {
    console.log('test')
};

export class Hello {
    test() {
        console.log('class')
    }
}

/**
 * *********************************
 */
// 其他模块引入
import { A, test, Hello } from './18Moudle.js';

console.log(A, test, Hello)


/**
 * *********************************
 */
// 导入全部  as 是别名的意思
import * as lesson from './18Moudle.js';

console.log(lesson.A, lesson.test)




// 导入也可以简洁
// 导入也可以简洁
// 导入也可以简洁
// 导入也可以简洁
let A = 123;

function test() {
    console.log('test')
};

class Hello {
    test() {
        console.log('class')
    }
}

// default指名称由导入者定
export default{
	A,
	test,
	Hello
}


// 对应的导入者
import Lesson44 from './18Moudle.js';