import React from 'react'
import Grade from './Grade'


function NameList() {
    // const names = ['sam', 'joy', 'tonia']


    //method  of map rendering

   // const nameList = names.map(name => <h2>{name}</h2> ) 
   // return <div>{nameList}</div>
 

   //method of map rendering 2
   //return (
    //<div>
    //   {
    //    names.map(name => <h2>{name}</h2>)
    //   }
    //</div>
  //)

  const  persons  = [
    { 
        id: 1,
        name: 'John',
        age:30,
        skill: 'React'
    },
    { 
        id: 2,
        name: 'Jude',
        age:32,
        skill: 'Vue'
    },
    { 
        id: 3,
        name: 'Rexxi',
        age:30,
        skill: 'Angular'
    },
    { 
        id: 4,
        name: 'Lawrenece',
        age:45,
        skill: 'javaascript'
    }
  ]

  const personsList = persons.map(person => <Grade key={person.id} person={person}/>)
  return <div>{personsList}</div>
}

export default NameList
