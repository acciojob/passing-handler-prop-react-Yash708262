import React, { useState } from 'react';

const Selection = ({ color }) => {
  const [boxColors, setBoxColors] = useState([
    "rgb(239, 239, 239)", // Box 1 default grey
    "rgb(239, 239, 239)", // Box 2
    "rgb(239, 239, 239)"  // Box 3
  ]);

  const changeBoxColor = (index) => {
    const newColors = [...boxColors];
    newColors[index] = color;  // sirf jis box pe click hua uska color change hoga
    setBoxColors(newColors);
  };

  return (
    <div>
      <div
        className="fix-box"
        style={{ backgroundColor: boxColors[0], width: "100px", height: "100px", margin: "5px" }}
        onClick={() => changeBoxColor(0)}
      ></div>
      <div
        className="fix-box"
        style={{ backgroundColor: boxColors[1], width: "100px", height: "100px", margin: "5px" }}
        onClick={() => changeBoxColor(1)}
      ></div>
      <div
        className="fix-box"
        style={{ backgroundColor: boxColors[2], width: "100px", height: "100px", margin: "5px" }}
        onClick={() => changeBoxColor(2)}
      ></div>
    </div>
  );
};

export default Selection;
