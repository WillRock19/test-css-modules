var path = require("path");

module.exports = {
  entry: "./src",
  output: {
    path: path.join(__dirname, "build"), //must be an absolute path!
    filename: "bundle.js",
  },
};
