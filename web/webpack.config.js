const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new HtmlWebPackPlugin({
            template: './public/product.html',
            filename: './product.html',
        }),
        new HtmlWebPackPlugin({
            template: './public/our_rating.html',
            filename: './our_rating.html',
        }),
        new HtmlWebPackPlugin({
            template: './public/scanner.html',
            filename: './scanner.html',
        }),
        new HtmlWebPackPlugin({
            template: './public/shop.html',
            filename: './shop.html',
        }),
        new HtmlWebPackPlugin({
            template: './public/help.html',
            filename: './help.html',
        }),
    ],
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.1.38:5000',
                pathRewrite: { '^/api': '' },
            },
        },
    },
};
