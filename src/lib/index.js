
const isFunction = el => typeof el === "function"
const listPropertyNames = obj => Object.getOwnPropertyNames(obj);
const listFunctions = obj =>
  listPropertyNames(obj).filter(x => isFunction( obj[x] ));
const getFunction = obj => met => obj[met]

module.exports = {
  listPropertyNames,
  listFunctions,
  getFunction,
};
