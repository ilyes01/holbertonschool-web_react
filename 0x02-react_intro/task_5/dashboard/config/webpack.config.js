module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
	path: `${__dirname}/dist`,
	filename: 'bundle.js',
  },
module.exports = {
  mode: "development",
  devtool: "inline-source-map"
},

rules: [{
  test: /\.(gif|png|jpe?g|svg)$/i,
  use: [
    'file-loader',
    {
      loader: 'image-webpack-loader',
      options: {
        bypassOnDebug: true, // webpack@1.x
        disable: true,  // webpack@2.x and newer
      },
    },
  ],
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
}]
};
