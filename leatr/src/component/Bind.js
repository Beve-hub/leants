import React, { useState } from 'react'

const Bind = () => {
    const [bind, setBind] = useState('Hello world!');

    const clickHandle = () => {
        setBind('goodbye');
    }


  return (
    <div>
      <p>{bind}</p>
      <button onClick={clickHandle}>click</button>
    </div>
  )
}

export default Bind
