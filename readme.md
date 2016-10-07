[PostMask Babel Compiler](https://github.com/atmajs/postmask)
-----
[![Build Status](https://travis-ci.org/tenbits/postmask-babel.svg?branch=master)](https://travis-ci.org/tenbits/postmask-babel)
[![NPM version](https://badge.fury.io/js/postmask-babel.svg)](http://badge.fury.io/js/postmask-babel)

Compiles functions in `mask` templates to es5

### Configurate

`mask.cfg('postmask-babel', BabelOptions);`


> Default: `{"presets":["es2015"], plugins: [""external-helpers""]}`


You should also include `babelHelpers` to the app:

```bash
npm i -g babel-cli
babel-external-helpers -t var > my-babel-helpers.js
```

```html
<script type="text/javascript" src="/path/my-babel-helpers.js"></script>
```


### Optimizer

Defines optimizers to compile functions, slots, and other scripts to es5. Can be used as standalone module, but also as a plugin for `postmask`.

#### `atma-loader-postmask`

```bash
$ npm i atma -g
$ atma plugin install atma-loader-postmast --save-dev
```

`package.json`
```json
{
    ...
    "atma-loader-postmask": {
        "plugins": [
          "postmask-babel",
          "postmask-less"
        ],
        "configs":{
          "postmask-babel": BabelOptions
        }
    }
    ...
}
```


### Runtime

Transform scripts at runtime. Use this only in some demos and in dev, not for production.

###### Usage

```bash
npm i babel-standalone --save-dev
npm i postmask-babel --save-dev
npm i maskjs --save
```

```html
<script src="/node_modules/babel-standalone/babel.min.js"></script>
<script src="/node_modules/maskjs/lib/mask.js"></script>
<script src="/node_modules/postmask-babel/runtime.js"></script>
```

```mask
define Foo {
    function onRenderStart () {
        this.$.someWidget({
            onUpdate (...args) {
                console.log('foo')
            }
        });
    }
}
```

----
_(c) MIT License - Atma.js Project_