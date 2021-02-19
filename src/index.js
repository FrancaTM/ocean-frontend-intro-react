import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Board() {
  return (
    <div>
      <div className="board-row">
        <button className="square">X</button>
        <button className="square">X</button>
        <button className="square">X</button>
      </div>
      <div className="board-row">
        <button className="square">X</button>
        <button className="square">X</button>
        <button className="square">X</button>
      </div>
      <div className="board-row">
        <button className="square">X</button>
        <button className="square">X</button>
        <button className="square">X</button>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>

      <div className="game-info">Info</div>
    </div>
  );
}

ReactDOM.render(<Game />, document.getElementById("root"));
