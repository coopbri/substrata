import { gql } from "apollo-server-express";

// type definitions
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

export default typeDefs;
