const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: 'development',
    entry: {
        main: "./main.js"
    },
    output: {
        publicPath: '',
        filename: './js/[name].js',
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            extract: true,
                            spriteFilename: './images/sprite.svg',
                            esModule: false
                        }
                    },
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
        ],
    },
    plugins: [
        new SpriteLoaderPlugin({plainSprite: true}),
        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        }),
    ],
};
