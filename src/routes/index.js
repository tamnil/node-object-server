var express = require("express");
var router = express.Router();
var config = require("../../config");
var lib = require("../lib");

router.get(/.*/, function(req, res, next) {
  res.json({
    error: "err4",
    query: req.query,
    params: req.params,
    body: req.body,
    urlpath: req.path,
    formedMethod:lib.returnResponse(req),
    returnValue:lib.returnResponse(req),
  });
});

module.exports = router;
