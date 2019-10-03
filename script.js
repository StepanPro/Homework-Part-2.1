
const fs = require('fs');

function student (name, group, data) {

    fs.mkdir(`./${group}/${name}`, err => {

        if (!err) {
            console.log('ok');
        }
    });

    fs.writeFile(`./${group}/${name}/info.txt`, data, err => {

        if (!err) {
            console.log('ok');
        }
    })
};

module.exports = student;