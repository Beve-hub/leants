import React from 'react';
import './App.css';
import Greet from './component/Greet';
import { Person } from './component/Person';
import { PersonList } from './component/PersonList';
import Status from './component/Status';
import Heading from './component/Heading';
import { Oscar } from './component/Oscar';
import Button from './component/Button';
import Input from './component/Input';
import Container from './component/Container';
import User from './component/state/User';


function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wanye'
    },
    {
      first: 'Bayo',
      last: 'Wanye'
    },
    {
      first: 'Bola',
      last: 'Wanye'
    }
  ]

  return (
    <div className="App">
     <Greet name='victor' messageCount={20} isLoggedIn={false}/>
     <Person name={personName} />
     <PersonList name={nameList} />
     <Status status='loading'/>
     <Heading>Placeholder text</Heading>
     <Button handleClick={(event, id) => {
      console.log('Button clicked, event, id')
     }}/>
     <Input value='' handleChange={(event) => console.log(event)} />
     <Container styles={{border: '1px solid black', padding: '1rem',}}/>
     <User/>
    </div>
  );
}

export default App;
