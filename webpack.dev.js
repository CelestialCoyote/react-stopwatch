const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: '5000',
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true,
        hot: true,
        liveReload: true,
        historyApiFallback: true
    }
});
