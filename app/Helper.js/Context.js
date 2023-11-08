"use client"
import React, { createContext } from 'react';
export const MyContext = createContext();

const Context=({children})=> {
    const username = "Fahad Khan slave of the invincible creator"
    return (
        <div>
            <MyContext.Provider value={username}>
                {children}
            </MyContext.Provider>
        </div>
    );
}

export default Context;