import React from 'react'
import { useState } from "react"
import { TaskCard } from './TaskCard'
import { BoxCard } from './BoxCard'

export const TaskList = ({info}) => {
    const[show,setShow]=useState(true)

    function handleDelete(id){
        setTasks(tasks.filter( task => task.id !== id ))
    }
    
    const [tasks,setTasks]=useState([
        {id:1,Name:"Eat",isCompleted:false},
        {id:2,Name: "code",isCompleted:true},
        {id:3,Name:"Sleep",isCompleted:false}
    ])
  return (
    <>
        <button onClick={()=>setShow(!show)} className="trigger">{show ? "Hide":"show"}</button>
        <ul>
            {show && tasks.map((task)=>(
                <TaskCard key={task.id} task={task} info={info} handleDelete={handleDelete}/>  
            ))}
        </ul>
{/* 
        <BoxCard result="warning">
            <p>warning</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt obcaecati, sint dolore autem eos harum temporibus ipsam rerum, recusandae totam molestias eaque magnam culpa quod dolor eius. Sit, aut eligendi?</p>
        </BoxCard>
        <BoxCard result="alert">
            <p>alert</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt, accusamus animi eveniet aliquid molestiae, quod, asperiores minima tempore nihil vero itaque. Voluptas quae earum facere ut aut aperiam libero!</p>
        </BoxCard>
        <BoxCard result="success">
            <p>success</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni tenetur cumque soluta suscipit, et fugiat voluptas quasi perferendis quam deserunt harum expedita nostrum necessitatibus molestias maxime non aliquid recusandae.</p>
        </BoxCard> */}
    </>
  )
}
