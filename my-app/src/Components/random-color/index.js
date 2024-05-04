

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function RandomColor() {

 const[typeofColor,setTypeofColor]=useState("hex");

 const[color,setColor]= useState("#000000");

 function generateRandom(length){
     
    return Math.floor(Math.random()*length);
 }
 function generateRandomHexColor(){
    
    const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

    let  hexcolor="#";

    for(let i=0;i<6;i++){

        hexcolor+= hex[generateRandom(hex.length)];

    }

    setColor(hexcolor);

 }

 function generateRandomRgbColor(){
   
    let r= generateRandom(255);
    let g= generateRandom(255);
    let b= generateRandom(255);

    setColor(`rgb(${r},${g},${b})`);
 }

 useEffect(()=>{
   
    if(typeofColor==='hex')  generateRandomHexColor()
      else  generateRandomRgbColor()

 },[typeofColor])

  return (
     
    <div style={{
        width:"100vw",
        height:"100vh",
        background:color
    }}>

    <div  style={{
        display:"flex",
        marginLeft:"455px",
        alignContent:"center",
        textAlign:"center",
    }}>
    <button onClick={()=> setTypeofColor("hex")}>Generate Hex Color</button>
    <button onClick={()=> setTypeofColor("rgb")}>Generate RGB Color</button>
    <button  onClick={ typeofColor=== 'hex' ? generateRandomHexColor : generateRandomRgbColor}>Generate Color</button>
    </div>

    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"700px",
        width:"1400px",
        flexDirection:"row",
        gap:'25px'
    }}>
       <h3>{typeofColor ==='rgb' ? 'RGB COLOR' : 'HEX COLOR ' }</h3>

       <h1>{color}</h1>
    </div>

   
     
    </div>
  )
}
