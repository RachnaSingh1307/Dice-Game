import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggleGamePlay }) => {
  return (
    <Container>
      <div>
        <img src="images/dices 1.png" alt="dice_img" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggleGamePlay}>Play Now</Button>
      </div>
    </Container>
  );
};
export default StartGame;

const Container = styled.div`
  max-widht: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 30px;
    }
    img {
      height: 220px;
      width: 220px;
    }
  }
`;
