import iconPaper from '../images/icon-paper.svg';
import iconRock from '../images/icon-rock.svg';
import iconScissors from '../images/icon-scissors.svg';
import './Board1.css';

const Board1 = ({handleUserChoice}) => {

  const handleUserClick = (ev) => {
    let {id} = ev.target;
    if (id) {
      handleUserChoice(id);
    }
  }

  return (
    <div className="game_board1">
      <div className="row_top">
        <div id="paper" className="choice_icon paper_icon" onClick={handleUserClick}>
          <img src={iconPaper} alttext="paper icon" />
        </div>
        <div id="scissors" className="choice_icon scissors_icon" onClick={handleUserClick}>
          <img src={iconScissors} alttext="scissors icon" />
        </div>
      </div>
      <div className="row_bottom">
        <div id="rock" className="choice_icon rock_icon" onClick={handleUserClick}>
          <img src={iconRock} alttext="rock icon" />
        </div>
      </div>

    </div>
  )

}

export default Board1;