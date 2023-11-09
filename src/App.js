import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { TaskList } from "./components/TaskList"

import './App.css'
import { AddTask } from "./components/AddTask"

const App = () =>{
  const info = "at..";
    return(
        <>
        <Header title="Tasks"/>
        <AddTask/>
        <TaskList info={info} />
        <Footer/>
        </>
        
    )
}

export default App