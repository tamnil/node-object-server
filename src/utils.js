const m = require("mathjs");


const isFunction = el => typeof el === "function"

const objPropertyNames = obj => Object.getOwnPropertyNames(obj);
const objFunctions = obj =>
  objPropertyNames(obj).filter(x => isFunction( obj[x] ));
const elements =

module.exports = {
  objPropertyNames,
  objFunctions
};
