import React,{useState} from 'react'

function useCounter() {
    const [count, setCount] = useState(0)

    const increments = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrements = () => {
        setCount(prevCount => prevCount - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return [count, increments, decrements, reset]
}

export default useCounter
