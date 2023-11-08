"use client"
import Link from "next/link";
import React, { useState } from "react";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const page = () => {
const [title,settitle] = useState("");
const[desc,setdesc]  = useState("");
const[MainTask,setMainTask]  = useState([]);
  
 const submithandler = (e)=>{
   e.preventDefault();
   setMainTask([...MainTask,{title,desc}]);
   console.log(MainTask);
   settitle("");
   setdesc("");
    toast.success("Tasksubmitted successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

 }
 let renderTask = <h2>No task available</h2>

   const deleteHandler = (i)=>{
    let copytask = [...MainTask];
    copytask.splice(i,1);
    setMainTask(copytask);
    toast.info("Task deleted!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
   }

 if(MainTask.length>0){ 
 renderTask = MainTask.map((t,i)=>{
     return (
       <li className="flex items-center justify-between mb-8">
         <div className="flex justify-between w-2/3">
           <h5 className="text-2xl font-semibold">{t.title}</h5>
           <h6 className="text-xl font-semibold">{t.desc}</h6>
         </div>
         <button onClick={(i)=>{
           deleteHandler(i);
         }} className="bg-red-400 text-white rounded px-5 py-2">delete</button>
       </li>
     );
 })
}

  return (

    <>
      <h1 className="bg-black text-white p-10 text-5xl font-bold text-center">
        Fahad's Nextlist
      </h1>
      <form onSubmit={submithandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
            
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5">
          Add task
        </button>
      </form>
      <div className="p-8 bg-slate-200">
          <ul>{renderTask}</ul>
      </div>
      <div>
        <Link href="/Advanced">Advanced</Link>
      </div>
    <div>
      <Link href="/LearnContext">Learn Context api</Link>
    </div>
               <ToastContainer/>
     </>
  );
};

export default page;

//#task done
