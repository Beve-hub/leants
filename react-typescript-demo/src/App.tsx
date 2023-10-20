import React from 'react';
import './App.css';
import Greet from './component/Greet';
import { Person } from './component/Person';
import { PersonList } from './component/PersonList';
import Status from './component/Status';
import Heading from './component/Heading';
import Button from './component/Button';
import Input from './component/Input';
import Container from './component/Container';
import User from './component/state/User';
import Counter from './component/state/Counter';
import { ThemeContextProvider } from './component/context/ThemeContext';
import { Box } from './component/context/Box';
import { UserContextProvider } from './component/context/UserContext';
import { Private } from './component/Auth/Private';
import { Profile } from './component/Auth/Profile';
import List from './component/generic/List';
import { RandomNumber } from './component/restriction/RandomNumber';
import { Toast } from './component/templateLiterals/Toast';




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
     <Counter/>
     <ThemeContextProvider>
       <Box/>
     </ThemeContextProvider>
     <UserContextProvider>
      <User/>
     </UserContextProvider>
     <Private isLoggedIn={true} component={Profile}/>
     {/*<List 
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={(items) => console.log(items)}
      />
      <List items={[1,2,3]} onClick={(items) => console.log(items)}/>*/}

      <List 
         items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'wayne',
          },
          {
            id: 2,
            first: 'Big',
            last: 'wayne',
          },
           {
            id: 3,
            first: 'Brother',
            last: 'wayne',
          },
         ]} 
         onClick={(items) => console.log(items )}     
      />
      <RandomNumber value={10} isPositive />
      <Toast position='left-center'/>
      
    </div>
  );
}
 
export default App;
