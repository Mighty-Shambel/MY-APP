import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { TaskList } from "./components/TaskList"

import './App.css'

const App = () =>{
  const info = "at..";
    return(
        <>
        <Header title="Tasks"/>
        <TaskList info={info} />
        <Footer/>
        </>
        
    )
}

export default App