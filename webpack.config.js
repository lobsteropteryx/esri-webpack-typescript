var webpack = require("webpack");

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
        filename: './dist/[name].bundle.js',
        publicPath: './',
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
    devtool: 'source-map'
};