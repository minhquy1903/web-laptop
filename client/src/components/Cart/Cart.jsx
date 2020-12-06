import React, { useEffect } from 'react';

import Main from '../Main/Main';

import './Cart.css';

const Cart = () => {
  useEffect(() => {}, []);

  return (
    <Main>
      <div className='container__cart'>
        <h1 className='container__cart--title'>Giỏ hàng(1)</h1>
        <div className='container__cart__wrap'>
          <div className='col__left'>
            <div className='cart__list'>
              <ProductCartItem />
            </div>
          </div>
          <CheckouSideBar />
        </div>
      </div>
    </Main>
  );
};

export default Cart;

const CheckouSideBar = ({ total }) => {
  return (
    <div className='col__right'>
      <div className='calculation__price'>
        <div className='price__temporary'>
          <div>
            <strong>Tạm tính</strong>
          </div>
          <div>{total} ₫</div>
        </div>
        <ul className='price__total__container'>
          <li className='price__total'>
            <div className>
              <strong>Thành tiền</strong>
            </div>
            <div className='total'>{total} ₫</div>
          </li>
          <li className='btn_container'>
            <a href='' className='btn__calculation'>
              Tiến hành đặt hàng
            </a>
            <a href='' className='btn__calculation ani'>
              Tính trả góp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const ProductCartItem = ({ product }) => {
  return (
    <li className='item'>
      <div className='item__avatar'>
        <img
          className='avatar'
          src='https://admin.thinkpro.vn//backend/uploads/product/avatar/2020/7/15/dell-latitude-7480-Latitude748008NU-medium.jpg'
        />
      </div>
      {/* item__avatar */}
      <div className='item__content'>
        <h3 className='content'>{'product.name'}</h3>
        <p>SKU: {'product.productID'}</p>
        <div className='btn__xoa'>
          <button>Xóa</button>
        </div>
      </div>
      {/* item__content */}
      <div className='item__price'>
        <div className='price'>
          <strong> {'product.price'} ₫</strong>
        </div>
      </div>
      {/* item__price */}
    </li>
  );
};
