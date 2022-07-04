import React, { useState } from 'react';
import { Box, Image, Wrap, WrapItem } from '@chakra-ui/react';

type ImageViewerProps = {
  images: [string];
};

export const ImageViewer = ({ images }: ImageViewerProps) => {
  const [imageSelected, setImageSelected] = useState(images[0]);

  return (
    <Box mr={8}>
      <Image
        src={imageSelected}
        style={{ borderRadius: 8, marginBottom: 8 }}
        alt="Cover image of the property"
      />
      <Wrap>
        {images.map((image: string, i: number) => (
          <WrapItem key={i}>
            <Image
              key={i}
              onClick={() => setImageSelected(image)}
              alt={`Image ${i + 1} of property`}
              maxW="100px"
              borderRadius="md"
              outline={imageSelected === image ? `2px solid` : 'none'}
              outlineColor={imageSelected === image ? 'emerald.500' : 'none'}
              outlineOffset="1px"
              src={image}
              cursor="pointer"
            />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};
