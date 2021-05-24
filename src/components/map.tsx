import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Box, Text, Image, useColorMode } from "@chakra-ui/react";
import { DrawingPinIcon } from "./icons";

function Map() {
	const { colorMode } = useColorMode();
	const [viewport, setViewport] = useState({
		longitude: 14.5058,
		latitude: 46.0569,
		zoom: 11.5,
	});
	const [showPopup, togglePopup] = useState(false);

	return (
		<ReactMapGL
			{...viewport}
			width="100%"
			height="100%"
			onViewportChange={setViewport}
			mapStyle={
				colorMode === "light"
					? "mapbox://styles/mapbox/streets-v11"
					: "mapbox://styles/mapbox/dark-v10"
			}
			mapboxApiAccessToken="pk.eyJ1Ijoia2Vuem9iZW56byIsImEiOiJja3AxODJzOXIxYTFsMnhtY2xoMG14b2x4In0.bupRcs8aD0hGKytVHcbKjQ"
		>
			<Marker latitude={46.03372400420113} longitude={14.461537798720004}>
				<DrawingPinIcon
					boxSize={6}
					color="red.500"
					onClick={() => togglePopup(!showPopup)}
					cursor="pointer"
				/>
			</Marker>
			{showPopup && (
				<Popup
					latitude={46.03372400420113}
					longitude={14.461537798720004}
					closeButton={true}
					closeOnClick={false}
					onClose={() => togglePopup(false)}
					offsetLeft={8}
					tipSize={8}
				>
					<Box p={2}>
						<Image
							src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=F_2-u67epqDooLnvs3Y7sw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=57.615944&amp;pitch=0&amp;thumbfov=100"
							alt="Lipahova"
							borderRadius="md"
							mb={4}
							w="100%"
						/>
						<Text>Lipahova ulica 9, 1000 Ljubljana</Text>
					</Box>
				</Popup>
			)}
		</ReactMapGL>
	);
}

export default Map;
