var webpack = require('webpack');
var path = require("path")
module.exports = {
  entry: ['babel-polyfill', './public/src/index.js'],
  output: {
    path: path.join(__dirname, '/public/build'),
    filename: 'index.js',
    publicPath: "/build/",
    chunkFilename: '[name].[chunkhash:5].chunk.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'redux': 'Redux',
    'react-redux': 'ReactRedux',
    'jquery': '$',
    'socket': 'Socket',
    'react-router': 'ReactRouter',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}