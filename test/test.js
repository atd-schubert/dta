/*jslint node:true, debug:true*/
/*globals describe, it, before, beforeEach, after*/
"use strict";

var dta = require("../");

describe('Working with boolean', function () {
    it('should work with a single boolean', function () {
        var result;
        result = dta({boolean: 'test'}, [true]);
        if (result.test !== true) {
            throw new Error('This is not the expected boolean');
        }
    });
    it('should work with multiple boolean', function () {
        var result;
        result = dta({boolean: ['first', 'second', 'third']}, [true, true, false]);
        if (result.first !== true || result.second !== true || result.third !== false) {
            throw new Error('This is not the expected boolean');
        }
    });
    it('should work with multiple boolean optional', function () {
        var result;
        result = dta({boolean: ['first', 'second', 'third']}, [true, true]);
        if (result.first !== true || result.second !== true || result.third !== undefined) {
            throw new Error('This is not the expected boolean');
        }
    });
    it('should not work with multiple boolean but more arguments', function () {
        try {
            dta({boolean: ['first', 'second', 'third']}, [true, true, false, true]);
            throw new Error('This has not thrown an error');
        } catch (err) {
            if (err.message !== 'Can not handle argument number 3') {
                throw new Error('This is not the expected error');
            }
        }
    });
});

describe('Working with numbers', function () {
    it('should work with a single number', function () {
        var result;
        result = dta({number: 'test'}, [1]);
        if (result.test !== 1) {
            throw new Error('This is not the expected number');
        }
    });
    it('should work with multiple numbers', function () {
        var result;
        result = dta({number: ['first', 'second', 'third']}, [1, 2, 3]);
        if (result.first !== 1 || result.second !== 2 || result.third !== 3) {
            throw new Error('This is not the expected number');
        }
    });
    it('should work with multiple numbers optional', function () {
        var result;
        result = dta({number: ['first', 'second', 'third']}, [1, 2]);
        if (result.first !== 1 || result.second !== 2 || result.third !== undefined) {
            throw new Error('This is not the expected number');
        }
    });
    it('should not work with multiple numbers but more arguments', function () {
        try {
            dta({number: ['first', 'second', 'third']}, [1, 2, 3, 4]);
            throw new Error('This has not thrown an error');
        } catch (err) {
            if (err.message !== 'Can not handle argument number 3') {
                throw new Error('This is not the expected error');
            }
        }
    });
});

describe('Working with strings', function () {
    it('should work with a single string', function () {
        var result;
        result = dta({string: 'test'}, ['works']);
        if (result.test !== 'works') {
            throw new Error('This is not the expected string');
        }
    });
    it('should work with multiple strings', function () {
        var result;
        result = dta({string: ['first', 'second', 'third']}, ['works', 'works', 'works']);
        if (result.first !== 'works' || result.second !== 'works' || result.third !== 'works') {
            throw new Error('This is not the expected string');
        }
    });
    it('should work with multiple strings optional', function () {
        var result;
        result = dta({string: ['first', 'second', 'third']}, ['works', 'works']);
        if (result.first !== 'works' || result.second !== 'works' || result.third !== undefined) {
            throw new Error('This is not the expected string');
        }
    });
    it('should not work with multiple strings but more arguments', function () {
        try {
            dta({string: ['first', 'second', 'third']}, ['works', 'works', 'works', 'works']);
            throw new Error('This has not thrown an error');
        } catch (err) {
            if (err.message !== 'Can not handle argument number 3') {
                throw new Error('This is not the expected error');
            }
        }
    });
});

describe('Working with functions', function () {
    var fnA, fnB, fnC, fnD;

    fnA = function () {};
    fnB = function () {};
    fnC = function () {};
    fnD = function () {};

    it('should work with a single function', function () {
        var result;
        result = dta({function: 'test'}, [fnA]);
        if (result.test !== fnA) {
            throw new Error('This is not the expected function');
        }
    });
    it('should work with multiple functions', function () {
        var result;
        result = dta({function: ['first', 'second', 'third']}, [fnA, fnB, fnC]);
        if (result.first !== fnA || result.second !== fnB || result.third !== fnC) {
            throw new Error('This is not the expected function');
        }
    });
    it('should work with multiple functions optional', function () {
        var result;
        result = dta({function: ['first', 'second', 'third']}, [fnA, fnB]);
        if (result.first !== fnA || result.second !== fnB || result.third !== undefined) {
            throw new Error('This is not the expected function');
        }
    });
    it('should not work with multiple functions but more arguments', function () {
        try {
            dta({function: ['first', 'second', 'third']}, [fnA, fnB, fnC, fnD]);
            throw new Error('This has not thrown an error');
        } catch (err) {
            if (err.message !== 'Can not handle argument number 3') {
                throw new Error('This is not the expected error');
            }
        }
    });
});

