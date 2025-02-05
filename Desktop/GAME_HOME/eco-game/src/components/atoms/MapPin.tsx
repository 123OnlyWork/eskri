import React from "react";

interface MapPinProps {
  position: { lat: number; lng: number };
}

const MapPin: React.FC<MapPinProps> = ({ position }) => (
  <div style={{ position: "absolute", top: position.lat, left: position.lng }}>
    📍
  </div>
);

export default MapPin;
