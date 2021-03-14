import React from "react";
import GameActions from "./GameActions";
import { DrawContainer } from "./DrawGame.styled";

const DrawGame = ({dispatch}) => {
  return (
    <DrawContainer>
        <h1>O jogo Empatou.</h1>
      <GameActions dispatch={dispatch} />
    </DrawContainer>
  );
};

export default DrawGame;
