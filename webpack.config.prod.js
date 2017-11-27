
const merge = require('webpack-merge');
var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {

  devtool: 'source-map',

  output: {
    path: __dirname + '/dist/client/',
    filename: '[name].js',
    publicPath: '/',
  },
  
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
  ]

});
