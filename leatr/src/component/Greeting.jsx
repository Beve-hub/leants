import React from 'react'

const Greeting = (props) => {
    const {name, hero} = props 
    
  return (
    <div>
      <h1>Hello {name} A.K.A {hero}  </h1>
    </div>
  )
}

export default Greeting
