import { makeSchema } from "nexus";
import { nexusPrisma } from "nexus-plugin-prisma";

import types from "./types";

// GraphQL schema
const schema = makeSchema({
  types,
  plugins: [nexusPrisma()],
  outputs: {
    schema: __dirname + "/generated/schema.graphql",
    typegen: __dirname + "/generated/types.ts",
  },
});

export default schema;
