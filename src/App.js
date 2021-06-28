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
      {/* <footer>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Your Name Here</a>.
        </div>

      </footer> */}
      </div>
  );
}

export default App;
