import { queryType, stringArg, makeSchema } from "nexus";

const Query = queryType({
  definition(t) {
    t.string("hello", {
      args: { name: stringArg() },
      resolve: (_, { name }) => `Hello ${name || "World"}!`,
    });
  },
});

const schema = makeSchema({
  types: [Query],
  outputs: {
    schema: __dirname + "/generated/schema.graphql",
    typegen: __dirname + "/generated/types.ts",
  },
});

export default schema;
