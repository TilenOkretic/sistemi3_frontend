const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        port: process.env.PORT || 8090
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,      
                use: [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ],    
            },
        ],
    },
});
