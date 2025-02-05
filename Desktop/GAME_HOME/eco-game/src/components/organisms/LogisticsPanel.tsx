import React from 'react';
import ProductionChain from '../molecules/ProductionChain';

interface LogisticsPanelProps {
  chains: string[][];
}

const LogisticsPanel: React.FC<LogisticsPanelProps> = ({ chains }) => {
  return (
    <div className="logistics-panel">
      <h2>Logistics Panel</h2>
      {chains.map((chain, index) => (
        <ProductionChain key={index} chain={chain} />
      ))}
    </div>
  );
}

export default LogisticsPanel;