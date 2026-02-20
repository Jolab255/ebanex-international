"use client";

import DottedMapClass from "dotted-map/without-countries";
import { useMemo } from "react";
import mapData from "./map-data.json";

interface Marker {
    lat: number;
    lng: number;
    size?: number;
}

interface DottedMapProps {
    width?: number;
    height?: number;
    mapSamples?: number;
    markers?: Marker[];
    dotColor?: string;
    markerColor?: string;
    dotRadius?: number;
    className?: string;
    style?: React.CSSProperties;
}

export function DottedMap({
    width = 150,
    height = 75,
    mapSamples = 5500,
    markers = [],
    dotColor,
    markerColor = "#3b82f6",
    dotRadius = 0.22,
    className,
    style,
}: DottedMapProps) {
    const svgContent = useMemo(() => {
        // Use precomputed map data
        const map = new DottedMapClass({ map: mapData });

        // Add marker pins
        markers.forEach((marker) => {
            map.addPin({
                lat: marker.lat,
                lng: marker.lng,
                svgOptions: {
                    color: markerColor,
                    radius: marker.size ?? 0.4,
                },
            });
        });

        const svgStr = map.getSVG({
            radius: dotRadius,
            color: dotColor ?? "rgba(100, 160, 255, 0.4)",
            shape: "circle",
            backgroundColor: "transparent",
        });

        return svgStr;
    }, [width, height, markers, dotColor, markerColor, dotRadius]);

    return (
        <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`}
            alt="World map"
            className={className}
            style={{
                width: "100%",
                height: "100%",
                ...style,
            }}
        />
    );
}

export default DottedMap;
