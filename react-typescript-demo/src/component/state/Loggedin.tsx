import React, { useState } from 'react'

const Loggedin = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    
    const handleLogin = () => {
        setLoggedIn(true)
    }
    const handleLogout = () => {
        setLoggedIn(false)
    }
   return (
     <div>
       <button onClick={handleLogin}>Login</button>
       <button onClick={handleLogout}>Logout</button>
       <div>User is {loggedIn ? 'logged in' : 'logged out'}</div>
     </div>
   )
}

export default Loggedin
