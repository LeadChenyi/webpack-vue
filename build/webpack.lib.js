const Path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: {
        index: './packages/index.js',
    },
    output: {
        path: Path.resolve(__dirname, '../lib'),
        clean: true,
        filename: 'chenyi-alike-ui.umd.min.js',
        library: {
            name: 'chenyi-alike-ui',
            type: 'umd',
            export: 'default',
            umdNamedDefine: true
        },
        globalObject: 'this'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin()
        ]
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
                    MiniCssExtractPlugin.loader,    // 开发模式为 style-loader
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
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
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'chenyi-alike-ui.css'
        })
    ],
    resolve: {
        extensions: ['.vue', '.js', '.ts', '.json']
    },
    externals: {
        vue: 'vue'
    }
};