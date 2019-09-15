"use strict";

const _ = require("lodash");

const activeMods = {
  math: require("mathjs"),
  // lodash: require("lodash")
  examples: require("../examples")
};

const listPropertyNames = obj => _.keys(obj);
const listFunctions = obj => _.keys(obj).filter(x => _.isFunction(obj[x]));
const getFunction = obj => met => obj[met];

const convetUrlPathToArray = urlPath => urlPath.split("/").filter(x => x != "");

const removeFirst = arr => arr.split(0);
const makeMethod = arr => (activeMods["math"] ? activeMods[arr[0]] : false);





const applyObj = fn => arr =>
  _.slice(arr, 1).reduce((val, curr) => val[curr], fn);
const applyFn = fn => arr =>
  _.slice(arr, 1).reduce((val, curr) => val(curr), fn);

const arrPath = req => convetUrlPathToArray(req.path);

const formatInputValues = x => (!Array.isArray(x) ? [x] : x);
const getResultingFunction = req => objApplyed(req);
const calculateReturn = req => fn => fn(req);

const objApplyed = req =>
  _.flowRight(
    calculateReturn(arrPath(req)),
    applyObj,
    makeMethod,
    arrPath
  )(req);

const returnResponse =  req  => getResultingFunction(req)(formatInputValues(req.query.value));




module.exports = {
  listPropertyNames,
  listFunctions,
  getFunction,
  returnResponse
};
