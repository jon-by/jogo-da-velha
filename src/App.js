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
  

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);



  useEffect(()=>{

    REF.child('/board').on('value',snapshot =>{
      dispatch({type:"setBoard", payload:snapshot.val()})
    })
    REF.child('/isGameOver').on('value',snapshot =>{
      dispatch({type:"setGameOver", payload:snapshot.val()})
    })
  
    REF.child('/drawGame').on('value',snapshot =>{
      dispatch({type:"drawGame", payload:snapshot.val()})
      console.log(snapshot.val())
    })

    REF.child('/players').on('value',snapshot =>{
      dispatch({type:"setPlayers", payload:snapshot.val()})
      console.log(snapshot.val())
    })
    
  },[])
  

  const makePlay = (index) => {
    if (state.isGameOver || state.board[index] !== "") return;

    let newBoard = [...state.board];

    newBoard[index] = state.players[state.playerTime].simbol;
    REF.child('/board').set(newBoard)
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
        REF.child('/isGameOver').set(true)

        REF.child(`/players/${state.playerTime}/score`).set(state.players[state.playerTime].score + 1)        

        console.log(state.players[state.playerTime].name + " ganhou");
        return;
      } else if (state.board.every((currentValue) => currentValue !== "")) {
        
        REF.child('/drawGame').set(true)
      }
    }
  }, [state.board]);

  useEffect(() => {    
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
