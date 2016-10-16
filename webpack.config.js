var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: "./build/"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        'jQuery': '$'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    }
}
