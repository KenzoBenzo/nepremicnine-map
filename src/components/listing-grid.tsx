import React, { ReactNode } from "react";
import { SimpleGrid } from "@chakra-ui/react";


type GridProps = {
  children: ReactNode
}

const ListingGrid = ({ children }: GridProps) => {
  return (
    <SimpleGrid columns={4} minChildWidth="275px" spacing={8} my={8}>
      {children}
    </SimpleGrid>
  );
};

export default ListingGrid;
