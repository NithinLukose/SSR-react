const { last } = require("lodash");
const path = require("path");
module.exports = {
  //inform webpack that we are bundling for node js not for browser
  target: "node",
  //tell webpack the root file for our server application
  entry: "./src/index.js",
  //tell webpack where to put the generated file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  //tell webpack to run babel on all javascript files
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node-modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
};
