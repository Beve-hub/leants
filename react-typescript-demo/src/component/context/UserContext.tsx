import React, { useState, createContext } from 'react';

export type Authuser = {
    name: string
    email: string
}

type UserContextType = {
    user: Authuser | null
    setUser: React.Dispatch<React.SetStateAction<Authuser | null>>
}

type UserContextProviderProps = {
    children: React.ReactNode
}

export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children}: UserContextProviderProps) => {
  const [user, setUser] = useState<Authuser | null>(null)
  return (
    <UserContext.Provider value={{ user, setUser}} >
        {children}
    </UserContext.Provider>
  )
} 