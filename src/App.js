import {useState} from 'react';

import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [isUserWinner, setIsUserWinner] = useState(null);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameState, setGameState] = useState(1); //1 - 4; 4 could be further 4 win or 4 lose

  return (
    <div className="App">
      <header></header>
      <main>
        <div className="game_header">
          <div>LOGO</div>
          <div>Score {score}</div>
        </div>
        <div className="game_main">
          {gameState === 1 && (
            <div className="game_board1">

              <div></div>
              <div></div>
              <div></div>

            </div>
          )}

          {gameState === 2 && (
            <div className="game_board2">
              You Picked
              The House Picked
            </div>
          )}

          {gameState === 3 && (
            <div className="game_board3">
              You Picked
              The House Picked
            </div>
          )}

          {gameState === 4 && (
            <div className="game_board4">
              You Picked
              The House Picked

              You Win
              You Lose

              Play Again
            </div>
          )}

        </div>
        <div className="game_footer">
          <button>Rules</button>
        </div>
    
      </main>
      {/* <footer>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Your Name Here</a>.
        </div>

      </footer> */}
    </div>
  );
}

export default App;
