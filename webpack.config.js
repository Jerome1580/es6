var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");

module.exports = {
    // __dirname 是nodejs里的一个全局变量，它指向的是我们项目的根目录
    // 入口文件的位置
    entry: __dirname + '/app/js/lesson/main.js',
    output: {
        // 打包后存放的路径
        path: __dirname + '/public',
        // 打包后文件的名字
        filename: 'webpack.js'
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: "json-loader",
        }, 
        {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }]
    },
    plugins:[
    	new webpack.BannerPlugin('饶驹出品')
    ]/*,
    devServer:{
    	contentBase:'./public',//本地服务器所加载的页面所在的目录
    	color:true,//终端输出为彩色
    	inline:true,//实时刷新
    	hot:true  //只加载修改的页面，热加载
    }*/


}
