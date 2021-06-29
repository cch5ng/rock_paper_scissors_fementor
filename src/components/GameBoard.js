import {useState} from 'react';

import Board1 from './Board1';
import Board2 from './Board2';
import './GameBoard.css';
import logo from '../images/logo.svg';

const choiceMap = new Map();
choiceMap.set(0, 'rock');
choiceMap.set(1, 'paper');
choiceMap.set(2, 'scissors')

const GameBoard = ({ toggleModal }) => {
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [gameState, setGameState] = useState(1); //1 - 2
  const [computerChoice, setComputerChoice] = useState('');
  const [winner, setWinner] = useState('');

  const handleUserChoice = (id) => {
    if (id) {
      setUserChoice(id);
      setGameState(2);
    }
  }

  const resetGame = () => {
    setUserChoice(null);
    setGameState(1);
    setComputerChoice('');
    setWinner('');
  }

  const appendScore = () => {
    setScore(score + 1);
  }

  // /*
// Paper beats Rock
// - Rock beats Scissors
// - Scissors beats Paper
// */

//faster to evaluated against sorted array if sorted array deep equals key, then get the winner
  const getWinner = (userChoice, computerChoice) => {
    let curWinner;
    if (userChoice === computerChoice) {
      curWinner = 'none';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        curWinner =  'computer'
      } else if (computerChoice === 'scissors') {
        curWinner =  'user'
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        curWinner =  'user'
      } else if (computerChoice === 'scissors') {
        curWinner =  'computer'
      }

    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        curWinner =  'computer'
      } else if (computerChoice === 'paper') {
        curWinner =  'user'
      }
    }

    setWinner(curWinner);
    if (curWinner === 'user') {
      appendScore();
    }
  }

  const getComputerChoice = () => {
    const numChoice = Math.floor(Math.random() * 3);
    if (choiceMap.has(numChoice)) {
      let compChoice = choiceMap.get(numChoice);
      console.log('compChoice', compChoice);
      setComputerChoice(compChoice);
      getWinner(userChoice, compChoice);
    }
  }

  return (
    <div className="game_board_container">
      <div className="game_head_container">
        <div>
          <img src={logo} alt="logo" className="img_logo" />
        </div>
        <div className="score_container">
          <div className="text_score">Score</div>
          <div className="text_score_num">{score}</div>
        </div>
      </div>
      <div className="game_main">
        {gameState === 1 && (
          <Board1 handleUserChoice={handleUserChoice} />
        )}

        {gameState === 2 && (
          <Board2 userChoice={userChoice} resetGame={resetGame} appendScore={appendScore} 
            computerChoice={computerChoice} winner={winner} getWinner={getWinner}
            getComputerChoice={getComputerChoice}
          />
        )}
      </div>
      <div className="game_footer">
        <button className="btn btn_primary" onClick={toggleModal}>Rules</button>
      </div>
    </div>
  )
}

export default GameBoard;