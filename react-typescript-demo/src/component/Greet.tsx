import React from 'react'

type Greetprops = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

const Greet = (props: Greetprops) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
        ? `welcome {props.name} ! You have{props.messageCount} messages`
        : `welcome ${props.name}`
        }
        </h2>
    </div>
  )
}

export default Greet
