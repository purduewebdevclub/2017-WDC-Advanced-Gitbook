const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require("path");
module.exports = {
    entry: './src/main',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            { // Added this rule
                test: /\.ts$/,
                use: 'awesome-typescript-loader', // new loader for different type of file
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts"]
    },
    plugins: [new HtmlWebpackPlugin({
        title: "index.html",
        template: path.resolve('./src/index.html')
    }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve('./src'),
            {}
    )
    ]
}