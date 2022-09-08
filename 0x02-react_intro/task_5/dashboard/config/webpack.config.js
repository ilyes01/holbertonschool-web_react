const path = require('path');

module.exports = {
  mode: "development", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: "./src/index.js", // string | object | array
  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path:path.resolve(__dirname, "dist"), // string (default)
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "bundle.js", // string (default)
    uniqueName: "my-application", // (defaults to package.json "name")
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
        // Conditions:
       {
        test: /\.css/$i,


        use: [
          // apply multiple loaders and options instead
          "style-loader",
          "css-loader",
              // ...
        ],
      },
  {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    loader: 'image-webpack-loader',
  },
      {
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			}
],
devtool: "inline-map", // enum
// enhance debugging by adding meta info for the browser devtools
// source-map most detailed at the expense of build speed.
  }
};

