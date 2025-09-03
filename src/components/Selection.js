import React, { useState } from "react";

const Selection = ({ color }) => {
  const [boxColors, setBoxColors] = useState([
    "rgb(239, 239, 239)",
    "rgb(239, 239, 239)",
    "rgb(239, 239, 239)"
  ]);

  const changeBoxColor = (index) => {
    const newColors = [...boxColors];
    newColors[index] = color;
    setBoxColors(newColors);
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {boxColors.map((boxColor, index) => (
        <div
          key={index}
          className="fix-box"
          style={{
            backgroundColor: boxColor,
            width: "100px",
            height: "100px",
            border: "1px solid black",
          }}
          onClick={() => changeBoxColor(index)}
        ></div>
      ))}
    </div>
  );
};

export default Selection;
