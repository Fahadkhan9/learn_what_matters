"use client"
import React, { useContext } from 'react';
import Header from '../components/Header';
import { MyContext } from '../Helper.js/Context';


const page =()=> {
   const user = useContext(MyContext);
     
    return (
        <div className='bg-yellow-500 '>
            Here you will learn how to create context api 
            {user}
             <Header/>
        </div>
    );
}

export default page;