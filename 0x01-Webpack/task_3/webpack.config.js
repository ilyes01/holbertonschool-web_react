const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public'
  },
  devServer: {
    contentBase: path.join(__dirname, './public'),
    compress: true,
    port: 8564,
  },
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },
  devtool: 'inline-source-map',
  mode: 'development'
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
            options: {
              bypassOnDebug: true,
              disable: true,
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
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Output',
    }),
    new CleanWebpackPlugin(),
  ],
};
