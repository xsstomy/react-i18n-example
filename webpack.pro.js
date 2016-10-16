var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js?[hash:8]',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    }
}
