import React from "react";
import { SimpleGrid, Center, Spinner, Text } from "@chakra-ui/react";
import Card from "./listing-card";
import { faunaClient } from "../utils/graphql-client";
import { gql } from "graphql-request";
import useSWR from "swr";

const GET_PROPERTIES = gql`
  query GET_PROPERTIES {
    properties {
      data {
        _id
        title
        image
        type
        transaction
        location {
          neighborhood
          latitude
          longitude
        }
      }
    }
  }
`;

type Property = {
  title: string;
  image: string;
  location: {
    neighborhood: string;
    longitude: number;
    latitude: number;
    address: {
      street: string;
      city: string;
      postalCode: number;
    };
  }
  totalPrice: number;
  pricePerMeterSq: number;
  plotSize: number;
  floorSize: number;
  bedRooms: number;
  bathRooms: number;
}

const ListingGrid = () => {
  const fetcher = (query: string) => faunaClient().request(query);
  const {
    data: fetchedData,
    error,
    isValidating,
  } = useSWR(GET_PROPERTIES, fetcher);

  if (error) {
    return <Text color="red.500">{JSON.stringify(error, null, 2)}</Text>;
  }

  if (isValidating && !fetchedData) {
    return <Center h="90vh"><Spinner /> <Text ml={3}>Loading</Text></Center>;
  }
  const { data } = fetchedData?.properties;


  return (
    <SimpleGrid columns={4} minChildWidth="275px" spacing={8} my={8}>
      {data.map((house: Property, index: number) => (
        <Card
          key={index}
          image={house.image}
          title={house.title}
          bed={0}
          bath={0}
          floor={0}
          plot={0}
          pricing={100000}
          location={house.location.neighborhood}
        />
      ))}
    </SimpleGrid>
  );
};

export default ListingGrid;
