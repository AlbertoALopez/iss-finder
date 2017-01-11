const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack/hot/dev-server' ,
    path.join(__dirname, './src/index.js'),
    path.join(__dirname, './src/stylesheets/main.scss')
  ],
  output: {
    filename: '[name].js',
    path: PATHS.dist,
    publicPath: '/'
  },
  devServer: {
    contentBase: PATHS.dist,
    historyApiFallback: true,
    inline: true,
    port: 3333,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["react", "es2015", "stage-0", "react-hmre"]
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
      loader: 'style!css?modules',
      include: /flexboxgrid/,
    }, { 
      test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
    }
    ]
  }
};
