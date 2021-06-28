import './Modal.css';
import rulesImage from '../images/image-rules.svg';
import closeIcon from '../images/icon-close.svg';

const Modal = ({ toggleModal }) => {
  return (
    <div className="modal_container">
      <h1>RULES</h1>
      <div className="image_container">
        <img src={rulesImage} alttext="rules" />
      </div>
      <div onClick={toggleModal} className="image_container">
        <img src={closeIcon} />
      </div>
    </div>
  )
}

export default Modal;