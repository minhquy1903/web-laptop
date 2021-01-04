import React, { useState } from 'react';

import accountApi from '../../api/accountApi';

const usernameRegex = RegExp(
  /^(?![_ -])(?:(?![_ -]{2})[\w -]){5,16}(?<![_ -])$/,
);
const passwordRegex = RegExp(
  /^(?![_ -])(?:(?![_ -]{2})[\w -]){5,24}(?<![_ -])$/,
);
const emailRegex = RegExp(
  /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);

const Register = ({ closeModal }) => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [disable, setDisable] = useState(true);

  const formValid = (formErrors) => {
    let valid = true;

    Object.values(formErrors).forEach((val) => {
      val.length > 0 && (valid = false);
    });

    console.log(username);
    username === null && (valid = false);
    email === null && (valid = false);
    password === null && (valid = false);

    return valid;
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = formErrors;
    switch (name) {
      case 'username':
        errors.username = usernameRegex.test(value)
          ? ''
          : 'username phải trong 5 - 16 kí tự';
        setUsername(value);
        break;
      case 'email':
        errors.email = emailRegex.test(value)
          ? ''
          : 'email của bạn không hợp lệ';
        setEmail(value);
        break;
      case 'password':
        errors.password = passwordRegex.test(value)
          ? ''
          : 'password phải trong 5 - 24 kí tự';
        setPassword(value);
        break;
      default:
        break;
    }
    setDisable(
      !Object.values(errors).every((el) => {
        return el.length === 0;
      }),
    );

    setFormErrors(errors);
  };
  const register = async (e) => {
    e.preventDefault();
    if (!formValid(formErrors)) return;
    const defaultAvatar = 'https://i.ibb.co/T06rD5X/avatar-default.jpg';
    try {
      const response = await accountApi.register({
        username: username,
        password: password,
        avatar: defaultAvatar,
        email: email,
      });
      console.log(response);
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className='register-container'>
      <div className='input-element'>
        <label htmlFor='username'>Username</label>
        <input
          className={formErrors.username.length > 0 && 'error'}
          type='text'
          placeholder='username'
          name='username'
          onChange={(e) => handleChange(e)}
        />
        {formErrors.username.length > 0 && (
          <span className='error-message'>{formErrors.username}</span>
        )}
      </div>
      <div className='input-element'>
        <label htmlFor='email'>Email</label>
        <input
          className={formErrors.email.length > 0 && 'error'}
          type='text'
          name='email'
          placeholder='email'
          onChange={(e) => handleChange(e)}
        />
        {formErrors.email.length > 0 && (
          <span className='error-message'>{formErrors.email}</span>
        )}
      </div>
      <div className='input-element'>
        <label htmlFor='password'>Password</label>
        <input
          className={formErrors.password.length > 0 && 'error'}
          type='password'
          placeholder='password'
          name='password'
          onChange={(e) => handleChange(e)}
        />
        {formErrors.password.length > 0 && (
          <span className='error-message'>{formErrors.password}</span>
        )}
      </div>
      <button
        type='submit'
        className={disable ? ' is-disabled' : 'register-btn'}
        onClick={(e) => register(e)}>
        Register
      </button>
    </form>
  );
};

export default Register;