describe('Working with objects', function () {
    var objA, objB, objC, objD;

    objA = {};
    objB = {};
    objC = {};
    objD = {};

    it('should work with a single object', function () {
        var result;
        result = dta({object: 'test'}, [objA]);
        if (result.test !== objA) {
            throw new Error('This is not the expected object');
        }
    });
    it('should work with multiple objects', function () {
        var result;
        result = dta({object: ['first', 'second', 'third']}, [objA, objB, objC]);
        if (result.first !== objA || result.second !== objB || result.third !== objC) {
            throw new Error('This is not the expected object');
        }
    });
    it('should work with multiple objects optional', function () {
        var result;
        result = dta({object: ['first', 'second', 'third']}, [objA, objB]);
        if (result.first !== objA || result.second !== objB || result.third !== undefined) {
            throw new Error('This is not the expected object');
        }
    });
    it('should not work with multiple objects but more arguments', function () {
        try {
            dta({object: ['first', 'second', 'third']}, [objA, objB, objC, objD]);
            throw new Error('This has not thrown an error');
        } catch (err) {
            if (err.message !== 'Can not handle argument number 3') {
                throw new Error('This is not the expected error');
            }
        }
    });
});

describe('Working with arrays', function () {
    var arrA, arrB, arrC, arrD;

    arrA = [];
    arrB = [];
    arrC = [];
    arrD = [];

    it('should work with a single array', function () {
        var result;
        result = dta({array: 'test'}, [arrA]);
        if (result.test !== arrA) {
            throw new Error('This is not the expected array');
        }
    });
    it('should work with multiple arrays', function () {
        var result;
        result = dta({array: ['first', 'second', 'third']}, [arrA, arrB, arrC]);
        if (result.first !== arrA || result.second !== arrB || result.third !== arrC) {
            throw new Error('This is not the expected array');
        }
    });
    it('should work with multiple arrays optional', function () {
        var result;
        result = dta({array: ['first', 'second', 'third']}, [arrA, arrB]);
        if (result.first !== arrA || result.second !== arrB || result.third !== undefined) {
            throw new Error('This is not the expected array');
        }
    });
    it('should not work with multiple arrays but more arguments', function () {
        try {
            dta({array: ['first', 'second', 'third']}, [arrA, arrB, arrC, arrD]);
            throw new Error('This has not thrown an error');
        } catch (err) {
            if (err.message !== 'Can not handle argument') {
                throw new Error('This is not the expected error');
            }
        }
    });
});

describe('Working with errors', function () {
    var errA, errB, errC, errD;

    errA = new Error('a');
    errB = new Error('b');
    errC = new Error('c');
    errD = new Error('d');

    it('should work with a single error', function () {
        var result;
        result = dta({error: 'test'}, [errA]);
        if (result.test !== errA) {
            throw new Error('This is not the expected error');
        }
    });
    it('should work with multiple errors', function () {
        var result;
        result = dta({error: ['first', 'second', 'third']}, [errA, errB, errC]);
        if (result.first !== errA || result.second !== errB || result.third !== errC) {
            throw new Error('This is not the expected error');
        }
    });
    it('should work with multiple errors optional', function () {
        var result;
        result = dta({error: ['first', 'second', 'third']}, [errA, errB]);
        if (result.first !== errA || result.second !== errB || result.third !== undefined) {
            throw new Error('This is not the expected error');
        }
    });
    it('should not work with multiple errors but more arguments', function () {
        try {
            dta({error: ['first', 'second', 'third']}, [errA, errB, errC, errD]);
            throw new Error('This has not thrown an error');
        } catch (err) {
            if (err.message !== 'Can not handle argument') {
                throw new Error('This is not the expected error');
            }
        }
    });
});

