po = promiseify + co
-----------

# usage
```
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


