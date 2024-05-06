import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import { Button , OutlineButton } from '../Styled/Button'
import Rules from './Rules'

const GamePlay = () => {

  const [score, setScore] = useState(0) //for scoring

  const [selectedNumber, setSelectedNumber] = useState(); //for number selector

  const [currentDice, setCurrentDice] = useState(1) // for rollin dice

  const[error, setError] = useState() 

  const [showRules, setShowRules] = useState(false)


  const GenerateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const roleDice = () => {
    if (!selectedNumber){
      setError('you have not selected any number')
      return
    }
    
    const randomNumber = GenerateNumber(1, 7)
    setCurrentDice((prev) => randomNumber)



    if (selectedNumber === randomNumber) {
      setScore(prev => prev + 50)
    } else {
      setScore(prev => prev - 2)
    }

    setSelectedNumber(undefined)
  }

  const resetScore = () => {
    setScore(0)
  }


  return (
    <MainContainer>
      <div className='top_section'>
        <TotalScore score={score} />
        <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className='btns'>
        <OutlineButton onClick={resetScore}> Reset </OutlineButton>
        <Button onClick={()=> setShowRules((prev)=> !prev)} > {showRules ? 'Hide' : 'Show Rules'}  </Button>
      </div>
      { showRules && < Rules/>}
    </MainContainer>

  )
}

export default GamePlay

const MainContainer = styled.main`
  .top_section{
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 5px;

  }
`