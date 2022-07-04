import React, { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  theme,
} from '@chakra-ui/react';
import { Crosshair2Icon } from '@radix-ui/react-icons';
import Link from 'next/link';
import SegmentedControl from '@atoms/segmented-control';

const Index = () => {
  const searchInputBackground = useColorModeValue('gray.50', 'gray.800');
  const { colorMode } = useColorMode();
  const [propertyType, setPropertyType] = useState<string | undefined>('house');

  return (
    <>
      <Box
        mt={20}
        background={`url('https://media.graphcms.com/hofevqGT6CWIlQIogRAV'), linear-gradient(to bottom right, ${
          colorMode === 'light' ? 'rgb(236, 253, 245)' : 'rgba(6, 78, 59, .5)'
        }, ${
          colorMode === 'light' ? 'rgb(167, 243, 208)' : 'rgba(4, 120, 87, .5)'
        })`}
        /*background={`url('https://media.graphcms.com/hofevqGT6CWIlQIogRAV'), linear-gradient(to bottom right, ${
          colorMode === 'light' ? 'rgb(239, 246, 255)' : 'rgba(29, 78, 216, .2)'
        }, ${
          colorMode === 'light' ? 'rgb(191, 219, 254)' : 'rgba(30, 58, 138, .2)'
        })`}*/
        backgroundRepeat="no-repeat"
        backgroundPosition="right bottom"
        w="100%"
        maxW="1000px"
        minH="350px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Heading
          as="h1"
          m={8}
          fontWeight="900"
          fontSize="4xl"
          maxW={['none', '45%']}
          lineHeight="tall"
          backdropFilter="blur(2px)"
          borderRadius="lg"
        >
          Easy way to find the perfect property
        </Heading>
      </Box>

      <Box mt={-24} mx="auto">
        <SegmentedControl connected items={['Buy', 'Rent']} />
        <Stack
          direction="row"
          backgroundColor={searchInputBackground}
          borderBottomRadius="lg"
          borderTopRightRadius="lg"
          maxW="800px"
          p={6}
          boxShadow="lg"
          spacing={6}
          align="flex-end"
        >
          <FormControl>
            <FormLabel htmlFor="location">Location</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Crosshair2Icon color={theme.colors.green[500]} />
              </InputLeftElement>
              <Input type="text" id="location" minW="300px" />
            </InputGroup>
          </FormControl>
          <Divider orientation="vertical" h="72px" />
          <FormControl>
            <FormLabel htmlFor="propertyType">Property type</FormLabel>
            <Select
              id="propertyType"
              placeholder="Choose a type"
              defaultValue={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="land">Land</option>
            </Select>
          </FormControl>

          <Link href={`/${propertyType}s`} passHref>
            <Button
              minW="fit-content"
              colorScheme="emerald"
              isDisabled={propertyType === undefined}
            >
              Search
            </Button>
          </Link>
        </Stack>

        {/* FEATURED */}

        <Heading
          as="h2"
          fontWeight="700"
          fontSize="3xl"
          lineHeight="tall"
          mb={8}
          mt={32}
        >
          Featured properties
        </Heading>
        <Stack direction="row" spacing={8} mb={24}>
          <Flex
            borderRadius="lg"
            w="full"
            h="250px"
            align="flex-end"
            p={4}
            background="url('https://img.nepremicnine.link//slonep_oglasi2/8551669.jpg')"
            backgroundSize="cover"
          >
            <Flex
              justify="space-between"
              align="center"
              backgroundColor={searchInputBackground}
              borderRadius="md"
              w="full"
              p={2}
            >
              <Text>Grosuplje</Text>
              <Button size="sm" colorScheme="emerald" variant="ghost">
                €300k
              </Button>
            </Flex>
          </Flex>
          <Flex
            borderRadius="lg"
            w="full"
            h="250px"
            align="flex-end"
            p={4}
            background="url('https://img.nepremicnine.link//slonep_oglasi2/8551669.jpg')"
            backgroundSize="cover"
          >
            <Flex
              justify="space-between"
              align="center"
              backgroundColor={searchInputBackground}
              borderRadius="md"
              w="full"
              p={2}
            >
              <Text>Grosuplje</Text>
              <Button size="sm" colorScheme="emerald" variant="ghost">
                €300k
              </Button>
            </Flex>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default Index;
