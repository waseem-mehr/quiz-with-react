import React from 'react'

const Question = (props)=>{
  return(
    <>

                    <p className="lead">{props.question.question} </p>
                    <hr className="my-4"/>
                    {
                      props.question.options.map((option)=>(
                  <div className="form-check" key={option}>
                      <input className="form-check-input float-left" type="radio" 
                       onClick={props.submitAns}
                       value={option} />
                      <label className="form-check-label">
                      {option}
                      </label>
                    </div>
                      ))
                    }
                    
                    
                    
    </>
  )
}
export default Question