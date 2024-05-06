import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  background-color: black;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  margin-left: 9px;
  font-family: monospace;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover{
    background-color: aliceblue;
    color: black;
    transition: 0.4s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  width: 200px;
  background-color: white;
  color: black;
  padding: 10px 20px;
  font-size: 16px;
  margin-left: 9px;
  font-family: monospace;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover{
    background-color: black;
    color: white;
    transition: 0.4s background ease-in;
  }
`;

