import {useEffect} from 'react';

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
  }, [getComputerChoice]);

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
          <button className="btn btn_secondary" onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>

  )
}

export default Board2;