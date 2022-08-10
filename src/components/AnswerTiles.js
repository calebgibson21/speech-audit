import {useEffect, useState} from 'react';
import styled from 'styled-components';

const AnswerTiles = (props) => {
  const [correctTile, setCorrectTile] = useState();
  const [tileColor, setTileColor] = useState("rgba(100, 100, 111, 0.2) 0px 7px 29px 0px");
  const {answers, correctAnswer, answered, isAnswered, handleNewPrompt} = props;

  const colors = ['rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', 'rgba(63, 241, 27, 0.651) 0px 7px 29px 0px', 'rgba(243, 36, 53, 0.61) 0px 7px 29px 0px'];

  async function resetTileColor() {
    await handleNewPrompt
    setTileColor(colors[0])
  }
 
 
  async function renderTileColor ()  {
    await isAnswered;
    if (isAnswered === true) {
      if (correctTile) {
        const correctTileColor = colors[1];
        return setTileColor(correctTileColor);
      }
      else {
        const incorrectTileColor = colors[2];
        return setTileColor(incorrectTileColor);
      }
    }
    else {
      const unansweredTileColor = colors[0];
      return setTileColor(unansweredTileColor);
    }
  }


  function isCorrectTile() {
    if (correctAnswer === answers) {
      setCorrectTile(true)
    } else {
      setCorrectTile(false)
    }
  }

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
    renderTileColor();
  }

  useEffect(() => {
    isCorrectTile();
    renderTileColor()
  }, [isAnswered])

  return (<>
    <Tiles 
      tileColor={tileColor}
      onClick={userClickedTile}>
        <p>{props.answers}</p>
    </Tiles>
  </>
  )
}

export default AnswerTiles

export const Tiles = styled.li`
    width: 100%;
    min-height: 100px;
    box-shadow: ${props => props.tileColor};
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
`