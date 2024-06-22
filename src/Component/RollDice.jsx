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
  margin-top: 48px;
  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
