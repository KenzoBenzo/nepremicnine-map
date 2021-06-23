import React from "react";
import { HStack, Flex, Box, Text, Divider, Input, InputLeftElement, InputGroup, useColorModeValue, Link } from "@chakra-ui/react";
import { DarkModeSwitch } from "./dark-mode-switch";
import { SearchIcon } from "@chakra-ui/icons";

const Navigation = () => {
	const iconColor = useColorModeValue("gray.300", "gray.700")
	const backgroundColor = useColorModeValue("white", "gray.900")
	return (
		<>
			<HStack p={2} justify="space-between" position='sticky' top={0} backgroundColor={backgroundColor} zIndex={10}>
				<Flex align="center">
					<Box boxSize={8} bgColor="emerald.500" mr={4} borderRadius="lg" />
					<Text>Nepremičnine Map</Text>
				</Flex>
				<HStack>
					<Link>Buy</Link>
					<Link>Sell</Link>
					<Link>Rent</Link>
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
			<Divider position='sticky' top="48px" />
		</>
	);
};

export default Navigation;
