 "use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const advance =(props)=> {
    const [users, setusers] = useState([]);
    const getUsers = async()=>{
  const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
  setusers(data);
    }
   useEffect(()=>{
    getUsers();
   },[])
    return (
        <>
         <button onClick={getUsers} className='bg-green-400 text-white px-4 py-2 rounded font-bold'>Get data</button>
         <div className='bg-slate-100 p-8 mt-5'>
            <ul>
                {users.map((e) => (
                    <li>{e.username}----<a href={`/${e.id}`}>Explore</a></li>
                ))
}
            </ul>
         </div>
        </>
    );
}

export default advance;