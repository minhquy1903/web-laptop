import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderRightCol({ cart }) {
  console.log(cart);
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
              <strong>134.460.000 ₫</strong>
            </div>
          </div>
          <div className='discount__money'>
            <div className>Giảm giá</div>
            <div className='color__count__amount'>
              <strong>-5.500.000 ₫</strong>
            </div>
          </div>
        </div>
        <div className='calculate__sidebar__row not__margin'>
          <div className='calculate__sidebar__total__title__margin'>
            Thành tiền
          </div>
          <div className='calculate__sidebar__total__money'>
            <strong>128.960.000 ₫</strong>
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
      <div className='calculate__sidebar__price'>{item.price} ₫</div>
    </div>
  );
};
