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
  Avatar,
  Button,
  ButtonGroup,
  Wrap,
  WrapItem,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import useSWR from 'swr';
import { GET_HOUSE } from '../../utils/graphql-operations';
import { faunaClient } from '../../utils/graphql-client';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { eurFormatter } from '../../utils/euro-formatter';
import {
  BathIcon,
  BedIcon,
  FloorIcon,
  PlotIcon,
  DrawingPinIcon,
} from '../../components/icons';

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

  console.log(data);

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
      <Box w="100%" mt={8} mx={8}>
        <Flex mb={16}>
          {/* Image grid */}
          <Box mr={8}>
            <img
              src={data.images[0]}
              style={{ borderRadius: 8, marginBottom: 8 }}
            />
            <Wrap>
              {data.images.map((image: string, i: number) => (
                <WrapItem>
                  <img
                    style={{ maxWidth: '100px', borderRadius: 6 }}
                    src={image}
                    key={i}
                  />
                </WrapItem>
              ))}
            </Wrap>
          </Box>
          {/* Price / CTA / Agent */}
          <Stack
            p={4}
            backgroundColor={cardColor}
            boxShadow="md"
            borderRadius="lg"
          >
            <Avatar />
            <Text fontSize="sm" mb={4}>
              Agent name
            </Text>
            <Heading as="h2" fontSize="3xl" my={4}>
              {eurFormatter.format(data.totalPrice)}
            </Heading>
            <ButtonGroup>
              <Button colorScheme="emerald">Book a viewing</Button>
              <Button>Schedule a call</Button>
            </ButtonGroup>

            <Divider py={4} />
            {/* Posted on */}
            {/* Viewings of this listing */}
            {/* Houses in this neighborhood recently sold for */}
          </Stack>
        </Flex>
        <Box mb={8}>
          <Text textTransform="uppercase" color={tertiary} fontWeight="600">
            {data.type}
          </Text>
          <Heading as="h1" fontSize="3xl">
            {data.title}
          </Heading>
        </Box>
        <Stack
          w="full"
          direction="row"
          justify="space-between"
          mb={16}
          p={4}
          backgroundColor={cardColor}
          boxShadow="md"
          borderRadius="lg"
        >
          <Stat>
            <StatLabel>Bedrooms</StatLabel>
            <StatNumber>
              <BedIcon />
              {data.bedRooms}
            </StatNumber>
          </Stat>

          <Stat>
            <StatLabel>Bathrooms</StatLabel>
            <StatNumber>
              <BathIcon />
              {data.bathRooms}
            </StatNumber>
          </Stat>

          <Stat>
            <StatLabel>Floor size</StatLabel>
            <StatNumber>
              <FloorIcon /> {data.floorSize}m2
            </StatNumber>
          </Stat>

          <Stat>
            <StatLabel>Plot size</StatLabel>
            <StatNumber>
              <PlotIcon /> {data.plotSize}m2
            </StatNumber>
          </Stat>

          <Stat>
            <StatLabel>Built / Renovated</StatLabel>
            <StatNumber>
              {data.yearOfBuild}/{data.yearOfRenovation || '—'}
            </StatNumber>
          </Stat>
          {/* Bedrooms, bathrooms, floor m2, plot m2, built in, renovated in */}
        </Stack>

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
