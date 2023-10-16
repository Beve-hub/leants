import React, { useState } from 'react'
import useDocuTitle from '../Hooks/useDocuTitle'

function DocTitleOne() {
    const [count, setCount] = useState(0)

    useDocuTitle(count)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleOne
