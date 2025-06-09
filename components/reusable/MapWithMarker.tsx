import React, { useEffect, useRef, useState } from 'react';

type Props = {
    coordinates: { latitude: number; longitude: number };
    setCoordinates: (coords: { latitude: number; longitude: number }) => void;
};

const DEFAULT_COORDS = { latitude: 20, longitude: 0 }; 

const MapWithMarker = ({ coordinates, setCoordinates }: Props) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const markerRef = useRef<google.maps.Marker | null>(null);
    const mapInstanceRef = useRef<google.maps.Map | null>(null);
    const [mapReady, setMapReady] = useState(false);
    const [apiLoaded, setApiLoaded] = useState(false);

    useEffect(() => {
        if (window.google && window.google.maps) {
            setApiLoaded(true);
            return;
        }

        const checkApi = setInterval(() => {
            if (window.google && window.google.maps) {
                setApiLoaded(true);
                clearInterval(checkApi);
            }
        }, 100);

        return () => clearInterval(checkApi);
    }, []);

    // Initialize map when API is loaded
    useEffect(() => {
        if (!apiLoaded || !mapRef.current) return;

        const initialCoords = (coordinates.latitude === 0 && coordinates.longitude === 0)
            ? DEFAULT_COORDS
            : coordinates;

        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: initialCoords.latitude, lng: initialCoords.longitude },
            zoom: (coordinates.latitude === 0 && coordinates.longitude === 0) ? 2 : 15,
            streetViewControl: false,
            mapTypeControl: true,
            fullscreenControl: true,
        });

        mapInstanceRef.current = map;

        const marker = new window.google.maps.Marker({
            position: { lat: initialCoords.latitude, lng: initialCoords.longitude },
            map,
            draggable: true,
            visible: !(coordinates.latitude === 0 && coordinates.longitude === 0),
        });

        markerRef.current = marker;

        marker.addListener('dragend', (e: google.maps.MapMouseEvent) => {
            if (!e.latLng) return;
            const newCoords = {
                latitude: e.latLng.lat(),
                longitude: e.latLng.lng(),
            };
            setCoordinates(newCoords);
            marker.setVisible(true);
        });

        map.addListener('click', (e: google.maps.MapMouseEvent) => {
            if (!e.latLng) return;
            const newCoords = {
                latitude: e.latLng.lat(),
                longitude: e.latLng.lng(),
            };
            setCoordinates(newCoords);
            if (markerRef.current) {
                markerRef.current.setPosition(e.latLng);
                markerRef.current.setVisible(true);
            }
        });

        setMapReady(true);

        return () => {
            if (mapInstanceRef.current) {
                window.google.maps.event.clearInstanceListeners(mapInstanceRef.current);
            }
        };
    }, [apiLoaded]);

    useEffect(() => {
        if (!mapReady || !markerRef.current || !mapInstanceRef.current) return;

        const isDefault = coordinates.latitude === 0 && coordinates.longitude === 0;
        const pos = { lat: coordinates.latitude, lng: coordinates.longitude };

        mapInstanceRef.current.setCenter(pos);
        mapInstanceRef.current.setZoom(isDefault ? 2 : 15);

        markerRef.current.setPosition(pos);
        markerRef.current.setVisible(!isDefault);
    }, [coordinates, mapReady]);

    return (
        <div className="relative w-full h-[320px] rounded-xl border border-gray-200">
            <div ref={mapRef} className="absolute w-full h-full rounded-xl" />
            {!apiLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <p>Loading map...</p>
                </div>
            )}
        </div>
    );
};

export default MapWithMarker;