import express from "express";
import { ApolloServer } from "apollo-server-express";

import { schema } from "./graphql";

const { PORT = 4000 } = process.env;

// initialize server
const server = new ApolloServer({ schema });
const app = express();
server.applyMiddleware({ app });

// start server process
app.listen(PORT, () => {
  console.log(
    `🚀 GraphQL API server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
});
