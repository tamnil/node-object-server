# NODE-OBJECT-SERVER

Tamnil Saito Junior
  [![Build Status](https://travis-ci.org/tamnil/node-object-server.svg?branch=master)](https://travis-ci.org/tamnil/node-object-server)

## Project Under construction - please dont use !!!

https://www.npmjs.com/package/node-object-server

https://github.com/tamnil/node-object-server

https://tamnil.github.io/node-object-server/

https://travis-ci.org/tamnil/node-object-server

[a ToDo List](TODO.md)

Node Object Server

The propose of this frameworks is to serve javascript function objects as endpoint

Advantages:

Parallelization of process: externalize your APIs calls to external server.

Fast implementation: all routes are based on imported module.

Modularization: easily implement in existing code by extending call to endpoint and retrieve the response of a function

    1. curry and compose on client side, and call externally for function resolution.



- prototipacao rapida


O projeto importa diretamente o modulo escolhido, disponibilizando suas saidas permitidas em modules.exports.

estrutura:
a estrutura da url obedece a formacao do modulo, metodos e objetos carregados


funcao:

/classe/metodo/metodo/...?value=valores da funcao



scripts de inicializacao
```javascript
  "scripts": {
    "start": "node ./bin/www",
    "test": "NODE_ENV=test jest",
    "watch-test": "NODE_ENV=test jest --watch",
    "dev": "nodemon ./bin/www",
    "livereload": "livereload ./src -w 2500 -d"
  },
  
 ```
