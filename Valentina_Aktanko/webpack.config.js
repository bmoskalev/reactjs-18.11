const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniSccExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
            assets: path.resolve(__dirname, 'src', 'assets'),
            pages: path.resolve(__dirname, 'src', 'pages'),
            img: path.resolve(__dirname, 'src', 'img'),
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    MiniSccExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        }),
        new MiniSccExtractPlugin({
            filename: 'main.css',
        }),
    ],
    devServer: {
        historyApiFallback: true,
    }
}