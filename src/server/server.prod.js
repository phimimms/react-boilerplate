const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const open = require('open');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

/* Response Body Compression Middleware */
app.use(compression());

/* Parses the Body of the HTTP Request */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* Provides Access to dist Directory */
app.use(express.static(path.resolve(__dirname, '../client/dist')));

/* Homepage Route */
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
});

/* Listens for Connections */
app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    open(`http://localhost:${port}`);
});
