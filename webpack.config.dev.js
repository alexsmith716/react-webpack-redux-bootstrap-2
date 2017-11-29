var webpack = require('webpack');
var path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/*
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://127.0.0.1:8000/',
      'webpack/hot/only-dev-server',
      'babel-polyfill',
      './client/index.js',
*/

module.exports = {

  devtool: 'eval',

  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      'babel-polyfill',
      './client/index.js',
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  },

  output: {
    path: __dirname,
    filename: '[name].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js'],
    modules: [
      'client',
      'node_modules',
    ],
  },

   module: {
    rules: [
      {
        test: /(global\.css)$/,
        loader:'style-loader|css-loader'
      },
      {
        test: /\.scss$/,
        use: 
          ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: "[name]_[local]_[hash:base64:5]"
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }]
        })
      },
      {
        test: /\.js?$/,
        use:[
          {
            loader: "babel-loader"
          },
          {
            loader: "eslint-loader"
          }
        ]
      },
      {
        test:  /\.(jpe?g|gif|png|svg)$/i,
        use:[
          {
            loader: "url-loader",
            options: {
              limit:10000
            }
          }
        ]
      },
      {
        test: /\.json$/,
        use: [
          {loader: "json-loader"}
        ]
      }

    ]
    
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css"),
  ]
};
