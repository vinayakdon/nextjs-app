"use client"
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { MyContext } from '@/helper/Context';


function page({ params }) {
    const imageUrl = useContext(MyContext)
    const { id } = params
    const [userdata, setdata] = useState([]);
    const getdata = async ()=>{
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/"+ id)
        setdata(data)
        console.log(data)
    }
   getdata()
   console.log(Array.isArray(userdata))
  return (
    <div className='grid place-items-center mt-16 w-full'>
    <div className='text-black lg:w-[500px] bg-blue-700 px-10 py-4 grid place-items-center'>
        <img src={imageUrl} className='w-full object-cover'/>
         <h1>{userdata.id}</h1>
         <h1>{userdata.name}</h1>
         <h1>{userdata.username}</h1>
         <h1>{userdata.email}</h1>
     </div>
    </div>
  )
}

export default page
