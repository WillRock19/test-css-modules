var path = require("path");

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
    ],
  },
};
