import React, { useState } from 'react';
import Selection from './Selection';
import ColourSelector from './ColourSelector';

const App = () => {
  // default grey background
  const [color, setColor] = useState("rgb(239, 239, 239)");

  return (
    <div>
      <ColourSelector applyColor={setColor} />
      <Selection color={color} />
    </div>
  );
};

export default App;
