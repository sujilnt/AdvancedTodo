const  path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:"./index.js",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname,"dist"),
    },
    devServer:{
        compress: true,
        writeToDisk: true
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
      },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve("./index.html"),
        })
      ]
};