# po = promiseify + co

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

# usage
```
var co = require('co');
var po = require('po');

var fsReadFile = po(fs.readFile, fs);
var fsStat = po(fs.stat, fs);

co(function* Ab() {
    var a = yield fsReadFile(path.join(__dirname, './1.md'), 'utf-8');
    var b = yield fsStat(path.join(__dirname, './2.md'));

    return [a, b];
}).then(function (ret) {
    console.log(ret);
    // => [1.md, 2]
}).catch(function (err) {
    console.log(err.stack);
});
```


[npm-image]: https://img.shields.io/npm/v/po.svg?style=flat-square
[npm-url]: https://npmjs.org/package/po
[travis-image]: https://img.shields.io/travis/cloudcome/nodejs-po.svg?style=flat-square
[travis-url]: https://travis-ci.org/cloudcome/nodejs-po
[coveralls-image]: https://img.shields.io/coveralls/cloudcome/nodejs-po.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/cloudcome/nodejs-po
