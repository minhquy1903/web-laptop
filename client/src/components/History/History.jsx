import React, { useState, useEffect } from 'react';
import orderApi from '../../api/orderApi';
import { formatMoney } from '../../service/service';

import SideBarInfo from '../Account/SideBarInfo';
import Main from '../Main/Main';

import './History.scss';
import './Order.css';

export default function History() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      const user = JSON.parse(localStorage.getItem('userInformation'));
      try {
        const res = await orderApi.getTransaction(user.id);
        console.log(res);
        setOrders(res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrder();
  }, []);

  if (orders === null) return null;

  return (
    <Main>
      <div className='account-information-container height'>
        <SideBarInfo hasLogout={false} history={true} />
        <div className='right-content'>
          <div className='table-container'>
            <div className='title'>
              <h1>Lịch sử mua hàng</h1>
              <p>
                Tổng số tiền đã giao dịch:
                <strong className='medium'>
                  {' '}
                  Chưa có giá / {orders.length}{' '}
                </strong>
                đơn hàng
              </p>
            </div>
            <div className='order__title'>
              <div className='order__top__title'>
                <div className='order__content'>
                  <span>Mã đơn</span>
                </div>
                <div className='order__content'>
                  <span>Ngày mua</span>
                </div>
                <div className='order__content'>
                  <span>Số lượng</span>
                </div>
                <div className='order__content'>
                  <span>Tổng tiền</span>
                </div>
                <div className='order__content'>
                  <span>Tình trạng</span>
                </div>
                <div className='order__content'>
                  <span>Chi tiết</span>
                </div>
              </div>
            </div>
            <div className='list__order'>
              {orders.map((order, i) => {
                return <Order order={order} key={i} index={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}

function Order({ order, key, index }) {
  const [active, setActive] = useState(false);
  const [status, setStatus] = useState(false);
  const showDetailOrder = () => {
    setActive(!active);
  };
  // if (order === null) return null;
  return (
    <div className='order'>
      <div className='order__top'>
        <div className='order__content'>
          <span>{index + 1}</span>
        </div>
        <div className='order__content'>
          <span>{order.date}</span>
        </div>
        <div className='order__content'>
          <span>{order.products.length}</span>
        </div>
        <div className='order__content'>
          <span>{formatMoney(order.total)} đ</span>
        </div>
        <div className='order__content'>
          <span className={status ? 'comfirm' : 'not-comfirm'}>
            Chưa xác nhận
          </span>
        </div>

        <div className='order__content' onClick={showDetailOrder}>
          <span>
            <i
              className={
                active ? 'fas fa-chevron-up' : 'fas fa-chevron-down'
              }></i>
          </span>
        </div>
      </div>

      {/* Thông tin khách hàng */}

      {/* Thông tin các sp trong đơn hàng */}
      <div
        className={active ? 'order__bot__detail show' : 'order__bot__detail'}>
        {order.products.map((product, i) => {
          return <ItemProduct key={i} product={product} />;
        })}
      </div>
    </div>
  );
}

const ItemProduct = ({ product }) => {
  console.log(product);
  return (
    <div className='item'>
      <div className='item__avatar'>
        <img className='avatar' src={product.image} alt='hinh laptop' />
      </div>
      <div className='item__content'>
        <h3 className='content'>{product.productName}</h3>
        <p>SKU: {product.sku}</p>
      </div>
      <div className='item__price'>
        <div className='price'>
          <strong>{formatMoney(product.price - product.discount)} ₫</strong>
        </div>
        {product.discount !== 0 ? (
          <div className='price-discount'>
            <strike>{formatMoney(product.price)} ₫</strike>
          </div>
        ) : null}
      </div>
    </div>
  );
};
