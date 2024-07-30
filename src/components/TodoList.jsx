import React, { useEffect, useState } from 'react'
import './CSS/Todo.css'
import { useRef } from 'react'
import TodoItems from './TodoItems'
//
import EmtModal from './EmtModal'
let count = 0
function TodoList() {
  const [ShowModal,setShowModal] = useState(false)
  const [Todos,setTodos] = useState([])
  const inputRef = useRef(null)

  const closeModal = () => setShowModal(false)
  
  const add = ()=>{
    if(inputRef.current.value ===""){
      console.log("empty data")
      setShowModal(true)//return <EmtModal/>
    }
    else{
      setTodos([...Todos,{no:count++,text:inputRef.current.value,display:""}])
      inputRef.current.value = ""
      //localStorage.setItem("Todo_count",count)
    }
  }

//retrieve data from localestorage
  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem("Todos")))
    //count = localStorage.getItem("Todo_count")
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      localStorage.setItem("Todos",JSON.stringify(Todos))
    },10)
    
  },[Todos])

  return (
    <div className='Todo'>
      <div className="Todo_Head">To Do List</div>
      <div className="input-add">
        <input ref={inputRef} type="text" placeholder='Add your task'className='to-do-input'/>
        <button onClick={()=>{add()}} className='add-btn'>ADD</button>
      </div>
      <div className="To-do-List">
          {Todos.map((item,index)=>{
            return <TodoItems key={index} setTodos={setTodos} no ={item.no} text ={item.text} display={item.display} count={count}/>
          })}
      </div>
      {ShowModal && <EmtModal closeModal = {closeModal} />}
    </div>
  )
}

export default TodoList
