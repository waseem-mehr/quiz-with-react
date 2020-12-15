import React from 'react'
const Result = (props)=>{
  return(
    <>
      <h4 className="text-dark text-center"> Result </h4>
      <h6 className="text-dark text-center"> Right Answers : {props.rightAns}</h6>
      <h6 className="text-dark text-center"> Wrong Answers : {props.wrongAns} </h6>
      <div className="text-center">
      <button onClick={props.resetStates} className="btn btn-outline-success text-center">Play Again</button>
      </div>
       
    </>
  )
}

export default Result