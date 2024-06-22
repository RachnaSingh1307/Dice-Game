import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoredContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoredContainer>
  );
};
export default TotalScore;

const ScoredContainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;
