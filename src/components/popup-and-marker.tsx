import React, { useState } from 'react';
import { Marker, Popup } from 'react-map-gl';
import { Image, Text, Box, useColorModeValue } from '@chakra-ui/react';
import { eurFormatter } from '../utils/euro-formatter';

type PopupType = {
  latitude: number;
  longitude: number;
  image: string;
  title: string;
  price: number;
};

export const MarkerAndPopup = ({
  latitude,
  longitude,
  image,
  title,
  price,
}: PopupType) => {
  const [showPopup, togglePopup] = useState(false);

  const markerColor = useColorModeValue('emerald.500', 'emerald.200');
  const textColor = useColorModeValue('white', 'gray.900');
  return (
    <>
      <Marker latitude={latitude} longitude={longitude}>
        <Box>
          <Box
            backgroundColor={markerColor}
            color={textColor}
            p={1}
            borderRadius="md"
            onMouseOver={() => togglePopup(!showPopup)}
            onMouseLeave={() => togglePopup(!showPopup)}
            fontWeight="700"
            cursor="pointer"
          >
            {eurFormatter.format(price)}
          </Box>
          <Box
            w={0}
            h={0}
            mx="auto"
            borderLeft="6px solid #0000"
            borderRight="6px solid #0000"
            borderTop="6px solid"
            borderTopColor={markerColor}
          />
        </Box>
        {/* <DrawingPinIcon
          boxSize={6}
          color={markerColor}
          // onClick={() => togglePopup(!showPopup)}
          onMouseOver={() => togglePopup(!showPopup)}
          cursor="pointer"
        /> */}
      </Marker>
      {showPopup && (
        <Popup
          latitude={latitude}
          longitude={longitude}
          closeButton={true}
          closeOnClick={false}
          onClose={() => togglePopup(false)}
          offsetLeft={8}
          tipSize={8}
        >
          <Box p={2}>
            <Image
              src={image}
              alt={title}
              borderRadius="md"
              mb={4}
              maxW="375px"
              h="auto"
            />
            <Text color="gray.900">{title}</Text>
          </Box>
        </Popup>
      )}
    </>
  );
};
