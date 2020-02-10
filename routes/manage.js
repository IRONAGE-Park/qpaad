var express = require('express');
var router = express.Router();

/* GET manage page. */
router.get('/', function(req, res, next) {
  res.render('manage', 
  {
    title: '관리자페이지'
  });
});

module.exports = router;