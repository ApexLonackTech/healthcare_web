import React from 'react';
import Styles from "./modal.module.scss";
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '47%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor:'rgba(0,0,0,0.2)'
    },
  };
  Modal.setAppElement('body');
function ModalLayout(props) {
    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
    return (
        <div>
             <Modal
        isOpen={props.modal}
        onAfterOpen={props.afterOpenModal}
        onRequestClose={props.closeModal}
        style={customStyles}
        ariaHideApp={false}
        overlayClassName={Styles.Overlay}
        contentLabel="Example Modal"
      >
       {props.content}
      </Modal>
        </div>
    );
}

export default ModalLayout;