import React from 'react';

interface ResourceIconProps {
  resource: string;
}

const ResourceIcon: React.FC<ResourceIconProps> = ({ resource }) => {
  return (
    <img src={`/pages/${resource}.png`} alt={`${resource} icon`} width={"50"} height={"50"} />
  );
}

export default ResourceIcon;