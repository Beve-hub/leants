import React, {useState} from 'react'
import Join from './Join'

const Tipping = () => {

    const [hub, setHub] = useState('');

    const checkHandler = () => {
        setHub(hub);
        alert('welcome');
    };
    
  return (
    <div>
      <Join greetHandler={checkHandler}/>
    </div>
  )
}

export default Tipping
