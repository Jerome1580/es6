{
    // 基本定义
    let ajax = function(callback) {
        console.log('执行')
        setTimeout(function() {
            callback && callback.call();
        }, 1000)
    };

    ajax(function() {
        console.log('timeout1');
    })
}

{

    let ajax = function() {
        console.log('执行2')
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve()
            }, 1000);
        })


    };

    ajax().then(function() {
        console.log('promise', 'timeout2')
    })

}



{

    let ajax = function() {
        console.log('执行3')
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve()
            }, 1000);
        })


    };

    ajax()
        .then(function() {
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    resolve()
                }, 2000);
            })

        })
        .then(function() {
            console.log('timeout3')

        })

}


// catch
{
    let ajax = function(num) {
        console.log('执行4')
        return new Promise(function(resolve, reject) {
            if (num > 5) {
                resolve();
            } else {
                throw Error('出错了')
            }
        })
    };

    ajax(6).then(function(){
            console.log('log',6)
    }).catch(function(err){
            console.log('catch',err)
    })


    ajax(3).then(function(){
            console.log('log',3)
    }).catch(function(err){
            console.log('catch',err)
    })
}


{

    // 所有图片加载完再添加到页面
    function loadImg(src){
        return new Promise((resolve,reject) =>{
            let img = document.createElement('img');
            img.src=src;
            img.onload=function(){
                resolve(img);
            }
            img.onerror=function(err){
                reject(err);
            }
        })
    }

    function showImgs(imgs){
        imgs.forEach(function(img){
            document.body.appendChild(img)
        })
    }

    // 都加载完成才会执行下一步，无论加载是好还是失败
    // 都执行完了后，all的状态才会改变
    // all是一个promise对象，里面都有3个promise对象
    Promise.all([
        loadImg('https://img.alicdn.com/tfs/TB1Zb02SXXXXXblaXXXXXXXXXXX-200-402.jpg_100x1000q90.jpg'),
        loadImg('https://img.alicdn.com/tps/TB1G8HpOFXXXXb.apXXXXXXXXXX-360-280.jpg_180x180q90.jpg'),
        loadImg('https://img.alicdn.com/tfs/TB1t9v9RFXXXXaCXXXXXXXXXXXX-360-280.jpg_180x180q90.jpg'),
        ]).then(showImgs);
}

{
    // 有一个图片添加完就添加到页面上
    function loadImg(src){
        return new Promise((resolve,reject) =>{
            let img = document.createElement('img');
            img.src=src;
            img.onload=function(){
                resolve(img);
            }
            img.onerror=function(err){
                reject(err);
            }
        })
    }

     function showImgs(img){
        let p=document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p)
    }




    // 只要有一个加载完就可以，其他的不管
    Promise.race([
        loadImg('https://img.alicdn.com/tfs/TB1Zb02SXXXXXblaXXXXXXXXXXX-200-402.jpg_100x1000q90.jpg'),
        loadImg('https://img.alicdn.com/tps/TB1G8HpOFXXXXb.apXXXXXXXXXX-360-280.jpg_180x180q90.jpg'),
        loadImg('https://img.alicdn.com/tfs/TB1t9v9RFXXXXaCXXXXXXXXXXXX-360-280.jpg_180x180q90.jpg'),
        ]).then(showImgs);
    
}
