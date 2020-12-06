import React from 'react';
import './Footer.scss';
const Footer = () => {
  return (
    <footer id='footer'>
      <div class='footer-container'>
        <div class='footer__top'>
          <div class='footer__top__left'>
            <img class='footer-logo' src='images/logo-thinkpro.PNG' />
          </div>
          <div class='footer__top__right'>
            <div class='information'>
              <div class='hotline'>Hotline</div>
              <div class='phone__number'>088.666.5220</div>
            </div>
            <div class='social__network'>
              <a href='' class='icon'>
                {' '}
                <i class='fab fa-facebook'></i>
              </a>
              <a href='' class='icon'>
                <i class='fab fa-youtube'></i>
              </a>
              <a href='' class='icon'>
                {' '}
                <i class='fab fa-instagram'></i>
              </a>
            </div>
          </div>
        </div>
        <div class='footer__body'>
          <div class='footer__body__left'>
            <div class='footer__body__left__col'>
              <h2>Sản phẩm và dịch vụ</h2>
              <span>Laptop Dell</span>
              <span>Laptop HP</span>
              <span>Laptop ThinkPad</span>
              <span>Laptop Lenovo</span>
            </div>
            <div class='footer__body__left__col col2'>
              <span>Laptop Razer</span>
              <span>Macbook</span>
              <span>Laptop Acer</span>
              <span>Laptop Asus</span>
            </div>
            <div class='footer__body__left__col'>
              <h2>Chính sách</h2>
              <span>Bảo hành</span>
              <span>Vận chuyển</span>
              <span>Thanh toán</span>
            </div>
          </div>
          <div class='footer__body__right'>
            <div class='footer__body__right__col'>
              <h2>Thông tin sinh viên</h2>
              <div class='student_info'>Võ Minh Quý: 18521316</div>
              <div class='student_info'>Đặng Thiên Sinh: 18521316</div>
              <div class='student_info'>Nguyễn Phạm Minh Nhật: 18521196</div>
            </div>
          </div>
        </div>
        <div class='footer__end'>
          Copyright (C) 2020
          <p class='company'>
            Công ty TNHH Công nghệ MNKOOL Việt Nam | Số ĐKKD 0107273909 do Sở
            KHĐT Thành phố Hà Nội cấp ngày 30/12/2020
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
