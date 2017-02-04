var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        // entry point for your application code
        main: [
            './src/app/main.ts'
        ],
        // put your third party libs here
        // vendor: []
    },
    output: {
        path: '/dist',
        filename: '[name].bundle.js',
        // the bundled output will be loaded by the Dojo AMD loader
        // that is included in the ArcGIS API for JavaScript
        libraryTarget: 'amd'
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    'ts-loader'
                ]
            },
            // css
            {
                test: /\.css$/,
                use: [
                    'style-loader!css-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            inject: false, // we need to use the dojo loader
            jsapiVersion: '4.0',
            template: 'src/app/index.ejs'
        })
    ],
    externals: [
        function(context, request, callback) {
            if (/^dojo/.test(request) ||
                /^dojox/.test(request) ||
                /^dijit/.test(request) ||
                /^esri/.test(request)
            ) {
                return callback(null, "amd " + request);
            }
            callback();
        }
    ],
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 8000
    },
    devtool: 'source-map'
};
