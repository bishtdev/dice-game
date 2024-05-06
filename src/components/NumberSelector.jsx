import { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({setError, error, selectedNumber, setSelectedNumber}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler = (value) =>{
        setSelectedNumber(value)
        setError('')
    }

    return (
        <NumberSelectorContainer>
            <p className="error_para"> {error}</p>
            <div className="flex">
                {arrNumber.map((value, i) => (
                    <Box
                        isSelected={value === selectedNumber}
                        key={i}
                        onClick={() => numberSelectorHandler(value)}
                    >
                        {value}
                    </Box>
                ))}
            </div>
            <p>Selected Number</p>
        </NumberSelectorContainer>
    );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        margin-bottom: 10px;
        font-size: 26px;
        font-weight: 600;
    }
    .error_para{
        margin-bottom: 10px;
        font-size: 26px;
        font-weight: 600;
        color: red;
    }
`

const Box = styled.div`

  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s background ease-in;
  background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
  color: ${(props) => (!props.isSelected ? 'black' : 'white')};

  &:hover {
    background-color: black;
    color: white;
    transition: 0.2s background ease-in;
  }
`;
