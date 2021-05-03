const { merge } = require('webpack-merge');
const Common = require('./webpack.common.js');
const Path = require('path');

module.exports = merge(Common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: Path.resolve(__dirname,'../dist'),
        historyApiFallback: true                            // 单页应用vue-router兼容history模式
    }
});