import { GraphQLClient } from "graphql-request";

export const faunaClient = () => {
  const context = {
    headers: {
      authorization:
        process.env.NEXT_PUBLIC_FAUNA_TOKEN || "",
    },
  };

  const client = new GraphQLClient(
    "https://graphql.fauna.com/graphql",
    context
  );

  return client;
};

export const fetcher = (query: string) => faunaClient().request(query);
