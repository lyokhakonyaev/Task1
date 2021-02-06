const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
console.log('IS DEV:', isDev)
console.log('IS PROD:', isProd)

const PATHS = {
    colorsandtype: path.join(__dirname, '/pages/UI kit/colors-and-type'),
    formelements: path.join(__dirname, '/pages/UI kit/form-elements'),
    dist: path.join(__dirname, '/dist'),
}

function cssLoaders(extra) {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                publicPath: ''
            },
        }, 'css-loader'
    ]

    if (extra) {
        loaders.push(extra)
    }
    return loaders
}

module.exports = {
    mode: 'development',
    entry: {
        'colorsandtype': PATHS.colorsandtype + '/colors-and-type.js',
        'formelements': PATHS.formelements + '/form-elements.js'
    },
    output: {
        filename: '[name].js',
        path: PATHS.dist
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        port: 4200,
        hot: isDev,
        open: true,
        contentBase: PATHS.dist,
        index: 'form-elements.html'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: PATHS.colorsandtype + '/colors-and-type.pug',
            filename: 'colors-and-type.html'

        }),
        new HTMLWebpackPlugin({
            template: PATHS.formelements + '/form-elements.pug',
            filename: 'form-elements.html'

        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    module:
    {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders(extra = 'sass-loader')
            },
            {
                test: /\.(ttf|woff|woff2|eot|png|jpg|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'files'
                }
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: { pretty: true }
            },
        ]
    }
}