const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
 
  entry: "./src/index.js", // string | object | array
  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, "dist"), // string (default)
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "bundle.js", // string (default)
    // the filename template for entry chunks
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        // Conditions:
        test: /\.css$/i,

        // these are matching conditions, each accepting a regular expression or string
        // test and include have the same behavior, both must be matched

        use: [
          // apply multiple loaders and options instead
          ["style-loader", "css-loader"],
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
            // specifies the module type
            /* Advanced actions (click to show) */
            loader: "image-webpack-loader",

            options: {
              // ...
            },
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
          },
        ]

        // specifies the module type
        /* Advanced actions (click to show) */
      },

    ],    /* Advanced module configuration (click to show) */
  },
  
  
  
  devtool: "inline-source-map", // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.

  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 8564,
    hot: true,
  },
  plugins: [
    /**
     * All files inside webpack's output.path directory will be removed once, but the
     * directory itself will not be. If using webpack 4+'s default configuration,
     * everything under <PROJECT_DIR>/dist/ will be removed.
     * Use cleanOnceBeforeBuildPatterns to override this behavior.
     *
     * During rebuilds, all webpack assets that are not used anymore
     * will be removed automatically.
     *
     * See `Options and Defaults` for information
     */
    new HtmlWebpackPlugin({
      template: "./dist/index.html",
      title: "Holberton Dashboard",
    }),
    new CleanWebpackPlugin(),
  ],
  // list of additional plugins
  mode: "development",
};
/* Advanced configuration (click to show) */
/* Advanced caching configuration (click to show) */
/* Advanced build configuration (click to show) */
