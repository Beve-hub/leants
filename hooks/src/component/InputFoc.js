import React, { useState } from 'react'
import useInput from '../Hooks/useInput'

function InputFoc() {
   
     
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
            <label>First name</label>
            <input 
            {...bindFirstName}
              type="text"
               name="first"/>
        </div>
        <div>
            <label>Last name</label>
            <input 
            {...bindLastName}
              type="text" 
              name="first"/>
        </div>
        <button >Submit</button>
      </form>
    </div>
  )
}

export default InputFoc
