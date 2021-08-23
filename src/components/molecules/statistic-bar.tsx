import React from 'react';
import {
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { BedIcon, BathIcon, FloorIcon, PlotIcon } from '../atoms/icons';

type StatisticBarProps = {
  bedRooms: number;
  bathRooms: number;
  floorSize: number;
  plotSize: number;
};

export const StatisticBar = ({
  bedRooms,
  bathRooms,
  floorSize,
  plotSize,
}: StatisticBarProps) => {
  const cardColor = useColorModeValue('white', 'gray.800');
  return (
    <Stack
      w="full"
      direction="row"
      justify="space-between"
      mb={16}
      p={4}
      backgroundColor={cardColor}
      boxShadow="md"
      borderRadius="lg"
    >
      <Stat maxW="fit-content">
        <StatLabel>Bedrooms</StatLabel>
        <StatNumber>
          <BedIcon mr={2} />
          {bedRooms}
        </StatNumber>
      </Stat>

      <Stat maxW="fit-content">
        <StatLabel>Bathrooms</StatLabel>
        <StatNumber alignItems="center" lineHeight="1">
          <BathIcon mr={2} />
          {bathRooms}
        </StatNumber>
      </Stat>

      <Stat maxW="fit-content">
        <StatLabel>Floor size</StatLabel>
        <StatNumber alignItems="center" lineHeight="1">
          <FloorIcon mr={2} /> {floorSize} m²
        </StatNumber>
      </Stat>

      <Stat maxW="fit-content">
        <StatLabel>Plot size</StatLabel>
        <StatNumber alignItems="center" lineHeight="1">
          <PlotIcon mr={2} /> {plotSize} m²
        </StatNumber>
      </Stat>
    </Stack>
  );
};
