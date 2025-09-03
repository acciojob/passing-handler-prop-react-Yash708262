import React from 'react'

const ColourSelector = ({ setColor }) => {
  return (
    <div>
      <button onClick={() => setColor('red')}>Red</button>
      <button onClick={() => setColor('green')}>Green</button>
      <button onClick={() => setColor('blue')}>Blue</button>
    </div>
  )
}

export default ColourSelector
