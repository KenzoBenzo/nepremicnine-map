import React from 'react';
import { Center, Text, Spinner, Box } from '@chakra-ui/react';
import useSWR from 'swr';
import { GET_HOUSE } from '../utils/graphql-operations';
import { faunaClient } from '../utils/graphql-client';
import { useRouter } from 'next/dist/client/router';

const PropertyPage = () => {
  const router = useRouter();
  const { propertyID } = router.query;
  const fetcher = (query: string) =>
    faunaClient().request(query, { houseID: propertyID });
  const { data: fetchedData, error, isValidating } = useSWR(GET_HOUSE, fetcher);

  if (isValidating && !fetchedData) {
    return (
      <Center h="90vh">
        <Spinner /> <Text ml={3}>Loading</Text>
      </Center>
    );
  }
  if (error) {
    return <Text color="red.500">{JSON.stringify(error, null, 2)}</Text>;
  }

  const data = fetchedData.findHouseByID;
  return (
    <Box>
      <h1>Property Page</h1>
      <Text>{data.title}</Text>
    </Box>
  );
};

export default PropertyPage;
