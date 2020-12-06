import React, { useState } from 'react';

import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      const response = await axios.post('api/account/register', {
        username: username,
        password: password,
        info: {
          email: email,
        },
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='register-container'>
      <div className='input-element'>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='input-element'>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='input-element'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className='register-btn' onClick={() => register()}>
        Register
      </button>
    </div>
  );
};

export default Register;
