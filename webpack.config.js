/*
 * webpack配置文件仅定义loaders
 * 打包逻辑在gulpfile.js中定义
 * by iori.chen 2015.10.13
 * */
var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: [
            'webpack/hot/only-dev-server',
            './resources/client/pages/index.js'
        ],
    output: {
        path: path.join(__dirname, 'public/js/'),
        filename: '[name].bound.js'
    },    
    // 其他解决方案
    resolve: {
        // require时省略的扩展名，遇到.vue结尾的也要去加载
        extensions: ['.js', '.vue'],
        // 模块别名地址，方便后续直接引用别名，无须写长长的地址，注意如果后续不能识别该别名，需要先设置root
        alias:{
            vue: 'vue/dist/vue.js'
        }
    },  
    module: {
        loaders: [//加载器
            {test: /\.html$/, loader: 'raw'},
            {test: /\.jade/, loader: "jade" },
            {test: /\.vue/, loader: "vue-loader" },
            {test: /\.hbs$/, 
                loader: 'handlebars-loader',
                query: {
                    helperDirs: [
                        __dirname + "/resources/client/base/helpers"
                    ]
                }
            },
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.json/, loader: 'json-loader'},
            {test: /\.scss$/, loader: 'style!css!sass'},
            {test: /\.less/, loader: 'style!css!less'},
            {test: /\.(png|jpg|ttf)$/, loader: 'url?limit=8192'},
            {
                test: /\.yaml$/,
                include: path.resolve('data'),
                loader: 'yaml',
            }
        ]
    },  
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
