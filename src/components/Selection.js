import React from 'react';

const boxStyle = {
  width: "100px",
  height: "100px",
  margin: "10px",
  border: "1px solid black",
  display: "inline-block"
};

const Selection = ({ color }) => {
  return (
    <div>
      <div className="fix-box" style={{ ...boxStyle, backgroundColor: color }}></div>
      <div className="fix-box" style={{ ...boxStyle, backgroundColor: color }}></div>
      <div className="fix-box" style={{ ...boxStyle, backgroundColor: color }}></div>
    </div>
  );
};

export default Selection;
