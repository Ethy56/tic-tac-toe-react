import Board from "./components/board.js"
import { useState } from "react";
function initalBoard() {
  var tmp = new Array(9).fill(null);
  for (var i = 0; i < tmp.length; i++) {
    tmp[i] = {id: i, value: tmp[i]};
  };
  return tmp;
}
export default function App() {
  var [board, setBoard] = useState(initalBoard());
  var [turn, setTurn] = useState(["X","O"][Math.floor(Math.random()*2)]);
  var [winner, setWinner] = useState(null);
  return (
    <>
      <Board values={[board, setBoard]} turn={[turn, setTurn]} winner={[winner, setWinner]}/>
    </>
  );
}