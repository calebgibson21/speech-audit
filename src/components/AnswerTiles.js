import {useState} from 'react'

const AnswerTiles = (props) => {

  const {answers, correctAnswer, answeredQuestion} = props;



  function isCorrectAnswer() {
    if (answers === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log("Incorrect :(");
    }
  }



  return (<>
    <li className='tile' onClick={isCorrectAnswer}>
        <p>{props.answers}</p>
    </li>
  </>
  )
}

export default AnswerTiles