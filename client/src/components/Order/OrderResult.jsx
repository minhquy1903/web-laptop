import React from 'react';
import { formatMoney } from '../../service/service';

import './OrderResult.scss';

export default function OrderResult({
  setOpenResultModal,
  userInformation,
  total,
}) {
  return (
    <div className='result-container'>
      <div className='wrapper'>
        <h2>Đặt hàng thành công</h2>
        <div className='box-icon'>
          <i className='far fa-check-circle' />
        </div>
        <div className='text'>
          <p>
            Cảm ơn khách hàng đã đặt hàng tại Sativa Shop. Trong vòng 24h nhân
            viên sẽ gọi điện xác nhận cho bạn
          </p>
        </div>
        <div className='user-information'>
          <h3>Thông tin đặt hàng</h3>
          <div className='info'>
            <span>
              Người nhận: <strong>{userInformation.name}</strong>
            </span>
          </div>
          <div className='info'>
            <span>
              SĐT: <strong>{userInformation.phone}</strong>
            </span>
          </div>

          <div className='info'>
            <span>
              Tổng tiền thanh toán: <strong>{formatMoney(total)} ₫</strong>
            </span>
          </div>
        </div>

        <button
          onClick={() => {
            setOpenResultModal(false);
            window.location.href = 'http://localhost:3000/history';
          }}>
          Xác nhận
        </button>
      </div>
    </div>
  );
}
