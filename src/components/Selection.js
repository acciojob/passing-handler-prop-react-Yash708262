
import React from 'react'

const Selection = ({ color }) => {
  return (
     <div>
      <div className="fix-box" style={{ backgroundColor: color }}></div>
      <div className="fix-box" style={{ backgroundColor: color }}></div>
      <div className="fix-box" style={{ backgroundColor: color }}></div>
    </div>
  )
}

export default Selection
