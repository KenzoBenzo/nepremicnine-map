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
  Divider,
  Link as ChakraLink,
} from '@chakra-ui/react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { StatisticBar } from '@molecules/statistic-bar';
import { ImageViewer } from '@molecules/image-viewer';
import { GET_HOUSE } from '../../utils/graphql-operations';
import { graphQLClient } from '../../utils/graphql-client';
import { euroFormatter } from '../../utils/euro-formatter';
import { dateFormatter } from '../../utils/date-formatter';

const PropertyPage = () => {
  const router = useRouter();
  const tertiary = useColorModeValue('gray.400', 'gray.600');
  const cardColor = useColorModeValue('white', 'gray.800');

  const { propertyID } = router.query;
  const fetcher = (query: string) =>
    graphQLClient().request(query, { houseID: propertyID });
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
      p={4}
      h="100vh"
      w="100%"
      overflow="auto"
    >
      <Box w="100%" mr={8} ml={0}>
        <Link href="/houses" passHref>
          <ChakraLink d="flex" alignItems="center">
            <ArrowLeftIcon style={{ marginRight: '4px' }} />
            Back to search results
          </ChakraLink>
        </Link>

        <Box mt={4}>
          <Flex mb={16}>
            <ImageViewer images={data.images} />

            <Stack
              p={4}
              backgroundColor={cardColor}
              boxShadow="md"
              borderRadius="lg"
            >
              <Heading as="h2" fontSize="3xl" my={4}>
                {euroFormatter.format(data.totalPrice)}
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
              <Text fontSize="sm" mb={4}>
                Uploaded {dateFormatter(data.dateCreated)}
              </Text>
              <Text fontSize="sm" mb={4} fontStyle="italic">
                {data.propertyViews} viewings of this listing.
              </Text>
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

          <StatisticBar
            bedRooms={data.bedRooms}
            bathRooms={data.bathRooms}
            floorSize={data.floorSize}
            plotSize={data.plotSize}
          />

          <Heading as="h3" fontSize="xl">
            Description
          </Heading>
          <Text lineHeight="1.6">{data.description}</Text>
        </Box>
      </Box>

      <Box
        pos="sticky"
        top="0px"
        h="100%"
        w="100%"
        maxW={464}
        borderRadius="lg"
        overflow="hidden"
      >
        <DynamicMapWithNoSSR>{/* Add marker here */}</DynamicMapWithNoSSR>
        {/* Add overlay with proximity to things here. */}
      </Box>
    </Stack>
  );
};

export default PropertyPage;