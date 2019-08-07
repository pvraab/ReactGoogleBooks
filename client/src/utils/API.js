import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getBooksOfType: function(title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title );
  },
  getBooksOfTypeTitle: function(title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title );
  },
  getBooksOfTypeSubject: function(subject) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=+subject:" + subject);
  },
  getBooksOfTypeAuthor: function(author) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=+inauthor" + author);
  },
  getBaseBooksList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  },
  getBooksOfType1: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  }

};
