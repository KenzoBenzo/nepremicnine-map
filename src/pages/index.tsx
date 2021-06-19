import React from "react";
import { Container } from "../components/app-container";
import dynamic from "next/dynamic";
import { Box, HStack, Text, Center, Spinner } from "@chakra-ui/react";
import Navigation from "../components/navigation";
import Card from "../components/listing-card";
import ListingGrid from "../components/listing-grid";
import { fetcher } from "../utils/graphql-client";
import useSWR from "swr";
import { GET_PROPERTIES } from "../utils/graphql-operations";
import { Property } from "../utils/types";
import { MarkerAndPopup } from "../components/popup-and-marker";

const DynamicMapWithNoSSR = dynamic(() => import("../components/map"), {
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
  const { data } = fetchedData?.properties;

  return (
    <Container height="100vh">
      <HStack align="flex-start" spacing={0} h="100vh" w="100%" overflow="auto">
        <Box w="100%" mx={8}>
          <Navigation />
          <ListingGrid>
            {data.map((house: Property, index: number) => (
              <Card
                key={index}
                image={house.image}
                title={house.title}
                bed={house.bedRooms || 0}
                bath={house.bathRooms || 0}
                floor={house.floorSize || 0}
                plot={house.plotSize || 0}
                pricing={house.totalPrice}
                location={house.location.neighborhood}
              />
            ))}
          </ListingGrid>
        </Box>
        <Box h="100%" w="100%" maxW={600} />
        <Box
          h="100%"
          w="100%"
          maxW={600}
          position="fixed"
          top={0}
          right={0}
          bottom={0}
        >
          <DynamicMapWithNoSSR>
            <>
              {data.map((property: Property, index: number) => (
                <MarkerAndPopup
                  key={index}
                  latitude={property.location.latitude}
                  longitude={property.location.longitude}
                  image={property.image}
                  title={property.title}
                />
              ))}
            </>
          </DynamicMapWithNoSSR>
        </Box>
      </HStack>
    </Container>
  );
};

export default Index;
