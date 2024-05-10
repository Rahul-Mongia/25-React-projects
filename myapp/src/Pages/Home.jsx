import React from 'react'
import MemeCard from '../components/Card'
import { getAllMemes } from '../api/memes'
import { useEffect } from 'react'
import { useState } from 'react'
export default function Home() {

const[data,setData]= useState([]);
useEffect(() => {
  
getAllMemes().then((memes)=>setData(memes.data.memes));
}, []);

  return (
    <>
       <div className=' row'>
        {data.map((ele)=>(
            <MemeCard img={ele.url} title={ele.name}/>
        ))}
       </div>
    </>
   
  )
}
