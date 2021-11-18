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
import { DarkModeSwitch } from '../atoms/dark-mode-switch';
import { SearchIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { LogoIcon } from '../atoms/icons';
import { useRouter } from 'next/router';

const Navigation = () => {
  const iconColor = useColorModeValue('gray.300', 'gray.700');
  const inactiveColor = useColorModeValue('gray.600', 'gray.400');
  const router = useRouter();

  return (
    <>
      <HStack p={2} justify="space-between" w="100%">
        <Flex align="center">
          <Link href="/">
            <a>
              <LogoIcon h={8} w="auto" />
            </a>
          </Link>
        </Flex>
        <HStack spacing={5}>
          <Link href="/">
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
          <Link href="/create">
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
        <HStack>
          <InputGroup minW="250px" size="sm">
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
