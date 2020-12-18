import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderRightCol() {
  return (
    <div className='order__col__right'>
      <div className='calculate__sidebar'>
        <div className='calculate__sidebar__row'>
          <div className>
            <strong>Đơn hàng (1 sp)</strong>
          </div>
          <Link to='/cart'>
            Sửa
            <i className='fas fa-chevron-right' />
          </Link>
        </div>
        <div className='calculate__sidebar__row'>
          <div className='calculate__sidebar__name__product'>
            <span className='color__count__amount'>1 x </span>
            Asus ZenBook 14 Q407iq
          </div>
          <div className='calculate__sidebar__price'>23.490.000 ₫</div>
        </div>
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
