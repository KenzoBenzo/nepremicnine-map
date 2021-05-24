import React from "react";
import { Container } from "../components/Container";
import dynamic from "next/dynamic";
import { Box, HStack, SimpleGrid } from "@chakra-ui/react";
import Navigation from "../components/navigation";
import Card, { houses } from "../components/listing-card";

const DynamicMapWithNoSSR = dynamic(() => import("../components/map"), {
	ssr: false,
});

const Index = () => {
	return (
		<Container height="100vh">
			<HStack align="flex-start" spacing={0} h="100%" w="100%">
				<Box w="100%" mx={8}>
					<Navigation />
					<SimpleGrid columns={4} minChildWidth="275px" spacing={8} my={8}>
						{houses.map((house) => (
							<Card
								image={house.image}
								title={house.title}
								bed={house.bed}
								bath={house.bath}
								floor={house.size}
								plot={house.plot}
								pricing={house.totalPrice}
								location={house.location}
							/>
						))}
					</SimpleGrid>
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
