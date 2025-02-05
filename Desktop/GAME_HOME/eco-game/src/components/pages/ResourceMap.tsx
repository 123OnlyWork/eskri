import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import regions from '../../data/regions.json';
import resources from '../../data/resources.json';
import ResourceIcon from '../atoms/ResourceIcon.tsx';
import MainLayout from '../templates/MainLayout.tsx';
import Header from '../organisms/Header.tsx';
import '../../styles/App.css'

// Функция для создания иконки ресурсов
const createIcon = (iconUrl: string) => {
  return L.divIcon({
    html: `<img src="${iconUrl}" alt="resource" style="width: 40px; height: 40px; border-radius: 50%;" />`, // Уменьшение размера до 40px
    iconSize: [40, 40], // Уменьшение размера иконки
    iconAnchor: [20, 40], // Привязка иконки теперь будет в центре нижней части
    popupAnchor: [0, -40], // Сдвиг всплывающего окна
  });
};

const defaultRouteIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png', // Стандартная иконка
  iconSize: [25, 41], // Размер иконки
  iconAnchor: [12, 41], // Точка привязки иконки
  
});



// Компонент для обработки кликов по карте
const ClickHandler: React.FC<{ onClick: (latlng: [number, number]) => void }> = ({ onClick }) => {
  useMapEvents({
    click: (e) => onClick([e.latlng.lat, e.latlng.lng]),
  });
  return null;
};

const ResourceMap: React.FC = () => {
  const [routePoints, setRoutePoints] = useState<[number, number][]>([]);
  const [route, setRoute] = useState<[number, number][]>([]);
  const [distance, setDistance] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);

  // Определяем границы для ограничения карты
  const bounds = [
    [40.0, 40.0],  // Юго-западная граница
    [75.0, 150.0], // Северо-восточная граница
  ];

  const getRegionCoordinates = (regionName: string) => {
    const region = regions.find(region => region.name === regionName);
    return region ? region.coordinates : null;
  };

  // Функция для выбора точек маршрута
  const handleMapClick = (latlng: [number, number]) => {
    if (routePoints.length === 2) {
      setRoutePoints([latlng]); // Начинаем заново
      setRoute([]); // Очищаем маршрут
      setDistance(null);
      setDuration(null);
    } else {
      setRoutePoints([...routePoints, latlng]);
      if (routePoints.length === 1) {
        fetchRoute(routePoints[0], latlng);
      }
    }
  };
  
  const routeMarkers = routePoints.map((point, index) => (
    <Marker
      key={index}
      position={point}
      icon={defaultRouteIcon} // Используем дефолтный маркер
    >
      <Popup>
        <div>Точка {index + 1}</div>
      </Popup>
    </Marker>
  ));
  

  // Функция для запроса маршрута у OSRM
  const fetchRoute = async (start: [number, number], end: [number, number]) => {
    const url = `https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.routes.length > 0) {
        const routeData = data.routes[0];
        const coordinates = routeData.geometry.coordinates.map((c: [number, number]) => [c[1], c[0]]);
        setRoute(coordinates);
        setDistance(routeData.distance / 1000); // Конвертируем в километры
        setDuration(routeData.duration / 60); // Конвертируем в минуты
      }
    } catch (error) {
      console.error('Ошибка при получении маршрута:', error);
    }
  };

  // Функция для очистки маршрута
  const clearRoute = () => {
    setRoutePoints([]);
    setRoute([]);
    setDistance(null);
    setDuration(null);
  };

  const resourceMarkers = resources.flatMap(resource =>
    resource.regions.map((regionName, index) => {
      const coordinates = getRegionCoordinates(regionName);
      if (!coordinates) return null;

      // Смещение маркеров для избежания наложений
      const radius = 0.35 * index;
      const angle = (index * 45) * (Math.PI / 180);

      const offsetCoordinates: [number, number] = [
        coordinates[0] + radius * Math.cos(angle),
        coordinates[1] + radius * Math.sin(angle),
      ];

      const iconUrl = `/pages/${resource.resource}.png`;

      return (
       <Marker key={`${resource.resource}-${regionName}`} position={offsetCoordinates} icon={createIcon(iconUrl)}>
  <Popup>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ResourceIcon resource={resource.resource} />
        <span style={{ marginLeft: '8px' }}>{resource.resource} - {regionName}</span>
      </div>
      <button 
        onClick={() => handleMapClick(offsetCoordinates)}
        style={{ marginTop: '5px', padding: '5px 10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Начальный маршрут
      </button>
      <button 
        onClick={() => {
          if (routePoints.length === 0) {
            alert("Сначала выберите начальную точку!");
          } else {
            handleMapClick(offsetCoordinates);
          }
        }}
        style={{ marginTop: '5px', padding: '5px 10px', backgroundColor: '#FF5733', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Конечный маршрут
      </button>
    </div>
  </Popup>
</Marker>
      );
    })
  );

  return (
    <MainLayout>
      <Header />
      <div style={{ position: 'absolute', top: '70px', right: '20px', zIndex: 1000, backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '10px', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0,0,0,0.2)' }}>
        {distance !== null && duration !== null && (
          <div>
            <p><strong>Расстояние:</strong> {distance.toFixed(2)} км</p>
            <p><strong>Время в пути:</strong> {duration.toFixed(2)} мин</p>
          </div>
        )}
        <button onClick={clearRoute} style={{ marginTop: '10px', padding: '8px 12px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Очистить маршрут
        </button>
      </div>

      <MapContainer
        center={[60, 100]}
        zoom={4}
        style={{
          position: 'absolute',
          top: '60px',
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: 'calc(100vh - 60px)',
        }}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ClickHandler onClick={handleMapClick} />
        {resourceMarkers}
        {routeMarkers}

        {/* Отображаем выбранные точки */}
        {routePoints.map((point, index) => (
          <Marker key={index} position={point} />
        ))}

        {/* Отображение маршрута */}
        {route.length > 0 && <Polyline positions={route} color="blue" />}
      </MapContainer>
    </MainLayout>
  );
};

export default ResourceMap;
