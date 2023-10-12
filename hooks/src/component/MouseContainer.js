import React, { useState } from 'react'
import HookMount from './HookMount'

function MouseContainer() {

    const [display,setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display && <HookMount/>}
    </div>
  )
}

export default MouseContainer
