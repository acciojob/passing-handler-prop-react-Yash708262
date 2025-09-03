import React from 'react';

const ColourSelector = ({ applyColor }) => {
  return (
    <div>
      <button onClick={() => applyColor('red')}>Red</button>
      <button onClick={() => applyColor('green')}>Green</button>
      <button onClick={() => applyColor('blue')}>Blue</button>
    </div>
  );
};

export default ColourSelector;
