const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./array sorter/index5.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js"
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ['env', {
                                targets: {
                                    browsers: "> 3%",
                                    //   ie: "last 1 version",
                                    //   chrome: "last 10 versions",
                                    //   firefox: "last 10 versions",
                                    //   safari: "11.1" 
                                    edge: "17",
                                    firefox: "60",
                                    chrome: "67",
                                    safari: "11.1",
                                }
                            }]
                        ]
                    }
                },
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['','.js']
    },
    resolveLoader: {}
    // plugins: [new BundleAnalyzerPlugin(),]
};