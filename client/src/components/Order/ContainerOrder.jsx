import React, { useState, useContext, useEffect } from 'react';

import OrderLeftCol from './OrderLeftCol';
import { CartContext } from '../Context/Context';
import OrderRightCol from './OrderRightCol';
import Modal from '../Modal/Modal';
import Notification from '../Notification/Notification';
import OrderResult from './OrderResult';
import orderApi from '../../api/orderApi';

export default function ContainerOrder() {
  const [cart, setCart] = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);
  const [openResultModal, setOpenResultModal] = useState(false);
  const [result, setResult] = useState(false);
  const [userInformation, setUserInformation] = useState();
  const [total, setTotal] = useState(0);
  const order = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  useEffect(() => {
    if (result === false) return;
    let products = [];
    let _date = new Date();
    let date = `${_date.getDate()}-${
      _date.getMonth() + 1
    }-${_date.getFullYear()}`;
    cart.forEach((element) => {
      products.push({
        productid: element.id,
        productName: element.name,
        sku: element.sku,
        discount: element.discount,
        image: element.images[0],
        price: element.price,
      });
    });
    console.log(cart);
    const body = {
      customerid: userInformation.id,
      phone: userInformation.phone,
      name: userInformation.name,
      address: userInformation.address,
      date: date,
      products: products,
      total: total,
    };
    const response = orderApi.order(body);
    setOpenResultModal(true);
    setCart([]);
    localStorage.removeItem('cart');
  }, [result]);

  return (
    <div className='container__order__wrap'>
      <OrderLeftCol setUserInformation={setUserInformation} />
      <OrderRightCol cart={cart} setTotal={setTotal} />
      <div className='btn__bottom'>
        <button className='btn__order ani__btn__order' onClick={() => order()}>
          Xác nhận đặt hàng
        </button>
      </div>
      {
        <Modal openModal={openModal} closeModal={closeModal}>
          <Notification
            content={'Bạn muốn đặt đơn hàng này'}
            type={'YN'}
            closeModal={closeModal}
            setResult={setResult}
          />
        </Modal>
      }
      <Modal openModal={openResultModal} closeModal={closeModal}>
        <OrderResult
          userInformation={userInformation}
          setOpenResultModal={setOpenResultModal}
          total={total}
        />
      </Modal>
    </div>
  );
}
