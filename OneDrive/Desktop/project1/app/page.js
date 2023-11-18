"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function page() {
  const [userData, setuserData] = useState([]);
  const getData = async ()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = await response.data;
    setuserData(data)
  }

  const notify = ()=>{
    toast("data successfully loaded")
  }
  const twoFunctions = ()=>{
    getData();
    notify();
  }

  // useEffect(()=>{
  //   getData()
   
  // },[])
  return (
    <>
    <div className='px-10 py-4'>
      <button className='bg-green-800 text-white font-bold px-10 py-4' onClick={twoFunctions}>Get data</button>
      <div className='bg-zinc-700 w-full h-full mt-5 lg:px-10 lg:py-4 px-5 py-3'>
        <ul>
          {
            userData.map((e)=>{
              return <li className='mt-5'>{e.username}----- <Link className='bg-red-700 text-white px-4' href={`/${e.id}`}>click here</Link></li>
            })
          }
        </ul>

      </div>
    </div>
    <ToastContainer />
    </>
  )
}

export default page
