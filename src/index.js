import { ApolloServer } from "apollo-server";
import typeDefs from "./api/typeDefs.js";
import resolvers from "./api/resolvers.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
