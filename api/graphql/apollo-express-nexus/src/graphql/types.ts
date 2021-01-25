import { queryType, stringArg } from "nexus";

// root Query type
const Query = queryType({
  definition(t) {
    t.string("hello", {
      args: { name: stringArg() },
      resolve: (_, { name }) => `Hello ${name || "World"}!`,
    });
  },
});

export default { Query };
