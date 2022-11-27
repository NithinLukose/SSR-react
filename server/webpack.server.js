const path = require("path");
const mergeConfig = require("webpack-merge");
const webPackNodeExternals = require("webpack-node-externals");
const baseConfig = require("./webpack.base");
const config = {
  //inform webpack that we are bundling for node js not for browser
  target: "node",
  //tell webpack the root file for our server application
  entry: "./src/index.js",
  //tell webpack where to put the generated file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [webPackNodeExternals()],
};

module.exports = mergeConfig(baseConfig, config);
