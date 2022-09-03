const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public'
  },
mode: 'production',
 module: {
   exclude: /node_modules/,
  test: /\.css$/,
  loader: 'css-loader'
       {
  test: /\.(png|jpg)$/,
  loader: 'webpack-image'
  }
 },
};

