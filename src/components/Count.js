import React from 'react'
import { useState } from "react"
export const Count = () => {
    
   const[count,setCount]=useState(0)
   function addHandle(){
       setCount(count+1)
   }
   function subHandle(){
       setCount(count-1)
   }
  return (
    <>
    <p>{count}</p>
        <button onClick={addHandle}    className="add">ADD</button>
        <button onClick={subHandle}    className="sub">SUBTRACT</button>
    </>
  )
}
