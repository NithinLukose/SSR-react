const path = require("path");
const mergeConfig = require("webpack-merge");
const baseConfig = require("./webpack.base");
const config = {
  //tell webpack the root file for our client application
  entry: "./src/client/client.js",
  //tell webpack where to put the generated file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};

module.exports = mergeConfig(baseConfig, config);
