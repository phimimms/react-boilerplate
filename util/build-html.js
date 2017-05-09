const cheerio = require('cheerio');
const fs = require('fs');

fs.readFile('src/client/index.html', 'utf8', (err, markup) => {
    if (err) {
        return console.log(err);
    }

    const $ = cheerio.load(markup);

    $('head').prepend('<link rel="stylesheet" href="styles.css">');

    fs.writeFile('src/client/dist/index.html', $.html(), 'utf8', (e) => {
        if (e) {
            return console.log(e);
        }
        console.log('index.html generated in /dist');
    });
});
