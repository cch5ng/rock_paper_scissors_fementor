const Board1 = ({handleUserChoice}) => {

  const handleUserClick = (ev) => {
    let {id} = ev.target;
    if (id) {
      handleUserChoice(id);
    }
  }

  return (
    <div className="game_board1">
      <div id="paper" onClick={handleUserClick}>paper</div>
      <div id="scissors" onClick={handleUserClick}>scissors</div>
      <div id="rock" onClick={handleUserClick}>rock</div>

    </div>
  )

}

export default Board1;