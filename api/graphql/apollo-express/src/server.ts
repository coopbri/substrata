import express from "express";
import { ApolloServer } from "apollo-server-express";

import { resolvers, typeDefs } from "./graphql";

const { PORT = 4000 } = process.env;

// initialize server
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

// start server process
app.listen(PORT, () => {
  console.log(
    `🚀 GraphQL server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
});
