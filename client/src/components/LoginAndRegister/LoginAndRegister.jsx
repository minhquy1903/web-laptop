import React, { useState } from 'react';

import Login from './Login';
import Register from './Register';
import './LoginAndRegister.scss';
const LoginAndRegister = ({ closeModal }) => {
  let [open, setOpen] = useState({
    isLoginOpen: true,
    isRegisterOpen: false,
  });
  const showLoginBox = () => {
    setOpen({ isLoginOpen: true, isRegisterOpen: false });
  };

  const showRegisterBox = () => {
    setOpen({ isLoginOpen: false, isRegisterOpen: true });
  };

  return (
    <div className='login-register-container'>
      <div className='header-login-register'>
        <div
          className={open.isLoginOpen ? 'login-form-selected' : ''}
          onClick={() => showLoginBox()}>
          LOGIN
        </div>
        <div
          className={open.isRegisterOpen ? 'login-form-selected' : ''}
          onClick={() => showRegisterBox()}>
          REGISTER
        </div>
      </div>
      <div className='login-register-form'>
        {open.isLoginOpen && <Login closeModal={closeModal} />}
        {open.isRegisterOpen && <Register />}
      </div>
    </div>
  );
};

export default LoginAndRegister;
