import React, { useState } from "react";
import Selection from "./Selection";
import ColourSelector from "./ColourSelector";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("rgb(239, 239, 239)");

  return (
    <div>
      <ColourSelector applyColor={setSelectedColor} />
      <Selection color={selectedColor} />
    </div>
  );
};

export default App;
