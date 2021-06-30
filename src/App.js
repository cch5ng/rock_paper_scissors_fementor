import {useState} from 'react';

import './App.css';
import GameBoard from './components/GameBoard';
import Modal from './components/Modal';

function App() {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div className="App">
      <header></header>
      <main>
        {showModal && (
          <Modal toggleModal={toggleModal}/>
        )}
        {!showModal && (
          <GameBoard toggleModal={toggleModal} />
        )}      
      </main>
      </div>
  );
}

export default App;
