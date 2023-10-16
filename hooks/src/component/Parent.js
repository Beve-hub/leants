import React, { useMemo, useState } from 'react'



function Parent() {

    const [comp, setComp] = useState(0)
    const [data, setData] = useState(0)

    const incrementOne = () => {
        setComp(comp + 1 )
    }

    const incrementTwo = () => {
        setData(data + 1 )
    }

    

    const isEven = useMemo(() => {
        let i = 0
        while (i < 20000000 ) i++
        return comp % 2 === 0
    }, [comp])


  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count -{comp}</button>
        <span>{isEven ? 'Even' : 'odd'}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count -{data}</button>
      </div>
    </div>
  )
}

export default Parent
