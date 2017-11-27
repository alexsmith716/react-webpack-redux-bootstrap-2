
require('babel-register')({
  plugins: [
    ['babel-plugin-css-modules-transform', {
      preprocessCss: './loaders/sassLoader.js',
      generateScopedName: '[name]__[local]__[hash:base64:5]',
      extensions: ['.css', '.scss'],
    }],
  ]
});

require('babel-polyfill');
require('./server/server');
