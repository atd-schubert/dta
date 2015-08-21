/*jslint node:true, browser:true*/
/*globals define*/
// Wrapper for supporting Node, Browsers and AMD
(function (define) {
    'use strict';

    var findPrototype, dta;

    findPrototype = function (translator, result, elem) {
        var hash, tmpName;

        for (hash in translator.prototypes) {
            if (translator.prototypes.hasOwnProperty(hash)) {
                if (translator.prototypes[hash].prototype && translator.prototypes[hash].prototype.isPrototypeOf(elem)) {
                    if (!translator[hash] || translator[hash].length === 0) {
                        throw new Error('Can not handle argument');
                    }
                    tmpName = translator[hash].splice(0, 1)[0];
                    if (tmpName.substr(-1) === ']' && tmpName.substr(0, 1) === '[') {
                        translator[hash].unshift(tmpName);
                        tmpName = tmpName.substring(1, tmpName.length - 1);
                        result[tmpName] = result[tmpName] || [];
                        result[tmpName].push(elem);
                    } else {
                        result[tmpName] = elem;
                    }
                    return true;
                }
            }
        }
        return false;
    };
    dta = function dta(translator, arr) {
        var i, hash, result, tmpName, tmpType;

        translator.prototypes = translator.prototypes || {};
        translator.prototypes.array = translator.prototypes.array || Array;
        result = {};

        for (hash in translator) {
            if (translator.hasOwnProperty(hash) && hash !== 'prototypes') {
                if (typeof translator[hash] === 'string') {
                    translator[hash] = [translator[hash]];
                }
            }
        }

        translator.mandatory = translator.mandatory || [];

        for (i = 0; i < arr.length; i += 1) {
            tmpType = typeof arr[i];

            if (tmpType === 'object') {
                // This could be a lot of prototypes or just an object
                if (!findPrototype(translator, result, arr[i])) {
                    if (!translator[tmpType] || translator[tmpType].length === 0) {
                        throw new Error('Can not handle argument number ' + i);
                    }
                    tmpName = translator[tmpType].splice(0, 1)[0];
                    if (tmpName.substr(-1) === ']' && tmpName.substr(0, 1) === '[') {
                        translator[tmpType].unshift(tmpName);
                        tmpName = tmpName.substring(1, tmpName.length - 1);
                        result[tmpName] = result[tmpName] || [];
                        result[tmpName].push(arr[i]);
                    } else {
                        result[tmpName] = arr[i];
                    }
                }
            } else {
                if (!translator[tmpType] || translator[tmpType].length === 0) {
                    throw new Error('Can not handle argument number ' + i);
                }
                tmpName = translator[tmpType].splice(0, 1)[0];
                if (tmpName.substr(-1) === ']' && tmpName.substr(0, 1) === '[') {
                    translator[tmpType].unshift(tmpName);
                    tmpName = tmpName.substring(1, tmpName.length - 1);
                    result[tmpName] = result[tmpName] || [];
                    result[tmpName].push(arr[i]);
                } else {
                    result[tmpName] = arr[i];
                }
            }
        }

        for (i = 0; i < translator.mandatory.length; i += 1) {
            if (!result.hasOwnProperty(translator.mandatory[i])) {
                throw new Error('\'' + translator.mandatory[i] + '\' is mandatory, but not set.');
            }
        }

        return result;
    };

    define('dta', function () {
        return dta;
    });
}(typeof define === 'function' && define.amd ? define : function (id, factory) {
    'use strict';
    if (typeof module !== 'undefined' && typeof exports !== 'undefined') {
        //commonjs
        module.exports = factory();
    } else {
        // global
        window[id] = factory();
    }
}));