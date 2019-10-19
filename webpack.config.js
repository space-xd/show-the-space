const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPligin = require("html-webpack-plugin");

module.exports = {
    entry: "./apps/client/src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/env",
                    ],
                },
            },
            {
                test: /.css/,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: [
            "*",
            ".js",
            ".jsx"
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.HotModulteReplacementPlugin(),
        new HtmlWebpackPligin({
            filename: "index.js",
            title: "React setup",
        }),
    ],
};