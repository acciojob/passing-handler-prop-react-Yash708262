import React, { useState } from "react";
import ColourSelector from "./ColourSelector";
import Selection from "./Selection";

const colorConfig = [
  { color: "red" },
  { color: "blue" },
  { color: "green" },
];

function App() {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div>
      <h1>Color Picker</h1>
      <ColourSelector
        colorConfig={colorConfig}
        selectColor={(color) => setSelectedColor(color)}
      />

      {/* Three selection boxes */}
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
      </div>
    </div>
  );
}

export default App;