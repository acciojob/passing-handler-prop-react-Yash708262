import React from 'react';

const ColourSelector = ({ applyColor }) => {
  return (
    <div>
      <button data-testid="blue" onClick={() => applyColor('blue')}>Blue</button>
      <button data-testid="orange" onClick={() => applyColor('orange')}>Orange</button>
      <button data-testid="green" onClick={() => applyColor('green')}>Green</button>
    </div>
  );
};

export default ColourSelector;
