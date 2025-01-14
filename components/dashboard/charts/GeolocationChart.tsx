'use client';

import React, { useState } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from "react-simple-maps";

import geoUrl from "@/public/maps/world-110m.json";

type MarkerData = {
    id: number;
    name: string;
    coordinates: [number, number];
    details: string;
};

const markers: MarkerData[] = [
    { id: 1, name: "Nigeria", coordinates: [7.4951, 9.082], details: "Bookings: 500K, Users: 211M" },
    { id: 2, name: "United Kingdom", coordinates: [-0.1276, 51.5074], details: "Bookings: 350K, Users: 67M" }
];


const GeolocationChart: React.FC = () => {

    const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);

    const handleMarkerClick = (marker: MarkerData) => {
        setSelectedMarker(marker);
    };

    return (
        <div className="h-60 2xl:h-72 w-full relative overflow-hidden">
            <ComposableMap
                className="h-full w-full -mt-8"
                style={{
                    height: "100%",
                }}>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                style={{
                                    default: { fill: "#e1e1e1", outline: "none" },
                                    hover: { fill: "#000", outline: "none" },
                                    pressed: { fill: "#000", outline: "none" },
                                }}
                            />
                        ))
                    }
                </Geographies>
                {markers.map((marker) => (
                    <Marker key={marker.id} coordinates={marker.coordinates}>

                        <circle
                            r={20} 
                            fill="none"
                            stroke="#FA7026"
                            strokeWidth={2}
                        />

                        <circle
                            r={16} 
                            fill="#FA7026" 
                            onClick={() => handleMarkerClick(marker)}
                            onMouseOver={(e) => e.currentTarget.setAttribute("fill", "#8F8F8F")} 
                            onMouseOut={(e) => e.currentTarget.setAttribute("fill", "#FA7026")} 
                            style={{ cursor: "pointer" }}
                        />

                    </Marker>

                ))}
            </ComposableMap>

            {selectedMarker && (
                <div className="absolute bg-white p-4 max-w-xl border border-gray-300 shadow-lg rounded-md"
                    style={{ top: "20px", left: "50%", transform: "translateX(-50%)" }}>

                    <h3 className="text-xs sm:text-sm font-semibold">{selectedMarker.name}</h3>
                    <p className="text-[11px] sm:text-xs text-gray-700">{selectedMarker.details}</p>

                    <button
                        className="mt-2 text-xs text-primary underline"
                        onClick={() => setSelectedMarker(null)}>
                        Close
                    </button>

                </div>
            )}
        </div>
    );
};

export default GeolocationChart;
