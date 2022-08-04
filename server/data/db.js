const Book = require("../models/Book");
const Author = require("../models/Author");

const mongoDataMethods = {
  getAllBooks: async (condition = null) =>
    condition ? await Book.find(condition) : await Book.find(),
  getBookById: async (id) => await Book.findById(id),
  getAuthorById: async (authorId) => Author.findById(authorId),
  getAllAuthors: async () => Author.find(),
  createBook: async (agrs) => {
    const newBook = new Book(agrs);

    return await newBook.save();
  },
  createAuthor: async (agrs) => {
    const newAuthor = new Author(agrs);

    return await newAuthor.save();
  },
  // getAllBooks: async (conditon = null) =>
  //   conditon ? await Book.find(conditon) : await Book.find(),
  // getBookById: async (id) => await Book.findById(id),
  // createBook: async (args) => {
  //   const newBook = new Book(args);
  //   return await newBook.save();
  // },
  // getAllAuthors: async () => await Author.find(),
  // getAuthorById: async (id) => await Author.findById(id),
  // createAuthor: async (args) => {
  //   const newAuthor = new Author(args);
  //   return await newAuthor.save();
  // },
};

module.exports = mongoDataMethods;
