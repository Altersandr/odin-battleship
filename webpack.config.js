const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.js",
    ship: "./src/ship.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  // test: /\.js$/,
  // exclude: /(node_modules|bower_components)/,
  // use: {
  //   loader: "babel-loader",
  //   options: {
  //     presets: ["@babel/preset-env"],
  //     plugins: ["@babel/plugin-transform-runtime"],
  //   },
  // },
};
