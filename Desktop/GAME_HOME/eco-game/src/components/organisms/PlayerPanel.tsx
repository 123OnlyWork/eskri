import React from 'react';
import ResourceCard from '../molecules/ResourceCard';

interface PlayerPanelProps {
  playerName: string;
  resources: { resource: string, amount: number }[];
}

const PlayerPanel: React.FC<PlayerPanelProps> = ({ playerName, resources }) => {
  return (
    <div className="player-panel">
      <h2>{playerName}'s Panel</h2>
      {resources.map((res, index) => (
        <ResourceCard key={index} resource={res.resource} amount={res.amount} />
      ))}
    </div>
  );
}

export default PlayerPanel;