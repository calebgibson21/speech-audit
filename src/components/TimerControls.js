import React from 'react';
import styled from 'styled-components';
import Countdown from 'react-countdown';

const TimerControls = () => {
  return (
    <>
    <TimeControlContainer>
      <StartButton >Start</StartButton>
      <PauseButton >Pause</PauseButton>
      <ResetButton >Reset</ResetButton>
    </TimeControlContainer>
    </>
  )
}

export default TimerControls;
 

const StartButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #1161D4;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: ease-in-out 0.2s all;
  padding: 48px;
  margin: 18px;
`

const PauseButton = styled(StartButton)`
  background-color: grey;

`
const ResetButton = styled(StartButton)`
  background-color: red;
`

const TimeControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 40px;
  height: 100%;
  flex-grow: 1;
`