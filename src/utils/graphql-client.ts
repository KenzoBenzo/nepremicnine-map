import { GraphQLClient } from 'graphql-request';

export const graphQLClient = () => {
  const context = {
    headers: {
      'content-type': 'application/json',
      'x-api-key': process.env.NEXT_PUBLIC_GRAFBASE_TOKEN || '',
    },
  };

  const client = new GraphQLClient(
    'https://nepremicnine-map-main-kenzobenzo.grafbase.app/graphql',
    context
  );

  return client;
};

export const fetcher = (query: string) => graphQLClient().request(query);
