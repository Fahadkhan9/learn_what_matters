"use client"
import React, { useContext } from 'react';
import { MyContext } from '../Helper.js/Context';

const Nav=()=> {
    const user = useContext(MyContext);
    
    return (
        <div className='bg-slate-200'>
            {user}
        </div>
    );
}

export default Nav;