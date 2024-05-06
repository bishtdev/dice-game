import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score </p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;
  h1 {
    font-size: 100px;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 100px;

  }
  p{
    font-size: 30px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 600;
  }
`;
