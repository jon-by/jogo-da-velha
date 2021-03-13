const initialState = {
  board: ["", "", "", "", "", "", "", "", ""],
  players: {
    1: {
      name: "yure",
      simbol: "X",
    },
    2: {
      name: "danzel",
      simbol: "O",
    },
  },

  lastMove: 0,
  isGameOver: false,
  playerTime: 1,

  winnerSequence:[]
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "setBoard":
      return {
        ...state,
        board: payload,
        playerTime: state.playerTime === 1? 2: 1
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
      };
    case "setPlayerTime":
      return {
        ...state,
        playerTime: payload,
      };
    default:
      return { ...state };
  }
}

export { initialState, reducer };
