import { useState } from "react"
import styled from "styled-components"

const RollDice = ({currentDice, roleDice}) => {

    


  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice}> 
            <img src={`./images/dice_${currentDice}.png`} alt="dice 1" />
        </div>
        <p>Click on Dice To roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    align-items: center;
    p{
        font-size: 18px;
        font-weight: 600;
    }
    .dice{
        cursor: pointer;
    }
`