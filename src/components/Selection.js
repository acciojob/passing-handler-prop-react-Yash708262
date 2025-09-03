import React from "react";

const boxStyle = {
  width: "100px",
  height: "100px",
  margin: "10px",
  border: "1px solid black",
  display: "inline-block",
};

const Selection = ({ color }) => {
  const appliedColor = color || "rgb(239, 239, 239)";

  return (
    <div>
      <div className="fix-box" style={{ ...boxStyle, backgroundColor: appliedColor }}></div>
      <div className="fix-box" style={{ ...boxStyle, backgroundColor: appliedColor }}></div>
      <div className="fix-box" style={{ ...boxStyle, backgroundColor: appliedColor }}></div>
    </div>
  );
};

export default Selection;
