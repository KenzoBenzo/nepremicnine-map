import React from 'react';
import { Layout } from '../components/layout';
import dynamic from 'next/dynamic';
import { Box, Stack, Text, Center, Spinner } from '@chakra-ui/react';
import Card from '../components/listing-card';
import ListingGrid from '../components/listing-grid';
import { fetcher } from '../utils/graphql-client';
import useSWR from 'swr';
import { GET_PROPERTIES } from '../utils/graphql-operations';
import { Property } from '../utils/types';
import { MarkerAndPopup } from '../components/popup-and-marker';

const DynamicMapWithNoSSR = dynamic(() => import('../components/map'), {
  ssr: false,
});

const Index = () => {
  const {
    data: fetchedData,
    error,
    isValidating,
  } = useSWR(GET_PROPERTIES, fetcher);

  if (error) {
    return <Text color="red.500">{JSON.stringify(error, null, 2)}</Text>;
  }

  if (isValidating && !fetchedData) {
    return (
      <Center h="90vh">
        <Spinner /> <Text ml={3}>Loading</Text>
      </Center>
    );
  }

  return (
    <Layout>
      <Stack
        direction={['column-reverse', 'row']}
        spacing={0}
        h="100vh"
        w="100%"
        overflow="auto"
      >
        <Box w="100%" mx={8}>
          <ListingGrid>
            {fetchedData?.houses?.data?.map(
              (house: Property, index: number) => (
                <Card
                  key={index}
                  image={house.images[0]}
                  title={house.title}
                  bed={house.bedRooms || 0}
                  bath={house.bathRooms || 0}
                  floor={house.floorSize || 0}
                  plot={house.plotSize || 0}
                  pricing={house.totalPrice}
                  location={house.location.neighborhood}
                />
              )
            )}
          </ListingGrid>
        </Box>

        <Box h="100%" w="100%" maxW={600}>
          <DynamicMapWithNoSSR>
            <>
              {fetchedData?.houses?.data?.map(
                (property: Property, index: number) => (
                  <MarkerAndPopup
                    key={index}
                    latitude={property.location.latitude}
                    longitude={property.location.longitude}
                    image={property.images[0]}
                    title={property.title}
                    price={property.totalPrice}
                  />
                )
              )}
            </>
          </DynamicMapWithNoSSR>
        </Box>
      </Stack>
    </Layout>
  );
};

export default Index;
