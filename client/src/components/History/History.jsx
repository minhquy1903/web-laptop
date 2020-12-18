import React from 'react';

import SideBarInfo from '../Account/SideBarInfo';
import Main from '../Main/Main';

import './History.scss';
export default function History() {
  return (
    <Main>
      <div className='account-infomation-container height'>
        <SideBarInfo hasLogout={false} history={true} />
        <div className='right-content'>
          <div className='table-container'>
            <div className='title'>
              <h1>Lịch sử mua hàng</h1>
              <p>
                Tổng số tiền đã giao dịch:
                <strong className='medium'> Chưa có giá / 0 </strong>
                đơn hàng
              </p>
            </div>
            <table className='table'>
              <tr>
                <th>Đơn hàng</th>
                <th>Thời gian mua</th>
                <th>Sản phẩm</th>
                <th>Tổng tiền</th>
                <th>Trạng thái</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </Main>
  );
}
