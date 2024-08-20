import React, { useState, useEffect, useRef } from 'react';

import {
	APIProvider,
	ControlPosition,
	MapControl,
	AdvancedMarker,
	Map,
	useMap,
	useMapsLibrary,
	useAdvancedMarkerRef,
	AdvancedMarkerRef,
} from '@vis.gl/react-google-maps';

const API_KEY = process.env.GOOGLE_MAPS_API_KEY ?? '';

const GoogleMaps = () => {
	// const [selectedPlace, setSelectedPlace] =
	// 	useState<google.maps.places.PlaceResult | null>(null);
	// const [markerRef, marker] = useAdvancedMarkerRef();
	// const clearMaps = () => {
	// 	setSelectedPlace(null);
	// };
	return (
		<input
			type="url"
			className="w-full outline-none"
			placeholder="지도에서 위치정보를 복사해 넣어주세요"
		/>
	);
	// 		<APIProvider
	// 			apiKey={API_KEY}
	// 			solutionChannel="GMP_devsite_samples_v3_rgmautocomplete">
	// 			<div className="h-80 w-full flex flex-col ">
	// 				<button onClick={clearMaps}>click </button>
	// 				<div className="autocomplete-control">
	// 					<PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
	// 				</div>
	// 				<Map
	// 					mapId={'bf51a910020fa25a'}
	// 					defaultZoom={3}
	// 					defaultCenter={{ lat: 22.54992, lng: 0 }}
	// 					gestureHandling={'greedy'}
	// 					disableDefaultUI={true}>
	// 					<AdvancedMarker
	// 						ref={markerRef}
	// 						position={null}
	// 					/>
	// 				</Map>

	// 				<MapHandler
	// 					place={selectedPlace}
	// 					marker={marker}
	// 				/>
	// 			</div>
	// 		</APIProvider>
	// 	);
	// };

	// interface MapHandlerProps {
	// 	place: google.maps.places.PlaceResult | null;
	// 	marker: google.maps.marker.AdvancedMarkerElement | null;
	// }

	// const MapHandler = ({ place, marker }: MapHandlerProps) => {
	// 	const map = useMap();

	// 	useEffect(() => {
	// 		if (!map || !place || !marker) return;

	// 		if (place.geometry?.viewport) {
	// 			map.fitBounds(place.geometry?.viewport);
	// 		}
	// 		marker.position = place.geometry?.location;
	// 	}, [map, place, marker]);

	// 	return null;
	// };

	// interface PlaceAutocompleteProps {
	// 	onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
	// }

	// const PlaceAutocomplete = ({ onPlaceSelect }: PlaceAutocompleteProps) => {
	// 	const [placeAutocomplete, setPlaceAutocomplete] =
	// 		useState<google.maps.places.Autocomplete | null>(null);
	// 	const inputRef = useRef<HTMLInputElement>(null);
	// 	const places = useMapsLibrary('places');

	// 	useEffect(() => {
	// 		if (!places || !inputRef.current) return;

	// 		const options = {
	// 			fields: ['geometry', 'name', 'formatted_address'],
	// 		};

	// 		setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
	// 	}, [places]);

	// 	useEffect(() => {
	// 		if (!placeAutocomplete) return;

	// 		placeAutocomplete.addListener('place_changed', () => {
	// 			onPlaceSelect(placeAutocomplete.getPlace());
	// 		});
	// 	}, [onPlaceSelect, placeAutocomplete]);

	// 	return (
	// 		<div className="autocomplete-container">
	// 			<input ref={inputRef} />
	// 		</div>
	// 	);
};

export default GoogleMaps;
