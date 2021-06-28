import {useEffect, useState} from 'react';

import iconPaper from '../images/icon-paper.svg';
import iconRock from '../images/icon-rock.svg';
import iconScissors from '../images/icon-scissors.svg';
import './Board1.css';

const iconsKey = {
  paper: iconPaper,
  rock: iconRock,
  scissors: iconScissors,
}

const Board2 = ({userChoice, resetGame, appendScore, 
  computerChoice, winner, getWinner, getComputerChoice}) => {

  useEffect(() => {
    getComputerChoice();
  }, []);

  let userChoiceDivClass = `choice_icon icon_left ${userChoice}_icon`;
  let computerChoiceDivClass = `choice_icon icon_right ${computerChoice}_icon`;;

  return (
    <div className="game_board2">
      <div className="row_top">
        <div id="paper" className={userChoiceDivClass} >
          <img src={iconsKey[userChoice]} className={userChoice} alttext="user choice icon" />
        </div>
        <div id="scissors" className={computerChoiceDivClass} >
          <img src={iconsKey[computerChoice]} className={computerChoice} alttext="computer choice icon" />
        </div>
      </div>


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