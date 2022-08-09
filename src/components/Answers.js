import React from 'react';
import AnswerTiles from './AnswerTiles';
import cardData from '../data/cardData'

const Answers = (props) => {


  return (<>
    <div className='grid-wrapper'>
            <h2>Question Type</h2>
            <ul style={{width: "100%", listStyleType: "none", padding: "0px", margin: "0px"}}>
 
            {props.question.options.map((answers, index) => {
                return (
                <AnswerTiles key={index} answers={answers} correctAnswer={props.promptAnswer} answeredQuestion={props.answeredQuestion}/>
            )})}
            </ul>
    </div>
  </>
  )
}

export default Answers