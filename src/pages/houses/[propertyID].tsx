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
} from '../../components/atoms/icons';

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
        <Spinner />
        <Text ml={3}>Loading</Text>
      </Center>
    );
  }
  if (error) {
    console.error(JSON.stringify(error, null, 2));
    return <Text color="red.500">Ooops!</Text>;
  }

  const data = fetchedData.findHouseByID;

  const DynamicMapWithNoSSR = dynamic(
    () => import('../../components/organisms/map'),
    {
      ssr: false,
    }
  );
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
            <Heading as="h2" fontSize="3xl" my={4}>
              {eurFormatter.format(data.totalPrice)}
            </Heading>
            <Flex align="center" justify="space-between">
              <Avatar src={data?.agent?.headshot} borderRadius="md" />
              <Avatar
                src={data?.agent?.agency?.logo}
                borderRadius="md"
                w="auto"
              />
            </Flex>
            <Flex align="center" justify="space-between">
              <Text fontSize="sm" mb={4}>
                {data.agent.name}
              </Text>
              <Text fontSize="sm" mb={4} textAlign="right">
                {data.agent.agency.name}
              </Text>
            </Flex>
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
          <Stat maxW="fit-content">
            <StatLabel>Bedrooms</StatLabel>
            <StatNumber>
              <BedIcon mr={2} />
              {data.bedRooms}
            </StatNumber>
          </Stat>

          <Stat maxW="fit-content">
            <StatLabel>Bathrooms</StatLabel>
            <StatNumber alignItems="center" lineHeight="1">
              <BathIcon mr={2} />
              {data.bathRooms}
            </StatNumber>
          </Stat>

          <Stat maxW="fit-content">
            <StatLabel>Floor size</StatLabel>
            <StatNumber alignItems="center" lineHeight="1">
              <FloorIcon mr={2} /> {data.floorSize} m²
            </StatNumber>
          </Stat>

          <Stat maxW="fit-content">
            <StatLabel>Plot size</StatLabel>
            <StatNumber alignItems="center" lineHeight="1">
              <PlotIcon mr={2} /> {data.plotSize} m²
            </StatNumber>
          </Stat>

          {/* <Stat>
            <StatLabel>Built / Renovated</StatLabel>
            <StatNumber>
              {data.yearOfBuild}/{data.yearOfRenovation || '—'}
            </StatNumber>
          </Stat> */}
          {/* Bedrooms, bathrooms, floor m2, plot m2, built in, renovated in */}
        </Stack>

        <Heading as="h3" fontSize="xl">
          Description
        </Heading>
        <Text lineHeight="1.6">{data.description}</Text>
      </Box>
      <Box h="100%" w="100%" maxW={600}>
        <DynamicMapWithNoSSR>{/* Add marker here */}</DynamicMapWithNoSSR>
        {/* Add overlay with proximity to things here. */}
      </Box>
    </Stack>
  );
};

export default PropertyPage;
