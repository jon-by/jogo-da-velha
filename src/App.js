import { useEffect, useReducer } from "react";
import {
  setGameData,
  updateBoard,
  updatePlayers,
  updateLastMove,
  setGameOver,
} from "./db";

import { GameContainer, GameInfo, Board, BoardWrapper } from "./App.styled";
import { initialState, reducer } from "./gameReducer";
import Slot from "./Slot";

const sequenceWinner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const makePlay = (index) => {
    if (state.gameIsOver || state.board[index] !== "") return;

    let newBoard = [...state.board]
    
    newBoard[index] = state.players[state.playerTime].simbol;
    dispatch({ type: "setBoard", payload: newBoard });

    //dispatch({type: "setPlayerTime", payload: })

  };

  useEffect(() => {
    for (let i = 0; i < sequenceWinner.length; i++) {
      if (
        state.board[sequenceWinner[i][0]] ===
          state.players[state.playerTime].simbol &&
        state.board[sequenceWinner[i][1]] ===
          state.players[state.playerTime].simbol &&
        state.board[sequenceWinner[i][2]] ===
          state.players[state.playerTime].simbol
      ) {

        console.log(state.players[state.playerTime].name + " ganhou") 
        
      }
    }
  }, [state.playerTime]);

  return (
    <GameContainer>
      <GameInfo />
      <BoardWrapper>
        {state.isGameOver &&(<div>huehue</div>)}
        {Object.keys(state.board).map((index) => (
          <Slot
            playerTime={state.playerTime}
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