describe('Working with regular expressions', function () {
    var regExpA, regExpB, regExpC, regExpD;

    regExpA = /abc/;
    regExpB = /abc/;
    regExpC = /abc/;
    regExpD = /abc/;

    it('should work with a single regular expression', function () {
        var result;
        result = dta({regExp: 'test'}, [regExpA]);
        if (result.test !== regExpA) {
            throw new Error('This is not the expected regExp');
        }
    });
    it('should work with multiple regular expressions', function () {
        var result;
        result = dta({regExp: ['first', 'second', 'third']}, [regExpA, regExpB, regExpC]);
        if (result.first !== regExpA || result.second !== regExpB || result.third !== regExpC) {
            throw new Error('This is not the expected regExp');
        }
    });
    it('should work with multiple regular expressions optional', function () {
        var result;
        result = dta({regExp: ['first', 'second', 'third']}, [regExpA, regExpB]);
        if (result.first !== regExpA || result.second !== regExpB || result.third !== undefined) {
            throw new Error('This is not the expected regExp');
        }
    });
    it('should not work with multiple regular expressions but more arguments', function () {
        try {
            dta({regExp: ['first', 'second', 'third']}, [regExpA, regExpB, regExpC, regExpD]);
            throw new Error('This has not thrown an error');
        } catch (err) {
            if (err.message !== 'Can not handle argument') {
                throw new Error('This is not the expected error');
            }
        }
    });
});

describe('Working with arguments', function () {
    var argumentA, argumentB, argumentC, argumentD;

    (function () {
        argumentA = arguments;
    })();
    (function () {
        argumentB = arguments;
    })();
    (function () {
        argumentC = arguments;
    })();
    (function () {
        argumentD = arguments;
    })();

    it('should work with a single argument', function () {
        var result;
        result = dta({argument: 'test'}, [argumentA]);
        if (result.test !== argumentA) {
            throw new Error('This is not the expected argument');
        }
    });
    it('should work with multiple arguments', function () {
        var result;
        result = dta({argument: ['first', 'second', 'third']}, [argumentA, argumentB, argumentC]);
        if (result.first !== argumentA || result.second !== argumentB || result.third !== argumentC) {
            throw new Error('This is not the expected argument');
        }
    });
    it('should work with multiple arguments optional', function () {
        var result;
        result = dta({argument: ['first', 'second', 'third']}, [argumentA, argumentB]);
        if (result.first !== argumentA || result.second !== argumentB || result.third !== undefined) {
            throw new Error('This is not the expected argument');
        }
    });
    it('should not work with multiple arguments but more arguments', function () {
        try {
            dta({argument: ['first', 'second', 'third']}, [argumentA, argumentB, argumentC, argumentD]);
            throw new Error('This has not thrown an error');
        } catch (err) {
            if (err.message !== 'Can not handle argument number 3') {
                throw new Error('This is not the expected error');
            }
        }
    });
});

describe('Working with self-defined classes', function () {
    var ExampleClass, instanceA, instanceB, instanceC, instanceD;

    ExampleClass = function () {};

    instanceA = new ExampleClass();
    instanceB = new ExampleClass();
    instanceC = new ExampleClass();
    instanceD = new ExampleClass();

    it('should work with a single instance', function () {
        var result;
        result = dta({prototypes: {instance: ExampleClass}, instance: 'test'}, [instanceA]);
        if (result.test !== instanceA) {
            throw new Error('This is not the expected instance');
        }
    });
    it('should work with multiple instances', function () {
        var result;
        result = dta({prototypes: {instance: ExampleClass}, instance: ['first', 'second', 'third']}, [instanceA, instanceB, instanceC]);
        if (result.first !== instanceA || result.second !== instanceB || result.third !== instanceC) {
            throw new Error('This is not the expected instance');
        }
    });
    it('should work with multiple instances optional', function () {
        var result;
        result = dta({prototypes: {instance: ExampleClass}, instance: ['first', 'second', 'third']}, [instanceA, instanceB]);
        if (result.first !== instanceA || result.second !== instanceB || result.third !== undefined) {
            throw new Error('This is not the expected instance');
        }
    });
    it('should not work with multiple instances but more arguments', function () {
        try {
            dta({prototypes: {instance: ExampleClass}, instance: ['first', 'second', 'third']}, [instanceA, instanceB, instanceC, instanceD]);
            throw new Error('This has not thrown an error');
        } catch (err) {
            if (err.message !== 'Can not handle argument') {
                throw new Error('This is not the expected error');
            }
        }
    });
});

