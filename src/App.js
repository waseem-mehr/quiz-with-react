import React, { useState,useEffect } from 'react'
import CompleteTodos from './Components/CompleteTodos'
import PendingTodos from './Components/PendingTodos'

function App() {
  let [todos,setTodos]=useState([])
  let [todoText,setTodoText]=useState('')
  let [completeTodo,setCompleteTodo]=useState([])
  let [pendingTodo,setPendingTodo]=useState([])
  
  useEffect(() => {
        pendingTodoCount()
        completeTodoCount()
    }, [ todos ]);

  
  function pendingTodoCount(){
    let pendingTodo=todos.filter((todo)=>todo.todoComplete===false)
    setPendingTodo(pendingTodo)
  }
  function completeTodoCount(){
    let completeTodo=todos.filter((todo)=>todo.todoComplete===true)
    setCompleteTodo(completeTodo)
  }

  function addTodoInTodos(){

      let text=todoText
      if(text.trim()!=='' && text!==null){

      setTodoText('')
      let todoId=Math.round(Math.random()*1000000)
      let todoComplete=false
      let todoObj={
        todoText:text,
        todoId:todoId,
        todoComplete:todoComplete
      }
      todos.push(todoObj)
      pendingTodoCount()
      console.log("pending",pendingTodo)
      console.log("complete",completeTodo)

      }
      
  }
  function textChange(e){
     setTodoText(e.target.value)
     
  }
  function deleteTodo(event){
    let id =parseInt(event.target.value)
    console.log(id)
    let remainingTodos=todos.filter((todo)=>todo.todoId!==id)
    setTodos(remainingTodos)
    console.log(todos)
    
  }
  function editTodo(event){
    
    let todoId= parseInt(event.target.value)
    console.log('edit is called',todoId)
    let todo=todos.filter((todo)=>todo.todoId===todoId)
    let remTodos=todos.filter((todo)=>todo.todoId!==todoId)
    setTodos(remTodos)
    setTodoText(todo[0].todoText)
  }
  function completeATodo(event){
    let todoId=parseInt(event.target.value)
    let todo=todos.filter((todo)=>todo.todoId===todoId)
    let remTodo=todos.filter((todo)=>todo.todoId!==todoId)
    let newTodo={
      todoId:todo[0].todoId,
      todoText:todo[0].todoText,
      todoComplete:true
    }
    remTodo.push(newTodo)
    setTodos(remTodo)
    
  }
  return (
    <>
      <div className="jumbotron container">
        <h1 className="display-4 text-center">My Todos!</h1>
      </div>
      <div className="container">
        <div className="row text-center justify-content-center">
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <form className="form-inline text-center content-justify-center">
                  <input type="text"
                   onChange={textChange}
                   value={todoText}
                   className="form-control col-lg-9 col-sm-9 col-xs-9" placeholder="Enter todo text here..."/>
                  <button
                  onClick={addTodoInTodos}
                   type="button" className="btn btn-outline-primary ml-2 col-lg-2 col-sm-2 col-xs-2 mt-0">Add</button>

                </form>
            </div>
            
        </div>

      </div>
      <div className="container">
        
        <div className="row justify-content-center">
          {/* start of pending todos */ }
            <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12 bg-light mt-3 mr-1">

              <h4 className="text-center mt-2 ">
                Pending Todos
              </h4>
              {
                pendingTodo.map((todo)=>(
                  <PendingTodos key={todo.todoId} todo={todo}
                  deleteTodo={deleteTodo} 
                  editTodo={editTodo}
                  completeATodo={completeATodo}
                  />
                ))
              }
              
              
            </div>
          {/* end of pending todos */}  
          {/* start of  complete todos*/ }
            <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12 bg-light mt-3 ml-1">
              <h4 className="text-center mt-2">Complete Todos</h4>
              {
                completeTodo.map((todo)=>(
                  <CompleteTodos todo={todo} key={todo.todoId}/>
                ))
              }
              
              
            </div>
          {/* end of complete todos */}
        </div>

      </div>
    </>
  );
}

export default App;
