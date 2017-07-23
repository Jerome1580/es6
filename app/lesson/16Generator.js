{
    //genertor 基本定义 处理异步
    let tell = function*() {
        yield 'a';
        yield 'b';
        return 'config.json';

    };
    // genertor 函数执行遇到yield，return就停止，调用next方法去执行下一步

    let k = tell();

    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}

{
    // 通过genetor函数 部署iterator接口 【一个应用】
    let obj = {};
    obj[Symbol.iterator] = function*() {
        yield 1;
        yield 2;
        yield 3;
    }

    for (let value of obj) {
        console.log(value)
    }
}

{
    // 状态机，，，不断地额循环某一种状态
    let state = function*() {
        while (1) {
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }

    let status = state();

    console.log(state.next())
    console.log(state.next())
    console.log(state.next())
    console.log(state.next())
    console.log(state.next())
}


/*
{
     // 同上面的结果一样的，，执行需要加载插件
     let state =async function (){
        while(1){
            await 'A';
            await 'B';
            await 'C';
        }
    }

    let status = state();

        console.log(state.next())
        console.log(state.next())
        console.log(state.next())
        console.log(state.next())
        console.log(state.next())

}*/

// 应用1 抽奖
{
    let draw = function(count) {
        // 具体抽奖逻辑，省略
        console.log(`剩余${count}次`)
    }

    let residue = function*(count) {
        while (count > 0) {
            count--;
            yield draw(count)
        }
    }

    let star = residue(5);
    let btn = document.createElement('button');
    btn.id = 'start';
    btn, textContent = "抽奖"；
    document.body.appendChild(btn);
    document.getElementById('start').addEventListener('click', function() {
        star.next();

    }, false)

    // 隔离了抽奖的业务逻辑，和执行的条件判断
    // 没有暴露全局的执行次数变量5，更安全
}


// 应用2 长轮询  实时根据后台状态改，前端获取数据
{

    let ajax=function* (){
        yield new Promise(function(resolve,reject){
            setTimeout(function() {

                resolve({code:0})
            }, 200);
        })
    }

    //不写了

}
