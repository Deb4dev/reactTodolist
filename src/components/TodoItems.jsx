import React from 'react'
import './CSS/TodoItems.css'
import not_tick from './Assets/not_tick.png'
import tick from './Assets/tick.png'
import cross from './Assets/cross.png'
function TodoItems({no,text,display,setTodos}) {
  
  const toggle = (no)=>{
       let data = JSON.parse(localStorage.getItem("Todos"))
       for(let i =0; i<data.length;i++){
        if(data[i].no === no){
          if(data[i].display === ""){
            data[i].display = "line-through";
          }
          else{
            data[i].display = "";
          }
          break;
        }
        
       }
       setTodos(data)
      
  }

  const delItem = (no) => {
      let data = JSON.parse(localStorage.getItem("Todos"))
      data = data.filter((Todo)=> Todo.no !== no)
      setTodos(data)
  }

  return (
    <div className='todo-items'>
      <div className={`list-container `} onClick={()=>{toggle(no)}} no ={no} >
          {display===""?<img src={not_tick} alt="" />:<img src={tick} alt="" />}
          <div className={`todo-text ${display}` }>{text}</div>
      </div>
      <img onClick={()=>{delItem(no)}}  className='cross' src={cross} alt="" />
    </div>
  )
}

export default TodoItems
