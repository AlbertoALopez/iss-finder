const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        path.join(__dirname, 'src/index.js'),
        path.join(__dirname, 'src/stylesheets/main.scss')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name]-[hash].min.js',
        publicPath: './'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('[name]-[hash].min.css'),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        new StatsPlugin('webpack.stats.json', {
            source: false,
            modules: false
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    "presets": ["es2015", "stage-0", "react"]
                }
            }, {
                test: /\.json?$/,
                loader: 'json'
            }, {
              test: /\.scss$/,
              loaders: ["style", "css", "sass"],
              exclude: /flexboxgrid/
            }, {
              test: /\.css$/,
              loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]',
              exclude: /flexboxgrid/,
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss')
            }, {
              test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
            }
        ]
    },
    postcss: [require('autoprefixer')]
};