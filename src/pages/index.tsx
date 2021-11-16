import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import house from '../../public/House.png';

const Index = () => {
  return (
    <Box
      mt={20}
      bgGradient="linear(to-br, blue.50, blue.200)"
      w="100%"
      maxW="1000px"
      minH="350px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Heading m={8}>Easy way to find the perfect property</Heading>
      <Flex w="full" justify="flex-end">
        <Image src={house} alt="Picture of a house" />
      </Flex>
    </Box>
  );
};

export default Index;
