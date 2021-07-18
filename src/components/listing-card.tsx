import React from 'react';
import {
  Box,
  Image,
  Text,
  HStack,
  Flex,
  Badge,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  BathIcon,
  BedIcon,
  FloorIcon,
  PlotIcon,
  DrawingPinIcon,
} from './icons';
import { eurFormatter } from '../utils/euro-formatter';

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
  const borderColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box maxW="375px" p={2} borderRadius="xl">
      <Image
        src={image}
        alt={`Cover image of ${title}`}
        borderRadius="md"
        mb={4}
        maxH="200px"
        w="100%"
      />
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
      <Text fontWeight="400" fontSize="lg" mt={2} minH={14} noOfLines={2}>
        {title}
      </Text>

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
