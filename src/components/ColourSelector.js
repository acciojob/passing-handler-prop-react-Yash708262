import React from "react";

const ColourSelector = ({ applyColor }) => {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <button
        data-testid="blue"
        onClick={() => applyColor("blue")}
        style={{ backgroundColor: "blue", color: "white", padding: "10px" }}
      >
        Blue
      </button>

      <button
        data-testid="orange"
        onClick={() => applyColor("orange")}
        style={{ backgroundColor: "orange", color: "white", padding: "10px" }}
      >
        Orange
      </button>

      <button
        data-testid="green"
        onClick={() => applyColor("green")}
        style={{ backgroundColor: "green", color: "white", padding: "10px" }}
      >
        Green
      </button>
    </div>
  );
};

export default ColourSelector;
