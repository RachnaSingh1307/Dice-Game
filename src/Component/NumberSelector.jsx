import styled from "styled-components";
const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};
export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    margin: 10px;
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
    font-weight: 500;
  }
  @media screen and (max-width: 600px) {
    .flex {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 70px);
      gap: 10px;
    }
    p {
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  &:hover {
    background-color: black;
    color: white;
    font-weight: 700px;
  }
`;
