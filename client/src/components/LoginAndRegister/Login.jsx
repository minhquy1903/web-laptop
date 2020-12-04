import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [statusLogin, setStatusLogin] = useState(true);

  const login = async () => {
    try {
      const res = await axios.post('/account/login', {
        username: username,
        password: password,
      });
      if (res.data.result === 'NOT_FOUND') setStatusLogin(false);
      if (res.data.result === 'SUCCESS') {
        localStorage.setItem('accessToken', res.data.accessToken);
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

      <button className='login-btn' onClick={() => login()}>
        Login
      </button>
    </div>
  );
};

export default Login;
