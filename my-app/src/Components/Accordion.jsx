import React, { useState } from 'react'
import data from './data'
import './Accordion.css';
export default function Accordion() {

    const[selected,setSelected]= useState(null);
    
    const[enableMultiSelection,setEnableMultiSelection]= useState(false);

    const[multiple,setMultiple]= useState([]);
    function handleSingleSelection(getCurrentId){
    
    // console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultipleSelection(getCurrentId){
      
       let cpyMultiple=[...multiple];
       const findIndexofCurrentId=cpyMultiple.indexOf(getCurrentId);

       if(findIndexofCurrentId===-1) cpyMultiple.push(getCurrentId);

       else cpyMultiple.splice(findIndexofCurrentId,1);

       setMultiple(cpyMultiple);
    }
  return (
    
    
    <div className="wrapper">
         
         <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className="accordian">
            {

                data && data.length >0 ? 
                
                data.map((dataItem)=> <div key={dataItem.id} className='item'>

                    <div onClick={
                        enableMultiSelection ? ()=> handleMultipleSelection(dataItem.id) :
                        ()=>handleSingleSelection(dataItem.id)} className='title'>
                     <h3>{dataItem.question}</h3>
                     <div>+</div>
                    </div>

                    {
                        enableMultiSelection ?

                        multiple.indexOf(dataItem.id) !== -1 && 
                        <div className='content'>{dataItem.answer}</div> : 
                        
                        selected ===dataItem.id ? <div className='content'>{dataItem.answer}</div> : null
                    }
                </div>)
                  : <div>No data present</div>
            }
        </div>
    </div>
  )
}
