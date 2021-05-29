import { GraphQLClient } from "graphql-request";

export const faunaClient = () => {
  const context = {
    headers: {
      // authorization: `Bearer fnAEKPZFvMACB8hyG593zZ44PAU6tCQu5fGtPOKX`,

      authorization:
        "Basic Zm5BRUtPNnFIN0FDQmtwSmlJSzVTTXhkMlduWERocHlyUnJmN3d6azpuZXByZW1pY25pbmVfbWFwOmFkbWlu",
    },
  };

  const client = new GraphQLClient(
    "https://graphql.fauna.com/graphql",
    context
  );

  return client;
};
