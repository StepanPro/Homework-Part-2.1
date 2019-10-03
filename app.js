const fs = require('fs');

const script = require('./script');

fs.mkdir(`./jscx-1800`, (err) => {

    if(err) console.log(err);
});

fs.mkdir(`./jscx-2000`, (err) => {
    if (!err) {
        console.log('ok');
    }
});

script('Oleg', 'jscx-1800', 'laptop Acer');
script('Stepan', 'jscx-2000', 'laptop lenovo');

