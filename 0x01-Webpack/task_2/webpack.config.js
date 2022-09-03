const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public'
},
 module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
       test: /\.(jpg|png|gif|svg)$/,
       loader: 'image-webpack-loader',
       enforce: 'pre'
      }
    ]
  }
};
