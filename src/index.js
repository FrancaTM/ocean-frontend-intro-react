import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Board() {
  return <div>Board</div>;
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
