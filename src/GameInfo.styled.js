import styled from "styled-components";

export const GameInfoWrapper = styled.div`
  width: 450px;
`;

export const NowPlaing = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    color: blue;
    font-size: 24px;
    color: ${(props) => (props.player === 1 ? "#ff00005c" : "#0000ffa6")};
  }
`;

export const Score = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
`;
