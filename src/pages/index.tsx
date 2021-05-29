import React from "react";
import { Container } from "../components/Container";
import dynamic from "next/dynamic";
import { Box, HStack } from "@chakra-ui/react";
import Navigation from "../components/navigation";
// import Card, { houses } from "../components/listing-card";
import ListingGrid from "../components/listing-grid";


const DynamicMapWithNoSSR = dynamic(() => import("../components/map"), {
  ssr: false,
});



const Index = () => {

  return (
    <Container height="100vh">
      <HStack align="flex-start" spacing={0} h="100vh" w="100%" overflow='auto'>
        <Box w="100%" mx={8}>
          <Navigation />
          <ListingGrid />
        </Box>
        <Box h="100%" w="100%" maxW={600} />
        <Box
          h="100%"
          w="100%"
          maxW={600}
          position="fixed"
          top={0}
          right={0}
          bottom={0}
        >
          <DynamicMapWithNoSSR />
        </Box>
      </HStack>
    </Container>
  );
};

export default Index;