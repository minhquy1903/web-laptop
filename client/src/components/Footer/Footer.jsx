import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';
const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer-container'>
        <div className='footer__top'>
          <div className='footer__top__left'>
            <img className='footer-logo' src='/images/logo.png' alt='logo' />
          </div>
          <div className='footer__top__right'>
            <div className='information'>
              <div className='hotline'>Hotline</div>
              <div className='phone__number'>088.666.5220</div>
            </div>
            <div className='social__network'>
              <Link to='' className='icon'>
                <i className='fab fa-facebook'></i>
              </Link>
              <Link to='' className='icon'>
                <i className='fab fa-youtube'></i>
              </Link>
              <Link to='' className='icon'>
                <i className='fab fa-instagram'></i>
              </Link>
            </div>
          </div>
        </div>
        <div className='footer__body'>
          <div className='footer__body__left'>
            <div className='footer__body__left__col'>
              <h2>Sản phẩm và dịch vụ</h2>
              <span>Laptop Dell</span>
              <span>Laptop HP</span>
              <span>Laptop ThinkPad</span>
              <span>Laptop Lenovo</span>
            </div>
            <div className='footer__body__left__col col2'>
              <span>Laptop Razer</span>
              <span>Macbook</span>
              <span>Laptop Acer</span>
              <span>Laptop Asus</span>
            </div>
            <div className='footer__body__left__col'>
              <h2>Chính sách</h2>
              <span>Bảo hành</span>
              <span>Vận chuyển</span>
              <span>Thanh toán</span>
            </div>
          </div>
          <div className='footer__body__right'>
            <div className='footer__body__right__col'>
              <h2>Thông tin sinh viên</h2>
              <div className='student_info'>Võ Minh Quý: 18521316</div>
              <div className='student_info'>Đặng Thiên Sinh: 18521316</div>
              <div className='student_info'>
                Nguyễn Phạm Minh Nhật: 18521196
              </div>
            </div>
          </div>
        </div>
        <div className='footer__end'>
          Copyright (C) 2020
          <p className='company'>
            Công ty TNHH Công nghệ MNKOOL Việt Nam | Số ĐKKD 0107273909 do Sở
            KHĐT Thành phố Hà Nội cấp ngày 30/12/2020
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
