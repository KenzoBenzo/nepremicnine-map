import React, { useState, ReactNode } from 'react';
import ReactMapGL from 'react-map-gl';
import { useColorMode } from '@chakra-ui/react';

type MapProps = {
  children?: ReactNode;
};

function Map({ children }: MapProps) {
  const { colorMode } = useColorMode();
  const [viewport, setViewport] = useState({
    longitude: 14.48298366613581,
    latitude: 46.05818721172,
    zoom: 10,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={setViewport}
      mapStyle={
        colorMode === 'light'
          ? 'mapbox://styles/kenzobenzo/ckpaynybp2jww17l0ddkpe9y8'
          : 'mapbox://styles/kenzobenzo/ckpaysqeo2pkk17ms6xj7czhs'
      }
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
    >
      {children}
    </ReactMapGL>
  );
}

export default Map;
