import React from 'react'
const Result = (props)=>{
  return(
    <>
      <h4 className="text-dark text-center"> Result </h4>
      <h6 className="text-dark text-center"> Right Answers : {props.rightAns}</h6>
      <h6 className="text-dark text-center"> Wrong Answers : {props.wrongAns} </h6>
       
    </>
  )
}

export default Result