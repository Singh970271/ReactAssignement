import React, { useEffect, useState } from "react";



function Timer(){
const[timer,setTimer]=useState(0)
const endtime=25;
useEffect(()=>{
  let id=  setInterval(()=>{
        setTimer((prev)=>{
            if(prev===endtime){
                clearInterval(id);
                return 15;
            }
            return prev+1
        })
    },1000);

    return(()=>{
        clearInterval(id)
    })
},[])



    return(
        <div> 
            <h1>Timer:{timer}</h1>
        </div>
    )
}


export{Timer}
