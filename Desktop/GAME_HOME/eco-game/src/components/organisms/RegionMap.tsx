import React from 'react';

interface RegionMapProps {
  regions: string[];
}

const RegionMap: React.FC<RegionMapProps> = ({ regions }) => {
  return (
    <div className="region-map">
      <h2>Region Map</h2>
      <ul>
        {regions.map((region, index) => (
          <li key={index}>{region}</li>
        ))}
      </ul>
    </div>
  );
}

export default RegionMap;