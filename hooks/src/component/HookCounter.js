import { useState } from 'react'

function HookCounter() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount);

   

    const IncrementFive = () => {
        for(let i = 0; i < 5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={IncrementFive}>Increment 5</button>
        </div>
    )
}
export default HookCounter