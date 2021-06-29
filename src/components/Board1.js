import iconPaper from '../images/icon-paper.svg';
import iconRock from '../images/icon-rock.svg';
import iconScissors from '../images/icon-scissors.svg';
import './Board1.css';

const Board1 = ({handleUserChoice}) => {

  const handleUserClick = (ev) => {
    console.log('target', ev.target)
    console.log('className', ev.target.className)
    console.log('type target', typeof ev.target)
    let {id, className} = ev.target;
    if (id) {
      handleUserChoice(id);
    } else if (className) {
      handleUserChoice(className);
    }
  }

  return (
    <div className="game_board1">
      <div className="row_top">
        <div id="paper" className="choice_icon icon_left paper_icon" onClick={handleUserClick}>
          <img src={iconPaper} className="paper" alt="paper icon" onClick={handleUserClick}/>
        </div>
        <div id="scissors" className="choice_icon icon_right scissors_icon" onClick={handleUserClick}>
          <img src={iconScissors} className="scissors" alt="scissors icon" onClick={handleUserClick}/>
        </div>
      </div>
      <div className="row_bottom">
        <div id="rock" className="choice_icon icon_bottom rock_icon" onClick={handleUserClick}>
          <img src={iconRock} className="rock" alt="rock icon" onClick={handleUserClick}/>
        </div>
      </div>

    </div>
  )

}

export default Board1;