import React from "react";
import { GameOverInfo, Winner } from "./GameOver.styled";

import GameActions from "./GameActions";

const GameOver = ({ player, players, dispatch }) => {
  const winner = players[player];
  return (
    <GameOverInfo>
      <Winner>
        <span>{winner.name} "{winner.simbol}"</span> ganhou. Parabéns!!
      </Winner>

      <GameActions dispatch={dispatch} />
    </GameOverInfo>
  );
};

export default GameOver;
