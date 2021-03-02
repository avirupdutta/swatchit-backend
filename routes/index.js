var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({
    data: 'Hello From Express API v2.0',
    status: res.status
  })
});

router.post('/authenticate', function (req, res, next) {
  const email = req.body.email
  const password = req.body.password
  if (email === 'test@user.com') {
    if (password === '123456') {
      return res.send({
        status: 'OK',
        data: 'Authenticated!'
      }).status(200)
    }
  }
  return res.send({
    status: 'UNAUTHORIZED',
    data: 'Login Failed'
  }).status(403)
})

module.exports = router;
