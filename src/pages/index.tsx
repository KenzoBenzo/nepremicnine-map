import React from 'react';
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import house from '../../public/House.png';
import SegmentedControl from '../components/atoms/segmented-control';

const Index = () => {
  const searchInputBackground = useColorModeValue('white', 'gray.900');
  return (
    <>
      <Box
        mt={20}
        bgGradient="linear(to-br, blue.50, blue.200)"
        background="url('https://media.graphcms.com/hofevqGT6CWIlQIogRAV'), linear-gradient(to bottom right, blue.50, blue.200)"
        w="100%"
        maxW="1000px"
        minH="350px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Heading m={8}>Easy way to find the perfect property</Heading>
      </Box>

      <Box mt={-28} mx="auto">
        <SegmentedControl items={['Rent', 'Buy']} />
        <Stack
          direction="row"
          backgroundColor={searchInputBackground}
          borderRadius="lg"
          maxW="800px"
          p={6}
          boxShadow="base"
        >
          <FormControl>
            <FormLabel htmlFor="location">Location</FormLabel>
            <Input type="text" id="location" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="location">Location</FormLabel>
            <Input type="text" id="location" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="location">Location</FormLabel>
            <Input type="text" id="location" />
          </FormControl>
        </Stack>
      </Box>
    </>
  );
};

export default Index;
