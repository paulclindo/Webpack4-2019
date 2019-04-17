const path = require('path');
module.exports = {
  entry: {
    home: "./src/home.js",
    aboutus: "./src/aboutus.js",
    process: "./src/process.js",
    services: "./src/services.js"
  },
  devtool: "source-map",
  
  module: {
    rules: [{
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(svg|png|jpg|ico|gif|mp4)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: 'images'
          }
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: 'videos/[name].[ext]'
          }
        }
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        }, {
          loader: 'expose-loader',
          options: '$'
        }]
      },
      // {
      //   test: require.resolve('jquery'),
      //   loader: 'expose?jQuery!expose?$'
      // }
    ]
  },


}