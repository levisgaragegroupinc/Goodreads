import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          title
          description
          authors
          image
          link
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          title
          description
          authors
          image
          link
        }
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $title: String!
    $description: String!
    $authors: [String]
    $bookId: String!
    $image: String
    $link: String
  ) {
    saveBook(
      bookId: $bookId
      title: $title
      description: $description
      authors: $authors
      image: $image
      link: $link
    ) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
        description
        authors
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
        description
        authors
        image
        link
      }
    }
  }
`;
