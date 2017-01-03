var webpack = require('webpack');
module.exports = {
	devtool: false,
	entry: ['babel-polyfill','./public/src/index.js'],
	output: {
		filename: './public/build/index.js',
		publicPath: ''
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
	/*plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
        new webpack.DefinePlugin({
	      	'process.env':{
	        	'NODE_ENV': JSON.stringify('production')
	      	}
	    })
    ]*/
}