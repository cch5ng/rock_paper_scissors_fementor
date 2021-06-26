import {useState} from 'react';

import Board1 from './Board1';
import Board2 from './Board2';

const GameBoard = ({}) => {

  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [gameState, setGameState] = useState(1); //1 - 4; 4 could be further 4 win or 4 lose

  const handleUserChoice = (id) => {
    if (id) {
      setUserChoice(id);
      setGameState(2);
    }
  }

  const resetGame = () => {
    setUserChoice(null);
    setGameState(1);
    //setScore(0);
  }

  const appendScore = () => {
    setScore(score + 1);
  }

  return (
    <div>
      <div className="game_header">
        <div>LOGO</div>
        <div>Score {score}</div>
      </div>
      <div className="game_main">
        {gameState === 1 && (
          <Board1 handleUserChoice={handleUserChoice} />
        )}

        {gameState === 2 && (
          <Board2 userChoice={userChoice} resetGame={resetGame} appendScore={appendScore} />
        )}
      </div>
      <div className="game_footer">
        <button>Rules</button>
      </div>


    </div>

  )

}

export default GameBoard;