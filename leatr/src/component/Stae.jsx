import React, { useState } from 'react'

const Stae = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1); 
    }
     const decrement = () => {
        setCount(prevCount => prevCount - 1);
     }
  return (
    <div>
      <p>count : {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Stae
