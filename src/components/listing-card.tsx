import React from "react";
import {
	Box,
	Image,
	Text,
	HStack,
	Flex,
	Heading,
	Badge,
	Divider,
	useColorModeValue,
} from "@chakra-ui/react";
import {
	BathIcon,
	BedIcon,
	FloorIcon,
	PlotIcon,
	DrawingPinIcon,
} from "./icons";

type CardProps = {
	image: string;
	title: string;
	bed: number;
	bath: number;
	floor: number;
	plot: number;
	pricing: number;
	location: string;
};

const eurFormatter = new Intl.NumberFormat("de-DE", {
	style: "currency",
	currency: "EUR",
	maximumSignificantDigits: 2,
});

const Card = ({
	image,
	title,
	bed,
	bath,
	floor,
	plot,
	pricing,
	location,
}: CardProps) => {
	const borderColor = useColorModeValue("gray.100", "gray.700");

	return (
		<Box maxW="375px" p={2} borderRadius="xl">
			<Image src={image} alt="Lipahova" borderRadius="md" mb={4} w="100%" />
			<Flex justify="space-between" align="center">
				<Text fontSize="xl" fontWeight="800">
					{eurFormatter.format(pricing)}
				</Text>
				<Badge
					colorScheme="emerald"
					fontSize="lg"
					borderRadius="lg"
					textTransform="capitalize"
				>
					<DrawingPinIcon mr={2} />
					<Text d="inline-flex">{location}</Text>
				</Badge>
			</Flex>
			<Heading fontWeight="400" fontSize="lg" mt={2}>
				{title}
			</Heading>

			<Divider my={3} borderColor={borderColor} />

			<HStack justify="space-between" mt={4}>
				<Flex align="center">
					<BedIcon mr={3} />
					<Text>{bed}</Text>
				</Flex>
				<Flex align="center">
					<BathIcon mr={3} />
					<Text>{bath}</Text>
				</Flex>
				<Flex align="center">
					<FloorIcon mr={3} />
					<Text>{floor} m²</Text>
				</Flex>
				<Flex align="center">
					<PlotIcon mr={3} />
					<Text>{plot} m²</Text>
				</Flex>
			</HStack>
		</Box>
	);
};

export default Card;

export const houses = [
	{
		title: "Lipahova modern STUDIO, 2 parking spaces",
		image:
			"https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=F_2-u67epqDooLnvs3Y7sw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=57.615944&amp;pitch=0&amp;thumbfov=100",
		location: "Lj — Vič",
		totalPrice: 100000,
		pricePerMeterSq: 3703.7,
		plot: 42,
		size: 28,
		bed: 1,
		bath: 1,
		address: {
			street: "Lipahova ulica 9",
			city: "Ljubljana",
			postalCode: 1000,
		},
	},
	{
		title: "Beautiful family home with a garden and garage",
		image:
			"https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=ecobSvsqwYTeQmZ0CH9ArQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=13.3048525&pitch=0&thumbfov=100",
		location: "Grosuplje",
		totalPrice: 400000,
		pricePerMeterSq: 2857.143,
		plot: 524,
		size: 140,
		bed: 4,
		bath: 2,
		address: {
			street: "Metelkov dvor 10",
			city: "Grosuplje",
			postalCode: 1290,
		},
	},
	{
		title: "Lipahova modern STUDIO, 2 parking spaces",
		image:
			"https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=F_2-u67epqDooLnvs3Y7sw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=57.615944&amp;pitch=0&amp;thumbfov=100",
		location: "Lj — Vič",
		totalPrice: 100000,
		pricePerMeterSq: 3703.7,
		plot: 42,
		size: 28,
		bed: 1,
		bath: 1,
		address: {
			street: "Lipahova ulica 9",
			city: "Ljubljana",
			postalCode: 1000,
		},
	},
	{
		title: "Beautiful family home with a garden and garage",
		image:
			"https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=ecobSvsqwYTeQmZ0CH9ArQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=13.3048525&pitch=0&thumbfov=100",
		location: "Grosuplje",
		totalPrice: 400000,
		pricePerMeterSq: 2857.143,
		plot: 524,
		size: 140,
		bed: 4,
		bath: 2,
		address: {
			street: "Metelkov dvor 10",
			city: "Grosuplje",
			postalCode: 1290,
		},
	},
];
