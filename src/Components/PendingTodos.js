import React from 'react'
let PendingTodos=(props)=>{
  return(
    <>
      <div className="alert alert-light border border-dark text-dark" role="alert">
                <input className="form-check-input "
                type="checkbox"
                onClick={props.completeATodo}
                 value={props.todo.todoId}/>
                {props.todo.todoText}
                <div style={{float:"right",marginTop:'-7px'}}>
                <button className="ml-1 btn btn-outline-primary btn-md" value={props.todo.todoId} onClick={props.editTodo}>Edit</button>
                <button  className="ml-1 btn btn-outline-danger btn-md" value={props.todo.todoId} 
                onClick={props.deleteTodo} >Delete</button>
                </div>
      </div>
    </>
  )
}
export default PendingTodos