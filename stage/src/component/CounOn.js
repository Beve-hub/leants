import React, {useState } from 'react'

function CounOn({render}) {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prevCount => prevCount + 1)
    }

  return (
    <div>
      {render(count, handleClick)}
    </div>
  )
}

export default CounOn
 