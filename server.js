// var express = require("express");
// var { createHandler } = require("graphql-http/lib/use/express");
// var { buildSchema } = require("graphql");

// // Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// // The root provides a resolver function for each API endpoint
// var root = {
//   hello() {
//     return "Hello world!";
//   },
// };

// var app = express();

// // Create and use the GraphQL handler.
// app.all(
//   "/graphql",
//   createHandler({
//     schema: schema,
//     rootValue: root,
//   })
// );

// app.get("/", (req, res) => {
//   res.send("¡Hola Mundo desde mi API RESTful!");
// });

// app.get("/users", (req, res) => {
//   // Implementar la lógica para obtener usuarios
//   const users = [
//     { id: 1, name: "Juan" },
//     { id: 2, name: "María" },
//   ];
//   res.json(users);
// });
// // Start the server at port
// app.listen(4000);
// console.log("Running a GraphQL API server at http://localhost:4000/graphql");

// // ok entonces croe mi objeto newApolloClient y lo inicializo y lo comparto con el resto de la app, luego en widgets uso useQuery + mi query escrita a mano y deberia regresar informacion

const fetch = require("node-fetch");
const { ApolloServer, gql } = require("apollo-server");

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// mock data for characters
const characters = [
  {
    name: "Rick Sanchez",
    id: 1,
    status: "Alive",
    episodes: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
    ],
  },
  {
    name: "Morty Smith",
    id: 2,
    status: "Alive",
    episodes: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/3",
    ],
  },
];

// mock data for episodes
const episodes = [
  {
    name: "Pilot",
    id: 1,
  },
  {
    name: "Lawnmower Dog",
    id: 2,
  },
];

function fetchEpisodes() {
  // More info about the fetch function? https://github.com/bitinn/node-fetch#json
  return fetch("https://rickandmortyapi.com/api/episode/")
    .then((res) => res.json())
    .then((json) => json.results);
}

function fetchEpisodeById(id) {
  return fetch("https://rickandmortyapi.com/api/episode/" + id)
    .then((res) => res.json())
    .then((json) => json);
}

function fetchEpisodeByUrl(url) {
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
}

function fetchCharacters() {
  // More info about the fetch function? https://github.com/bitinn/node-fetch#json
  return fetch("https://rickandmortyapi.com/api/character/")
    .then((res) => res.json())
    .then((json) => json.results);
}

function fetchCharacterById(id) {
  // More info about the fetch function? https://github.com/bitinn/node-fetch#json
  return fetch("https://rickandmortyapi.com/api/character/" + id)
    .then((res) => res.json())
    .then((json) => json);
}

function fetchCharacterByUrl(url) {
  // More info about the fetch function? https://github.com/bitinn/node-fetch#json
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
}
