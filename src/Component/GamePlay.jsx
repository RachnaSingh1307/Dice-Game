import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const StartGame = () => {
  const [score, setScore] = useState(0);

  const [selectedNumber, setSelectedNumber] = useState();

  const [currentDice, setCurrentDice] = useState(1);

  const [error, setError] = useState("");

  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice((prev) => randomNumber);
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};
export default StartGame;

const MainContainer = styled.main`
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;
