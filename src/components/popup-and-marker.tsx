import React, { useState } from 'react'
import { Marker, Popup } from "react-map-gl";
import { Image, Text, Box, useColorModeValue } from '@chakra-ui/react'
import { DrawingPinIcon } from './icons';

type PopupType = {
  latitude: number
  longitude: number
  image: string
  title: string
}

export const MarkerAndPopup = ({ latitude, longitude, image, title }: PopupType) => {
  const [showPopup, togglePopup] = useState(false);

  const markerColor = useColorModeValue("emerald.500", "emerald.300")
  return (
    <>
      <Marker latitude={latitude} longitude={longitude}>
        <DrawingPinIcon
          boxSize={6}
          color={markerColor}
          // onClick={() => togglePopup(!showPopup)}
          onMouseOver={() => togglePopup(!showPopup)}
          cursor="pointer"
        />
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
              w="100%"
            />
            <Text>{title}</Text>
          </Box>
        </Popup>
      )}
    </>
  )
}