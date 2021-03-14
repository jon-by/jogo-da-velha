import INITIAL_STATE, {REF} from "./constants";


function reducer(state, { type, payload }) {
  switch (type) {
    case "setBoard":
      REF.child('/board').set(payload)
      return {
        ...state,
        board: payload,
        lastMove: Date.now(),
      };

    case "setPlayers":
      return {
        ...state,
        players: payload,
      };

    case "setLastMove":
      return {
        ...state,
        lastMove: payload,
      };

    case "setGameOver":
      return {
        ...state,
        isGameOver: payload,
        lastWinner: state.playerTime,
      };
    case "setPlayerTime":
      return {
        ...state,
        playerTime: payload,
      };
    case "drawGame":
      return {
        ...state,
        drawGame: true,
      };

    case "newRound":
      return {
        ...state,
        board: ["", "", "", "", "", "", "", "", ""],
        isGameOver: false,
        drawGame: false,
      };
    case "newGame":
      return {
        ...state,

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
        winnerSequence: ["", "", ""],
        drawGame: false,
      };
    default:
      return { ...state };
  }
}

export { INITIAL_STATE, reducer };
