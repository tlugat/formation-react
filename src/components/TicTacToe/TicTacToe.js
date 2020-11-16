import { useState } from 'react';

import './TicTacToe.css';

function TicTacToe() {
  const [ currentPlayer, setCurrentPlayer ] = useState(1);
  const [ board, setBoard ] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]);

  function detectWin(board) {
    if (board[0][0] === board[0][1] && board[0][0] === board[0][2]) {
      return board[0][0];
    }
    return null;
  }

  function handleClick(event) {
    const { col, line } = event.target.dataset;
    const cloneBoard = [...board];
    // const boardLine = cloneBoard[line];
    // const newboardLine = [...boardLine];
    // newboardLine[col] = currentPlayer;
    // cloneBoard[line] = newboardLine;
    cloneBoard[line][col] = currentPlayer;
    setBoard(cloneBoard);
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  }

  function handleRestart() {
    setCurrentPlayer(1);
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);
  }

  const winner = detectWin(board);
  const win = Boolean(winner);

  return <div className="TicTacToe">
    {board.map((line, i) => (
      <div className="TicTacToe_line">
        {line.map((col, j) => (
          <button
            className="TicTacToe__cell"
            type="button"
            onClick={handleClick}
            data-col={j}
            data-line={i}
          >
            {col ? col : '\xa0'}
          </button>
        ))}
      </div>
    ))}
    {!win && <div className="TicTacToe_line">Player: {currentPlayer}</div>}
    {win && <div className="TicTacToe_line">Player {winner} win the game</div>}
    {win && (
      <div className="TicTacToe_line">
        <button type="button" onClick={handleRestart}>Restart</button>
      </div>
    )}
  </div>;
}

export default TicTacToe;