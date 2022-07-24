const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    bookId: String!
    title: String!
    description: String
    authors: [String]
    image: String
    link: String
  }
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  type Auth {
    token: ID!
    user: User
  }
  input SavedGoodRead {
    bookId: String
    title: String
    description: String
    authors: [String]
    image: String
    link: String
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: SavedGoodRead!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
