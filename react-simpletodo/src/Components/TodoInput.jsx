import React, { useState } from "react";


function TodoInput({getData}){
    const[value,setValue]=useState("")
    return(
        <div>
           <input onChange={(e)=>{
             setValue(e.target.value)
           }}   type="text"
           placeholder="Write Something" />

           <button onClick={()=>{
               //console.log(value)
               getData(value)
               setValue("")
           }}>+</button>

        </div>
    )
}

export{TodoInput}








