import {useState} from 'react'

const AnswerTiles = (props) => {

  const {answers, correctAnswer, answered} = props;



  function isCorrectAnswer() {
    if (answers === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log("Incorrect :(");
    }
  }

  function userClickedTile() {
    isCorrectAnswer();
    answered()
  }


  return (<>
    <li className="tile" onClick={userClickedTile}>
        <p>{props.answers}</p>
    </li>
  </>
  )
}

export default AnswerTiles