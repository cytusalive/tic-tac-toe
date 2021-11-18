import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  render() {
    return (
      <button 
        className="square" 
        onClick={() => this.setState({value: "X"})}
      >
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.boardstate = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }

  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(this.boardstate[0])}
          {this.renderSquare(this.boardstate[1])}
          {this.renderSquare(this.boardstate[2])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.boardstate[3])}
          {this.renderSquare(this.boardstate[4])}
          {this.renderSquare(this.boardstate[5])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.boardstate[6])}
          {this.renderSquare(this.boardstate[7])}
          {this.renderSquare(this.boardstate[8])}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


export default Game;
