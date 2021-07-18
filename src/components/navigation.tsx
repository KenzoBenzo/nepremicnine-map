import React from 'react';
import {
  HStack,
  Flex,
  Link as ChakraLink,
  Divider,
  Input,
  InputLeftElement,
  InputGroup,
  useColorModeValue,
} from '@chakra-ui/react';
import { DarkModeSwitch } from './dark-mode-switch';
import { SearchIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { LogoIcon } from './icons';

const Navigation = () => {
  const iconColor = useColorModeValue('gray.300', 'gray.700');
  return (
    <>
      <HStack p={2} justify="space-between" w="100%">
        <Flex align="center">
          <LogoIcon h={8} w="auto" />
        </Flex>
        <HStack>
          <Link href="/">
            <ChakraLink>Buy</ChakraLink>
          </Link>
          <Link href="/create">
            <ChakraLink>Sell</ChakraLink>
          </Link>
          <ChakraLink>Rent</ChakraLink>
        </HStack>
        <HStack>
          <InputGroup maxW="200px" size="sm">
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color={iconColor} />}
            />
            <Input type="text" borderRadius="md" placeholder="Search" />
          </InputGroup>
          <DarkModeSwitch />
        </HStack>
      </HStack>
      <Divider />
    </>
  );
};

export default Navigation;
