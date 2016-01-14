var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/new', function(req, res, next) {
  res.render('new');
})

router.post('/new', function(req, res, next) {
  res.redirect('/');
})

router.get('/:id/edit', function(req, res, next) {
  res.render('edit');
})

router.post('/:id/edit', function(req, res, next) {
  res.redirect('/');
})

router.get('/:id/delete', function(req, res, next) {
  res.redirect('/');
})

module.exports = router;
