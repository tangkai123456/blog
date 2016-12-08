module.exports = {
	entry: './src/index.js',
	output: {
		filename: './build/index.js',
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