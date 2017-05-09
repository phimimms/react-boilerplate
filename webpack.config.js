const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = () => {
    const dev = (process.env.NODE_ENV !== 'production');

    const extractSass = new ExtractTextPlugin({
        disable: dev,
        filename: 'styles.css',
    });

    return {
        devtool: dev ? 'cheap-module-eval-source-map' : 'source-map',

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
            filename: 'bundle.js',
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
    const entry = [];

    if (dev) {
        entry.push(
            'react-hot-loader/patch',
            'webpack-hot-middleware/client',
        );
    }

    entry.push('./src/client/index');

    return entry;
}

function getPlugins(dev) {
    const plugins = [];

    if (dev) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
        );
    } else {
        plugins.push(
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production'),
                },
            }),
            new webpack.optimize.UglifyJsPlugin(),
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
