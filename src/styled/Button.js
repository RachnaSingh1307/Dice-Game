import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 10px, 18px;
  background: black;
  border-radius: 5px;
  man-width: 220px;
  font-size: 16px;
  height: 44px;
  transistion: 0.5ss background ease-in;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    font-weight: 700;
    transistion: 0.3s background ease-in;
  }
  @media screen and (max-width: 600px) {
    height: 20px;
    display: block;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
