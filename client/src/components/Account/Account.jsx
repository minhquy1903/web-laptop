import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Main from '../Main/Main';

import './Account.scss';

export default function Account() {
  const inputName = useRef(null);
  const inputPhone = useRef(null);
  const inputAddress = useRef(null);
  const inputEmail = useRef(null);

  useEffect(() => {
    const userInfomation = JSON.parse(localStorage.getItem('infoUser'));
    inputName.current.value = userInfomation.name;
    inputPhone.current.value = userInfomation.phone;
    inputEmail.current.value = userInfomation.email;
    inputAddress.current.value = userInfomation.address;
  }, []);

  const updateAccountInfomation = async () => {
    const user = JSON.parse(localStorage.getItem('infoUser'));

    const idUser = user.username;
    console.log(idUser);
    try {
      const res = await axios.put(`/api/account/update/infomation/${idUser}`, {
        name: inputName.current.value,
        address: inputAddress.current.value,
        phone: inputPhone.current.value,
        email: inputEmail.current.value,
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const logoutHandle = () => {};

  return (
    <Main>
      <div className='account-infomation-container'>
        <div className='account-infomation-left'>
          <ul className='menu-option'>
            <li className='item-option active'>
              <Link to='/account' className=''>
                <i className='far fa-user-circle'></i>
                <span>Tài khoản</span>
              </Link>
            </li>
            <li className='item-option'>
              <Link to='/history'>
                <i className='fas fa-history'></i>
                <span>Lịch sử</span>
              </Link>
            </li>
          </ul>
          <button className='logout-btn'>Đăng xuất</button>
        </div>
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
                onClick={() => updateAccountInfomation()}>
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
                  <input type='text' className='input-text' />
                </div>
                <div className='input-item'>
                  <label htmlFor='password'>Xác nhận mật khẩu</label>
                  <input type='text' className='input-text' />
                </div>
                <div className='input-item'>
                  <label htmlFor='password'>Nhập mật khẩu hiện tại</label>
                  <input type='text' className='input-text' />
                </div>
              </div>
              <button className='update-btn'>Cập nhật</button>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
