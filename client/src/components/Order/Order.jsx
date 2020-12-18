import React from 'react';

//import component
import ContainerOrder from './ContainerOrder';
import Main from '../Main/Main';

import './Order.css';
const Order = () => {
  return (
    <Main>
      <main id='main__order'>
        <div className='container__order'>
          <h1 className='container__order__title'>Đặt hàng</h1>
          <ContainerOrder />
        </div>
        {/* CONTAINER-ORDER */}
      </main>
    </Main>
  );
};

export default Order;
