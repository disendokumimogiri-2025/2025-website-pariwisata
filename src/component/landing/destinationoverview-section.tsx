import React from "react";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function DestinationOverviewSection() {
    const mapContainerRef = React.useRef<HTMLDivElement | null>(null);
    React.useEffect(() => {
        if (!mapContainerRef.current) return;

        const map = new maplibregl.Map({
            container: mapContainerRef.current,
            style: `https://api.maptiler.com/maps/dataviz-dark/style.json?key=${import.meta.env.VITE_PUBLIC_TOKEN_MAP}`,
            center: [110.37833662342864, -7.940883389023307],
            zoom: 13,
            attributionControl: false,
            interactive: true,
        });

        map.dragPan.disable();
        map.scrollZoom.disable();
        map.doubleClickZoom.disable();
        map.touchZoomRotate.disable();
        map.dragRotate.disable();
        map.keyboard.disable();
        map.boxZoom.disable();

        map.on("click", (e) => {
            console.log({
                lat: e.lngLat.lat,
                long: e.lngLat.lng,
            });
        });

        return () => {
            map.remove();
        };
    }, []);
    return (
        <div className="w-full h-screen flex justify-center items-center xl:px-32 xl:py-48 md:p-16 p-10">
            <div className="w-full h-[100vw] md:h-[70vw] xl:h-[40vw] rounded-md">
                <div
                    ref={mapContainerRef}
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#0b1220",
                    }}
                />
            </div>
        </div>
    );
}
