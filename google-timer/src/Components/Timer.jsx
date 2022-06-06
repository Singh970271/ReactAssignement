import React from "react";
import './Timer.css';
import { useState,useEffect } from "react";
import { useRef } from "react";
function Timer(){
  const[google,setGoogle]=useState(0);

 const timerId=useRef(null);

  const start=()=>{
      if(!timerId.current){
        let Id=setInterval(()=>{
            setGoogle((prev)=>prev+1)
              },1000);
              timerId.current=Id
          }
      }
  
const pause=()=>{
    
    clearInterval(timerId.current)
    timerId.current=null;
}

const reset=()=>{
    setGoogle(0);
}

 useEffect(()=>{
     start()
 },[])

    return(
        <div className="Run">
            <h1>{google}</h1>
         <button onClick={start}>START</button>
         <button onClick={pause}>PAUSE</button>
         <button onClick={reset}>RESET</button>
        </div>
    )
}

export{Timer};