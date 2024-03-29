const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: path.resolve(__dirname, "src/lib/index.js"),
  output: {
    path: path.resolve(__dirname, "./build/lib"),
    filename: "index.js",
    library: "",
    libraryTarget: "commonjs"
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/react"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
