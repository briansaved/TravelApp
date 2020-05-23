const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  stats: "verbose",
  entry: "./src/client/index.js",
  output: {
    libraryTarget: "var",
    library: "Client",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      /* {
        test: /\.html$/i,     
        use: ["html-loader"], //could be causing errors
      },*/
      {
        test: /\.(svg|jpe?g|gif|png)$/i,
        use: {
          loader: "file-loader",
          options: {
            //filename: "[name]-[hash].[ext]", is default anyway
            outputPath: "images",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
  ],
};
