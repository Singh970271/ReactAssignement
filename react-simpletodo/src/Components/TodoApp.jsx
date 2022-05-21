


import React, { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

function TodoApp(){
    const[todos,setTodos]=useState([])

    const getData = (value)=>{
        const playload = {

            title: value,
            status: false,
            id: Math.ceil(Math.random()*10000)
          };
      setTodos([...todos,playload])
    };
    const handleStatus = (id) => {
        // console.log("id:", id);
        setTodos([...todos.map(e => e.id == id? {...e, status: !e.status}: e)]);
      }

    return(
        <div>
            {
                todos.map((e)=>{
                  return  <TodoItem todo={e} handleStatus={handleStatus}/>
                })
            }
            <TodoInput getData={getData}/>
        </div>
    )
}



export{TodoApp}





















