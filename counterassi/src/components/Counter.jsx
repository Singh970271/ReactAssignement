import React, { useState } from "react"
import "./Counter.css"
function Counter(){
  
    const[counter,setCounter]=useState(1)
    
    function counterIncrement(value){
      setCounter(counter+value)
    }

    const mult=(value)=>{
        setCounter(counter*value)
    }


    return(
        <div className={`${counter%2===0 ? "even":"odd"}`}>
             <h2>Counter:{counter}</h2>
             <button onClick={()=>counterIncrement(1)
            }>Increment</button>
             <button onClick={()=>counterIncrement(-1)}>Decrement</button>
             <button onClick={()=>mult(2)}>Double</button>
        </div>
    )
}

export{Counter}