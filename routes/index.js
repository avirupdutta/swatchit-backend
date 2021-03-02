var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({
    data: 'Hello From Express API',
    status: res.status
  })
});

module.exports = router;
