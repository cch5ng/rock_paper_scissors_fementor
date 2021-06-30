import React, {useState, useEffect} from 'react'; //useEffect, 

import './GameBoard.css';
import logo from '../images/logo.svg';
import iconPaper from '../images/icon-paper.svg';
import iconRock from '../images/icon-rock.svg';
import iconScissors from '../images/icon-scissors.svg';

const choiceMap = new Map();
choiceMap.set(0, 'rock');
choiceMap.set(1, 'paper');
choiceMap.set(2, 'scissors')

const iconsKey = {
  paper: iconPaper,
  rock: iconRock,
  scissors: iconScissors,
}

const GameBoard = ({ toggleModal }) => {
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [gameState, setGameState] = useState(1); //1 - 4
  const [computerChoice, setComputerChoice] = useState('');
  const [winner, setWinner] = useState('');

  const handleUserClick = (ev) => {
    let {id, className} = ev.target;
    if (id) {
      setUserChoice(id);
      setGameState(2);
    } else if (className) {
      setUserChoice(className);
      setGameState(2);
    }
  }

  const resetGame = () => {
    setUserChoice(null);
    setGameState(1);
    setComputerChoice('');
    setWinner('');
  }

  // /*
// Paper beats Rock
// - Rock beats Scissors
// - Scissors beats Paper
// */

  useEffect(() => {
    //faster to evaluated against sorted array if sorted array deep equals key, then get the winner
    const getWinner = (compChoice) => {
      let curWinner;
      if (userChoice === compChoice) {
        curWinner = 'none';
      }
      if (userChoice === 'rock') {
        if (compChoice === 'paper') {
          curWinner =  'computer'
        } else if (compChoice === 'scissors') {
          curWinner =  'user'
        }
      }
      if (userChoice === 'paper') {
        if (compChoice === 'rock') {
          curWinner =  'user'
        } else if (compChoice === 'scissors') {
          curWinner =  'computer'
        }
      }
      if (userChoice === 'scissors') {
        if (compChoice === 'rock') {
          curWinner =  'computer'
        } else if (compChoice === 'paper') {
          curWinner =  'user'
        }
      }
      setWinner(curWinner);
      if (curWinner === 'user') {
        setScore(s => s + 1);
      }
      setGameState(4);
    }

    const getComputerChoice = () => {
      const numChoice = Math.floor(Math.random() * 3);
      if (choiceMap.has(numChoice)) {
        let compChoice = choiceMap.get(numChoice);
        setComputerChoice(compChoice);
        setGameState(3);
        getWinner(compChoice);
      }
    }
  
    if (userChoice) {
      getComputerChoice();
    }
  }, [userChoice])

  let userChoiceDivClass = `choice_icon icon_left ${userChoice}_icon`;
  let computerChoiceDivClass = `choice_icon icon_right ${computerChoice}_icon`;;

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
          <div className="game_board1">
            <div className="row_top">
              <div id="paper" className="choice_icon icon_left paper_icon">
                <img src={iconPaper} className="paper" alt="paper icon" onClick={handleUserClick}/>
              </div>
              <div id="scissors" className="choice_icon icon_right scissors_icon">
                <img src={iconScissors} className="scissors" alt="scissors icon" onClick={handleUserClick}/>
              </div>
            </div>
            <div className="row_bottom">
              <div id="rock" className="choice_icon icon_bottom rock_icon">
                <img src={iconRock} className="rock" alt="rock icon" onClick={handleUserClick}/>
              </div>
            </div>
          </div>
        )}

        {gameState === 2 && (
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
              {/* <div className="choice_caption" >
                The House Picked
              </div> */}
            </div>  
          </div>
        )}

        {gameState >=3 && (
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
            {gameState === 4 && (
              <div className="center">
                <div className="text_outcome">YOU {winner === 'user' ? 'WIN' : 'LOSE'}</div>
                <button className="btn btn_secondary" onClick={resetGame}>Play Again</button>
              </div>
            )}  
          </div>
        )}

      </div>
      <div className="game_footer">
        <button className="btn btn_primary" onClick={toggleModal}>Rules</button>
      </div>
    </div>
  )
}

export default GameBoard;