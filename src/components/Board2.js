import React, {useEffect, useState} from 'react';

import iconPaper from '../images/icon-paper.svg';
import iconRock from '../images/icon-rock.svg';
import iconScissors from '../images/icon-scissors.svg';
import './Board1.css';

const choiceMap = new Map();
choiceMap.set(0, 'rock');
choiceMap.set(1, 'paper');
choiceMap.set(2, 'scissors')

const iconsKey = {
  paper: iconPaper,
  rock: iconRock,
  scissors: iconScissors,
}

const Board2 = ({userChoice, resetGame, appendScore 
  }) => { //computerChoice, winner, getWinner, getComputerChoice

    const [computerChoice, setComputerChoice] = useState('');
    const [winner, setWinner] = useState('');
  

      // /*
// Paper beats Rock
// - Rock beats Scissors
// - Scissors beats Paper
// */

//faster to evaluated against sorted array if sorted array deep equals key, then get the winner
const getWinner = React.useCallback(
  (userChoice, computerChoice) => {
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
  }, [appendScore]
)


    const getComputerChoice = React.useCallback(
      () => {
        const numChoice = Math.floor(Math.random() * 3);
        if (choiceMap.has(numChoice)) {
          let compChoice = choiceMap.get(numChoice);
          console.log('compChoice', compChoice);
          setComputerChoice(compChoice);
          getWinner(userChoice, compChoice);
        }
      }, [getWinner, userChoice])



  const resetBoard = () => {
    setWinner('');
    setComputerChoice('');
    resetGame();
  }

  useEffect(() => {
    console.log('gets to board2')
    getComputerChoice();
  }, [getComputerChoice]); //getComputerChoice

  getComputerChoice();

  let userChoiceDivClass = `choice_icon icon_left ${userChoice}_icon`;
  let computerChoiceDivClass = `choice_icon icon_right ${computerChoice}_icon`;;

  return (
    <div className="game_board2">
      <div className="row_top">
        <div className={userChoiceDivClass} >
          <img src={iconsKey[userChoice]} className={userChoice} alt="user choice icon" />
        </div>
        <div className={computerChoiceDivClass} >
          <img src={iconsKey[computerChoice]} className={computerChoice} alt="computer choice icon" />
        </div>
      </div>
      <div className="row">
        <div className="choice_caption" >
          You Picked
        </div>
        <div className="choice_caption" >
          The House Picked
        </div>
      </div>

      {winner.length > 0 && (
        <div className="center">
          <div className="text_outcome">YOU {winner === 'user' ? 'WIN' : 'LOSE'}</div>
          <button className="btn btn_secondary" onClick={resetBoard}>Play Again</button>
        </div>
      )}
    </div>
  )
}

export default Board2;