import bodyParser from 'body-parser';
import express from 'express';
import open from 'open';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import getWebpackConfig from '../../webpack.config';

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
