import React from 'react'

const Question = (props) => {

  return (
    <div className='grid-wrapper'>
            <h2>Prompt</h2>
        <div className='card'>{props.question.prompt}</div>
        <button onClick={props.questionShuffle}>Shuffle Prompt</button>
    </div>
  )
}

export default Question