import React from 'react';

import './Notification.scss';

export default function Notification({ content, type, closeModal, setResult }) {
  const typePopup = () => {
    if (type === 'YN')
      return (
        <div className='btn-wrap'>
          <button
            onClick={() => {
              setResult(true);
              closeModal();
            }}>
            Yes
          </button>
          <button
            onClick={() => {
              setResult(false);
              closeModal();
            }}>
            No
          </button>
        </div>
      );
    else if (type === 'OK') {
      return (
        <div className='btn-wrap'>
          <button onClick={() => closeModal()}>OK</button>
        </div>
      );
    }
  };

  return (
    <div className='noti-container'>
      <div className='content'>
        <h2>
          <span>Thông báo</span>
        </h2>

        <div className='text-content'>
          <p>{content}</p>
        </div>

        {typePopup()}
      </div>
    </div>
  );
}
