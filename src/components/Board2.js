import {useEffect, useState} from 'react';

const choiceMap = new Map();
choiceMap.set(0, 'rock');
choiceMap.set(1, 'paper');
choiceMap.set(2, 'scissors')

//calculate this programmatically?ß
const winners = {
  'paper': {
    'scissors': 0,
    'rock': 1,
  },
  'scissors': {
    'paper': 0,
    'rock': 1,
  },
  'rock': {
    'paper': 1,
    'scissors': 0
  }
}

const Board2 = ({userChoice, resetGame, appendScore}) => {
  const [computerChoice, setComputerChoice] = useState('');
  const [winner, setWinner] = useState('');

  //figure this out programmatically
  //something about combinations
  //not sure how to reduce the redundancy aspect 
  //could enter an array; return winner as 0 or 1
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

  const resetBoard = () => {
    setComputerChoice('');
    setWinner('');
    resetGame();
  }

  const getWinnerHelper = ([userChoice, computerChoice]) => {

/*
Paper beats Rock
- Rock beats Scissors
- Scissors beats Paper
*/

  }

  useEffect(() => {
    getComputerChoice();
  }, []);

  return (
    <div className="game_board2">
      <h1>TODO BOARD 2</h1>
      <div>You Picked {userChoice}</div>
      <div>The House Picked {computerChoice}</div>

      {winner.length > 0 && (
        <div>
          <div>You {winner === 'user' ? 'Win' : 'Lose'}</div>
          <button onClick={resetBoard}>Play Again</button>
        </div>
      )}
    </div>

  )
}

export default Board2;

/* {gameState === 3 && (
  <div className="game_board3">
    You Picked
    The House Picked
  </div>
)} */

/* {gameState === 4 && (
  <div className="game_board4">
    You Picked
    The House Picked

  </div>
)} */