describe('Working with multiple types', function () {
    var ExampleClass, bool, num, str, instance, fn, obj, arr, err, regExp;

    ExampleClass = function () {};

    bool = true;
    num = 123;
    str = 'works';
    instance = new ExampleClass();
    fn = function () {};
    obj = {};
    arr = [];
    err = new Error();
    regExp = /abc/;

    it('should work with all types together', function () {
        var result;
        result = dta({prototypes: {instance: ExampleClass},
            boolean: 'bool',
            number: 'num',
            string: 'str',
            instance: 'instance',
            function: 'fn',
            object: 'obj',
            array: 'arr',
            error: 'err',
            regExp: 'regExp',
            argument: 'argument'
        }, [bool, num, str, instance, fn, obj, arr, err, regExp, arguments]);
        if (result.bool !== bool || result.num !== num || result.str !== str || result.instance !== instance || result.fn !== fn || result.obj !== obj || result.arr !== arr || result.err !== err || result.regExp !== regExp || result.argument !== arguments) {
            throw new Error('This is not the expected arguments');
        }
    });

    it('should work with arguments first', function () {
        var result;
        result = dta([bool, num, str, instance, fn, obj, arr, err, regExp, arguments], {prototypes: {instance: ExampleClass},
            boolean: 'bool',
            number: 'num',
            string: 'str',
            instance: 'instance',
            function: 'fn',
            object: 'obj',
            array: 'arr',
            error: 'err',
            regExp: 'regExp',
            argument: 'argument'
        });
        if (result.bool !== bool || result.num !== num || result.str !== str || result.instance !== instance || result.fn !== fn || result.obj !== obj || result.arr !== arr || result.err !== err || result.regExp !== regExp || result.argument !== arguments) {
            throw new Error('This is not the expected arguments');
        }
    });
});

describe('Working with mandatory types', function () {
    var ExampleClass, bool, num, str, instance, fn, obj, arr;

    ExampleClass = function () {};

    bool = true;
    num = 123;
    str = 'works';
    instance = new ExampleClass();
    fn = function () {};
    obj = {};
    arr = [];

    it('should work when all mandatory fields are given', function () {
        var result;
        result = dta({prototypes: {instance: ExampleClass},
            boolean: 'bool',
            number: 'num',
            string: 'str',
            instance: 'instance',
            function: 'fn',
            object: 'obj',
            array: 'arr',
            mandatory: ['bool', 'num', 'str', 'instance', 'fn', 'obj', 'arr']
        }, [bool, num, str, instance, fn, obj, arr]);
        if (result.bool !== bool || result.num !== num || result.str !== str || result.instance !== instance || result.fn !== fn || result.obj !== obj || result.arr !== arr) {
            throw new Error('This is not the expected arguments');
        }
    });

    it('should not work when not all mandatory fields are given', function () {
        try {
            dta({
                prototypes: {instance: ExampleClass},
                boolean: 'bool',
                number: 'num',
                string: 'str',
                instance: 'instance',
                function: 'fn',
                object: 'obj',
                array: 'arr',
                mandatory: ['bool', 'num', 'str', 'instance', 'fn', 'obj', 'arr']
            }, [bool, num, str, instance, fn, obj]);
            throw new Error('This has not thrown an error');
        } catch (err) {
            if (err.message !== '\'arr\' is mandatory, but not set.') {
                throw new Error('This is not the expected error');
            }
        }
    });
});

describe('Working with lists', function () {
    var ExampleClass = function () {};
    it('should list arguments if wrapped in brackets', function () {
        var result;
        result = dta({
            prototypes: {instance: ExampleClass},
            instance: '[instance]',
            boolean: '[bool]',
            number: '[num]',
            string: '[str]',
            function: '[fn]',
            object: '[obj]',
            array: '[arr]'
        }, [1, 2, 3, 'a', 'b', 'c', true, false, true, function () {}, function () {}, function () {}, {}, {}, {}, [], [], [], new ExampleClass(), new ExampleClass(), new ExampleClass()]);

        if (result.bool.length !== 3 || result.num.length !== 3 || result.str.length !== 3 || result.instance.length !== 3 || result.fn.length !== 3 || result.obj.length !== 3 || result.arr.length !== 3) {
            throw new Error('This is not the expected arguments');
        }
    });
});


describe('Working with a function instead of arguments', function () {
    it('should work with something like a callback function', function () {
        var fn;

        fn = dta({
            boolean: 'isWorking',
            string: 'text'
        }, function workingWithFn (params) {
            if (!params.isWorking || params.text !== 'ok') {
                throw new Error('It does not give the right results!');
            }
        });
        fn('ok', true);
    });
});
