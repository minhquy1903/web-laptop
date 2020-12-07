import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ closeModal, login, setLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [statusLogin, setStatusLogin] = useState(true);

  const loginHandle = async () => {
    try {
      const res = await axios.post('api/account/login', {
        username: username,
        password: password,
      });
      if (res.data.result === 'NOT_FOUND') setStatusLogin(false);
      if (res.data.result === 'SUCCESS') {
        closeModal();
        const infoUser = JSON.stringify(res.data.infoUser);
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('infoUser', infoUser);
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
        />
      </div>
      <div className='input-element'>
        <label htmlFor='password'>Password</label>

        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        {statusLogin ? null : (
          <div className='notice-login'>Username or password is incorrect</div>
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
