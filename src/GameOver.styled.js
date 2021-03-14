import styled from "styled-components";


export const GameOverInfo = styled.div`
  width: 450px;
  height: 450px;
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  text-align: center;
`;

export const Winner = styled.div`
  color: #fff;
  font-size: 18px;

  span {
    color: #99ff3c;
    font-size: 24px;
    text-transform: capitalize;
    font-weight: bold;
  }
`;

