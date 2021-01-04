import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatMoney } from '../../service/service';

export default function OrderRightCol({ cart, setTotal }) {
  useEffect(() => {
    setTotal(calTotal() - discountMoney());
  }, []);

  const calTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price;
    });
    return total;
  };
  const discountMoney = () => {
    let discountMoney = 0;
    cart.forEach((product) => {
      discountMoney += product.discount;
    });
    return discountMoney;
  };

  return (
    <div className='order__col__right'>
      <div className='calculate__sidebar'>
        <div className='calculate__sidebar__row'>
          <div className>
            <strong>Đơn hàng ({cart.length} sp)</strong>
          </div>
          <Link to='/cart'>
            Sửa
            <i className='fas fa-chevron-right' />
          </Link>
        </div>

        {cart.map((item, i) => {
          return <ProductItem key={i} item={item} />;
        })}

        <div className='calculate__sidebar__row__money'>
          <div className='temporary__money'>
            <div className>Tạm tính</div>
            <div className>
              <strong>{formatMoney(calTotal())} ₫</strong>
            </div>
          </div>
          <div className='discount__money'>
            <div className>Giảm giá</div>
            <div className='color__count__amount'>
              <strong>-{formatMoney(discountMoney())} ₫</strong>
            </div>
          </div>
        </div>
        <div className='calculate__sidebar__row not__margin'>
          <div className='calculate__sidebar__total__title__margin'>
            Thành tiền
          </div>
          <div className='calculate__sidebar__total__money'>
            <strong>{formatMoney(calTotal() - discountMoney())} ₫</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProductItem = ({ item }) => {
  return (
    <div className='calculate__sidebar__row'>
      <div className='calculate__sidebar__name__product'>
        <span className='color__count__amount'>1 x </span>
        {item.name}
      </div>
      <div className='calculate__sidebar__price'>
        {formatMoney(item.price)} ₫
      </div>
    </div>
  );
};
