const { gql } = require("apollo-server-express")

// const typeDefs = gql`
//   type Book {
//     id: ID
//     name: String
//     genre: String
//     author: Author
//   }

//   type Author {
//     id: ID!
//     name: String
//     age: Int
//     books: [Book]
//   }

//   # ROOT TYPE

//   type Query {
//     books: [Book]
//     authors: [Author]
//     book(id: ID!): Book
//     author(id: ID!): Author
//   }

//   type Mutation {
//     createAuthor(name: String, age: Int): Author
//     createBook(name: String, genre: String, authorId: ID!): Book
//   }
// `;

const typeDefs = gql`
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
  }

  type Author {
    id: ID
    name: String
    age: Int
    books: [Book]
  }

  type Movie {
    imdbID: ID
    Title: String
    info: Infor
  }

  type Infor {
    Title: String
    Year: String
    Released: String
    Runtime: String
    Genre: String
  }

  type Query {
    books: [Book]
    authors: [Author]
    book(id: ID): Book
    Movies: [Movie]
  }


  type Mutation {
    createBook(name: String, genre: String, authorId: ID): Book
    createAuthor(name: String, age: Int): Author
  }
`

module.exports = typeDefs
