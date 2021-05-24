import React from "react";
import { HStack, Flex, Box, Text, Divider } from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";

const Navigation = () => {
	return (
		<>
			<HStack p={2} justify="space-between">
				<Flex align="center">
					<Box boxSize={8} bgColor="emerald.500" mr={4} borderRadius="lg" />
					<Text>Nepremičnine Map</Text>
				</Flex>
				<HStack>
					<Text>Buy</Text>
					<Text>Sell</Text>
					<Text>Rent</Text>
					<DarkModeSwitch />
				</HStack>
			</HStack>
			<Divider />
		</>
	);
};

export default Navigation;
