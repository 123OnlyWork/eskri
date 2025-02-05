import React from 'react';

interface TaxInfoProps {
  taxRate: number;
  taxAmount: number;
}

const TaxInfo: React.FC<TaxInfoProps> = ({ taxRate, taxAmount }) => {
  return (
    <div className="tax-info">
      <h4>Tax Information</h4>
      <p>Tax Rate: {taxRate}%</p>
      <p>Tax Amount: ${taxAmount}</p>
    </div>
  );
}

export default TaxInfo;