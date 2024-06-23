import styled from "styled-components";

const RollDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="Dice" onClick={roleDice}>
        <img src={`/images/dice_${currentDice}.png `} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};
export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
  @media screen and (max-width: 600px) {
    img {
      margin-top: 50px;
      height: 200px;
      width: 200px;
    }
    p {
      font-size: 20px;
    }
  }
`;
