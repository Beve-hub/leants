import React from 'react'

const Greeting = (props) => {
  return (
    <div>
      <h1>Hello {props.name} A.K.A {props.hero} </h1>
    </div>
  )
}

export default Greeting
