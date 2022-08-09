import React from 'react'

const Question = (props) => {

  return (
    <div className='grid-wrapper'>
            <h2>Prompt</h2>
        <div className='card'>{props.question}</div>
        <button onClick={props.shuffle}>{props.isAnswered ? "Next Prompt" : "Shuffle Prompt"}</button>
    </div>
  )
}

export default Question