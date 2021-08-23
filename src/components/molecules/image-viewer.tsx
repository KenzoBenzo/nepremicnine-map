import React from 'react';
import { Box, Wrap, WrapItem } from '@chakra-ui/react';

type ImageViewerProps = {
  images: [string];
};

export const ImageViewer = ({ images }: ImageViewerProps) => {
  return (
    <Box mr={8}>
      <img src={images[0]} style={{ borderRadius: 8, marginBottom: 8 }} />
      <Wrap>
        {images.map((image: string, i: number) => (
          <WrapItem>
            <img
              style={{ maxWidth: '100px', borderRadius: 6 }}
              src={image}
              key={i}
            />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};
