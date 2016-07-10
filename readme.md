[PostMask Babel Compiler](https://github.com/atmajs/postmask)
-----
[![Build Status](https://travis-ci.org/atmajs/postmask-babel.png?branch=master)](https://travis-ci.org/atmajs/postmask-babel)

Compiles functions in `mask` templates to es5

### Configurate

`mask.cfg('postmask-babel', BabelOptions);``

> Default: `{"presets":["es2015"]}`


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

### Optimizer

Defines optimizers to compile functions, slots, and other scripts to es5. Can be used as standalone module, but also as a plugin for `postmask`.


----
_(c) MIT License - Atma.js Project_