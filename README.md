# Dynamically typed arguments
Or in short "DTA". Is a library to map arguments by type or prototype.

## How to install

You are able to use this module in [Node.js](https://nodejs.org/) and in your browser as global-function or as
[amd-module](https://github.com/amdjs/amdjs-api/wiki/AMD).
You can fetch this module using [npm](https://www.npmjs.org/) or [Bower](http://bower.io/).

### Node

You can get the package with:

```bash
npm install dta
```

After that you are able to load this module the common node.js way:

```js
var dta = require('dta');
```

### Fetch with Bower

You can get the package with:

```bash
bower install dta
```

### Fetch with git

```bash
git clone https://github.com/atd-schubert/dta.git
```

### Download with wget

```bash
wget https://github.com/atd-schubert/dta/archive/master.zip
```

### Require in browsers

If you are not using [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD), you have to add a script-tag with the `dta.js`
as `src` attribute.

If you are using [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD), you have to put the dta.js file into your scripts
folder, or edit your [shim-config](http://requirejs.org/docs/api.html#config-shim) accordingly and require this module
with `require(['dta'], function (dta) { /* now you have the dta-function available in this scope... */ })`.

## How to use DTA

The main idea behind DTA is to pass the arguments variable of any function to DTA and get an object of arguments by
type, so you are not forced to give your function parameters an order.

### Example request an URL

Adopted you have a function where you want to request an url, it is not necessary if you want to do this with an ajax
call, or with a function called `request` in node, you can do this the following way:

```js
// you have already loaded DTA with one of the above described methods.
var getContent;

getContent = function getContent() {
    var params, opts;

    opts = {};

    params = dta({
        string: 'url',
        number: 'timeout',
        function: 'callback'
    }, arguments);

    if (params.timeout) {
       opts.timeout = params.timeout;
    }

    if (!params.url) {
       throw new Error('You have to specify an url');
    }
    if (!params.callback) {
       throw new Error('You have to specify a callback');
    }

    request(params.url, opts, params.callback);

};
```

Now the order of your parameters in `getContent` is not necessary any more.

But DTA is also able to get mandatory parameters:

```js
// you have already loaded DTA with one of the above described methods.
var getContent;

getContent = function getContent() {
    var params, opts;

    opts = {};

    params = dta({
        mandatory: ['url', 'callback'],
        string: 'url',
        number: 'timeout',
        function: 'callback'
    }, arguments);

    if (params.timeout) {
       opts.timeout = params.timeout;
    }

    request(params.url, opts, params.callback);
};
```

### Multiple parameters of the same type

DTA can handle multiple arguments of the same type:
```js
// you have already loaded DTA with one of the above described methods.
var sayHello;

sayHello = function sayHello() {
    var params;

    params = dta({
        mandatory: 'firstName',
        string: ['firstName', 'surname']
    }, arguments);

    if (!params.surname) {
        return 'Hi ' + params.firstName;
    }
    return 'Hello ' + params.firstName + params.surname;
};
```

### Lists of a parameter
If you have unspecific number of parameters of a type you are able to handle it this way:

```js
// you have already loaded DTA with one of the above described methods.
var factorize;

factorize = function factorize() {
    var params, i, result;

    params = dta({
        mandatory: 'factor',
        number: '[factor]'
    }, arguments);

    result = params.factor[0];

    for (i = 1; i < params.factor.length; i += 1) {
        result *= params.factor[i];
    }

    return result;
};
```

### List of supported basic types

- `boolean`
- `number`
- `string`
- `function`
- `object`
- `array`
- `error`
- `regExp`
- `argument`

### Make your own types

DTA is also able to handle your own types. You have to define your prototypes in an object to give them a name and
map them the default way:

```js
// you have already loaded DTA with one of the above described methods.
var anyFunction, myOwnClass;

myOwnClass = function () {
    // Your class logic
}

anyFunction = function anyFunction() {
    var params;

    params = dta({
            prototypes: {
                own: myOwnClass
            },
            own: 'own',
            // [...]
        }, arguments);

    // do something with params.own
};

anyFunction(new myOwnClass());

```

## Does it has to be arguments?

No, you are also able to use DTA with normal arrays!

## Pass a function instead of arrays or arguments

You can also use dta to create a function (with thanks to Andreas for this idea!)

```js
// you have already loaded DTA with one of the above described methods.
var factorize;

factorize = dta({
    mandatory: 'factor',
    number: '[factor]'
}, function factorize(params) {
    var i, result;

    result = params.factor[0];

    for (i = 1; i < params.factor.length; i += 1) {
        result *= params.factor[i];
    }

    return result;
});
```

## Use your preferred order of arguments in DTA

The order of the two arguments in DTA is not compulsory. If you want you can pass arguments first.

```js
// you have already loaded DTA with one of the above described methods.
var factorize;

factorize = function factorize() {
    var params, i, result;

    params = dta(arguments, {
        mandatory: 'factor',
        number: '[factor]'
    });

    result = params.factor[0];

    for (i = 1; i < params.factor.length; i += 1) {
        result *= params.factor[i];
    }

    return result;
};
```
