const bodyParser = require('body-parser');
const express = require('express');
const open = require('open');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const getWebpackConfig = require('../../webpack.config');

const app = express();
const config = getWebpackConfig();
const compiler = webpack(config);
const port = 3000;

/* Webpack Development Middleware */
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
}));

/* Webpack Hot Middleware */
app.use(webpackHotMiddleware(compiler));

/* Parses the Body of the HTTP Request */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* Homepage Route */
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

/* Listens for Connections */
app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    open(`http://localhost:${port}`);
});
