const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src",
  output: {
    path: path.join(__dirname, "build"), //must be an absolute path!
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [{ loader: "babel-loader" }],
        include: path.join(__dirname, "src"),
      },
      // We are not going to used this configuration anymore because now we don't want to inject our CSS directly into the HTML, but create a CSS file for it
      /*{ 
        test: /\.css/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
        include: path.join(__dirname, "src"),
      }, */
      {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "CSS Modules test document",
      template: "templates/index.html",
      scriptLoading: "blocking",
    }),
  ],
};
