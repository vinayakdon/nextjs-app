"use client"
import { MyContext } from '@/helper/Context'
import axios from 'axios'
import React, { useContext, useState } from 'react'

function page() {
    const imageUrl = useContext(MyContext)
    
    const [allusers, setallusers] = useState([])
    const getallusers = async ()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const data = await response.data
        console.log(data)
        setallusers(data)
    }
    getallusers()
  return (
    <div className='grid grid-flow-row grid-cols-3 bg-green-800 h-full'>
        {
            allusers.map((e)=>{
                return(
                    <div className='w-[400px] h-[400px] mx-5 my-5 grid place-items-center'>
                        <img src={imageUrl} className='w-[200px] h-[200px]'/>
                        <h1>{e.id}</h1>
                        <h1>{e.name}</h1>
                        <h1>{e.username}</h1>
                        <h1>{e.email}</h1>
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default page
