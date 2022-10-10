import styled from "styled-components"

const TimeSelection = (props) => {
const {value, handleChange} = props

  return (
    <TimeDropdownContainer>
        <label>
            Choose a time duration
            <TimerDropdown value={value} onChange={handleChange}>
                <option>
                    20 
                </option>
                <option>
                    30 
                </option>
                <option>
                    40 
                </option>
                <option>
                    50 
                </option>
                <option>
                    60 
                </option>
            </TimerDropdown>
        </label>
    </TimeDropdownContainer>
  )
}

export default TimeSelection

const TimeDropdownContainer = styled.div`
    display: flex;
    margin: 18px;
`

const TimerDropdown = styled.select`
    margin-left: 12px;
`