// eslint-disable-next-line no-unused-vars
import newrelic from "newrelic";
import plugin from "@newrelic/apollo-server-plugin";
import { ApolloServer } from "apollo-server";
import typeDefs from "./api/typeDefs.js";
import resolvers from "./api/resolvers.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [plugin],
  introspection: true,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
