import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import logo     from  "./assets/logo.svg"
import { useState } from "react"

import './App.css'

const App = () =>{
  
   const[count,setCount]=useState(0)

    function addHandle(){
        setCount(count+1)
    }
    function subHandle(){
        setCount(count-1)
    }
    
    const [tasks,setTasks]=useState([
        {id:1,Name:"Eat",isCompleted:false},
        {id:2,Name: "code",isCompleted:true},
        {id:3,Name:"Sleep",isCompleted:false}
    ])

    return(
        <>
        <Header/>
        <h1>We Back Again</h1>
        <img src={logo}  />
        <p>{count}</p>
        <button onClick={addHandle}    className="add">ADD</button>
        <button onClick={subHandle} className="sub">SUBTRACT</button>
        
        <h1>List of Tasks</h1>
        <ul>
            {tasks.map((task)=>(
                    <li key={task.id}>
                    <span>{task.id}-{task.Name}  </span>
                    <button className="delete">Delete</button>
                    </li>
            ))}
        </ul>
        <Footer/>
        </>
        
    )
}

export default App