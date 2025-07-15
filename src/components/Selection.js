import React, { useState } from "react";
import "../styles/Child.css"; 
import "../styles/App.css";

function Selection({ selectedColor }) {
  const [bgColor, setBgColor] = useState("");

  const applyColor = () => {
    if (selectedColor) {
      setBgColor(selectedColor);
    }
  };

  return (
    <div
      className="fix-box"
      onClick={applyColor}
      style={{ backgroundColor: bgColor }}
    ></div>
  );
}

export default Selection;
