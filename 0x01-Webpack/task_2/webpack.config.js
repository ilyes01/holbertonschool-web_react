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
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
          }
        ],
      },
    ]
  }
};
