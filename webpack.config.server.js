
var fs = require('fs');
var path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {

  entry: path.resolve(__dirname, 'server/server.js'),

  externals: [nodeExternals()],

  output: {
    path: __dirname + '/dist/',
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2'
  },

  target: 'node',

  node: {
    __filename: true,
    __dirname: true,
  },

  resolve: {
    extensions: ['.js'],
    modules: [
      'client',
      'node_modules',
    ],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            'es2015',
            'stage-2',
          ],
          plugins: [
            [
              'css-modules-transform', 
              {
                "preprocessCss": "./loaders/sassLoader.js",
                "generateScopedName": "[name]_[local]_[hash:base64:5]",
                "extensions": [".scss"]
              }            
            ]
          ]
        },
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  }
};
