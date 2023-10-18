import React from 'react'

type Containerprops = {
    styles: React.CSSProperties
}

function Container(props: Containerprops) {
  return (
    <div style={{border: '1px solid black', padding: '1rem'}}>
      text content goes here
    </div>
  )
}

export default Container
