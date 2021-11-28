import { GraphQLClient } from 'graphql-request';

export const faunaClient = () => {
  const context = {
    headers: {
      'graphcdn-token': process.env.NEXT_PUBLIC_GRAPHCDN_TOKEN || '',
      authorization: process.env.NEXT_PUBLIC_FAUNA_TOKEN || '',
      'X-Schema-Preview': 'partial-update-mutation',
    },
  };

  const client = new GraphQLClient('https://pravi-dom.graphcdn.app', context);

  return client;
};

export const fetcher = (query: string) => faunaClient().request(query);
