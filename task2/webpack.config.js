const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./5task/index5.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" },
            }
        ]
    },
    plugins: [new BundleAnalyzerPlugin(),]
};