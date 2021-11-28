import React from 'react';
import {
  HStack,
  Flex,
  Divider,
  Input,
  InputLeftElement,
  InputGroup,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SearchIcon } from '@chakra-ui/icons';
import { DarkModeSwitch } from '@atoms/dark-mode-switch';
import { LogoIcon } from '@atoms/icons';

const Navigation = () => {
  const iconColor = useColorModeValue('gray.300', 'gray.700');
  const inactiveColor = useColorModeValue('gray.600', 'gray.400');
  const router = useRouter();

  return (
    <>
      <HStack py={2} px={4} justify="space-between" w="100%">
        <HStack spacing={5}>
          <Link href="/" passHref>
            <Button
              as="a"
              fontWeight="500"
              variant="link"
              color={inactiveColor}
              colorScheme="emerald"
              isActive={router.asPath === `/`}
            >
              Home
            </Button>
          </Link>
          <Link href="/create" passHref>
            <Button
              as="a"
              fontWeight="500"
              variant="link"
              color={inactiveColor}
              colorScheme="emerald"
              isActive={router.asPath === `/create`}
            >
              Sellers
            </Button>
          </Link>
          <Button
            as="a"
            fontWeight="500"
            variant="link"
            color={inactiveColor}
            colorScheme="emerald"
            isActive={router.asPath === `/agents`}
          >
            Agents
          </Button>
        </HStack>
        <Flex align="center">
          <Link href="/">
            <a>
              <LogoIcon h={8} w="auto" />
            </a>
          </Link>
        </Flex>
        <HStack>
          <InputGroup minW="250px" size="sm">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color={iconColor} />
            </InputLeftElement>
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
