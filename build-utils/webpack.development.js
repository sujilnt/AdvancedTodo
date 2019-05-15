const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports=()=>({
	mode:"development",
	entry: './index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	
	resolve: {
		modules: [ path.resolve(__dirname, 'src'), 'node_modules' ]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(css|scss)$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
			},
			{
				test: /\.(png|jpg|gif|jpe?g)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 5000
						}
					}
				]
			}
		]
	},
	plugins: [ new HtmlWebpackPlugin({ template: path.resolve('./index.html') }), new webpack.ProgressPlugin(), new MiniCssExtractPlugin() ]
});
