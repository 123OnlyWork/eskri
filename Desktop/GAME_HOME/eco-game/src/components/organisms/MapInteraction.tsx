import { useMapEvents } from 'react-leaflet';

const MapInteraction: React.FC<{ onClick: (latlng: [number, number]) => void }> = ({ onClick }) => {
  useMapEvents({
    click: (e) => onClick([e.latlng.lat, e.latlng.lng]),
  });
  return null;
};

export default MapInteraction;
