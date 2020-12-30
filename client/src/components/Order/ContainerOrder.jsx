import React, { useContext } from 'react';

import OrderLeftCol from './OrderLeftCol';
import { CartContext } from '../Context/Context';
import OrderRightCol from './OrderRightCol';
export default function ContainerOrder() {
  const [cart, setCart] = useContext(CartContext);
  return (
    <div className='container__order__wrap'>
      <OrderLeftCol />
      <OrderRightCol cart={cart} />
      <div className='btn__bottom'>
        <button className='btn__order ani__btn__order'>
          Xác nhận đặt hàng
        </button>
      </div>
    </div>
  );
}
