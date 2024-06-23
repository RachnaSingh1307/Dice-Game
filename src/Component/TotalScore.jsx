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
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
  @media screen and (max-width: 600px) {
    p {
      font-size: 20px;
      font-weight: 800px;
    }
  }
`;
