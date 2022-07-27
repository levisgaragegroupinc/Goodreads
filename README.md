# <profile>

# Description

This Google Books API search web site features a React frontend, GraphQL API with Apollo Server and MongoDB database.

## About

The react front-end uses react router and apolloProvider to give it access to graphql queries and mutations. This project started out as a functional site that used a RESTful API and was converted to be a GraphQL API with an Apollo server and MongoDB database.

## Installation

To run this application download the code from the repository and type `npm i` to install the dependencies. Then type `npm start` or `npm run develop` to run the application development mode. This will open your browser to [http://localhost:3000](http://localhost:3000) to view the working application

```typescript
$ git clone
$ npm Install
4 npm start
```

Make sure the following are installed:

Node: [Node.js](https://nodejs.org/en/download/).

Express: [Express.js](https://www.npmjs.com/package/express).

React: [React](https://www.npmjs.com/package/react).

To create a distributed build type `npm run build`. This will build the app for production to the `build folder`. This bundles in React for production mode and optimizes the app for the best perfomance.

A live version of this application has been deployed to heroku and connected to a MongoDB database using MongoDB Atlas. To connect and deploy your own version follow the [Deploy with Heroku and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas) guide.

### Search Books

![Search Books](./client/src/assets/searchBooks_01.png)

### Saved Books

![Saved Books](./client/src/assets/savedBooks_01.png)

## View the Project

Navigate to [Goodreads](https://shrouded-woodland-65603.herokuapp.com/) to view the deployed page.

## Credits

Apollo, Heroku, Express, Node.js, React, MongoDB, UW Full and Stack Coding Bootcamp for the starting code.
