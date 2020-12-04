import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';
const Modal = ({ openModal, closeModal, children }) => {
  if (!openModal) return null;
  return ReactDOM.createPortal(
    <div className='modal'>
      <div className='modal-overlay' onClick={() => closeModal()} />
      <div className='modal-body'>{children}</div>
    </div>,
    document.body,
  );
};

export default Modal;
