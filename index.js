/*!
 * po
 * @author ydr.me
 * @create 2015-05-04 02:11
 */


'use strict';

var co = require('co');

module.exports = function po(fn, ctx) {
    return function () {
        ctx = ctx || global || window;

        var args = [].slice.call(arguments);

        return co(function *() {
            return yield new Promise(function (res, rej) {
                args.push(function (err, ret) {
                    if (err) {
                        return rej(err);
                    }

                    res(ret);
                });

                try {
                    fn.apply(ctx, args);
                } catch (err) {
                    rej(new TypeError(fn + ' is Not a function'));
                }
            });
        });
    };
};

