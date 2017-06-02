const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = function getWebpackConfig() {
    const dev = (process.env.NODE_ENV !== 'production');

    const extractSass = new ExtractTextPlugin({
        disable: dev,
        filename: 'styles.css',
    });

    return {
        devServer: {
            compress: true,
            historyApiFallback: true,
            hot: true,
            port: 3000,
            stats: 'errors-only',
        },

        devtool: dev ? 'inline-source-map' : 'hidden-source-map',

        entry: getEntry(dev),

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: [/node_modules/],
                    use: [
                        { loader: 'babel-loader' },
                    ],
                },
                {
                    test: /\.scss$/,
                    use: getStyleLoader(extractSass),
                },
            ],
        },

        output: {
            filename: '[name].[hash].js',
            path: path.join(__dirname, 'src/client/dist'),
            publicPath: '/',
        },

        plugins: [...getPlugins(dev), extractSass],

        resolve: {
            extensions: ['.js', '.json'],
            modules: [
                path.join(__dirname, 'src/app'),
                'node_modules',
            ],
        },

        target: 'web',
    };
};

function getEntry(dev) {
    const middlewares = [];

    if (dev) {
        middlewares.push(
            'react-hot-loader/patch'
        );
    }

    return {
        app: [...middlewares, './src/client/index'],
        vendor: [
            'prop-types', 'react', 'react-async-component', 'react-dom',
            'react-redux', 'react-router-dom', 'redux', 'redux-localstorage', 'redux-thunk',
        ],
    };
}

function getPlugins(dev) {
    const plugins = [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].[hash].js',
            minChunks: Infinity,
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: path.join(__dirname, 'src/client/index.html'),
        }),
    ];

    if (dev) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        );
    } else {
        plugins.push(
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production'),
                },
            }),
            new webpack.optimize.UglifyJsPlugin()
        );
    }

    return plugins;
}

function getStyleLoader(extractSass) {
    return extractSass.extract({
        use: [
            { loader: 'css-loader' },
            {
                loader: 'postcss-loader',
                options: {
                    plugins() {
                        return [
                            require('precss'),
                            require('autoprefixer'),
                        ];
                    },
                },
            },
            { loader: 'sass-loader' },
        ],
        fallback: 'style-loader',
    });
}
