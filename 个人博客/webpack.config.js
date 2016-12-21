module.exports = {
	entry: './public/src/index.js',
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
	}
}