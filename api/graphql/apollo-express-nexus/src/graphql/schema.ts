import { makeSchema } from "nexus";

import types from "./types";

// GraphQL schema
const schema = makeSchema({
  types,
  outputs: {
    schema: __dirname + "/generated/schema.graphql",
    typegen: __dirname + "/generated/types.ts",
  },
});

export default schema;
