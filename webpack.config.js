var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            { 
                test: /\.js|jsx$/, 
                //loaders: [ 'babel-loader', 'env', 'react' ],
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react', 'stage-0']
                },
                exclude: /node_modules/, 
                include: __dirname
            }
        ]
    }
}