import React from 'react'
import './CSS/modal.css'
import cross from './Assets/cross.png'
function EmtModal({closeModal}) {
  return (
    <div className='wrapper'>
            <div className='modal'>
                <h1 style={{textAlign:"center"}}>Empty Task 🤗 </h1>
                <p style={{textAlign:"center"}}>please give a complete task to move forward</p>
                <img src ={cross} className='close-btn' onClick={()=>closeModal()} alt=""/>
            </div>
    </div>

  )
}

export default EmtModal
