import React     from 'react'
import useCounter from '../Hooks/useCounter'

function Custom() {
    const [count, increments, decrements, reset] = useCounter()

  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increments}>Increment</button>
      <button onClick={decrements}>decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Custom
