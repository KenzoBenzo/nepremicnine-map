import React from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';
import Navigation from '@organisms/navigation';

export const Layout = (props: FlexProps) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      height="100vh"
      w="100%"
      {...props}
    >
      <Navigation />
      {props?.children}
    </Flex>
  );
};
