import React from "react";

function ColourSelector({ colorConfig, selectColor }) {
  return (
    <div>
      {colorConfig.map((item, index) => (
        <button
          key={index}
          onClick={() => selectColor(item.color)}
          style={{ marginRight: "10px" }}
        >
          {item.color}
        </button>
      ))}
    </div>
  );
}

export default ColourSelector;