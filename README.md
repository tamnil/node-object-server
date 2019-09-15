# NODE-OBJECT-SERVER

  [![Build Status](https://travis-ci.org/tamnil/node-object-server.svg?branch=master)](https://travis-ci.org/tamnil/node-object-server)

## Under construction
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
