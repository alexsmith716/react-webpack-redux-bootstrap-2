
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

 module.exports = merge(common, {
  devtool: 'eval-source-map',

  output: {
    path: __dirname,
    filename: '[name].js',
    publicPath: 'http://0.0.0.0:8000/',
  },
});