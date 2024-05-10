import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Text from '../components/Text';
import { useState , createRef} from 'react';
import "react-bootstrap";
import {exportComponentAsJPEG} from 'react-component-export-image'
export default function Edit() {
   
const[params]= useSearchParams();
const[count,setCount]= useState(0);
const memeRef= createRef();

function addText(){
  
 setCount(count+1);

}
  return (
   <div>
   
   <div ref={memeRef} style={{marginTop:"5px", marginBottom:"5px"}}>
      <img src={params.get("url")} width="500px" height="500px" alt='img'/>
       
       {
        Array(count).fill(0).map((ele)=>(
            <Text/>
        ))
       }
    </div>

    <button onClick={addText} >Add Text</button> 
     <button variant="success" onClick={(e)=>exportComponentAsJPEG(memeRef)}> Save</button>
   </div>
   

  )
}
