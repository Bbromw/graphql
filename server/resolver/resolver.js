const { books, authors } = require("../data/static")
const Author = require("../models/Author")
const Book = require("../models/Book")
const axios = require('axios')


const resolver = {
  // Query
  Query: {
    // books: async (parent, args, { mongoDataMethods }) =>
    //   await mongoDataMethods.getAllBooks(),
    // authors: async (parent, args, { mongoDataMethods }) =>
    //   await mongoDataMethods.getAllAuthors(),
    // book: async (parent, { id }, { mongoDataMethods }) =>
    //   await mongoDataMethods.getBookById(id),
    Movies: async (parent, args) => {
      try {
        const response = await axios.get("https://www.omdbapi.com/?&apikey=54e0bf78&s=robot&type=movie")
        return response.data.Search
      }
      catch (err) {
        console.log(err)
      }
    }
  },
  // Book: {
  //   author: async ({ authorId }, agrs, { mongoDataMethods }) =>
  //     await mongoDataMethods.getAuthorById(authorId),
  // },
  // Author: {
  //   books: async ({ id }, args, { mongoDataMethods }) =>
  //     await mongoDataMethods.getAllBooks({ authorId: id }),
  // },
  Movie: {
    info: async ({ imdbID }, args) => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?&apikey=54e0bf78&i=${imdbID}`)
        return response.data
      }
      catch (err) {
        console.log(err)
      }
    }
  },
  // Mutation: {
  //   createBook: async (parent, args, { mongoDataMethods }) => {
  //     return await mongoDataMethods.createBook(args)
  //   },
  //   createAuthor: async (parent, args, { mongoDataMethods }) => {
  //     return await mongoDataMethods.createAuthor(args)
  //   },
  // },
  // Query: {
  //   books: async (parent, args, { mongoDataMethods }) => {
  //     return await mongoDataMethods.getAllBooks();
  //   },
  //   authors: async (parent, args, { mongoDataMethods }) => {
  //     return await mongoDataMethods.getAllAuthors();
  //   },
  //   book: async (parent, { id }, { mongoDataMethods }) =>
  //     await mongoDataMethods.getBookById(id),
  //   author: async (parent, { id }, { mongoDataMethods }) =>
  //     await mongoDataMethods.getAuthorById(id),
  // },
  // Book: {
  //   author: async ({ authorId }, args, { mongoDataMethods }) =>
  //     await mongoDataMethods.getAuthorById(authorId),
  // },
  // Author: {
  //   books: async ({ id }, args, { mongoDataMethods }) => {
  //     return await mongoDataMethods.getAllBooks({ authorId: id });
  //   },
  // },
  // //Mutation
  // Mutation: {
  //   createAuthor: async (_, args, { mongoDataMethods }) => {
  //     return await mongoDataMethods.createAuthor(args);
  //   },
  //   createBook: async (_, args, { mongoDataMethods }) => {
  //     return await mongoDataMethods.createBook(args);
  //   },
  // },
}

module.exports = resolver
