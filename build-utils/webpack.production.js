const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports=()=>({
	mode: "production",
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
	optimization: {
		minimize: true,
		mangleWasmImports: true,
		removeEmptyChunks:true,
		mergeDuplicateChunks: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					ecma: undefined,
					warnings: false,
					parse: {},
					compress: {},
					mangle: true, // Note `mangle.properties` is `false` by default.
					module: false,
					output: null,
					toplevel: false,
					nameCache: null,
					ie8: false,
					keep_classnames: undefined,
					keep_fnames: false,
					safari10: false,
				}
			}),
			new OptimizeCSSAssetsPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		})
		],
	},
	plugins:
		[
			new MiniCssExtractPlugin(),
			new OptimizeCSSAssetsPlugin()
		]
});


