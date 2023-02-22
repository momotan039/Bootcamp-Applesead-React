import { useEffect, useRef, useState } from "react"
import {createTask, deleteTask, readTasks, updateTask } from "../Utilites/helper"
import Task from "../Utilites/Task"
import Tasks from "./Tasks"

function TodoContianer() {
    const [tasks,setTasks]=useState([])
    const inputRef=useRef(undefined)
    useEffect(()=>{
      setTasks([...readTasks()])
      inputRef.current.focus()
    },[])
  
    const addTask=(event)=>{
        event.preventDefault()
      const task=new Task(inputRef.current.value)
      createTask(task)
      inputRef.current.value=""
      setTasks([...readTasks()])
    }

    const removeTask=(task)=>{
        deleteTask(task)
        setTasks([...readTasks()])
    }

    const editTask=(task)=>{
        updateTask(task)
        setTasks([...readTasks()])
    }
    

    return <>
        <div className="controls">
            <form>
                <span>Add todo</span>
                <input ref={inputRef} type="text" placeholder="Enter you task to do ..." />
                <button onClick={addTask}>Add</button>
            </form>
        </div>
        <Tasks updateTodo={(t)=>editTask(t)} deleteTodo={(t)=>removeTask(t)} tasks={tasks}/>
    </>
}
export default TodoContianer