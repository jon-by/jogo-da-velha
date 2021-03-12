import { useEffect } from "react";
import { setGameData, updateBoard, updatePlayers, updateLastMove, setGameOver } from "./db";

const board = ["=Dxx", "hue"];
const players = {
  player1: {
    name: "jonas",
    simbol: "x",
  },
  player2: {
    name: "teste",
    simbol: "O",
  },
};

const isGameOver = false;

function App() {
  useEffect(() => {
   setGameOver(false)
   
  }, []);

  return <div className="App">hue</div>;
}

export default App;
