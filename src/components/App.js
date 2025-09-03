import React, { useState } from 'react';
import Selection from './Selection';
import ColourSelector from './ColourSelector';

const App = () => {
  const [color, setColor] = useState("white"); 

  return (
    <div>
      <ColourSelector applyColor={setColor} />
      <Selection color={color} />
    </div>
  );
};

export default App;
