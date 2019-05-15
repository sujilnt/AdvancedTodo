const path = require('path');
const webpack = require("webpack");
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({mode,presets}={mode:"production", presets:[]})=>{
	console.log("mode",mode);
	return  webpackMerge(
		{
			mode,
			output:{
				filename: "main.js",
			},
			plugins: [new HtmlWebpackPlugin({ template: path.resolve('./index.html') }),new webpack.ProgressPlugin()]
		},
		modeConfig(mode));
};
