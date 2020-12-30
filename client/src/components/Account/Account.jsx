import React, { useRef, useEffect, useState } from 'react';

import Main from '../Main/Main';
import SideBarInfo from './SideBarInfo';

import './Account.scss';
import accountApi from '../../api/accountApi';

export default function Account() {
  const inputName = useRef(null);
  const inputPhone = useRef(null);
  const inputAddress = useRef(null);
  const inputEmail = useRef(null);
  const currentPassword = useRef(null);
  const newPassword = useRef(null);
  const confirmPassword = useRef(null);
  const [checkConfirmPassword, setCheckConfirmPassword] = useState(null);
  const [checkCorrectPassword, setCheckCorrectPassword] = useState(null);
  useEffect(() => {
    showInfomation();
  }, []);

  const showInfomation = () => {
    const userInfomation = JSON.parse(localStorage.getItem('userInformation'));
    if (userInfomation.name === undefined) return;
    inputName.current.value = userInfomation.name;
    inputPhone.current.value = userInfomation.phone;
    inputEmail.current.value = userInfomation.email;
    inputAddress.current.value = userInfomation.address;
  };
  const updateAccountInfomationHandler = async () => {
    const user = JSON.parse(localStorage.getItem('userInformation'));

    try {
      const res = await accountApi.updateInfomation({
        username: user.username,
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
    localStorage.removeItem('infoUser');
    window.location.href = 'http://localhost:3000/';
  };

  return (
    <Main>
      <div className='account-infomation-container'>
        <SideBarInfo
          logoutHandler={logoutHandler}
          hasLogout={true}
          infomation={true}
        />
        <div className='account-infomation-right'>
          <div className='container-infomation'>
            <h2 className='title'>Thông tin tài khoản</h2>
            <div className='wrap-content'>
              <div className='form-update'>
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
                onClick={() => updateAccountInfomationHandler()}>
                Cập nhật
              </button>
            </div>
          </div>

          <div className='container-infomation'>
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
