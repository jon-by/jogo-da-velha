import database from './firebase'


const INITIAL_STATE = {
    board: ["", "", "", "", "", "", "", "", ""],
    players: {
      1: {
        name: "",
        simbol: "X",
        score: 0,
      },
      2: {
        name: "",
        simbol: "O",
        score: 0,
      },
    },
  
    lastMove: 0,
    isGameOver: false,
    playerTime: 2,
    lastWinner: 0,
    winnerSequence: ['','',''],
    drawGame:false
  };
  

  export const SEQUENCE_WINNER = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  export const REF = database.ref('/game')

  export default INITIAL_STATE