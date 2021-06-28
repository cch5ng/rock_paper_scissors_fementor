import {useEffect, useState} from 'react';

const Board2 = ({userChoice, resetGame, appendScore, 
  computerChoice, winner, getWinner, getComputerChoice}) => {

  useEffect(() => {
    getComputerChoice();
  }, []);

  return (
    <div className="game_board2">
      <div>You Picked {userChoice}</div>
      <div>The House Picked {computerChoice}</div>

      {winner.length > 0 && (
        <div>
          <div>You {winner === 'user' ? 'Win' : 'Lose'}</div>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>

  )
}

export default Board2;