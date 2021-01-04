import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../Main/Main';
import { CartContext } from '../Context/Context';
import { formatMoney } from '../../service/service';

import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calTotal = () => {
      let t = 0;
      cart.forEach((product) => {
        t += product.price - product.discount;
      });
      setTotal(t);
    };
    calTotal();
  }, [cart]);

  const removeItemFromCart = (_id) => {
    console.log(_id);
    setCart(
      cart.filter((product) => {
        return product._id !== _id;
      }),
    );
    localStorage.setItem(
      'cart',
      JSON.stringify(
        cart.filter((product) => {
          return product._id !== _id;
        }),
      ),
    );
  };

  return (
    <Main>
      <div className='container__cart'>
        <h1 className='container__cart--title'>Giỏ hàng({cart.length})</h1>
        <div className='container__cart__wrap'>
          <div className='col__left'>
            <div className='cart__list'>
              {cart.map((product, i) => {
                return (
                  <ProductCartItem
                    key={i}
                    product={product}
                    removeItemFromCart={removeItemFromCart}
                  />
                );
              })}
            </div>
          </div>
          <CheckouSideBar total={total} />
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
          <div>{formatMoney(total)} ₫</div>
        </div>
        <ul className='price__total__container'>
          <li className='price__total'>
            <div className>
              <strong>Thành tiền</strong>
            </div>
            <div className='total'>{formatMoney(total)} ₫</div>
          </li>
          <li className='btn_container'>
            <Link to='/order' className='btn__calculation'>
              Tiến hành đặt hàng
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const ProductCartItem = ({ product, removeItemFromCart }) => {
  return (
    <li className='item'>
      <div className='item__avatar'>
        <img className='avatar' src={product.images[0]} alt='hinh laptop' />
      </div>
      {/* item__avatar */}
      <div className='item__content'>
        <h3 className='content'>{product.name}</h3>
        <p>SKU: {product.sku}</p>
        <div className='btn__xoa'>
          <button
            className='delete-btn'
            onClick={() => removeItemFromCart(product._id)}>
            Xóa
          </button>
        </div>
      </div>
      {/* item__content */}
      <div className='item__price'>
        <div className='price'>
          <strong> {formatMoney(product.price - product.discount)} ₫</strong>
        </div>
        {product.discount !== 0 ? (
          <div className='price'>
            <strike>{formatMoney(product.price)} ₫</strike>
          </div>
        ) : null}
      </div>
      {/* item__price */}
    </li>
  );
};
