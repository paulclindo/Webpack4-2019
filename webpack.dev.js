const path = require('path');
const common = require('./webpack.common')
const merge = require('webpack-merge')
var webpack = require("webpack");

var HtmlWebpackPlugin = require('html-webpack-plugin')


var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/templates/home.html",
      filename: "index.html",
      // chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/aboutus.html",
      filename: "aboutus.html",
      // chunks: ['aboutus']
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/process.html",
      filename: "process.html",
      // chunks: ['process']
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/services.html",
      filename: "services.html",
      // chunks: ['services']
    })
  ],
   devServer: {
     inline: true,
     port: 5001,
     host: '0.0.0.0',
   },
  module: {
    rules: [{
        // test: /\.scss$/,
        test: /\.s?css$/,
        use: [
          'style-loader', //3.make styles inject into DOM
          'css-loader', //2.Turns css into common js
          // 'sass-loader' //1.Turns sass into css
          'sass-loader'
        ]
      },
    ]
  }
});