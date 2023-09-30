import React, {useState} from 'react'

const UpdatedComponent = OriginalComponent => {
    const NewComponent = () => {
        const [count, setCount] = useState(0);

    const increase = () => {
      setCount(prevCount => prevCount + 1)
    }
            return <OriginalComponent
             count={count} 
             increaseCount={increase}
             {...{count}}
             />
    }
    return NewComponent
}


export default UpdatedComponent