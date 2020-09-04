const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "js/index.js"
    },
    devServer: { // configuration du server permettant le live-reload
        inline: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env', '@babel/react']
                }
            },
            {
                test: /\.(scss)$/,
                exclude: /node_modules/,
                resolve: { extensions: [".scss"], },
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: "resolve-url-loader" // améliore la résolution des chemins relatifs 
                        // (utile par exemple quand une librairie tierce fait référence à des images ou des fonts situés dans son propre dossier)
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true // il est indispensable d'activer les sourcemaps pour que postcss fonctionne correctement
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader",
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        })
    ]
}