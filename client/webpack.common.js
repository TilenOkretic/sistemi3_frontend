const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js', 
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    // TODO: ESbuild-loader
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env' ]
                    }
                }
            },
            {
                test: /\.gif|.png/,
                type: 'asset/inline',
            },
            // {
            //     test: /\.json$/i,
            //     type: 'asset/source',
            // },
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            template: './src/templates/index.html'
        }),
        new CleanWebpackPlugin(),
        new Dotenv(),
    ],
    output: {
        filename: '[name].boundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
