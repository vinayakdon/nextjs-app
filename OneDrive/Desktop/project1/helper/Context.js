"use client"
import React, { createContext } from 'react'
export const MyContext = createContext()

function Context({ children }) {
    const imageUrl = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  return (
    <div>
        <MyContext.Provider value={imageUrl}>
            {children}
        </MyContext.Provider>
      
    </div>
  )
}

export default Context
