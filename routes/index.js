var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req,res,next) {
  res.redirect('/books');
})

router.get('/books', function(req, res, next) {
  res.render('index');
});

router.get('/books/new', function(req, res, next) {
  res.render('new');
})

router.post('/books/new', function(req, res, next) {
  res.redirect('/books');
})

router.get('/books/:id/edit', function(req, res, next) {
  res.render('edit');
})

router.post('/books/:id/edit', function(req, res, next) {
  res.redirect('/books');
})

router.get('/books/:id/delete', function(req, res, next) {
  res.redirect('/books');
})

module.exports = router;
