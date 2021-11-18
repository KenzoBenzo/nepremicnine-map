import React from 'react';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import SegmentedControl from '../components/atoms/segmented-control';
import { Crosshair2Icon } from '@radix-ui/react-icons';

const Index = () => {
  const searchInputBackground = useColorModeValue('gray.50', 'gray.800');
  const { colorMode } = useColorMode();

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
              <InputLeftElement
                pointerEvents="none"
                children={<Crosshair2Icon />}
              />
              <Input type="text" id="location" />
            </InputGroup>
          </FormControl>
          <Divider orientation="vertical" h="72px" />
          <FormControl>
            <FormLabel htmlFor="type">Property type</FormLabel>
            <Select id="type" placeholder="Choose a type">
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="land">Land</option>
            </Select>
          </FormControl>
          <Divider orientation="vertical" h="72px" />
          <FormControl>
            <FormLabel htmlFor="price">Price range</FormLabel>
            <Select id="price">
              <option value="house">50k-100k</option>
              <option value="apartment">100k-200k</option>
              <option value="land">200k-300k</option>
              <option value="land">300k-500k</option>
            </Select>
          </FormControl>
          <Button minW="fit-content" colorScheme="emerald">
            Search
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Index;
