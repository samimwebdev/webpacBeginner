const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const env = process.env.NODE_ENV;
module.exports = {
  entry:{
    app: "./src/index.js",
    vendor:['jquery', 'underscore']
  }, 
  output:{
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map",
  module:{
    rules:[
      {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    },{
      test: /\.css$/,
      use:[
      {
        loader: MiniCssExtractPlugin.loader
      },      
      'css-loader']
    },{
      test:/\.(jpg|jpeg|gif|svg)$/,
      use:[{
        loader: 'url-loader',
        options:{
          limit: 50000,
          name: '[name].[ext]',
          outputPath: 'images/'
        }
      },
      'image-webpack-loader'
    ]
    }
  ]
},
optimization:{
  minimizer:[
    new OptimizeCSSAssetsPlugin()
  ],
  splitChunks:{
    chunks:'all'
  }
},
plugins:[
  new MiniCssExtractPlugin({
    filename: 'style.css'
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
  new CleanWebpackPlugin('./dist')
  
  
]
}