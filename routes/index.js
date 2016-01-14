var express = require('express');
var router = express.Router();
var apiKey = process.env.API_KEY;
var unirest = require('unirest');

/* GET home page. */
router.get('/', function(req,res,next) {
  res.redirect('/books');
})

router.get('/books', function(req, res, next) {
 unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + apiKey)
  .end(function(response) {
    var NYTBooks = response.body.results.books;
    res.render('index', {books: NYTBooks});
    console.log(NYTBooks);
      res.end('Done');
  })
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
