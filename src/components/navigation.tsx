import React from "react";
import { HStack, Flex, Box, Text, Divider, Input, InputLeftElement, InputGroup, useColorModeValue } from "@chakra-ui/react";
import { DarkModeSwitch } from "./dark-mode-switch";
import { SearchIcon } from "@chakra-ui/icons";

const Navigation = () => {
	const iconColor = useColorModeValue("gray.300", "gray.700")
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
