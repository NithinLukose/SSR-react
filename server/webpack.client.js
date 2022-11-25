const path = require("path");
module.exports = {
  //tell webpack the root file for our client application
  entry: "./src/client/client.js",
  //tell webpack where to put the generated file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
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
