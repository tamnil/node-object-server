"use strict";
module.exports = {
  a: "test text string",
  obj: {},
  num: 1234,
  fun: x => `im a function( ${x} )`,
  more_deep: {
    welcome: "welcome to secondlevel",
    l2fm: x => "level2" + x,
    leve3:{

    l3fn: x=>'level 3 ' +x
    }
  }
};
