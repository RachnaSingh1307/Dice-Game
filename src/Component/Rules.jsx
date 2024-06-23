import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How To Play Dice Game</h2>
      <p>Select any number</p>
      <p>Click on dice images</p>
      <p>
        After click on dice if selected number is equal to dice number you will
        get same point as dice{""}
      </p>
      <p>I you get wrong guess then 2 point will be deducted</p>
    </RulesContainer>
  );
};
export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 10px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
  @media screen and(max-width:600px) {
    h2 {
      font-size: 20px;
    }
    .text {
      margin-top: 20px;
    }
  }
`;
