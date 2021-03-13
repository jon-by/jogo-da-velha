import { firebaseDatabase, firebaseImplementation } from "./firebase";
import firebase from "firebase";

const mainNode = "/game";

// /game/board
const boardNode = mainNode + "/board";
// /game/players
const playersNode = mainNode + "/players";
// /game/lastMove
const lastMoveNode = mainNode + "/lastMove";
// /game/isGameOver
const gameOverNode = mainNode + "/isGameOver";



export const setGameData = ({ board, players, isGameOver }) => {
  const game = firebaseDatabase.ref(mainNode).set({
    board,
    players,
    lastMove: firebase.database.ServerValue.TIMESTAMP,
    isGameOver,
  });
  return game;
};

export const updateBoard = (board) => {
  firebaseDatabase
    .ref(boardNode)
    .update(board)
    .then(() => {
      console.log("hue");
      return { error: false, msg: "updated" };
    })
    .catch((err) => {
      return { error: true, err };
    });
};

export const updatePlayers = (players) => {
  firebaseDatabase
    .ref(playersNode)
    .update(players)
    .then(() => {
      return { error: false, msg: "updated" };
    })
    .catch((err) => {
      console.log(err);
      return { error: true, err };
    });
};

export const setGameOver = (isGameOver) => {
  const updatedGameOver = firebaseDatabase
    .ref(gameOverNode)
    .set(isGameOver)
    .then(() => {
      return { error: false, msg: "updated" };
    })
    .catch((err) => {
      console.log(err);
      return { error: true, err };
    });
};

export const updateLastMove = () => {
  const updatedLastMove = firebaseDatabase
    .ref(lastMoveNode).
    set(firebase.database.ServerValue.TIMESTAMP)
    .then(() => {
      return { error: false, msg: "updated" };
    })
    .catch((err) => {
      console.log(err);
      return { error: true, err };
    });
};
