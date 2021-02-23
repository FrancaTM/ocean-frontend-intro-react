import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(index) {
    return (
      <Square
        value={this.props.squares[index]}
        onClick={() => this.props.onClick(index)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      squares: Array(9).fill(null),
      nextMove: "X",
    };
  }

  handleClick(index) {
    // console.log("handleClick", index);
    const squares = this.state.squares;

    if (squares[index]) {
      return;
    }

    squares[index] = this.state.nextMove;

    const nextMove = this.state.nextMove === "X" ? "O" : "X";

    this.setState({
      squares,
      nextMove,
    });
  }

  render() {
    const squares = this.state.squares;
    const hasWinner = calculateWinner(squares);

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.state.squares}
            onClick={(index) => this.handleClick(index)}
          />
        </div>

        <div className="game-info">
          {hasWinner ? "Alguém venceu!" : "Jogo em andamento"}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];

    const a = line[0];
    const b = line[1];
    const c = line[2];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return true;
    }
  }

  return false;
}
