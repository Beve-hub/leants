import React from 'react'

function Clickcount({handleClick, count}) {
    
  return (
    <div>
      <button onClick={handleClick}>Click {count} times</button>
    </div>
  )
}

export default Clickcount
