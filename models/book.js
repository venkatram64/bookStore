var mongoose = require('mongoose');

//Genre Schema
var bookSchema = mongoose.Schema({
      title: {
        type: String,
        required: true
      },
      genre:{
        type: String,
        required: true
      },
      description:{
        type: String,
      },
      author: {
        type: String,
        required: true
      },
      publisher:{
        type: String
      },
      pages:{
        type: String
      },
      imageUrl:{
        type: String
      },
      buyUrl:{
        type: String
      },
      create_date:{
        type: Date,
        default: Date.now
      }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

//Get books
module.exports.getBooks = function(callback, limit){
  Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id, callback){
  Book.findById(id, callback);
}

//Create genre
module.exports.createBook = function(book, callback){
  Book.create(book, callback);
}

//Update book
module.exports.updateBook = function(id, book, options, callback){
  var query = {_id : id};
  var update = {
    title: book.title,
    genre: book.genre,
    description: book.description,
    author: book.author,
    publisher: book.publisher,
    pages: book.pages,
    imageUrl: book.imageUrl,
    buyUrl: book.buyUrl
  }
  Book.findOneAndUpdate(query, update, options, callback);
}

//Delete book
module.exports.deleteBook = function(id, callback){
  var query = {_id : id};
  Book.remove(query, callback);
}
