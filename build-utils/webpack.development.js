const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports=()=>({
	mode:"development",
	devtool: "eval-source-map",
	entry: './index.js',
	output: {
		filename: 'main.js',
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
	plugins: [
		new MiniCssExtractPlugin() ,
		new BundleAnalyzerPlugin()
	]
});
