import React, { useRef, useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import SideBarInfo from './SideBarInfo';

import './Account.scss';
import accountApi from '../../api/accountApi';

export default function Account({ history }) {
  const inputName = useRef(null);
  const inputPhone = useRef(null);
  const inputAddress = useRef(null);
  const inputEmail = useRef(null);
  const currentPassword = useRef(null);
  const newPassword = useRef(null);
  const confirmPassword = useRef(null);
  const avatar = useRef(null);
  const [avatarSrc, setAvatarSrc] = useState('');
  const [checkConfirmPassword, setCheckConfirmPassword] = useState(null);
  const [checkCorrectPassword, setCheckCorrectPassword] = useState(null);
  useEffect(() => {
    fillInformation();
  }, []);

  const fillInformation = () => {
    const userInformation = JSON.parse(localStorage.getItem('userInformation'));
    if (userInformation.name === undefined) return;
    avatar.current.src = userInformation.avatar;
    inputName.current.value = userInformation.name;
    inputPhone.current.value = userInformation.phone;
    inputEmail.current.value = userInformation.email;
    inputAddress.current.value = userInformation.address;
  };
  const updateAccountInformationHandler = async () => {
    const user = JSON.parse(localStorage.getItem('userInformation'));

    try {
      const res = await accountApi.updateInformation({
        username: user.username,
        avatar: avatarSrc,
        name: inputName.current.value,
        address: inputAddress.current.value,
        phone: inputPhone.current.value,
        email: inputEmail.current.value,
      });
      if (res.result === 'SUCCESS') {
        window.alert('Cập nhật thông tin thành công');
        //logoutHandler();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updatePasswordHandler = async () => {
    if (checkConfirmPassword === false || checkConfirmPassword === null) return;

    const user = JSON.parse(localStorage.getItem('userInformation'));

    try {
      const res = await accountApi.updatePassword({
        currentPassword: currentPassword.current.value,
        confirmPassword: confirmPassword.current.value,
        username: user.username,
      });
      if (res.result === 'SUCCESS') {
        setCheckConfirmPassword(null);
        window.alert('Đổi mật khẩu thành công!!!'); // xu li response
        setCheckCorrectPassword(null);
        //logoutHandler();
      } else if (res.result === 'INCORRECT_PASSWORD') {
        setCheckCorrectPassword(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const compareNewPassword = (e) => {
    if (newPassword.current.value !== confirmPassword.current.value)
      setCheckConfirmPassword(false);
    else setCheckConfirmPassword(true);
  };
  const compareConfirmPassword = (e) => {
    if (newPassword.current.value !== confirmPassword.current.value)
      setCheckConfirmPassword(false);
    else setCheckConfirmPassword(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem('userInformation');
    // history.push('/');
    window.location.href = 'http://localhost:3000/';
  };

  function formHandle(e) {
    const form = new FormData();
    form.append('image', e.target.files[0]);

    const key = '7ad27d66522c6417d399ea2481da9dee';
    const url = `https://api.imgbb.com/1/upload?key=${key}`;
    fetch(url, {
      method: 'POST',
      body: form,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setAvatarSrc(data.data.url))
      .catch(function (error) {
        alert('error', error);
      });
  }
  return (
    <Main>
      <div className='account-information-container'>
        <SideBarInfo
          logoutHandler={logoutHandler}
          hasLogout={true}
          information={true}
        />
        <div className='account-information-right'>
          <div className='container-information'>
            <h2 className='title'>Thông tin tài khoản</h2>
            <div className='wrap-content'>
              <div className='form-update'>
                <div className='input-item w100'>
                  <div className='choose-avatar'>
                    <div className='avatar'>
                      <img
                        src='https://i.ibb.co/T06rD5X/avatar-default.jpg'
                        alt='avatar'
                        ref={avatar}
                      />
                    </div>

                    <label>
                      <input type='file' id='inpFile' onChange={formHandle} />
                      <span>Thay ảnh đại diện</span>
                    </label>
                  </div>
                </div>
                <div className='input-item'>
                  <label htmlFor='name'>Họ và tên</label>
                  <input type='text' className='input-text' ref={inputName} />
                </div>
                <div className='input-item'>
                  <label htmlFor='email'>Email</label>
                  <input type='text' className='input-text' ref={inputEmail} />
                </div>
                <div className='input-item'>
                  <label htmlFor='phone'>Số điện thoại</label>
                  <input type='text' className='input-text' ref={inputPhone} />
                </div>
                <div className='input-item'>
                  <label htmlFor='address'>Địa chỉ</label>
                  <input
                    type='text'
                    className='input-text'
                    ref={inputAddress}
                  />
                </div>
              </div>
              <button
                className='update-btn'
                onClick={() => updateAccountInformationHandler()}>
                Cập nhật
              </button>
            </div>
          </div>

          <div className='container-information'>
            <h2 className='title'>Thay đổi mật khẩu</h2>
            <div className='wrap-content'>
              <div className='form-update form-update-password'>
                <div className='input-item'>
                  <label htmlFor='password'>Nhập mật khẩu mới</label>
                  <input
                    type='password'
                    className='input-text'
                    onChange={(e) => compareNewPassword(e)}
                    ref={newPassword}
                  />
                </div>
                <div className='input-item '>
                  <label htmlFor='password'>Xác nhận mật khẩu</label>
                  <input
                    type='password'
                    className='input-text'
                    onChange={(e) => compareConfirmPassword(e)}
                    ref={confirmPassword}
                  />
                  {checkConfirmPassword ===
                  null ? null : checkConfirmPassword === true ? (
                    <div className='notify correct'>
                      <i class='far fa-check-circle' />
                      <span>Mật khẩu khớp</span>
                    </div>
                  ) : (
                    <div className='notify incorrect'>
                      <i class='far fa-times-circle' />
                      <span>Mật khẩu không khớp</span>
                    </div>
                  )}
                </div>
                <div className='input-item'>
                  <label htmlFor='password'>Nhập mật khẩu hiện tại</label>
                  <input
                    type='password'
                    className='input-text'
                    ref={currentPassword}
                  />
                  {checkCorrectPassword === false ? (
                    <div className='notify incorrect'>
                      <i class='far fa-times-circle' />
                      <span>Mật khẩu không đúng</span>
                    </div>
                  ) : null}
                </div>
              </div>
              <button
                className='update-btn'
                onClick={() => updatePasswordHandler()}>
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
