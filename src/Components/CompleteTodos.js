import React from 'react'
let CompleteTodos=(props)=>{
  return(
    <>
      <div className="alert alert-light border border-dark" role="alert" style={{textDecoration:"line-through"}}>
                
                {props.todo.todoText}
                <div style={{float:"right",marginTop:'0px'}}>
                ✔️
                </div>
      </div>
    </>
  )
}
export default CompleteTodos