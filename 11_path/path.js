const path = require('path');

const string = __filename;

console.log('path.sep : ' + path.sep);
console.log('path.delimiter : ' + path.delimiter);
console.log('--------------------------------------');
console.log(' : ' + path.dirname(string));
console.log(' : ' + path.extname(string));
console.log(' : ' + path.basename(string));
console.log(' : ' + path.basename(string, path.extname(string)));
console.log('--------------------------------------');
console.log(' : ' + JSON.stringify(path.parse(string)));
console.log(' : ' + path.format({
    dir: 'C:\\users\\정문호',
    name: 'path',
    ext:'js'
}));
//console.log(' : ' + );