import { useEffect, useReducer } from "react";
import { GameContainer, BoardWrapper } from "./App.styled";
import { reducer } from "./gameReducer";
import Slot from "./Slot";
import GameInfo from "./GameInfo";
import GameOver from "./GameOver.js";
import Overlay from "./Overlay";
import DrawGame from "./DrawGame";

import INITIAL_STATE, { SEQUENCE_WINNER, REF } from "./constants";

function App() {
  useEffect(() => {
    REF.set(INITIAL_STATE);
  }, []);

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);


  REF.on('value',snapshot =>{
    console.log(snapshot.val())
  })


  const makePlay = (index) => {
    if (state.isGameOver || state.board[index] !== "") return;

    let newBoard = [...state.board];

    newBoard[index] = state.players[state.playerTime].simbol;
    dispatch({ type: "setBoard", payload: newBoard });
  };
  useEffect(() => {
    for (let i = 0; i < SEQUENCE_WINNER.length; i++) {
      if (
        state.board[SEQUENCE_WINNER[i][0]] ===
          state.players[state.playerTime].simbol &&
        state.board[SEQUENCE_WINNER[i][1]] ===
          state.players[state.playerTime].simbol &&
        state.board[SEQUENCE_WINNER[i][2]] ===
          state.players[state.playerTime].simbol
      ) {
        dispatch({ type: "setGameOver", payload: true });

        dispatch({
          type: "setPlayers",
          payload: {
            ...state.players,
            ...(state.players[state.playerTime].score =
              state.players[state.playerTime].score + 1),
          },
        });

        console.log(state.players[state.playerTime].name + " ganhou");
        return;
      } else if (state.board.every((currentValue) => currentValue !== "")) {
        dispatch({ type: "drawGame" });
      }
    }
  }, [state.board]);

  useEffect(() => {
    console.log(state.isGameOver);
    if (state.isGameOver !== true) {
      dispatch({
        type: "setPlayerTime",
        payload: state.playerTime === 1 ? 2 : 1,
      });
    }
  }, [state.lastMove]);

  return (
    <GameContainer>
      {state.isGameOver && (
        <Overlay>
          <GameOver
            player={state.lastWinner}
            players={state.players}
            dispatch={dispatch}
          />
        </Overlay>
      )}

      {state.drawGame && (
        <Overlay>
          <DrawGame dispatch={dispatch}></DrawGame>
        </Overlay>
      )}

      <GameInfo player={state.playerTime} players={state.players} />

      <BoardWrapper>
        {Object.keys(state.board).map((index) => (
          <Slot
            player={state.players[state.playerTime]}
            key={index}
            value={state.board[index]}
            index={index}
            onClick={(event) => {
              makePlay(event);
            }}
          />
        ))}
      </BoardWrapper>
    </GameContainer>
  );
}

export default App;
