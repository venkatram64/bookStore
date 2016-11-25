var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Genre = require('./models/genre');
Book = require('./models/book');

var app = express();
mongoose.connect('mongodb://localhost:27017/bookstore');
var db = mongoose.connecttion;
//client app
app.use(express.static(__dirname + '/client'));
//client app ends
app.use(bodyParser.json());
app.get('/', function(req, res){
  res.send('Please use /api/books or /api/genres');
});

app.get('/api/genres', function(req, res){
  Genre.getGenres(function(err, genres){
    if(err){
      throw err;
    }
    res.json(genres);
  });
});

app.post('/api/genres', function(req, res){
  var genre = req.body;
  Genre.createGenre(genre, function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  });
});

app.put('/api/genres/:_id', function(req, res){
  var id = req.params._id;
  var genre = req.body;
  Genre.updateGenre(id, genre, {}, function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  });
});

app.delete('/api/genres/:_id', function(req, res){
  var id = req.params._id;
  Genre.deleteGenre(id, function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  });
});

app.get('/api/books', function(req, res){
  Book.getBooks(function(err, books){
    if(err){
      throw err;
    }
    res.json(books);
  });
});

app.get('/api/books/:_id', function(req, res){
  Book.getBookById(req.params._id, function(err, book){
    if(err){
      throw err;
    }
    res.json(book);
  });
});

app.post('/api/books', function(req, res){
  var book = req.body;
  Book.createBook(book, function(err, book){
    if(err){
      throw err;
    }
    res.json(book);
  });
});

app.put('/api/books/:_id', function(req, res){
  var id = req.params._id;
  var book = req.body;
  Book.updateBook(id, book, {}, function(err, book){
    if(err){
      throw err;
    }
    res.json(book);
  });
});

app.delete('/api/books/:_id', function(req, res){
  var id = req.params._id;
  Book.deleteBook(id, function(err, book){
    if(err){
      throw err;
    }
    res.json(book);
  });
});

app.listen(3000, function(){
  console.log("Server is up on port # 3000");
})
