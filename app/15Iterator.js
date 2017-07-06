{
    let arr = ['hello', 'world'];
    let map = arr[Symbol.iterator]();

    console.log(map.next())
    console.log(map.next())
    console.log(map.next())
}

// 手动部署iterator,//返回的对象，包含next方法
{
    let obj = {
        start: [1, 2, 3],
        end: [7, 9, 8],
        [Symbol.iterator]() {
            let self = this;
            let index = 0;
            let arr = self.start.concat(self.end);
            let len = arr.length;
            return {
                next() {
                    if (index < len) {
                        return {
                            value: arr[index++],
                            done: false
                        }
                    } else {
                        return {
                            value: arr[index++],
                            done: true
                        }

                    }
                }
            }
        }
    }

    // for of 就是用的这个接口
    for (let value of obj) {
        console.log(value)
    }
}
