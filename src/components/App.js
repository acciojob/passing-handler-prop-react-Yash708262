import React, { useState } from 'react'
import Selection from './Selection';
import ColourSelector from './ColourSelector';

const App = () => {
  const [color, setColor] = useState();
  return (
    <div>
      <Selection color={color} />
      <ColourSelector setColor={setColor} />
    </div>
  )
}

export default App
