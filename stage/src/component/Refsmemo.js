import React, { useRef, useState } from 'react'

function Refsmemo() { 

    const myRef = useRef(null)

    const clickHandler = () => {
        alert(myRef.current.value)
        if (myRef.current) {
         myRef.current.focus();
        };
    }
  return (
    <div>
      <input type='text' ref={myRef}/>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default Refsmemo
