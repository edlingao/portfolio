const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: "./css/main.css"
        })
    ],
    module: {
        rules:[
            {
                test:/\.scss$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        options:{
                            publicPath: './dist'
                        }
                    },
                    "css-loader", 
                    "sass-loader",
                ]
            }
        ]
    }
};