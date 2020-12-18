import React from 'react';

import OrderLeftCol from './OrderLeftCol';
import OrderRightCol from './OrderRightCol';
export default function ContainerOrder() {
  return (
    <div className='container__order__wrap'>
      <OrderLeftCol />
      <OrderRightCol />
      <div className='btn__bottom'>
        <button className='btn__order ani__btn__order'>
          Thanh toán khi nhận hàng
        </button>
      </div>
    </div>
  );
}
