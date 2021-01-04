import React, { useState } from 'react';
import accountApi from '../../api/accountApi';

const Login = ({ closeModal, setLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [statusLogin, setStatusLogin] = useState(true);

  const loginHandle = async () => {
    try {
      console.log('hahaha');
      const res = await accountApi.login({
        username: username,
        password: password,
      });
      if (res.result === 'NOT_FOUND') setStatusLogin(false);
      if (res.result === 'SUCCESS') {
        closeModal();
        const infoUser = JSON.stringify(res.infoUser);
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('userInformation', infoUser);
        setLogin(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='login-container'>
      <div className='input-element'>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
          required={true}
        />
      </div>
      <div className='input-element'>
        <label htmlFor='password'>Password</label>

        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          required={true}
          onKeyPress={(e) => (e.key === 'Enter' ? loginHandle() : null)}
        />
        {statusLogin ? null : (
          <div className='error-message'>Username or password is incorrect</div>
        )}
      </div>
      <div className='remember-me'>
        <input type='checkbox' name='remember-me' />
        <label htmlFor='checkbox'>Remember me</label>
      </div>
      <button className='login-btn' onClick={() => loginHandle()}>
        Login
      </button>

      <div className='forgot-password'>
        <span>I forgot my password?</span>
      </div>
    </div>
  );
};

export default Login;
