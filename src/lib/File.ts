import fs from 'fs';

const path = 'files/';

const readFile = (fileName = 'input.txt') => {
    if (!fs.existsSync(`${path}${fileName}`)) {
        return false;
    }

    return fs
        .readFileSync(`${path}${fileName}`, 'utf-8')
        .split(/\r?\n/)
        .filter(function (el) {
            return el != '';
        });
}

export {readFile}
