const { join } = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// Define loaders
const loaders = {
    babel: 'babel-loader',
    html: 'html-loader',
    file: 'file-loader',
    style: 'style-loader',
    css: [
        { loader: MiniCssExtractPlugin.loader },
        'css-loader',
    ],
};

// Define Webpack config
const config = {
    target: 'web',
    mode: 'development',
    // devtool: 'source-map',
    context: join(__dirname, 'src'),
    entry: './index',
    output: {
        filename: 'app.js',
        path: join(__dirname, '..'),
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        new HTMLPlugin({
            template: 'index.html',
            favicon: '../../public/favicon.ico'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ],
    resolve: {
        modules: ['node_modules', join(__dirname, 'src ')],
        aliasFields: ['browser'],
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: loaders.babel
        }, {
            test: /\.html$/,
            use: loaders.html,
        }, {
            test: /\.css$/,
            use: loaders.css,
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: loaders.file,
                options: {
                    name: 'public/[hash].[ext]',
                }
            }]
        }]
    }
};

module.exports = config;
