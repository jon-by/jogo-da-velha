import styled from "styled-components";
import { reducer } from "./gameReducer";

export const StyledSlot = styled.div`
  width: 150px;
  height: 150px;
  background:  ${props => props.color? props.color: '#676767'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  color:#ffff ;
  border: 1px solid rgba(0, 0, 0, 0.5);

  &:hover {
      background:#ddd;
  }
`;
