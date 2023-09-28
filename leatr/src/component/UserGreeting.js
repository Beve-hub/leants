import React, { useEffect, useState } from 'react'

function UserGreeting() {

    // method of conditional rendering  with react

    //const [isLogged, setIsLogged] = useState('');

    //  useEffect(() => {
    //        setIsLogged(true);
    //   },[])


      // 1 ternary operator method
     // return ( //<div>
     //           {isLogged ? <p>Welcome Victor</p> : <p>welcome Guest</p>} 
     //     </div> )   
      
     
     // 2 logical &&  operator method
     // return ( //     <div> //       {isLogged && <p>Welcome Victor</p> && <p>Welcome Guest</p>} //     </div> // )
     

    // 3 using Function method
     const Logged = false; // Set this to your actual authentication logic

    const greet = () => {
       if (Logged) {
         return <div>Hello victor</div>;
       } else {
         return <div>Welcome guest</div>;
       }
     };
  
     return (
       <div>
         {greet()}
       </div>
     );
  }

export default UserGreeting
