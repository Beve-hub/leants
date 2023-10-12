import React, { useEffect, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [count])

    
  return (
    <div>
      {count}
    </div>
  )
}

export default Counter
