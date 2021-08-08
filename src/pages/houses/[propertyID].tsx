import React from 'react';
import {
  Center,
  Text,
  Spinner,
  Box,
  Stack,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import useSWR from 'swr';
import { GET_HOUSE } from '../../utils/graphql-operations';
import { faunaClient } from '../../utils/graphql-client';
import { useRouter } from 'next/dist/client/router';
import dynamic from 'next/dynamic';

const PropertyPage = () => {
  const router = useRouter();
  const tertiary = useColorModeValue('gray.400', 'gray.600');
  const cardColor = useColorModeValue('white', 'gray.800');

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
    console.error(JSON.stringify(error, null, 2));
    return <Text color="red.500">Ooops!</Text>;
  }

  const data = fetchedData.findHouseByID;

  const DynamicMapWithNoSSR = dynamic(() => import('../../components/map'), {
    ssr: false,
  });
  return (
    <Stack
      direction={['column-reverse', 'row']}
      spacing={0}
      h="100vh"
      w="100%"
      overflow="auto"
    >
      <Box w="100%" mx={8}>
        <Flex mb={16}>
          {/* Image grid */}
          {data.images.map((image, i) => (
            <img style={{ maxWidth: '100px' }} src={image} key={i} />
          ))}
          {/* Price / CTA / Agent */}
        </Flex>
        <Box mb={16}>
          <Text textTransform="uppercase" color={tertiary} fontWeight="600">
            {data.type}
          </Text>
          <Heading as="h1" fontSize="3xl">
            {data.title}
          </Heading>
        </Box>
        <Flex
          mb={16}
          p={4}
          backgroundColor={cardColor}
          boxShadow="md"
          borderRadius="lg"
        >
          {/* Bedrooms, bathrooms, floor m2, plot m2, built in, renovated in */}
        </Flex>

        <Heading as="h3" fontSize="xl">
          Description
        </Heading>
      </Box>
      <Box h="100%" w="100%" maxW={600}>
        <DynamicMapWithNoSSR>{/* Add marker here */}</DynamicMapWithNoSSR>
        {/* Add overlay with proximity to things here. */}
      </Box>
    </Stack>
  );
};

export default PropertyPage;
