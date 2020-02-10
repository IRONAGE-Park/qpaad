var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
    title: 'Express' ,
    cate_list: ['CT1', 'CT2', 'CT3', 'CT4', 'CT5'],
    content: ['banner', 'media', '', '']    
  });
});

router.get('/test', function(req, res, next) {
  res.render('test');
});

module.exports = router;