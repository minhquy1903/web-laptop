import React from 'react';
import './Footer.scss';
const Footer = () => {
  return (
    <div className='footerdiv'>
      <div className='footerhead'>
        <a href='' className='logo'>
          <h1>LOGO</h1>
        </a>
        <div className='divhotline'>
          <p className='hotline'>Hotline</p>
          <p className='number'>1900.63.3579</p>
        </div>
        <div className='iconcontact'>
          <a href='' className='iconchild'>
            {' '}
            <i className='fab fa-facebook'></i>
          </a>
          <a href='' className='iconchild'>
            <i className='fab fa-youtube'></i>
          </a>
          <a href='' className='iconchild'>
            {' '}
            <i className='fab fa-instagram'></i>
          </a>
        </div>
      </div>

      <div className='footerbody'>
        <div className='bodyleft'>
          <div className='bodycol1'>
            <h2 className='tieudeucol1'>Sản phẩm và dịch vụ</h2>

            <a href='' className='noidungcol1'>
              Laptop Dell
            </a>
            <a href='' className='noidungcol1'>
              Laptop HP
            </a>
            <a href='' className='noidungcol1'>
              Laptop ThinkPad
            </a>
            <a href='' className='noidungcol1'>
              Laptop Lenovo
            </a>
          </div>
          <div className='bodycol2'>
            <a href='' className='noidungcol1 col2'>
              Laptop Razer
            </a>
            <a href='' className='noidungcol1'>
              Macbook
            </a>
            <a href='' className='noidungcol1'>
              Laptop Acer
            </a>
            <a href='' className='noidungcol1'>
              Laptop Asus
            </a>
          </div>
          <div className='bodycol3'>
            <h2 className='tieudeucol1'>Chính sách</h2>
            <a href='' className='noidungcol1'>
              Bảo hành
            </a>
            <a href='' className='noidungcol1'>
              Vận chuyển
            </a>
            <a href='' className='noidungcol1'>
              Thanh toán
            </a>
          </div>
        </div>
        <div className='bodyright'>
          <div className='bodycol4'>
            <h2 className='tieudeucol1'>Hệ thống cửa hàng</h2>
            <div className='noidungcol1 city'>TP. Hồ Chí Minh:</div>
            <div className='address'>62 Duy Tân, P. 15, Phú Nhuận</div>
          </div>
          <div className='bodycol5'>
            <div className='noidungcol1 city'>Hà Nội:</div>
            <div className='address'>
              105/562 Đường Láng, P. Láng Hạ, Q. Đống Đa
            </div>
          </div>
        </div>
      </div>

      <div className='footerend'>
        Copyright (C) 2020
        <p className='company'>
          Công ty TNHH Công nghệ Think Việt Nam | Số ĐKKD 0107273909 do Sở KHĐT
          Thành phố Hà Nội cấp ngày 30/12/2015
        </p>
      </div>
    </div>
  );
};

export default Footer;
