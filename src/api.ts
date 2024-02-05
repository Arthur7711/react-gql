import { ApolloClient, InMemoryCache } from "@apollo/client";
// curl --request POST \
//   --header 'content-type: application/json' \
//   --url 'https://flyby-router-demo.herokuapp.com/' \
//   --data '{"query":"query { __typename }"}
export const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app",
  cache: new InMemoryCache(),
});
