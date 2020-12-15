import React, { useState,useEffect } from 'react'
import Question from './components/Question'
import Result from './components/Result'
import quizQuestions from './utils/CSQuestions'

function App() {
  const [curQuestion,setCurQuestion]=useState(0)
  const [rightAns,setRightAns]=useState(0)
  const [wrongAns,setWrongAns]=useState(0)
  const [endQuiz,setEndQuiz]=useState(false)
  const totalQuestions=quizQuestions.length
  const questions=quizQuestions
  useEffect(()=>{},[curQuestion,endQuiz])
  function submitAns(event){
    let answer=event.target.value
    if(answer.trim()===questions[curQuestion].answer.trim()){
      
      setRightAns(rightAns+1)
      
    }
    else{
      
      setWrongAns(wrongAns+1)
    }
    
    nextQuestion()

  }
  function nextQuestion(){
    if(curQuestion+1===totalQuestions){
        setEndQuiz(true)
        
      }
      else{
        setCurQuestion(curQuestion+1)
      }
  }
  return (
    <>
    <div className="container">
      <div className="jumbotron ">
        <h1 className="display-4 text-center">Quiz App!</h1>
      </div>
    </div>
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="jumbotron">
                  {
                  !endQuiz&&(<>

                    <h4 className="text-dark text-center">Question {curQuestion+1} of {totalQuestions}</h4>
  
                    <Question question={questions[curQuestion]}
                     submitAns={submitAns}
                    />
                  
                  </>)
                  
                  }
                  {
                    endQuiz&&(<>
                      <Result rightAns={rightAns} wrongAns={wrongAns} />
                    </>)
                  }
                  
                    
                </div>
            </div>
            
        </div>

      </div>
      
    </>
  );
}

export default App;
