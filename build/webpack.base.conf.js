'use strict';
const path = require('path');
const utils = require('./utils');
const config = require('../config');
const vueLoaderConfig = require('./vue-loader.conf');

// 获取绝对路径
function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    // 基础上下文
    context: path.resolve(__dirname, '../'),
    // webpack的入口文件
    entry: {
        app: './src/main.js'
    },
    // webpack输出文件
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    /**
     * 当webpack试图去加载模块的时候，它默认是查找以 .js 结尾的文件的，
     * 它并不知道 .vue 结尾的文件是什么鬼玩意儿，
     * 所以我们要在配置文件中告诉webpack，
     * 遇到 .vue 结尾的也要去加载，
     * 添加 resolve 配置项，如下：
     */
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            // 设置别名
            vue$: 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    // 不同类型模块的处理规则 就是用不同的loader处理不同的文件
    module: {
        rules: [
            {
                // 对所有.vue文件使用vue-loader进行编译
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                // 对src和test文件夹下的.js文件使用babel-loader将es6+的代码转成es5
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            },
            {
                // 对图片资源文件使用url-loader
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                exclude: [resolve('src/icons')],
                options: {
                    // 小于10K的图片转成base64编码的dataURL字符串写到代码中
                    limit: 10000,
                    // 其他的图片转移到静态资源文件夹
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: [resolve('src/icons')],
                options: {
                    symbolId: 'icon-[name]'
                }
            },
            {
                // 对多媒体资源文件使用url-loader
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    // 小于10K的资源转成base64编码的dataURL字符串写到代码中
                    limit: 10000,
                    // 其他的资源转移到静态资源文件夹
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                // 对字体资源文件使用url-loader
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]') // hash:7 代表 7 位数的 hash
                }
            },
            {
                // SCSS加载  识别sass-loader编译的部分
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
};
