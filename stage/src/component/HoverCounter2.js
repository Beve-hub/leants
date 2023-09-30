import React from 'react'

function HoverCounter2({count, handleClick}) {
    
  return (
    <div>
      <h2 onMouseMove={handleClick}> Hovered {count} times</h2>
    </div>
  )
}

export default HoverCounter2
