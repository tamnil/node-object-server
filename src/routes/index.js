var express = require("express");
var _ = require("lodash");
var router = express.Router();
var config = require("../../config");
var utils = require("../lib");
// var examples = require("../examples")

const activeMods = {
  math: require("mathjs"),
  // lodash: require("lodash")
  examples: require("../examples")
};

router.get(/.*/, function(req, res, next) {
  // res.render('index', { title: 'Express' });

  const convetUrlPathToArray = urlPath =>
    urlPath.split("/").filter(x => x != "");

  const getFirst = arr => arr[0];
  const removeFirst = arr => arr.split(0);
  const makeMethod = arr => (activeMods['math'] ? activeMods[arr[0]] : false);

  console.log(makeMethod(['math']).sin(0))
  const applyObj = fn => arr =>
    _.slice(arr, 1).reduce((val, curr) => val[curr], fn);
  const applyFn = fn => arr =>
    _.slice(arr, 1).reduce((val, curr) => val(curr), fn);

  const arrPath = convetUrlPathToArray(req.path);


  const formatInputValues = x => !Array.isArray(x) ? [x] : x

  // const getRequired = (modName,...args) => require(modName)


  res.json({
    error: "err4",
    query: req.query,
    params: req.params,
    body: req.body,
    urlpath: req.path,
    urlpathA: arrPath,
    // co: getRequired('mathjs','sin'),
    formedMethod:applyObj(makeMethod(arrPath) )(arrPath)(formatInputValues(req.query.value))
  });
});

module.exports = router;
