const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: {
        main: './src/main.js',
    },
    output: {
        path: Path.resolve(__dirname, '../dist'),
        clean: true,                                            // 内置 clean-webpack-plugin
        filename: '[name].[chunkhash:16].bundle.js',
        assetModuleFilename: "static/[hash][ext][query]"        // 内置 file-loader
    },
    resolve: {
        extensions: ['.vue','.js','.ts','.json'],               // 尝试按顺序解析这些后缀名（能够使用户在引入模块时不带扩展）
        alias: {
            '@': Path.resolve(__dirname, '../src'),
            '~': Path.resolve(__dirname, '../src/assets/')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.(css|scss)$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,      // 是否开启样式作用域（动态变量名）
                            importLoaders: 2
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon:'./public/favicon.ico',
            hash:true,
            chunks: ['main'],
            title: 'index',
            filename: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            }
        }),
        new VueLoaderPlugin()
    ]
};